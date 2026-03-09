"use client";

/**
 * =============================================================================
 * rds Transport Button
 * =============================================================================
 *
 * Transport control button that maps actions to appropriate icons and variants.
 * Simplifies media control UI by handling icon selection and accessibility.
 *
 * Usage:
 *   import { RdsTransportButton } from "@/components/rds";
 *
 *   <RdsTransportButton action="play" onClick={handlePlay} />
 *   <RdsTransportButton action="pause" onClick={handlePause} />
 *   <RdsTransportButton action="mute" isActive={muted} onClick={toggleMute} />
 */

import * as React from "react";
import {
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  PictureInPicture2,
  Repeat,
  Shuffle,
  type LucideIcon,
} from "lucide-react";
import { RdsButton, type RdsButtonProps } from "@meinc/rds-ui-core";
import { cn } from "../lib/utils";

// =============================================================================
// Types
// =============================================================================

export type TransportAction =
  | "play"
  | "pause"
  | "stop"
  | "skip-back"
  | "skip-forward"
  | "mute"
  | "unmute"
  | "fullscreen"
  | "exit-fullscreen"
  | "pip"
  | "repeat"
  | "shuffle";

export interface RdsTransportButtonProps
  extends Omit<RdsButtonProps, "variant" | "size" | "children"> {
  /** The transport action this button performs */
  action: TransportAction;
  /** Size variant */
  size?: "sm" | "default" | "lg";
  /** Active state for toggle actions (muted, fullscreen, repeat, shuffle) */
  isActive?: boolean;
  /** Custom icon override */
  icon?: LucideIcon;
  /** Icon class name */
  iconClassName?: string;
}

// =============================================================================
// Icon & Variant Mappings
// =============================================================================

const iconMap: Record<TransportAction, LucideIcon> = {
  play: Play,
  pause: Pause,
  stop: Square,
  "skip-back": SkipBack,
  "skip-forward": SkipForward,
  mute: VolumeX,
  unmute: Volume2,
  fullscreen: Maximize,
  "exit-fullscreen": Minimize,
  pip: PictureInPicture2,
  repeat: Repeat,
  shuffle: Shuffle,
};

const ariaLabelMap: Record<TransportAction, string> = {
  play: "Play",
  pause: "Pause",
  stop: "Stop",
  "skip-back": "Skip back",
  "skip-forward": "Skip forward",
  mute: "Mute",
  unmute: "Unmute",
  fullscreen: "Enter fullscreen",
  "exit-fullscreen": "Exit fullscreen",
  pip: "Picture in picture",
  repeat: "Toggle repeat",
  shuffle: "Toggle shuffle",
};

// Map actions to RdsButton variants
const variantMap: Record<TransportAction, RdsButtonProps["variant"]> = {
  play: "play",
  pause: "transport",
  stop: "stop",
  "skip-back": "transport",
  "skip-forward": "transport",
  mute: "ghost",
  unmute: "ghost",
  fullscreen: "ghost",
  "exit-fullscreen": "ghost",
  pip: "ghost",
  repeat: "ghost",
  shuffle: "ghost",
};

// Map size prop to RdsButton size
const sizeMap: Record<"sm" | "default" | "lg", RdsButtonProps["size"]> = {
  sm: "transport-sm",
  default: "transport",
  lg: "transport-lg",
};

// =============================================================================
// Component
// =============================================================================

const RdsTransportButton = React.forwardRef<
  HTMLButtonElement,
  RdsTransportButtonProps
>(
  (
    {
      action,
      size = "default",
      isActive = false,
      icon,
      iconClassName,
      className,
      ...props
    },
    ref
  ) => {
    const Icon = icon || iconMap[action];
    const ariaLabel = ariaLabelMap[action];
    const variant = variantMap[action];
    const buttonSize = sizeMap[size];

    // Determine icon size based on button size
    const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

    return (
      <RdsButton
        ref={ref}
        variant={variant}
        size={buttonSize}
        aria-label={ariaLabel}
        aria-pressed={
          ["mute", "unmute", "repeat", "shuffle", "fullscreen", "exit-fullscreen"].includes(
            action
          )
            ? isActive
            : undefined
        }
        className={cn(
          isActive && "bg-accent text-accent-foreground",
          className
        )}
        {...props}
      >
        <Icon className={cn(iconSize, iconClassName)} />
      </RdsButton>
    );
  }
);
RdsTransportButton.displayName = "RdsTransportButton";

export { RdsTransportButton };
