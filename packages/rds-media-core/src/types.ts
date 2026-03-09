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
 * import type { MediaType, MediaState, MediaControls } from "@meinc/rds-media-core";
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
 */
export interface MediaCapabilities {
  casting?: boolean;
  airplay?: boolean;
  midi?: boolean;
  pictureInPicture?: boolean;
  subtitles?: boolean;
  waveform?: boolean;
  seekPreview?: boolean;
  qualitySelection?: boolean;
  playbackRate?: boolean;
  download?: boolean;
  loop?: boolean;
  fullscreen?: boolean;
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
    loop: true,
  },
};

// =============================================================================
// Media State
// =============================================================================

/**
 * Current playback state of a media element
 */
export interface MediaState {
  playing: boolean;
  currentTime: number;
  duration: number | null;
  buffered: number | null;
  volume: number;
  muted: boolean;
  playbackRate: number;
  loading: boolean;
  ended: boolean;
  error: MediaError | null;
  ready: boolean;
  fullscreen?: boolean;
  pictureInPicture?: boolean;
}

/**
 * Media error information
 */
export interface MediaError {
  code: number;
  message: string;
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
 */
export interface MediaControls {
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  skipForward: (seconds?: number) => void;
  skipBackward: (seconds?: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  setPlaybackRate: (rate: number) => void;
  enterFullscreen?: () => void;
  exitFullscreen?: () => void;
  toggleFullscreen?: () => void;
  enterPictureInPicture?: () => void;
  exitPictureInPicture?: () => void;
  restart: () => void;
}

// =============================================================================
// Media Events
// =============================================================================

/**
 * Callback function types for media events
 */
export interface MediaEventCallbacks {
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onSeeked?: (time: number) => void;
  onTimeUpdate?: (time: number) => void;
  onProgress?: (percent: number) => void;
  onDurationChange?: (duration: number) => void;
  onVolumeChange?: (volume: number, muted: boolean) => void;
  onRateChange?: (rate: number) => void;
  onError?: (error: MediaError) => void;
  onReady?: () => void;
  onLoadingChange?: (loading: boolean) => void;
  onFullscreenChange?: (fullscreen: boolean) => void;
  onPictureInPictureChange?: (pip: boolean) => void;
}

// =============================================================================
// Media Comments
// =============================================================================

export type MediaCommentSource =
  | "internal"
  | "youtube"
  | "vimeo"
  | "disqus"
  | "giscus"
  | "custom";

export interface MediaComment {
  id: string;
  time?: number | null;
  text: string;
  authorName?: string;
  avatarUrl?: string;
  source?: MediaCommentSource;
  createdAt?: string;
  metadata?: Record<string, unknown>;
}

export interface MediaCommentProps {
  comments?: MediaComment[];
  onAddComment?: (payload: { time: number; text: string }) => void;
  onCommentSelect?: (commentId: string) => void;
  onDeleteComment?: (commentId: string) => void;
}

// =============================================================================
// Media Core Options
// =============================================================================

export interface MediaCoreOptions {
  type: MediaType;
  capabilities?: Partial<MediaCapabilities>;
  initialVolume?: number;
  initialMuted?: boolean;
  initialPlaybackRate?: number;
  callbacks?: MediaEventCallbacks;
}

// =============================================================================
// Provider Props
// =============================================================================

export interface MediaProviderProps {
  type: MediaType;
  source?: MediaSource;
  capabilities?: Partial<MediaCapabilities>;
  initialVolume?: number;
  initialMuted?: boolean;
  initialPlaybackRate?: number;
  autoplay?: boolean;
  loop?: boolean;
  callbacks?: MediaEventCallbacks;
  children: React.ReactNode;
}
