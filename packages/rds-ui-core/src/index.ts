/**
 * @meinc/rds-ui-core
 *
 * Core UI primitives and RDS-wrapped components for Reba Design System.
 * Depends on @meinc/rds-tokens for design tokens.
 */

// =============================================================================
// Utilities
// =============================================================================

export { cn } from "./lib/utils";

// =============================================================================
// Hooks
// =============================================================================

export { useIsMobile } from "./hooks/use-mobile";

// =============================================================================
// Base Primitives (shadcn/ui style)
// =============================================================================

// Accordion
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./primitives/accordion";

// Alert Dialog
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./primitives/alert-dialog";

// Alert
export { Alert, AlertTitle, AlertDescription } from "./primitives/alert";

// Aspect Ratio
export { AspectRatio } from "./primitives/aspect-ratio";

// Avatar
export { Avatar, AvatarImage, AvatarFallback } from "./primitives/avatar";

// Badge
export { Badge, badgeVariants } from "./primitives/badge";
export type { BadgeProps } from "./primitives/badge";

// Breadcrumb
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./primitives/breadcrumb";

// Button
export { Button, buttonVariants } from "./primitives/button";
export type { ButtonProps } from "./primitives/button";

// Calendar
export { Calendar } from "./primitives/calendar";

// Card
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./primitives/card";

// Carousel
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./primitives/carousel";
export type { CarouselApi } from "./primitives/carousel";

// Chart
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from "./primitives/chart";
export type { ChartConfig } from "./primitives/chart";

// Checkbox
export { Checkbox } from "./primitives/checkbox";

// Collapsible
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./primitives/collapsible";

// Command
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./primitives/command";

// Context Menu
export {
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
} from "./primitives/context-menu";

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./primitives/dialog";

// Drawer
export {
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
} from "./primitives/drawer";

// Dropdown Menu
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./primitives/dropdown-menu";

// Form
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./primitives/form";

// Hover Card
export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "./primitives/hover-card";

// Input OTP
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./primitives/input-otp";

// Input
export { Input } from "./primitives/input";

// Label
export { Label } from "./primitives/label";

// Menubar
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
} from "./primitives/menubar";

// Navigation Menu
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./primitives/navigation-menu";

// Pagination
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./primitives/pagination";

// Popover
export { Popover, PopoverTrigger, PopoverContent } from "./primitives/popover";

// Progress
export { Progress } from "./primitives/progress";

// Radio Group
export { RadioGroup, RadioGroupItem } from "./primitives/radio-group";

// Resizable
export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./primitives/resizable";

// Scroll Area
export { ScrollArea, ScrollBar } from "./primitives/scroll-area";

// Select
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./primitives/select";

// Separator
export { Separator } from "./primitives/separator";

// Sheet
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./primitives/sheet";

// Sidebar
export {
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
} from "./primitives/sidebar";

// Skeleton
export { Skeleton } from "./primitives/skeleton";

// Slider
export { Slider } from "./primitives/slider";

// Sonner (Toaster)
export { Toaster } from "./primitives/sonner";

// Switch
export { Switch } from "./primitives/switch";

// Table
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./primitives/table";

// Tabs
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./primitives/tabs";

// Textarea
export { Textarea } from "./primitives/textarea";

// Toggle Group
export { ToggleGroup, ToggleGroupItem } from "./primitives/toggle-group";

// Toggle
export { Toggle, toggleVariants } from "./primitives/toggle";

// Tooltip
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./primitives/tooltip";

// =============================================================================
// RDS Wrapped Components (Rds-prefixed)
// =============================================================================

// RDS Accordion
export {
  RdsAccordion,
  RdsAccordionItem,
  RdsAccordionTrigger,
  RdsAccordionContent,
} from "./rds/rds-accordion";

// RDS Alert
export {
  RdsAlert,
  RdsAlertTitle,
  RdsAlertDescription,
} from "./rds/rds-alert";

// RDS Aspect Ratio
export { RdsAspectRatio } from "./rds/rds-aspect-ratio";

// RDS Badge
export { RdsBadge, RdsBadgeVariants } from "./rds/rds-badge";
export type { RdsBadgeProps } from "./rds/rds-badge";

// RDS Button
export { RdsButton, RdsButtonVariants } from "./rds/rds-button";
export type { RdsButtonProps } from "./rds/rds-button";

// RDS Button Group
export {
  RdsButtonGroup,
  RdsButtonGroupItem,
  RdsButtonGroupVariants,
} from "./rds/rds-button-group";

// RDS Calendar
export { RdsCalendarPage, RdsCalendarPage as RdsCalendar } from "./rds/rds-calendar";
export type { RdsCalendarPageProps as RdsCalendarProps, CalendarEvent } from "./rds/rds-calendar";

// RDS Card
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
} from "./rds/rds-card";
export type {
  RdsCardProps,
  RdsMediaCardProps,
  RdsStatCardProps,
} from "./rds/rds-card";

// RDS Carousel
export {
  RdsCarousel,
  RdsCarouselContent,
  RdsCarouselItem,
  RdsCarouselPrevious,
  RdsCarouselNext,
} from "./rds/rds-carousel";
export type { RdsCarouselApi } from "./rds/rds-carousel";

// RDS Chart
export {
  RdsChartContainer,
  RdsChartTooltip,
  RdsChartTooltipContent,
  RdsChartLegend,
  RdsChartLegendContent,
  RdsChartStyle,
} from "./rds/rds-chart";
export type { RdsChartConfig } from "./rds/rds-chart";

