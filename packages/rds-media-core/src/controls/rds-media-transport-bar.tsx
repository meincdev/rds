"use client";

/**
 * =============================================================================
 * rds Media Transport Bar
 * =============================================================================
 *
 * Shared transport controls component used by both AudioPlayer and VideoEmbed.
 * Provides a unified control interface for all media types.
 *
 * Features:
 * - Play/pause button
 * - Timeline with marker support
 * - Volume control
 * - Optional fullscreen toggle (for video)
 * - Optional add comment button
 *
 * Usage:
 * ```tsx
 * import { RdsMediaTransportBar } from "@/components/rds";
 *
 * <RdsMediaTransportBar
 *   playing={playing}
 *   currentTime={currentTime}
 *   duration={duration}
 *   volume={volume}
 *   muted={muted}
 *   onTogglePlay={togglePlay}
 *   onSeek={seek}
 *   onVolumeChange={setVolume}
 *   onMuteToggle={toggleMute}
 * />
 * ```
 */

import * as React from "react";
import { Maximize, Minimize, MessageSquarePlus } from "lucide-react";
import { cn } from "../lib/utils";
import { RdsButton } from "@meinc/rds-ui-core";
import { RdsTransportButton } from "./rds-transport-button";
import { RdsTimelineControl, formatTime } from "./rds-timeline-control";
import type { TimelineMarker } from "./rds-timeline-control";
import { RdsVolumeControl } from "./rds-volume-control";

// =============================================================================
// Types
// =============================================================================

export interface RdsMediaTransportBarProps {
  /** Whether media is currently playing */
  playing: boolean;
  /** Current playback position in seconds */
  currentTime: number;
  /** Total duration in seconds */
  duration: number;
  /** Current volume level (0-1) */
  volume: number;
  /** Whether audio is muted */
  muted: boolean;
  /** Loading state */
  loading?: boolean;

  // Control handlers
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onMuteToggle: () => void;

  // Optional features
  /** Timeline markers (e.g., comments) */
  markers?: TimelineMarker[];
  onMarkerClick?: (marker: TimelineMarker) => void;

  /** Fullscreen support (typically for video) */
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;

  /** Add comment support */
  showAddComment?: boolean;
  onAddComment?: () => void;

  /** Visual variant */
  variant?: "default" | "overlay";

  /** Additional class name */
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

const RdsMediaTransportBar = React.forwardRef<
  HTMLDivElement,
  RdsMediaTransportBarProps
>(
  (
    {
      playing,
      currentTime,
      duration,
      volume,
      muted,
      loading = false,
      onTogglePlay,
      onSeek,
      onVolumeChange,
      onMuteToggle,
      markers,
      onMarkerClick,
      isFullscreen,
      onToggleFullscreen,
      showAddComment = false,
      onAddComment,
      variant = "default",
      className,
    },
    ref
  ) => {
    const isOverlay = variant === "overlay";

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-1.5",
          isOverlay && "relative p-3",
          className
        )}
      >
        {/* Play/Pause Button */}
        <RdsTransportButton
          action={playing ? "pause" : "play"}
          size="sm"
          onClick={onTogglePlay}
          disabled={loading}
          className={cn(
            "shrink-0",
            isOverlay && "text-white hover:text-white"
          )}
        />

        {/* Timeline */}
        <RdsTimelineControl
          currentTime={currentTime}
          duration={duration}
          onSeek={onSeek}
          markers={markers}
          onMarkerClick={onMarkerClick}
          disabled={loading}
          showTimeLabels={!isOverlay}
          className="flex-1 min-w-0"
        />

        {/* Time display for overlay variant (since timeline hides labels) */}
        {isOverlay && (
          <span className="text-xs text-white/90 tabular-nums min-w-[80px] shrink-0">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        )}

        {/* Add comment button */}
        {showAddComment && onAddComment && (
          <RdsButton
            variant="ghost"
            size="sm"
            onClick={onAddComment}
            disabled={loading || duration === 0}
            className={cn(
              "text-xs gap-1.5 shrink-0",
              isOverlay && "text-white/80 hover:text-white hover:bg-white/20"
            )}
          >
            <MessageSquarePlus className="h-3.5 w-3.5" />
            {!isOverlay && "Comment"}
          </RdsButton>
        )}

        {/* Volume Controls */}
        <RdsVolumeControl
          volume={volume}
          muted={muted}
          onVolumeChange={onVolumeChange}
          onMuteToggle={onMuteToggle}
          size="sm"
          disabled={loading}
          className={
            isOverlay
              ? "[&_button]:text-white/80 [&_button]:hover:text-white [&_button]:hover:bg-white/20"
              : undefined
          }
        />

        {/* Fullscreen toggle (for video) */}
        {onToggleFullscreen && (
          <RdsButton
            variant="ghost"
            size="icon"
            onClick={onToggleFullscreen}
            className={cn(
              "shrink-0 h-7 w-7",
              isOverlay && "text-white/80 hover:text-white hover:bg-white/20"
            )}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize className="h-3.5 w-3.5" />
            ) : (
              <Maximize className="h-3.5 w-3.5" />
            )}
          </RdsButton>
        )}
      </div>
    );
  }
);
RdsMediaTransportBar.displayName = "RdsMediaTransportBar";

export { RdsMediaTransportBar };
