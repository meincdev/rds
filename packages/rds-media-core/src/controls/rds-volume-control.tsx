"use client";

/**
 * =============================================================================
 * rds Volume Control
 * =============================================================================
 *
 * Composite component combining mute toggle button with volume slider.
 * Used in AudioPlayer and VideoControls for unified volume management.
 *
 * Usage:
 *   import { RdsVolumeControl } from "@/components/rds";
 *
 *   <RdsVolumeControl
 *     volume={volume}
 *     muted={muted}
 *     onVolumeChange={setVolume}
 *     onMuteToggle={toggleMute}
 *   />
 */

import * as React from "react";
import { useCallback, useMemo } from "react";
import { Volume2, VolumeX, Volume1 } from "lucide-react";
import { RdsButton } from "@meinc/rds-ui-core";
import { RdsSlider } from "@meinc/rds-ui-core";
import { cn } from "../lib/utils";

// =============================================================================
// Types
// =============================================================================

export interface RdsVolumeControlProps {
  /** Current volume level (0-1) */
  volume: number;
  /** Whether audio is muted */
  muted: boolean;
  /** Callback when volume changes */
  onVolumeChange: (volume: number) => void;
  /** Callback when mute is toggled */
  onMuteToggle: () => void;
  /** Layout orientation */
  orientation?: "horizontal" | "vertical";
  /** Size variant */
  size?: "sm" | "default";
  /** Disable the control */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

const RdsVolumeControl = React.forwardRef<HTMLDivElement, RdsVolumeControlProps>(
  (
    {
      volume,
      muted,
      onVolumeChange,
      onMuteToggle,
      orientation = "horizontal",
      size = "default",
      disabled = false,
      className,
    },
    ref
  ) => {
    // Determine which volume icon to render based on level
    const iconClassName = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

    const volumeIcon = useMemo(() => {
      if (muted || volume === 0) {
        return <VolumeX className={iconClassName} />;
      }
      if (volume < 0.5) {
        return <Volume1 className={iconClassName} />;
      }
      return <Volume2 className={iconClassName} />;
    }, [muted, volume, iconClassName]);

    // Handle slider value change
    const handleSliderChange = useCallback(
      (value: number[]) => {
        if (value[0] !== undefined) {
          onVolumeChange(value[0]);
        }
      },
      [onVolumeChange]
    );

    const isVertical = orientation === "vertical";
    const buttonSize = "icon" as const;
    const sliderWidth = size === "sm" ? "w-16" : "w-20";

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-1",
          isVertical && "flex-col-reverse",
          className
        )}
      >
        {/* Mute Toggle Button */}
        <RdsButton
          variant="ghost"
          size={buttonSize}
          onClick={onMuteToggle}
          disabled={disabled}
          aria-label={muted ? "Unmute" : "Mute"}
          className={cn(
            size === "sm" ? "h-7 w-7" : "h-8 w-8",
            "shrink-0"
          )}
        >
          {volumeIcon}
        </RdsButton>

        {/* Volume Slider */}
        <RdsSlider
          variant="volume"
          value={[muted ? 0 : volume]}
          min={0}
          max={1}
          step={0.01}
          onValueChange={handleSliderChange}
          disabled={disabled}
          orientation={isVertical ? "vertical" : "horizontal"}
          className={cn(
            isVertical ? "h-20" : sliderWidth,
            disabled && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Volume"
        />
      </div>
    );
  }
);
RdsVolumeControl.displayName = "RdsVolumeControl";

export { RdsVolumeControl };
