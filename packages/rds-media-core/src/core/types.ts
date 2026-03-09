/**
 * =============================================================================
 * rds Media Core - Type Definitions
 * =============================================================================
 *
 * Shared type definitions for all rds media components (audio, video, etc.).
 * These types provide a unified interface for media playback across the
 * entire MEINC ecosystem.
 *
 * Usage:
 * ```tsx
 * import type { MediaType, MediaState, MediaControls } from "@/components/rds/media";
 * ```
 */

// =============================================================================
// Media Type
// =============================================================================

/**
 * Supported media types in rds
 *
 * - "audio": Standard audio playback (MP3, WAV, FLAC, etc.)
 * - "video": Standard video playback (MP4, WebM, etc.)
 * - "midi": MIDI files (requires special rendering/synthesis)
 * - "external": External embeds (YouTube, Vimeo, SoundCloud, etc.)
 */
export type MediaType = "audio" | "video" | "midi" | "external";

// =============================================================================
// Media Source Types
// =============================================================================

/**
 * Platform-specific embed sources
 */
export type ExternalPlatform =
  | "youtube"
  | "vimeo"
  | "soundcloud"
  | "spotify"
  | "mux"
  | "unknown";

/**
 * Base media source - common properties
 */
export interface MediaSourceBase {
  /** Unique identifier for this source */
  id?: string;
  /** Human-readable title */
  title?: string;
  /** Artist or creator name */
  artist?: string;
  /** Thumbnail/poster image URL */
  poster?: string;
  /** Duration in seconds (if known ahead of time) */
  duration?: number;
}

/**
 * File-based media source (audio/video files)
 */
export interface FileMediaSource extends MediaSourceBase {
  type: "file";
  /** Direct URL to the media file */
  url: string;
  /** MIME type of the file */
  mimeType?: string;
}

/**
 * External embed source (YouTube, Vimeo, etc.)
 */
export interface ExternalMediaSource extends MediaSourceBase {
  type: "external";
  /** Platform identifier */
  platform: ExternalPlatform;
  /** Original URL or embed ID */
  url: string;
  /** Platform-specific video/track ID */
  embedId?: string;
}

/**
 * MIDI source (requires synthesis)
 */
export interface MidiMediaSource extends MediaSourceBase {
  type: "midi";
  /** URL to the MIDI file */
  url: string;
  /** URL to pre-rendered audio (if available) */
  renderedAudioUrl?: string;
  /** Whether rendering is complete */
  isRendered?: boolean;
}

/**
 * Union of all media source types
 */
export type MediaSource = FileMediaSource | ExternalMediaSource | MidiMediaSource;

// =============================================================================
// Media Capabilities
// =============================================================================

/**
 * Describes what features a media player supports
 *
 * Used for:
 * - Conditionally rendering UI controls
 * - Feature detection before attempting operations
 * - Platform capability negotiation
 */
export interface MediaCapabilities {
  /**
   * Chromecast / Google Cast support
   * @default false
   */
  casting?: boolean;

  /**
   * Apple AirPlay support
   * @default false
   */
  airplay?: boolean;

  /**
   * MIDI playback/synthesis support
   * @default false
   */
  midi?: boolean;

  /**
   * Picture-in-Picture mode support
   * @default false
   */
  pictureInPicture?: boolean;

  /**
   * Subtitle/caption support
   * @default false
   */
  subtitles?: boolean;

  /**
   * Waveform visualization support
   * @default false
   */
  waveform?: boolean;

  /**
   * Seek preview thumbnails support
   * @default false
   */
  seekPreview?: boolean;

  /**
   * Quality selection support (for adaptive streaming)
   * @default false
   */
  qualitySelection?: boolean;

  /**
   * Playback speed control support
   * @default true
   */
  playbackRate?: boolean;

  /**
   * Download support
   * @default false
   */
  download?: boolean;

  /**
   * Looping support
   * @default true
   */
  loop?: boolean;

  /**
   * Fullscreen support (video only)
   * @default false
   */
  fullscreen?: boolean;

  /**
   * Timeline comments support
   * When true, enables comment markers on the timeline and add comment UI
   * @default false
   */
  comments?: boolean;
}

/**
 * Default capabilities for different media types
 */
export const DEFAULT_CAPABILITIES: Record<MediaType, MediaCapabilities> = {
  audio: {
    playbackRate: true,
    loop: true,
    waveform: true,
    download: true,
  },
  video: {
    playbackRate: true,
    loop: true,
    fullscreen: true,
    pictureInPicture: true,
    subtitles: true,
    qualitySelection: true,
  },
  midi: {
    playbackRate: true,
    loop: true,
    midi: true,
  },
  external: {
    // External embeds have limited control
    loop: true,
  },
};

