"use client";

/**
 * RDS Navigation Menu
 *
 * Multi-level navigation component.
 * Re-exports shadcn/ui NavigationMenu with RDS naming.
 */

import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "../primitives/navigation-menu";

export {
  navigationMenuTriggerStyle as rdsNavigationMenuTriggerStyle,
  NavigationMenu as RdsNavigationMenu,
  NavigationMenuList as RdsNavigationMenuList,
  NavigationMenuItem as RdsNavigationMenuItem,
  NavigationMenuContent as RdsNavigationMenuContent,
  NavigationMenuTrigger as RdsNavigationMenuTrigger,
  NavigationMenuLink as RdsNavigationMenuLink,
  NavigationMenuIndicator as RdsNavigationMenuIndicator,
  NavigationMenuViewport as RdsNavigationMenuViewport,
};
