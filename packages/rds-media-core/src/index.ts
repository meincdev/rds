/**
 * @meinc/rds-media-core
 *
 * Media player and timeline components for Reba Design System.
 * Provides audio players, video embeds, transport controls, and timelines.
 */

// =============================================================================
// Types
// =============================================================================

export type {
  MediaType,
  MediaSource,
  FileMediaSource,
  ExternalMediaSource,
  MidiMediaSource,
  MediaSourceBase,
  ExternalPlatform,
  MediaCapabilities,
  MediaState,
  MediaError,
  MediaControls,
  MediaEventCallbacks,
  MediaComment,
  MediaCommentSource,
  MediaCommentProps,
  MediaCoreOptions,
  MediaProviderProps,
} from "./core/types";

export {
  INITIAL_MEDIA_STATE,
  DEFAULT_CAPABILITIES,
} from "./core/types";

// =============================================================================
// Core Context & Hooks
// =============================================================================

export {
  MediaProvider,
  useMediaContext,
  useMediaState,
  useMediaControls,
  useMediaCapabilities,
  useMediaType,
  useMediaDispatch,
  useMediaRef,
  useFormattedTime,
  useVolumeControl,
  useMediaElementCore,
} from "./core/core";

export type { UseMediaElementCoreReturn } from "./core/core";

// =============================================================================
// Players
// =============================================================================

export { AudioPlayer } from "./players/audio-player";
export type { AudioPlayerProps } from "./players/audio-player";

export { VideoEmbed } from "./players/video-embed";
export type {
  VideoEmbedProps,
  VideoSourceType,
  VideoAspectRatio,
  VideoControlsVariant,
} from "./players/video-embed";

export { MidiPlayer } from "./players/midi-player";
export type { MidiPlayerProps } from "./players/midi-player";

// =============================================================================
// Controls
// =============================================================================

export { VideoControls } from "./controls/video-controls";
export type { VideoControlsProps } from "./controls/video-controls";

export { RdsTransportButton } from "./controls/rds-transport-button";
export type { RdsTransportButtonProps, TransportAction } from "./controls/rds-transport-button";

export { RdsVolumeControl } from "./controls/rds-volume-control";
export type { RdsVolumeControlProps } from "./controls/rds-volume-control";

export { RdsTimelineControl, formatTime } from "./controls/rds-timeline-control";
export type {
  RdsTimelineControlProps,
  TimelineMarker,
  TimelineMarkerType,
} from "./controls/rds-timeline-control";

export { RdsMediaTransportBar } from "./controls/rds-media-transport-bar";
export type { RdsMediaTransportBarProps } from "./controls/rds-media-transport-bar";

// =============================================================================
// Utils
// =============================================================================

export {
  mediaCommentToRdsComment,
  mediaCommentsToRdsComments,
} from "./utils/comment-utils";
