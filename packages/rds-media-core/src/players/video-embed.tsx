"use client";

import { cn } from "../lib/utils";
import { useCallback, useState, useEffect, useRef } from "react";
import { MessageSquarePlus } from "lucide-react";
import type { MediaCommentProps, MediaCapabilities, MediaComment } from "../core/types";
import { useMediaElementCore } from "../core/core";
import { VideoControls } from "../controls/video-controls";
import { formatTime } from "../controls/rds-timeline-control";

/**
 * =============================================================================
 * VideoEmbed - Reba Design System (rds) Canonical Video Component
 * =============================================================================
 *
 * This is the unified video embed component for the entire rds ecosystem.
 * All applications (melabel, Tansen, etc.) should use this component for
 * embedding videos from various sources.
 *
 * Supported platforms:
 * - YouTube (via iframe embed)
 * - Vimeo (via iframe embed)
 * - Direct video files (via native <video> tag)
 * - Mux (TODO: future implementation)
 *
 * Usage:
 * ```tsx
 * // Auto-detect source type from URL
 * <VideoEmbed url="https://youtube.com/watch?v=dQw4w9WgXcQ" />
 *
 * // Explicit type
 * <VideoEmbed url="https://example.com/video.mp4" type="file" />
 *
 * // With all options
 * <VideoEmbed
 *   url="https://vimeo.com/123456789"
 *   type="vimeo"
 *   aspectRatio="16:9"
 *   autoplay
 *   muted
 *   onPlay={() => console.log('Video started')}
 * />
 *
 * // With timeline comments
 * <VideoEmbed
 *   url="https://example.com/video.mp4"
 *   capabilities={{ comments: true }}
 *   comments={[{ id: "1", time: 30, text: "Great intro!" }]}
 *   onAddComment={({ time, text }) => saveComment(time, text)}
 *   onCommentSelect={(id) => console.log("Selected:", id)}
 * />
 * ```
 *
 * Future additions:
 * - Mux video support (requires @mux/mux-player-react)
 * - HLS/DASH streaming support
 * - Custom player skin aligned with rds design tokens
 *
 * TODO: MediaProvider Integration
 * ================================
 * This component will eventually be wrapped with MediaProvider from
 * @/components/rds/media to provide unified state management across
 * all media types. The integration will:
 *
 * 1. Wrap the internal <video> element and iframe logic with MediaProvider
 * 2. Use useMediaState() and useMediaControls() for consistent state
 * 3. Expose mediaRef for native video elements
 * 4. Enable cross-component communication (e.g., global media controls)
 *
 * See: src/components/rds/media/core.tsx for the context implementation
 */

// =============================================================================
// Types
// =============================================================================

export type VideoSourceType = "auto" | "youtube" | "vimeo" | "file" | "hls" | "mux" | "bunny-embed";

export type VideoAspectRatio = "16:9" | "9:16" | "1:1" | "4:5" | "4:3" | "21:9";

export type VideoControlsVariant = "native" | "rds";

export interface VideoEmbedProps extends MediaCommentProps {
  /**
   * Video URL - can be YouTube, Vimeo, or direct video file URL
   */
  url: string;

  /**
   * Source type - "auto" attempts to detect from URL
   * @default "auto"
   */
  type?: VideoSourceType;

  /**
   * Optional title for accessibility (used in iframe title attribute)
   */
  title?: string;

  /**
   * Poster/thumbnail image URL (for file type videos)
   */
  poster?: string;

  /**
   * Show player controls
   * @default true
   */
  controls?: boolean;

  /**
   * Controls variant - "native" uses browser controls, "rds" uses rds transport controls
   * Only applies to native video files (not YouTube/Vimeo embeds)
   * @default "native"
   */
  controlsVariant?: VideoControlsVariant;

  /**
   * Autoplay video (note: most browsers require muted for autoplay)
   * @default false
   */
  autoplay?: boolean;

