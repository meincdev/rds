"use client";

/**
 * =============================================================================
 * rds Input
 * =============================================================================
 *
 * Music-native input component with additional variants for media controls.
 * Extends shadcn Input with rds-specific variants.
 *
 * Usage:
 *   import { RdsInput } from "@meinc/rds-ui-core";
 *
 *   <RdsInput variant="search" placeholder="Search tracks..." />
 *   <RdsInput variant="timecode" value="00:03:24" />
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const RdsInputVariants = cva(
  "flex w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "border-input h-9",
        // rds Music-native variants
        search:
          "border-input h-9 pl-9 bg-muted/50 focus:bg-background",
        timecode:
          "border-input h-8 w-24 text-center font-mono text-xs tabular-nums tracking-wider",
        bpm: "border-input h-8 w-16 text-center font-mono text-xs tabular-nums",
        comment:
          "border-input min-h-[80px] resize-none rounded-lg",
        inline:
          "border-transparent bg-transparent shadow-none h-auto p-0 focus-visible:ring-0 hover:bg-muted/50 rounded px-1",
      },
      inputSize: {
        default: "h-9",
        sm: "h-8 text-xs",
        lg: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface RdsInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof RdsInputVariants> {
  /** Icon to display on the left side of the input */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side of the input */
  rightIcon?: React.ReactNode;
  /** Error message to display */
  error?: string;
}

const RdsInput = React.forwardRef<HTMLInputElement, RdsInputProps>(
  (
    {
      className,
      type,
      variant,
      inputSize,
      leftIcon,
      rightIcon,
      error,
      ...props
    },
    ref
  ) => {
    // If icons are provided, wrap in a container
    if (leftIcon || rightIcon) {
      return (
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              RdsInputVariants({ variant, inputSize }),
              leftIcon && "pl-9",
              rightIcon && "pr-9",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
          {error && (
            <p className="text-xs text-destructive mt-1">{error}</p>
          )}
        </div>
      );
    }

    return (
      <>
        <input
          type={type}
          className={cn(
            RdsInputVariants({ variant, inputSize }),
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      </>
    );
  }
);
RdsInput.displayName = "RdsInput";

/**
 * Specialized timecode input with formatting
 */
export interface RdsTimecodeInputProps
  extends Omit<RdsInputProps, "variant" | "type"> {
  /** Current time in seconds */
  timeSeconds?: number;
  /** Callback when time changes */
  onTimeChange?: (seconds: number) => void;
}

const RdsTimecodeInput = React.forwardRef<
  HTMLInputElement,
  RdsTimecodeInputProps
>(({ timeSeconds = 0, onTimeChange, ...props }, ref) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
  };

  const [displayValue, setDisplayValue] = React.useState(formatTime(timeSeconds));

  React.useEffect(() => {
    setDisplayValue(formatTime(timeSeconds));
  }, [timeSeconds]);

  const handleBlur = () => {
    // Parse the time string back to seconds
    const parts = displayValue.split(/[:.]/).map(Number);
    if (parts.length >= 2) {
      const mins = parts[0] || 0;
      const secs = parts[1] || 0;
      const ms = parts[2] || 0;
      const totalSeconds = mins * 60 + secs + ms / 100;
      onTimeChange?.(totalSeconds);
    }
  };

  return (
    <RdsInput
      ref={ref}
      variant="timecode"
      value={displayValue}
      onChange={(e) => setDisplayValue(e.target.value)}
      onBlur={handleBlur}
      {...props}
    />
  );
});
RdsTimecodeInput.displayName = "RdsTimecodeInput";

export { RdsInput, RdsTimecodeInput, RdsInputVariants };