// =============================================================================
// Media State
// =============================================================================

/**
 * Current playback state of a media element
 *
 * This represents the "read" side of media control - what's currently
 * happening with the playback.
 */
export interface MediaState {
  /**
   * Whether media is currently playing
   */
  playing: boolean;

  /**
   * Current playback position in seconds
   */
  currentTime: number;

  /**
   * Total duration in seconds (null if unknown/loading)
   */
  duration: number | null;

  /**
   * Amount buffered in seconds (null if not applicable)
   */
  buffered: number | null;

  /**
   * Current volume level (0-1)
   */
  volume: number;

  /**
   * Whether audio is muted
   */
  muted: boolean;

  /**
   * Current playback speed (1 = normal)
   */
  playbackRate: number;

  /**
   * Whether media is currently loading/buffering
   */
  loading: boolean;

  /**
   * Whether media has finished playing
   */
  ended: boolean;

  /**
   * Error state (null if no error)
   */
  error: MediaError | null;

  /**
   * Whether media is ready to play
   */
  ready: boolean;

  /**
   * Whether media is in fullscreen mode (video only)
   */
  fullscreen?: boolean;

  /**
   * Whether Picture-in-Picture is active (video only)
   */
  pictureInPicture?: boolean;
}

/**
 * Media error information
 */
export interface MediaError {
  /** Error code */
  code: number;
  /** Human-readable error message */
  message: string;
  /** Original error object (if available) */
  originalError?: Error;
}

/**
 * Default/initial media state
 */
export const INITIAL_MEDIA_STATE: MediaState = {
  playing: false,
  currentTime: 0,
  duration: null,
  buffered: null,
  volume: 1,
  muted: false,
  playbackRate: 1,
  loading: true,
  ended: false,
  error: null,
  ready: false,
  fullscreen: false,
  pictureInPicture: false,
};

// =============================================================================
// Media Controls
// =============================================================================

/**
 * Control interface for media playback
 *
 * This represents the "write" side of media control - actions that
 * can be performed on the media element.
 */
export interface MediaControls {
  /**
   * Start playback
   */
  play: () => void;

  /**
   * Pause playback
   */
  pause: () => void;

  /**
   * Toggle between play and pause
   */
  togglePlay: () => void;

  /**
   * Seek to a specific time
   * @param time - Time in seconds
   */
  seek: (time: number) => void;

  /**
   * Skip forward by a number of seconds
   * @param seconds - Seconds to skip (default: 10)
   */
  skipForward: (seconds?: number) => void;

  /**
   * Skip backward by a number of seconds
   * @param seconds - Seconds to skip (default: 10)
   */
  skipBackward: (seconds?: number) => void;

  /**
   * Set volume level
   * @param volume - Volume level (0-1)
   */
  setVolume: (volume: number) => void;

  /**
   * Toggle mute state
   */
  toggleMute: () => void;

  /**
   * Set playback speed
   * @param rate - Playback rate (1 = normal)
   */
  setPlaybackRate: (rate: number) => void;

  /**
   * Enter fullscreen mode (video only)
   */
  enterFullscreen?: () => void;

  /**
   * Exit fullscreen mode (video only)
   */
  exitFullscreen?: () => void;

  /**
   * Toggle fullscreen mode (video only)
   */
  toggleFullscreen?: () => void;

  /**
   * Enter Picture-in-Picture mode (video only)
   */
  enterPictureInPicture?: () => void;

  /**
   * Exit Picture-in-Picture mode (video only)
   */
  exitPictureInPicture?: () => void;

  /**
   * Restart playback from the beginning
   */
  restart: () => void;
}

// =============================================================================
// Media Events
// =============================================================================

/**
 * Callback function types for media events
 */
export interface MediaEventCallbacks {
  /** Called when playback starts */
  onPlay?: () => void;
  /** Called when playback pauses */
  onPause?: () => void;
  /** Called when playback ends */
  onEnded?: () => void;
  /** Called when seeking completes */
  onSeeked?: (time: number) => void;
  /** Called on time update (throttled) */
  onTimeUpdate?: (time: number) => void;
  /** Called on progress update (0-100) */
  onProgress?: (percent: number) => void;
  /** Called when duration becomes known */
  onDurationChange?: (duration: number) => void;
  /** Called when volume changes */
  onVolumeChange?: (volume: number, muted: boolean) => void;
  /** Called when playback rate changes */
  onRateChange?: (rate: number) => void;
  /** Called when an error occurs */
  onError?: (error: MediaError) => void;
  /** Called when media is ready to play */
  onReady?: () => void;
  /** Called when loading state changes */
  onLoadingChange?: (loading: boolean) => void;
  /** Called when fullscreen state changes */
  onFullscreenChange?: (fullscreen: boolean) => void;
  /** Called when PiP state changes */
  onPictureInPictureChange?: (pip: boolean) => void;
}

