/**
 * =============================================================================
 * rds Button Group
 * =============================================================================
 *
 * Re-exports shadcn ToggleGroup components for grouped button selection.
 * No modifications - pure re-export following the pattern: shadcn > rds > melabel
 *
 * Usage:
 *   import { RdsButtonGroup, RdsButtonGroupItem } from "@/components/rds";
 *
 *   <RdsButtonGroup type="single" defaultValue="center">
 *     <RdsButtonGroupItem value="left">Left</RdsButtonGroupItem>
 *     <RdsButtonGroupItem value="center">Center</RdsButtonGroupItem>
 *     <RdsButtonGroupItem value="right">Right</RdsButtonGroupItem>
 *   </RdsButtonGroup>
 */

export {
  ToggleGroup as RdsButtonGroup,
  ToggleGroupItem as RdsButtonGroupItem,
} from "../primitives/toggle-group";

export { toggleVariants as RdsButtonGroupVariants } from "../primitives/toggle";

// Re-export types for convenience
export type { VariantProps } from "class-variance-authority";