  /**
   * Loop video playback
   * @default false
   */
  loop?: boolean;

  /**
   * Mute audio
   * @default false
   */
  muted?: boolean;

  /**
   * Aspect ratio - aligned with rds design system
   * @default "16:9"
   */
  aspectRatio?: VideoAspectRatio;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Player capabilities - controls which features are enabled
   * Set capabilities.comments = true to enable timeline markers
   */
  capabilities?: MediaCapabilities;

  // Analytics callbacks
  /**
   * Called when video starts playing
   */
  onPlay?: () => void;

  /**
   * Called when video is paused
   */
  onPause?: () => void;

  /**
   * Called when video ends
   */
  onEnded?: () => void;
}

// =============================================================================
// URL Detection Utilities
// =============================================================================

/**
 * YouTube URL patterns:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/v/VIDEO_ID
 */
const YOUTUBE_REGEX =
  /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;

/**
 * Vimeo URL patterns:
 * - https://vimeo.com/VIDEO_ID
 * - https://player.vimeo.com/video/VIDEO_ID
 */
const VIMEO_REGEX = /(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/i;

/**
 * Common video file extensions
 */
const VIDEO_FILE_REGEX = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;

/**
 * HLS stream URL pattern (Bunny Stream and other HLS providers)
 */
const HLS_REGEX = /\.m3u8(\?.*)?$/i;

/**
 * Bunny Stream embed URL pattern
 * Matches: https://iframe.mediadelivery.net/embed/LIBRARY_ID/VIDEO_ID
 */
const BUNNY_EMBED_REGEX = /iframe\.mediadelivery\.net\/embed\/(\d+)\/([a-f0-9-]+)/i;

/**
 * Extract YouTube video ID from URL
 */
function extractYouTubeId(url: string): string | null {
  const match = url.match(YOUTUBE_REGEX);
  return match ? match[1] : null;
}

/**
 * Extract Vimeo video ID from URL
 */
function extractVimeoId(url: string): string | null {
  const match = url.match(VIMEO_REGEX);
  return match ? match[1] : null;
}

/**
 * Check if URL is an HLS stream
 */
function isHlsUrl(url: string): boolean {
  return HLS_REGEX.test(url);
}

/**
 * Check if URL is a Bunny Stream embed URL
 */
function isBunnyEmbedUrl(url: string): boolean {
  return BUNNY_EMBED_REGEX.test(url);
}

/**
 * Detect video source type from URL
 */
function detectSourceType(url: string): VideoSourceType {
  if (extractYouTubeId(url)) return "youtube";
  if (extractVimeoId(url)) return "vimeo";
  if (isBunnyEmbedUrl(url)) return "bunny-embed";
  if (isHlsUrl(url)) return "hls";
  if (VIDEO_FILE_REGEX.test(url)) return "file";
  // Default to file for unknown URLs
  return "file";
}

// =============================================================================
// Aspect Ratio Utilities
// =============================================================================

const aspectRatioClasses: Record<VideoAspectRatio, string> = {
  "16:9": "aspect-video", // Tailwind's built-in 16:9
  "9:16": "aspect-[9/16]",
  "1:1": "aspect-square",
  "4:5": "aspect-[4/5]",
  "4:3": "aspect-[4/3]",
  "21:9": "aspect-[21/9]",
};

// =============================================================================
// Timeline Comment Marker Component
// =============================================================================

interface CommentMarkerProps {
  comment: MediaComment;
  duration: number;
  onSelect?: (commentId: string) => void;
}

/**
 * Individual comment marker on the timeline
 */
function CommentMarker({ comment, duration, onSelect }: CommentMarkerProps) {
  if (comment.time == null || duration <= 0) return null;

  // Calculate position as percentage
  const position = (comment.time / duration) * 100;

  // Clamp position to valid range
  if (position < 0 || position > 100) return null;

  return (
    <button
      type="button"
      className={cn(
        "absolute top-0 h-full w-1.5 -translate-x-1/2",
        "bg-primary/80 hover:bg-primary hover:scale-x-150",
        "transition-all duration-150 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
      )}
      style={{ left: `${position}%` }}
      onClick={() => onSelect?.(comment.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.(comment.id);
        }
      }}
      title={`${comment.authorName || "Comment"}: ${comment.text}`}
      aria-label={`Comment at ${Math.floor(comment.time / 60)}:${String(Math.floor(comment.time % 60)).padStart(2, "0")}: ${comment.text}`}
    />
  );
}

