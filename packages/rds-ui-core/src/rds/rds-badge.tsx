/**
 * =============================================================================
 * rds Badge
 * =============================================================================
 *
 * Re-export of the shadcn/ui Badge component for rds consistency.
 * The shadcn Badge is used as-is without modifications.
 *
 * Usage:
 *   import { RdsBadge } from "@/components/rds";
 *
 * For custom colors, use className overrides:
 *   <RdsBadge variant="outline" className="bg-green-100 text-green-700 border-green-200">
 *     Success
 *   </RdsBadge>
 */

export { Badge as RdsBadge, badgeVariants as RdsBadgeVariants } from "../primitives/badge";
export type { BadgeProps as RdsBadgeProps } from "../primitives/badge";
