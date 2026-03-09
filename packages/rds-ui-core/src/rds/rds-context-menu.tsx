"use client";

/**
 * RDS Context Menu
 *
 * Right-click context menus.
 * Re-exports shadcn/ui ContextMenu with RDS naming.
 */

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "../primitives/context-menu";

export {
  ContextMenu as RdsContextMenu,
  ContextMenuTrigger as RdsContextMenuTrigger,
  ContextMenuContent as RdsContextMenuContent,
  ContextMenuItem as RdsContextMenuItem,
  ContextMenuCheckboxItem as RdsContextMenuCheckboxItem,
  ContextMenuRadioItem as RdsContextMenuRadioItem,
  ContextMenuLabel as RdsContextMenuLabel,
  ContextMenuSeparator as RdsContextMenuSeparator,
  ContextMenuShortcut as RdsContextMenuShortcut,
  ContextMenuGroup as RdsContextMenuGroup,
  ContextMenuPortal as RdsContextMenuPortal,
  ContextMenuSub as RdsContextMenuSub,
  ContextMenuSubContent as RdsContextMenuSubContent,
  ContextMenuSubTrigger as RdsContextMenuSubTrigger,
  ContextMenuRadioGroup as RdsContextMenuRadioGroup,
};
