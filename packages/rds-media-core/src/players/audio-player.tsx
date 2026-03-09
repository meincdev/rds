"use client";

/**
 * =============================================================================
 * rds AudioPlayer - Native Audio Player Component
 * =============================================================================
 *
 * A styled audio player component using native HTML5 <audio> element.
 * Integrates with MediaCore (useMediaElementCore) for unified state management
 * across all rds media components, sharing the same behavior as VideoEmbed.
 *
 * Uses the shared RdsMediaTransportBar for transport controls, ensuring
 * consistent UI between audio and video players.
 *
 * Usage:
 * ```tsx
 * import { AudioPlayer } from "@/components/rds/media";
 *
 * <AudioPlayer
 *   src="https://example.com/track.mp3"
 *   title="My Song"
 * />
 * ```
 *
 * MediaCore Integration:
 * =====================
 * This component uses useMediaElementCore which provides:
 * - Unified state: playing, currentTime, duration, volume, muted, loading
 * - Controls: play, pause, togglePlay, seek, setVolume, toggleMute
 * - Automatic event listener binding to the <audio> element
 * - Callback forwarding (onPlay, onPause, onEnded)
 *
 * See: src/components/rds/media/core.tsx
 */

import { useCallback, useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { RdsMediaTransportBar } from "../controls/rds-media-transport-bar";
import { formatTime } from "../controls/rds-timeline-control";
import type { MediaCapabilities, MediaCommentProps } from "../core/types";
import { useMediaElementCore } from "../core/core";

// =============================================================================
// Types
// =============================================================================

export interface AudioPlayerProps extends MediaCommentProps {
  /**
   * Audio source URL (MP3, WAV, OGG, etc.)
   */
  src: string;

  /**
   * Optional title to display
   */
  title?: string;

  /**
   * Optional poster/cover art image URL
   */
  poster?: string;

  /**
   * Player capabilities (for future use)
   * TODO: Wire to MediaProvider capabilities
   */
  capabilities?: MediaCapabilities;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Callback when playback starts
   */
  onPlay?: () => void;

  /**
   * Callback when playback pauses
   */
  onPause?: () => void;

  /**
   * Callback when playback ends
   */
  onEnded?: () => void;
}

// =============================================================================
// Component
// =============================================================================

/**
 * AudioPlayer - rds Native Audio Player
 *
 * Renders a styled audio player with play/pause, timeline, and volume controls.
 * Uses native HTML5 <audio> element for broad compatibility.
 */
export function AudioPlayer({
  src,
  title,
  poster,
  capabilities,
  className,
  comments = [],
  onPlay,
  onPause,
  onEnded,
  onAddComment,
  onCommentSelect,
}: AudioPlayerProps) {
  // ==========================================================================
  // MediaCore Integration
  // ==========================================================================

  const {
    state,
    controls,
    mediaRef: setMediaRef,
  } = useMediaElementCore({
    type: "audio",
    capabilities,
    callbacks: {
      onPlay,
      onPause,
      onEnded,
    },
  });

  // Local ref to access the audio element for src reload
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Combined ref callback - sets both the local ref and the MediaCore ref
  const handleRef = useCallback((node: HTMLAudioElement | null) => {
    audioRef.current = node;
    setMediaRef(node);
  }, [setMediaRef]);

  // Destructure state for convenience
  const { playing, currentTime, duration, volume, muted, loading } = state;
  const durationValue = duration ?? 0;

  // ==========================================================================
  // Event Handlers
  // ==========================================================================

  // Handle adding a comment at the current time
  const handleAddComment = useCallback(() => {
    const text = window.prompt(
      `Add a comment at ${formatTime(currentTime)}:`
    );

    if (text && text.trim()) {
      onAddComment?.({ time: currentTime, text: text.trim() });
    }
  }, [currentTime, onAddComment]);

  // Check if comments feature is enabled
  const commentsEnabled = capabilities?.comments === true;

  // Convert MediaComments to TimelineMarkers for transport bar
  const timelineMarkers = comments
    .filter((c) => c.time != null && c.time >= 0)
    .map((c) => ({
      time: c.time!,
      label: `${c.authorName || "Comment"}: ${c.text}`,
      type: "comment" as const,
      id: c.id,
    }));

  // ==========================================================================
  // Effects
  // ==========================================================================

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load();
    }
  }, [src]);

  // ==========================================================================
  // Render
  // ==========================================================================

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-lg border bg-card p-4",
        className
      )}
    >
      {/* Hidden native audio element - events handled by MediaCore */}
      <audio
        ref={handleRef}
        src={src}
        preload="metadata"
      />

      {/* Header: Poster + Title */}
      {(poster || title) && (
        <div className="flex items-center gap-3">
          {poster && (
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted">
              <img
                src={poster}
                alt={title || "Audio cover"}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          {title && (
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{title}</p>
            </div>
          )}
        </div>
      )}

      {/* Shared Transport Bar */}
      <RdsMediaTransportBar
        playing={playing}
        currentTime={currentTime}
        duration={durationValue}
        volume={volume}
        muted={muted}
        loading={loading}
        onTogglePlay={controls.togglePlay}
        onSeek={controls.seek}
        onVolumeChange={controls.setVolume}
        onMuteToggle={controls.toggleMute}
        markers={commentsEnabled ? timelineMarkers : undefined}
        onMarkerClick={
          commentsEnabled && onCommentSelect
            ? (marker) => onCommentSelect(marker.id || "")
            : undefined
        }
        showAddComment={commentsEnabled && !!onAddComment}
        onAddComment={onAddComment ? handleAddComment : undefined}
      />
    </div>
  );
}
