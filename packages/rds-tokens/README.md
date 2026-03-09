# @meinc/rds-tokens

Design tokens for Reba Design System (RDS).

## Overview

This package exports typed colors, radii, spacing, typography, breakpoints, shadows, and other design tokens used throughout the RDS ecosystem.

## Installation

```bash
npm install @meinc/rds-tokens
```

## Usage

```typescript
import { rdsColors, rdsRadius, rdsBreakpoints } from "@meinc/rds-tokens";

// Access color tokens
const primaryColor = rdsColors.primary; // "#000000"

// Access radius tokens
const borderRadius = rdsRadius.md; // "0.5rem"

// Access breakpoints
const tabletBreakpoint = rdsBreakpoints.md; // 768
```

## Exports

- `rdsColors` - Color palette tokens
- `rdsRadius` - Border radius tokens
- `rdsSpacing` - Spacing scale tokens
- `rdsFontFamily` - Font family tokens
- `rdsFontSize` - Font size tokens
- `rdsFontWeight` - Font weight tokens
- `rdsLineHeight` - Line height tokens
- `rdsBreakpoints` - Responsive breakpoint tokens
- `rdsShadows` - Box shadow tokens
- `rdsZIndex` - Z-index tokens
- `rdsTransition` - Transition tokens
- `rdsDuration` - Animation duration tokens

## License

MIT