// =============================================================================
// Media Comments
// =============================================================================

/**
 * Source/origin of a media comment
 *
 * - "internal": Comments stored in our own database
 * - "youtube": Comments from YouTube API
 * - "vimeo": Comments from Vimeo API
 * - "disqus": Comments from Disqus embed
 * - "giscus": Comments from Giscus (GitHub Discussions)
 * - "custom": Custom comment source/provider
 */
export type MediaCommentSource =
  | "internal"
  | "youtube"
  | "vimeo"
  | "disqus"
  | "giscus"
  | "custom";

/**
 * A single comment on a media timeline
 *
 * Comments can optionally be attached to a specific timestamp,
 * enabling time-synced comment threads (like SoundCloud).
 */
export interface MediaComment {
  /** Unique identifier for this comment */
  id: string;

  /**
   * Timestamp in seconds where this comment is anchored
   * - `null` or `undefined` = general comment, not time-specific
   */
  time?: number | null;

  /** Comment text content */
  text: string;

  /** Display name of the comment author */
  authorName?: string;

  /** Avatar/profile image URL of the author */
  avatarUrl?: string;

  /** Source/origin of this comment */
  source?: MediaCommentSource;

  /** ISO timestamp when the comment was created */
  createdAt?: string;

  /**
   * Additional metadata (platform-specific data, reactions, etc.)
   * Structure varies by source
   */
  metadata?: Record<string, unknown>;
}

/**
 * Props for media components that support timeline comments
 *
 * This interface can be extended by VideoEmbed, AudioPlayer, MidiPlayer, etc.
 * to provide consistent comment functionality across all media types.
 *
 * @example
 * ```tsx
 * interface VideoEmbedProps extends MediaCommentProps {
 *   url: string;
 *   // ... other props
 * }
 * ```
 */
export interface MediaCommentProps {
  /**
   * Array of comments to display on the timeline
   * Can be pre-loaded or updated dynamically
   */
  comments?: MediaComment[];

  /**
   * Callback when user adds a new comment
   * @param payload - Object containing the timestamp and comment text
   */
  onAddComment?: (payload: { time: number; text: string }) => void;

  /**
   * Callback when user clicks/selects a comment
   * Typically used to seek to the comment's timestamp
   * @param commentId - The ID of the selected comment
   */
  onCommentSelect?: (commentId: string) => void;

  /**
   * Callback when user deletes a comment
   * @param commentId - The ID of the comment to delete
   */
  onDeleteComment?: (commentId: string) => void;
}

// =============================================================================
// Media Core Options
// =============================================================================

/**
 * Options for the useMediaElementCore hook
 *
 * Used to configure a standalone media controller that binds
 * directly to an HTMLMediaElement without needing MediaProvider.
 */
export interface MediaCoreOptions {
  /** Media type (audio or video) */
  type: MediaType;
  /** Capability overrides */
  capabilities?: Partial<MediaCapabilities>;
  /** Initial volume (0-1) */
  initialVolume?: number;
  /** Initial muted state */
  initialMuted?: boolean;
  /** Initial playback rate */
  initialPlaybackRate?: number;
  /** Event callbacks */
  callbacks?: MediaEventCallbacks;
}

// =============================================================================
// Provider Props
// =============================================================================

/**
 * Props for the MediaProvider component
 */
export interface MediaProviderProps {
  /** Media type */
  type: MediaType;
  /** Source configuration */
  source?: MediaSource;
  /** Capability overrides */
  capabilities?: Partial<MediaCapabilities>;
  /** Initial volume (0-1) */
  initialVolume?: number;
  /** Initial muted state */
  initialMuted?: boolean;
  /** Initial playback rate */
  initialPlaybackRate?: number;
  /** Whether to autoplay */
  autoplay?: boolean;
  /** Whether to loop */
  loop?: boolean;
  /** Event callbacks */
  callbacks?: MediaEventCallbacks;
  /** Children components */
  children: React.ReactNode;
}
