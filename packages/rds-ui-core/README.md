# @meinc/rds-ui-core

Core UI primitives and RDS-wrapped components for **Reba Design System** — a music-native design system for building beautiful, accessible applications.

## Installation

```bash
npm install @meinc/rds-ui-core
```

### Peer Dependencies

This package requires React 18+ and the following optional peer dependencies for certain components:

```bash
# Required
npm install react react-dom

# Optional (install as needed)
npm install lucide-react         # Icons for many components
npm install cmdk                 # Command palette
npm install embla-carousel-react # Carousel
npm install input-otp            # OTP input
npm install react-day-picker     # Calendar/date picker
npm install react-hook-form      # Form utilities
npm install react-resizable-panels # Resizable panels
npm install recharts             # Charts
npm install sonner               # Toast notifications
npm install vaul                 # Drawer
```

## Usage

### Base Primitives

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@meinc/rds-ui-core";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello RDS</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### RDS-Wrapped Components

RDS provides enhanced versions of base components with music-native variants:

```tsx
import { RdsButton, RdsCard, RdsSlider } from "@meinc/rds-ui-core";

// Transport button variants for media players
<RdsButton variant="play">Play</RdsButton>
<RdsButton variant="transport" size="transport">Stop</RdsButton>

// Timeline slider for media
<RdsSlider variant="timeline" />
```

### Utility Functions

```tsx
import { cn } from "@meinc/rds-ui-core";

// Merge Tailwind classes with conflict resolution
const className = cn("px-4 py-2", isActive && "bg-primary", customClass);
```

## Available Components

### Base Primitives (46 components)

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (Toaster), Switch, Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip

### RDS-Wrapped Components (27 components)

RdsAccordion, RdsAlert, RdsAspectRatio, RdsBadge, RdsButton, RdsButtonGroup, RdsCalendar, RdsCard, RdsCarousel, RdsChart, RdsCollapsible, RdsCommand, RdsConfirmDialog, RdsContextMenu, RdsDrawer, RdsForm, RdsHoverCard, RdsInput, RdsInputOtp, RdsMenubar, RdsNavigationMenu, RdsPagination, RdsRadioGroup, RdsResizable, RdsSidebar, RdsSlider, RdsToaster

### Hooks

- `useIsMobile` — Responsive breakpoint detection
- `useSidebar` / `useRdsSidebar` — Sidebar state management
- `useFormField` / `useRdsFormField` — Form field context

## Styling

This package is designed to work with **Tailwind CSS**. Components use CSS variables for theming that should be defined in your global styles.

## License

MIT