// =============================================================================
// Timeline Overlay Component
// =============================================================================

interface TimelineOverlayProps {
  comments: MediaComment[];
  duration: number;
  currentTime: number;
  onCommentSelect?: (commentId: string) => void;
  onAddComment?: (payload: { time: number; text: string }) => void;
  showAddButton: boolean;
}

/**
 * Overlay that shows comment markers on the video timeline
 * Positioned at the bottom of the video player
 */
function TimelineOverlay({
  comments,
  duration,
  currentTime,
  onCommentSelect,
  onAddComment,
  showAddButton,
}: TimelineOverlayProps) {
  const handleAddComment = useCallback(() => {
    // TODO: Replace window.prompt with proper rds comment input UI.
    // This is a temporary UX for initial implementation.
    // Future implementation should use a modal or inline input component
    // that matches the rds design system.
    const text = window.prompt(
      `Add a comment at ${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, "0")}:`
    );

    if (text && text.trim()) {
      onAddComment?.({ time: currentTime, text: text.trim() });
    }
  }, [currentTime, onAddComment]);

  // Filter comments that have valid timestamps
  const timelineComments = comments.filter(
    (c) => c.time != null && c.time >= 0
  );

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
      {/* Comment markers track - positioned above native controls */}
      <div className="relative h-6 mx-2 mb-10 pointer-events-auto">
        {/* Track background */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-white/20 rounded-full" />

        {/* Comment markers */}
        {timelineComments.map((comment) => (
          <CommentMarker
            key={comment.id}
            comment={comment}
            duration={duration}
            onSelect={onCommentSelect}
          />
        ))}
      </div>

      {/* Add comment button */}
      {showAddButton && (
        <button
          type="button"
          onClick={handleAddComment}
          className={cn(
            "absolute bottom-12 right-2 pointer-events-auto",
            "flex items-center gap-1.5 px-2 py-1 rounded-md",
            "bg-black/60 hover:bg-black/80 text-white text-xs",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-primary"
          )}
          title="Add comment at current time"
        >
          <MessageSquarePlus className="h-3.5 w-3.5" />
          <span>Comment</span>
        </button>
      )}
    </div>
  );
}

