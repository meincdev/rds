"use client";

/**
 * RDS Sidebar
 *
 * Sidebar layout component with provider and hooks.
 * Re-exports shadcn/ui Sidebar with RDS naming.
 */

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "../primitives/sidebar";

export {
  Sidebar as RdsSidebar,
  SidebarContent as RdsSidebarContent,
  SidebarFooter as RdsSidebarFooter,
  SidebarGroup as RdsSidebarGroup,
  SidebarGroupAction as RdsSidebarGroupAction,
  SidebarGroupContent as RdsSidebarGroupContent,
  SidebarGroupLabel as RdsSidebarGroupLabel,
  SidebarHeader as RdsSidebarHeader,
  SidebarInput as RdsSidebarInput,
  SidebarInset as RdsSidebarInset,
  SidebarMenu as RdsSidebarMenu,
  SidebarMenuAction as RdsSidebarMenuAction,
  SidebarMenuBadge as RdsSidebarMenuBadge,
  SidebarMenuButton as RdsSidebarMenuButton,
  SidebarMenuItem as RdsSidebarMenuItem,
  SidebarMenuSkeleton as RdsSidebarMenuSkeleton,
  SidebarMenuSub as RdsSidebarMenuSub,
  SidebarMenuSubButton as RdsSidebarMenuSubButton,
  SidebarMenuSubItem as RdsSidebarMenuSubItem,
  SidebarProvider as RdsSidebarProvider,
  SidebarRail as RdsSidebarRail,
  SidebarSeparator as RdsSidebarSeparator,
  SidebarTrigger as RdsSidebarTrigger,
  useSidebar as useRdsSidebar,
};
