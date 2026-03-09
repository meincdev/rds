"use client";

/**
 * =============================================================================
 * rds Slider
 * =============================================================================
 *
 * Music-native slider component with variants for media controls.
 * Extends Radix Slider with rds-specific variants for timeline, volume, etc.
 *
 * Usage:
 *   import { RdsSlider } from "@meinc/rds-ui-core";
 *
 *   <RdsSlider variant="timeline" value={[currentTime]} max={duration} />
 *   <RdsSlider variant="volume" value={[volume]} max={1} step={0.01} />
 */

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

// =============================================================================
// Variants
// =============================================================================

const RdsSliderVariants = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      variant: {
        default: "",
        timeline: "group cursor-pointer",
        volume: "",
        playbackRate: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const trackVariants = cva(
  "relative w-full grow overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "h-1.5 bg-primary/20",
        timeline: "h-1 bg-muted group-hover:h-1.5 transition-all",
        volume: "h-1 bg-muted/50",
        playbackRate: "h-1 bg-muted/50",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const rangeVariants = cva("absolute h-full", {
  variants: {
    variant: {
      default: "bg-primary",
      timeline: "bg-primary/80",
      volume: "bg-primary/60",
      playbackRate: "bg-accent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const thumbVariants = cva(
  "block rounded-full border bg-background shadow transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "h-4 w-4 border-primary/50",
        timeline:
          "h-0 w-0 group-hover:h-3 group-hover:w-3 border-primary/50 opacity-0 group-hover:opacity-100",
        volume: "h-3 w-3 border-primary/50",
        playbackRate: "h-3.5 w-3.5 border-accent/50",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// =============================================================================
// Types
// =============================================================================

export interface RdsSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof RdsSliderVariants> {
  /** Track class overrides */
  trackClassName?: string;
  /** Range class overrides */
  rangeClassName?: string;
  /** Thumb class overrides */
  thumbClassName?: string;
}

// =============================================================================
// Component
// =============================================================================

const RdsSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RdsSliderProps
>(
  (
    {
      className,
      variant,
      size,
      trackClassName,
      rangeClassName,
      thumbClassName,
      ...props
    },
    ref
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(RdsSliderVariants({ variant, size, className }))}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(trackVariants({ variant, size }), trackClassName)}
      >
        <SliderPrimitive.Range
          className={cn(rangeVariants({ variant }), rangeClassName)}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(thumbVariants({ variant, size }), thumbClassName)}
      />
    </SliderPrimitive.Root>
  )
);
RdsSlider.displayName = "RdsSlider";

export { RdsSlider, RdsSliderVariants };
