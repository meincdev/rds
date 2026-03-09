"use client";

/**
 * RDS Drawer
 *
 * Slide-out panel component built on Vaul.
 * Re-exports shadcn/ui Drawer with RDS naming.
 */

import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "../primitives/drawer";

export {
  Drawer as RdsDrawer,
  DrawerPortal as RdsDrawerPortal,
  DrawerOverlay as RdsDrawerOverlay,
  DrawerTrigger as RdsDrawerTrigger,
  DrawerClose as RdsDrawerClose,
  DrawerContent as RdsDrawerContent,
  DrawerHeader as RdsDrawerHeader,
  DrawerFooter as RdsDrawerFooter,
  DrawerTitle as RdsDrawerTitle,
  DrawerDescription as RdsDrawerDescription,
};
