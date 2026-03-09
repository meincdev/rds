"use client";

/**
 * =============================================================================
 * rds Video Controls
 * =============================================================================
 *
 * Video-specific transport overlay that wraps RdsMediaTransportBar.
 * Adds auto-hide behavior and gradient background for video overlay context.
 *
 * Used by VideoEmbed when `controlsVariant="rds"` is set.
 *
 * Usage:
 * ```tsx
 * import { VideoControls } from "@/components/rds/media";
 *
 * <VideoControls
 *   playing={playing}
 *   currentTime={currentTime}
 *   duration={duration}
 *   volume={volume}
 *   muted={muted}
 *   onTogglePlay={togglePlay}
 *   onSeek={seek}
 *   ...
 * />
 * ```
 */

import { useState } from "react";
import { cn } from "../lib/utils";
import { RdsMediaTransportBar } from "./rds-media-transport-bar";
import type { TimelineMarker } from "./rds-timeline-control";

// =============================================================================
// Types
// =============================================================================

export interface VideoControlsProps {
  /** Whether video is currently playing */
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
  /** Whether currently in fullscreen */
  isFullscreen?: boolean;
  /** Control handlers */
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onMuteToggle: () => void;
  onToggleFullscreen?: () => void;
  /** Timeline markers (e.g., comments) */
  markers?: TimelineMarker[];
  onMarkerClick?: (marker: TimelineMarker) => void;
  /** Add comment callback */
  onAddComment?: () => void;
  /** Show add comment button */
  showAddComment?: boolean;
  /** Hide controls when not interacting */
  autoHide?: boolean;
  /** Additional class name */
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

export function VideoControls({
  playing,
  currentTime,
  duration,
  volume,
  muted,
  loading = false,
  isFullscreen = false,
  onTogglePlay,
  onSeek,
  onVolumeChange,
  onMuteToggle,
  onToggleFullscreen,
  markers,
  onMarkerClick,
  onAddComment,
  showAddComment = false,
  autoHide = true,
  className,
}: VideoControlsProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Show controls when hovered, focused, paused, or loading
  const showControls = !autoHide || isHovered || isFocused || !playing || loading;

  return (
    <div
      className={cn(
        "absolute inset-x-0 bottom-0 z-20",
        "transition-opacity duration-300",
        showControls ? "opacity-100" : "opacity-0",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Shared Transport Bar with overlay variant */}
      <RdsMediaTransportBar
        variant="overlay"
        playing={playing}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        muted={muted}
        loading={loading}
        onTogglePlay={onTogglePlay}
        onSeek={onSeek}
        onVolumeChange={onVolumeChange}
        onMuteToggle={onMuteToggle}
        markers={markers}
        onMarkerClick={onMarkerClick}
        isFullscreen={isFullscreen}
        onToggleFullscreen={onToggleFullscreen}
        showAddComment={showAddComment}
        onAddComment={onAddComment}
        className="relative"
      />
    </div>
  );
}
