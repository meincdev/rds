"use client";

import * as React from "react";

export interface RdsTransportBarProps {
  /** Whether media is currently playing */
  isPlaying?: boolean;
  /** Current time in seconds */
  currentTime?: number;
  /** Total duration in seconds */
  duration?: number;
  /** Callback when play/pause is clicked */
  onPlayPause?: () => void;
  /** Callback when seek occurs */
  onSeek?: (time: number) => void;
}

/**
 * RDS Transport Bar Component (stub)
 *
 * TODO: This is a placeholder. The real implementation will be moved from
 * the main RDS package during the migration phase.
 */
export function RdsTransportBar({
  isPlaying = false,
  currentTime = 0,
  duration = 0,
  onPlayPause,
  onSeek,
}: RdsTransportBarProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-3 p-2 rounded-lg border bg-card">
      <button
        onClick={onPlayPause}
        className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs"
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
      <div className="flex-1 h-1 bg-muted rounded-full">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%" }}
        />
      </div>
      <div className="text-xs text-muted-foreground tabular-nums">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  );
}
