/**
 * =============================================================================
 * rds Badge
 * =============================================================================
 *
 * Badge component for status indicators, labels, and tags.
 *
 * Usage:
 *   import { RdsBadge } from "@meinc/rds-ui-core";
 *
 * For custom colors, use className overrides:
 *   <RdsBadge variant="outline" className="bg-green-100 text-green-700 border-green-200">
 *     Success
 *   </RdsBadge>
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const RdsBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        // rds Music-native variants
        success:
          "border-transparent bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        warning:
          "border-transparent bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        info:
          "border-transparent bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface RdsBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof RdsBadgeVariants> {}

function RdsBadge({ className, variant, ...props }: RdsBadgeProps) {
  return (
    <div className={cn(RdsBadgeVariants({ variant }), className)} {...props} />
  );
}

export { RdsBadge, RdsBadgeVariants };
