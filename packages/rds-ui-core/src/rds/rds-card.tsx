/**
 * =============================================================================
 * rds Card
 * =============================================================================
 *
 * Music-native card component with variants for different media contexts.
 * Extends shadcn Card with rds-specific variants.
 *
 * Usage:
 *   import { RdsCard, RdsCardHeader, RdsCardContent } from "@/components/rds";
 *
 *   <RdsCard variant="player">
 *     <RdsCardContent>Player content</RdsCardContent>
 *   </RdsCard>
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const RdsCardVariants = cva("rounded-lg border bg-card text-card-foreground", {
  variants: {
    variant: {
      default: "",
      // rds Music-native variants
      player:
        "bg-gradient-to-b from-card to-card/95 border-border/50",
      media: "overflow-hidden",
      stat: "",
      track:
        "hover:bg-accent/50 transition-colors cursor-pointer border-border/50 hover:border-border",
      release:
        "overflow-hidden",
      comment:
        "border-0 bg-muted/30 rounded-md",
      panel: "border rounded-lg bg-muted/20",
    },
    padding: {
      default: "",
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
  },
});

export interface RdsCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof RdsCardVariants> {
  /** Make card interactive (adds hover states) */
  interactive?: boolean;
}

const RdsCard = React.forwardRef<HTMLDivElement, RdsCardProps>(
  ({ className, variant, padding, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        RdsCardVariants({ variant, padding }),
        interactive &&
          "cursor-pointer hover:bg-accent/50 transition-colors active:bg-accent/70",
        className
      )}
      {...props}
    />
  )
);
RdsCard.displayName = "RdsCard";

const RdsCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
RdsCardHeader.displayName = "RdsCardHeader";

const RdsCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
RdsCardTitle.displayName = "RdsCardTitle";

const RdsCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
RdsCardDescription.displayName = "RdsCardDescription";

const RdsCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
RdsCardContent.displayName = "RdsCardContent";

const RdsCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
RdsCardFooter.displayName = "RdsCardFooter";

/**
 * Specialized media card with cover image support
 */
export interface RdsMediaCardProps extends RdsCardProps {
  /** Cover image URL */
  coverUrl?: string;
  /** Cover image alt text */
  coverAlt?: string;
  /** Aspect ratio for cover */
  aspectRatio?: "square" | "video" | "portrait";
}

const RdsMediaCard = React.forwardRef<HTMLDivElement, RdsMediaCardProps>(
  (
    { className, coverUrl, coverAlt, aspectRatio = "square", children, ...props },
    ref
  ) => {
    const aspectClasses = {
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
    };

    return (
      <RdsCard
        ref={ref}
        variant="media"
        className={cn("overflow-hidden", className)}
        {...props}
      >
        {coverUrl && (
          <div className={cn("relative overflow-hidden", aspectClasses[aspectRatio])}>
            <img
              src={coverUrl}
              alt={coverAlt || ""}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        {children}
      </RdsCard>
    );
  }
);
RdsMediaCard.displayName = "RdsMediaCard";

/**
 * Stat card for dashboards
 */
export interface RdsStatCardProps extends Omit<RdsCardProps, "variant"> {
  /** Stat label */
  label: string;
  /** Stat value */
  value: string | number;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Trend indicator (+/- percentage) */
  trend?: {
    value: number;
    direction: "up" | "down" | "neutral";
  };
}

const RdsStatCard = React.forwardRef<HTMLDivElement, RdsStatCardProps>(
  ({ className, label, value, icon, trend, ...props }, ref) => (
    <RdsCard ref={ref} variant="stat" className={cn("p-4", className)} {...props}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
          {trend && (
            <p
              className={cn(
                "text-xs",
                trend.direction === "up" && "text-green-600",
                trend.direction === "down" && "text-red-600",
                trend.direction === "neutral" && "text-muted-foreground"
              )}
            >
              {trend.direction === "up" && "+"}
              {trend.direction === "down" && "-"}
              {trend.value}%
            </p>
          )}
        </div>
        {icon && (
          <div className="text-muted-foreground">{icon}</div>
        )}
      </div>
    </RdsCard>
  )
);
RdsStatCard.displayName = "RdsStatCard";

export {
  RdsCard,
  RdsCardHeader,
  RdsCardTitle,
  RdsCardDescription,
  RdsCardContent,
  RdsCardFooter,
  RdsMediaCard,
  RdsStatCard,
  RdsCardVariants,
};
