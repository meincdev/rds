/**
 * =============================================================================
 * rds Button
 * =============================================================================
 *
 * Music-native button component with additional variants for media controls.
 * Extends shadcn Button with rds-specific variants.
 *
 * Usage:
 *   import { RdsButton } from "@/components/rds";
 *
 *   <RdsButton variant="play">Play</RdsButton>
 *   <RdsButton variant="transport" size="transport">Stop</RdsButton>
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const RdsButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Standard variants (from shadcn)
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // rds Music-native variants
        play: "bg-primary text-primary-foreground shadow hover:bg-primary/90 active:bg-primary/80",
        stop: "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 active:bg-destructive/80",
        transport:
          "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 active:bg-primary/30",
        timeline:
          "bg-transparent text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full",
        marker:
          "bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 text-xs",
      },
      size: {
        // Standard sizes
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",

        // rds Music-native sizes
        transport: "h-10 w-10 rounded-full",
        "transport-sm": "h-8 w-8 rounded-full",
        "transport-lg": "h-12 w-12 rounded-full",
        marker: "h-6 px-2 py-1 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface RdsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof RdsButtonVariants> {
  asChild?: boolean;
  /** Loading state - shows spinner and disables button */
  loading?: boolean;
}

const RdsButton = React.forwardRef<HTMLButtonElement, RdsButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(RdsButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
RdsButton.displayName = "RdsButton";

export { RdsButton, RdsButtonVariants };