// =============================================================================
// Sub-components
// =============================================================================

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
}: YouTubeEmbedProps) {
  // Build YouTube embed URL with parameters
  const params = new URLSearchParams({
    rel: "0", // Don't show related videos from other channels
    modestbranding: "1", // Minimal YouTube branding
    ...(autoplay && { autoplay: "1" }),
    ...(!controls && { controls: "0" }),
    ...(loop && { loop: "1", playlist: videoId }), // Loop requires playlist param
    ...(muted && { mute: "1" }),
  });

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  return (
    <iframe
      src={embedUrl}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}

interface VimeoEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

function VimeoEmbed({
  videoId,
  title = "Vimeo video",
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
}: VimeoEmbedProps) {
  // Build Vimeo embed URL with parameters
  const params = new URLSearchParams({
    ...(autoplay && { autoplay: "1" }),
    ...(!controls && { controls: "0" }),
    ...(loop && { loop: "1" }),
    ...(muted && { muted: "1" }),
  });

  const embedUrl = `https://player.vimeo.com/video/${videoId}?${params.toString()}`;

  return (
    <iframe
      src={embedUrl}
      title={title}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}

interface BunnyEmbedProps {
  url: string;
  title?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

/**
 * BunnyEmbed - Renders Bunny Stream video via iframe embed
 *
 * The embed player handles authentication internally, so it works
 * even when direct CDN access is blocked.
 */
function BunnyEmbed({
  url,
  title = "Bunny Stream video",
  autoplay = false,
  loop = false,
  muted = false,
}: BunnyEmbedProps) {
  // Build URL with parameters
  const embedUrl = new URL(url);
  if (autoplay) embedUrl.searchParams.set("autoplay", "true");
  if (loop) embedUrl.searchParams.set("loop", "true");
  if (muted) embedUrl.searchParams.set("muted", "true");
  // Enable responsive mode
  embedUrl.searchParams.set("responsive", "true");

  return (
    <iframe
      src={embedUrl.toString()}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
      style={{ border: "none" }}
    />
  );
}

interface NativeVideoProps {
  url: string;
  title?: string;
  poster?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  /** Callback ref from useMediaElementCore - events are handled by MediaCore */
  videoRef: (node: HTMLVideoElement | null) => void;
}

/**
 * NativeVideo - Internal component for rendering native <video> elements
 *
 * Event handling (play, pause, timeupdate, etc.) is managed by useMediaElementCore
 * through the videoRef callback. This component is a thin wrapper around the video element.
 */
function NativeVideo({
  url,
  title,
  poster,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  videoRef,
}: NativeVideoProps) {
  return (
    <video
      ref={videoRef}
      src={url}
      title={title}
      poster={poster}
      autoPlay={autoplay}
      controls={controls}
      loop={loop}
      muted={muted}
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

interface HlsVideoProps {
  url: string;
  title?: string;
  poster?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  /** Callback ref from useMediaElementCore - events are handled by MediaCore */
  videoRef: (node: HTMLVideoElement | null) => void;
}

/**
 * HlsVideo - Internal component for rendering HLS streams
 *
 * Uses hls.js for browsers that don't natively support HLS (Chrome, Firefox, etc.)
 * Falls back to native playback on Safari which has built-in HLS support.
 */
function HlsVideo({
  url,
  title,
  poster,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  videoRef,
}: HlsVideoProps) {
  const internalRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<any>(null);

  // Combined ref handler
  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      internalRef.current = node;
      videoRef(node);
    },
    [videoRef]
  );

  // Initialize HLS.js when component mounts or URL changes
  useEffect(() => {
    const video = internalRef.current;
    if (!video || !url) return;

    // Check if browser supports HLS natively (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support - just set the source
      video.src = url;
      if (autoplay) {
        video.play().catch(() => {
          // Autoplay was prevented, ignore
        });
      }
      return;
    }

    // Use HLS.js for other browsers
    let hls: any = null;

    const initHls = async () => {
      try {
        const Hls = (await import("hls.js")).default;

        if (!Hls.isSupported()) {
          console.error("HLS.js is not supported in this browser");
          // Fallback to direct source (may not work)
          video.src = url;
          return;
        }

        hls = new Hls({
          // Enable low-latency mode for live streams
          enableWorker: true,
          // Start with a lower quality for faster initial playback
          startLevel: -1, // Auto
        });

        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoplay) {
            video.play().catch(() => {
              // Autoplay was prevented, ignore
            });
          }
        });

        hls.on(Hls.Events.ERROR, (_event: any, data: any) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.error("HLS network error, trying to recover...");
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.error("HLS media error, trying to recover...");
                hls.recoverMediaError();
                break;
              default:
                console.error("HLS fatal error:", data);
                hls.destroy();
                break;
            }
          }
        });

        hlsRef.current = hls;
      } catch (error) {
        console.error("Failed to load HLS.js:", error);
        // Fallback to direct source
        video.src = url;
      }
    };

    initHls();

    return () => {
      if (hls) {
        hls.destroy();
        hlsRef.current = null;
      }
    };
  }, [url, autoplay]);

  return (
    <video
      ref={setRefs}
      title={title}
      poster={poster}
      controls={controls}
      loop={loop}
      muted={muted}
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

// =============================================================================
// Main Component
// =============================================================================

/**
 * VideoEmbed - Unified video embedding component for rds
 *
 * Automatically detects video source type from URL and renders the appropriate
 * embed (YouTube iframe, Vimeo iframe, or native video element).
 *
 * Timeline Comment Support:
 * - Set capabilities.comments = true to enable comment markers
 * - Pass comments array to display markers on the timeline
 * - For native video files only (YouTube/Vimeo iframes don't support custom overlays)
 */
export function VideoEmbed({
  url,
  type = "auto",
  title,
  poster,
  controls = true,
  controlsVariant = "native",
  autoplay = false,
  loop = false,
  muted = false,
  aspectRatio = "16:9",
  className,
  capabilities,
  comments = [],
  onPlay,
  onPause,
  onEnded,
  onAddComment,
  onCommentSelect,
}: VideoEmbedProps) {
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine the actual source type
  const resolvedType = type === "auto" ? detectSourceType(url) : type;

  // Use MediaCore for native video files and HLS streams
  // TODO: In the future, create virtual MediaCore adapters for YouTube/Vimeo
  // to provide unified state management across all video types.
  const isNativeVideo = resolvedType === "file" || resolvedType === "hls";

  const {
    state: mediaState,
    controls: mediaControls,
    mediaRef: setMediaRef,
  } = useMediaElementCore({
    type: "video",
    capabilities,
    initialMuted: muted,
    callbacks: isNativeVideo
      ? {
          onPlay,
          onPause,
          onEnded,
          onError: () => setHasError(true),
        }
      : undefined,
  });

  // For native video, use MediaCore state; for iframes, these won't be used
  const currentTime = mediaState.currentTime;
  const duration = mediaState.duration ?? 0;

  // Combined ref callback for video element
  const videoRef = useCallback((node: HTMLVideoElement | null) => {
    setMediaRef(node);
  }, [setMediaRef]);

  // Check if comments feature is enabled
  const commentsEnabled = capabilities?.comments === true;

  // Comments are only supported for native video (not iframes)
  const supportsCommentOverlay = isNativeVideo && commentsEnabled;

  // Handle video load errors (for non-MediaCore cases)
  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Reset error state when URL changes
  useEffect(() => {
    setHasError(false);
  }, [url]);

  // Fullscreen handling
  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fullscreen request failed, ignore
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        // Exit fullscreen failed, ignore
      });
    }
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Handle add comment for rds controls
  const handleAddComment = useCallback(() => {
    const text = window.prompt(
      `Add a comment at ${formatTime(currentTime)}:`
    );

    if (text && text.trim()) {
      onAddComment?.({ time: currentTime, text: text.trim() });
    }
  }, [currentTime, onAddComment]);

  // Convert MediaComments to TimelineMarkers for rds controls
  const timelineMarkers = comments
    .filter((c) => c.time != null && c.time >= 0)
    .map((c) => ({
      time: c.time!,
      label: `${c.authorName || "Comment"}: ${c.text}`,
      type: "comment" as const,
      id: c.id,
    }));

  // Determine if using rds controls
  const useRdsControls = isNativeVideo && controlsVariant === "rds";

  // Render error state
  if (hasError) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg bg-muted",
          aspectRatioClasses[aspectRatio],
          className
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Failed to load video</p>
        </div>
      </div>
    );
  }

  // Render based on source type
  const renderVideo = () => {
    switch (resolvedType) {
      case "youtube": {
        const videoId = extractYouTubeId(url);
        if (!videoId) {
          return (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Invalid YouTube URL</p>
            </div>
          );
        }
        return (
          <YouTubeEmbed
            videoId={videoId}
            title={title}
            autoplay={autoplay}
            controls={controls}
            loop={loop}
            muted={muted}
          />
        );
      }

      case "vimeo": {
        const videoId = extractVimeoId(url);
        if (!videoId) {
          return (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Invalid Vimeo URL</p>
            </div>
          );
        }
        return (
          <VimeoEmbed
            videoId={videoId}
            title={title}
            autoplay={autoplay}
            controls={controls}
            loop={loop}
            muted={muted}
          />
        );
      }

      case "bunny-embed":
        // Bunny Stream embed iframe
        return (
          <BunnyEmbed
            url={url}
            title={title}
            autoplay={autoplay}
            loop={loop}
            muted={muted}
          />
        );

      case "mux": {
        // =================================================================
        // TODO: Mux Video Support
        // =================================================================
        // Future implementation will use @mux/mux-player-react
        //
        // Required steps:
        // 1. Install: npm install @mux/mux-player-react
        // 2. Import: import MuxPlayer from "@mux/mux-player-react"
        // 3. Extract playback ID from URL or accept it as a prop
        // 4. Render MuxPlayer with appropriate props
        //
        // Example future implementation:
        // return (
        //   <MuxPlayer
        //     playbackId={extractMuxPlaybackId(url)}
        //     autoPlay={autoplay}
        //     muted={muted}
        //     loop={loop}
        //     onPlay={onPlay}
        //     onPause={onPause}
        //     onEnded={onEnded}
        //   />
        // );
        // =================================================================
        return (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <p className="text-sm text-muted-foreground">
              Mux video support coming soon
            </p>
          </div>
        );
      }

      case "hls":
        // HLS stream (Bunny Stream, etc.)
        return (
          <HlsVideo
            url={url}
            title={title}
            poster={poster}
            autoplay={autoplay}
            controls={useRdsControls ? false : controls}
            loop={loop}
            muted={muted}
            videoRef={videoRef}
          />
        );

      case "file":
      default:
        return (
          <NativeVideo
            url={url}
            title={title}
            poster={poster}
            autoplay={autoplay}
            controls={useRdsControls ? false : controls}
            loop={loop}
            muted={muted}
            videoRef={videoRef}
          />
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-black",
        aspectRatioClasses[aspectRatio],
        className
      )}
      onError={handleError}
    >
      {renderVideo()}

      {/* rds Video Controls - for native video with rds controlsVariant */}
      {useRdsControls && controls && (
        <VideoControls
          playing={mediaState.playing}
          currentTime={currentTime}
          duration={duration}
          volume={mediaState.volume}
          muted={mediaState.muted}
          loading={mediaState.loading}
          isFullscreen={isFullscreen}
          onTogglePlay={mediaControls.togglePlay}
          onSeek={mediaControls.seek}
          onVolumeChange={mediaControls.setVolume}
          onMuteToggle={mediaControls.toggleMute}
          onToggleFullscreen={toggleFullscreen}
          markers={commentsEnabled ? timelineMarkers : undefined}
          onMarkerClick={
            commentsEnabled && onCommentSelect
              ? (marker) => onCommentSelect(marker.id || "")
              : undefined
          }
          onAddComment={onAddComment ? handleAddComment : undefined}
          showAddComment={commentsEnabled && !!onAddComment}
        />
      )}

      {/* Timeline comment overlay - only for native video with native controls and comments enabled */}
      {supportsCommentOverlay && !useRdsControls && duration > 0 && (
        <TimelineOverlay
          comments={comments}
          duration={duration}
          currentTime={currentTime}
          onCommentSelect={onCommentSelect}
          onAddComment={onAddComment}
          showAddButton={!!onAddComment}
        />
      )}

      {/* Note for iframe embeds when comments are requested but not supported */}
      {commentsEnabled && resolvedType !== "file" && resolvedType !== "hls" && (
        <div className="absolute top-2 right-2 z-10">
          <div className="bg-black/60 text-white text-xs px-2 py-1 rounded">
            Video timeline comments coming soon
          </div>
        </div>
      )}
    </div>
  );
}