// RDS Collapsible
export {
  RdsCollapsible,
  RdsCollapsibleTrigger,
  RdsCollapsibleContent,
} from "./rds/rds-collapsible";

// RDS Command
export {
  RdsCommand,
  RdsCommandDialog,
  RdsCommandInput,
  RdsCommandList,
  RdsCommandEmpty,
  RdsCommandGroup,
  RdsCommandItem,
  RdsCommandShortcut,
  RdsCommandSeparator,
} from "./rds/rds-command";

// RDS Confirm Dialog
export { RdsConfirmDialog, useConfirmDialog } from "./rds/rds-confirm-dialog";
export type {
  RdsConfirmDialogProps,
  UseConfirmDialogOptions,
  ConfirmDialogState,
} from "./rds/rds-confirm-dialog";

// RDS Context Menu
export {
  RdsContextMenu,
  RdsContextMenuTrigger,
  RdsContextMenuContent,
  RdsContextMenuItem,
  RdsContextMenuCheckboxItem,
  RdsContextMenuRadioItem,
  RdsContextMenuLabel,
  RdsContextMenuSeparator,
  RdsContextMenuShortcut,
  RdsContextMenuGroup,
  RdsContextMenuPortal,
  RdsContextMenuSub,
  RdsContextMenuSubContent,
  RdsContextMenuSubTrigger,
  RdsContextMenuRadioGroup,
} from "./rds/rds-context-menu";

// RDS Drawer
export {
  RdsDrawer,
  RdsDrawerPortal,
  RdsDrawerOverlay,
  RdsDrawerTrigger,
  RdsDrawerClose,
  RdsDrawerContent,
  RdsDrawerHeader,
  RdsDrawerFooter,
  RdsDrawerTitle,
  RdsDrawerDescription,
} from "./rds/rds-drawer";

// RDS Form
export {
  useRdsFormField,
  RdsForm,
  RdsFormItem,
  RdsFormLabel,
  RdsFormControl,
  RdsFormDescription,
  RdsFormMessage,
  RdsFormField,
} from "./rds/rds-form";

// RDS Hover Card
export {
  RdsHoverCard,
  RdsHoverCardTrigger,
  RdsHoverCardContent,
} from "./rds/rds-hover-card";

// RDS Input OTP
export {
  RdsInputOtp,
  RdsInputOtpGroup,
  RdsInputOtpSlot,
  RdsInputOtpSeparator,
} from "./rds/rds-input-otp";

// RDS Input
export { RdsInput, RdsTimecodeInput, RdsInputVariants } from "./rds/rds-input";
export type { RdsInputProps, RdsTimecodeInputProps } from "./rds/rds-input";

// RDS Menubar
export {
  RdsMenubar,
  RdsMenubarMenu,
  RdsMenubarTrigger,
  RdsMenubarContent,
  RdsMenubarItem,
  RdsMenubarSeparator,
  RdsMenubarLabel,
  RdsMenubarCheckboxItem,
  RdsMenubarRadioGroup,
  RdsMenubarRadioItem,
  RdsMenubarPortal,
  RdsMenubarSubContent,
  RdsMenubarSubTrigger,
  RdsMenubarGroup,
  RdsMenubarSub,
  RdsMenubarShortcut,
} from "./rds/rds-menubar";

// RDS Navigation Menu
export {
  rdsNavigationMenuTriggerStyle,
  RdsNavigationMenu,
  RdsNavigationMenuList,
  RdsNavigationMenuItem,
  RdsNavigationMenuContent,
  RdsNavigationMenuTrigger,
  RdsNavigationMenuLink,
  RdsNavigationMenuIndicator,
  RdsNavigationMenuViewport,
} from "./rds/rds-navigation-menu";

// RDS Pagination
export {
  RdsPagination,
  RdsPaginationContent,
  RdsPaginationEllipsis,
  RdsPaginationItem,
  RdsPaginationLink,
  RdsPaginationNext,
  RdsPaginationPrevious,
} from "./rds/rds-pagination";

// RDS Radio Group
export { RdsRadioGroup, RdsRadioGroupItem } from "./rds/rds-radio-group";

// RDS Resizable
export {
  RdsResizablePanelGroup,
  RdsResizablePanel,
  RdsResizableHandle,
} from "./rds/rds-resizable";

// RDS Sidebar
export {
  RdsSidebar,
  RdsSidebarContent,
  RdsSidebarFooter,
  RdsSidebarGroup,
  RdsSidebarGroupAction,
  RdsSidebarGroupContent,
  RdsSidebarGroupLabel,
  RdsSidebarHeader,
  RdsSidebarInput,
  RdsSidebarInset,
  RdsSidebarMenu,
  RdsSidebarMenuAction,
  RdsSidebarMenuBadge,
  RdsSidebarMenuButton,
  RdsSidebarMenuItem,
  RdsSidebarMenuSkeleton,
  RdsSidebarMenuSub,
  RdsSidebarMenuSubButton,
  RdsSidebarMenuSubItem,
  RdsSidebarProvider,
  RdsSidebarRail,
  RdsSidebarSeparator,
  RdsSidebarTrigger,
  useRdsSidebar,
} from "./rds/rds-sidebar";

// RDS Slider
export { RdsSlider, RdsSliderVariants } from "./rds/rds-slider";
export type { RdsSliderProps } from "./rds/rds-slider";

// RDS Toaster
export { RdsToaster } from "./rds/rds-toaster";
