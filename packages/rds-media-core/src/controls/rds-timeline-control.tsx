"use client";

/**
 * =============================================================================
 * rds Timeline Control
 * =============================================================================
 *
 * Composite component for media timeline with time display, scrubber, and markers.
 * Supports comment markers, chapter markers, and custom marker types.
 *
 * Usage:
 *   import { RdsTimelineControl } from "@/components/rds";
 *
 *   <RdsTimelineControl
 *     currentTime={currentTime}
 *     duration={duration}
 *     onSeek={handleSeek}
 *     markers={comments.map(c => ({ time: c.time, type: "comment" }))}
 *   />
 */

import * as React from "react";
import { useCallback } from "react";
import { RdsSlider } from "@meinc/rds-ui-core";
import { cn } from "../lib/utils";

// =============================================================================
// Types
// =============================================================================

export type TimelineMarkerType = "comment" | "chapter" | "marker";

export interface TimelineMarker {
  /** Position in seconds */
  time: number;
  /** Optional label for tooltip */
  label?: string;
  /** Marker type affects styling */
  type?: TimelineMarkerType;
  /** Unique identifier */
  id?: string;
}

export interface RdsTimelineControlProps {
  /** Current playback position in seconds */
  currentTime: number;
  /** Total duration in seconds */
  duration: number;
  /** Callback when user seeks to a new position */
  onSeek: (time: number) => void;
  /** Markers to display on timeline */
  markers?: TimelineMarker[];
  /** Callback when a marker is clicked */
  onMarkerClick?: (marker: TimelineMarker) => void;
  /** Custom time formatter */
  formatTime?: (seconds: number) => string;
  /** Disable the control */
  disabled?: boolean;
  /** Show time labels */
  showTimeLabels?: boolean;
  /** Additional class name */
  className?: string;
}

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Default time formatter (MM:SS or HH:MM:SS for long content)
 */
function defaultFormatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";

  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// =============================================================================
// Marker Component
// =============================================================================

interface MarkerProps {
  marker: TimelineMarker;
  duration: number;
  onClick?: (marker: TimelineMarker) => void;
}

function Marker({ marker, duration, onClick }: MarkerProps) {
  if (marker.time == null || duration <= 0) return null;

  const position = (marker.time / duration) * 100;
  if (position < 0 || position > 100) return null;

  // Marker color based on type
  const markerColors: Record<TimelineMarkerType, string> = {
    comment: "bg-primary/80 hover:bg-primary",
    chapter: "bg-accent hover:bg-accent/80",
    marker: "bg-muted-foreground/60 hover:bg-muted-foreground",
  };

  const colorClass = markerColors[marker.type || "marker"];

  return (
    <button
      type="button"
      className={cn(
        "absolute top-0 h-full w-1 -translate-x-1/2",
        colorClass,
        "hover:w-1.5 transition-all duration-150 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
      )}
      style={{ left: `${position}%` }}
      onClick={() => onClick?.(marker)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(marker);
        }
      }}
      title={marker.label}
      aria-label={`${marker.type || "Marker"} at ${defaultFormatTime(marker.time)}${marker.label ? `: ${marker.label}` : ""}`}
    />
  );
}

// =============================================================================
// Component
// =============================================================================

const RdsTimelineControl = React.forwardRef<HTMLDivElement, RdsTimelineControlProps>(
  (
    {
      currentTime,
      duration,
      onSeek,
      markers = [],
      onMarkerClick,
      formatTime = defaultFormatTime,
      disabled = false,
      showTimeLabels = true,
      className,
    },
    ref
  ) => {
    const durationValue = duration || 0;

    // Handle slider value change
    const handleSliderChange = useCallback(
      (value: number[]) => {
        if (value[0] !== undefined) {
          onSeek(value[0]);
        }
      },
      [onSeek]
    );

    // Handle marker click - seek to marker time
    const handleMarkerClick = useCallback(
      (marker: TimelineMarker) => {
        onSeek(marker.time);
        onMarkerClick?.(marker);
      },
      [onSeek, onMarkerClick]
    );

    // Filter valid markers
    const validMarkers = markers.filter(
      (m) => m.time != null && m.time >= 0 && m.time <= durationValue
    );

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1.5 w-full", className)}
      >
        {/* Current Time */}
        {showTimeLabels && (
          <span className="text-xs text-muted-foreground tabular-nums shrink-0">
            {formatTime(currentTime)}
          </span>
        )}

        {/* Timeline Slider with Markers */}
        <div className="relative flex-1">
          <RdsSlider
            variant="timeline"
            value={[currentTime]}
            min={0}
            max={durationValue || 100}
            step={0.1}
            onValueChange={handleSliderChange}
            disabled={disabled || durationValue === 0}
            aria-label="Seek timeline"
          />

          {/* Marker overlay */}
          {validMarkers.length > 0 && durationValue > 0 && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 pointer-events-auto">
              {validMarkers.map((marker, index) => (
                <Marker
                  key={marker.id || `marker-${index}`}
                  marker={marker}
                  duration={durationValue}
                  onClick={handleMarkerClick}
                />
              ))}
            </div>
          )}
        </div>

        {/* Duration */}
        {showTimeLabels && (
          <span className="text-xs text-muted-foreground tabular-nums shrink-0">
            {formatTime(durationValue)}
          </span>
        )}
      </div>
    );
  }
);
RdsTimelineControl.displayName = "RdsTimelineControl";

export { RdsTimelineControl, defaultFormatTime as formatTime };
