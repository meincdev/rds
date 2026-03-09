/**
 * =============================================================================
 * rds Color Foundations
 * =============================================================================
 *
 * Color tokens for the Reba Design System, based on shadcn/ui color conventions.
 * These colors are also exposed as CSS variables in globals.css.
 *
 * Usage:
 * - Import these values for JS/TS use (e.g., charts, dynamic styling)
 * - For CSS usage, use Tailwind classes (bg-rds-brand, text-rds-foreground)
 *
 * Color Philosophy:
 * - rds uses BLACK as the brand color for bold, professional aesthetics
 * - Semantic colors (success, warning, error, info) remain consistent with shadcn
 * - Grey scale provides subtle variations for UI hierarchy
 */

// =============================================================================
// Base Colors (from Tailwind/shadcn)
// =============================================================================

export const colors = {
  // Neutral/Grey Scale (shadcn zinc scale)
  neutral: {
    50: "hsl(0, 0%, 98%)",
    100: "hsl(240, 5%, 96%)",
    200: "hsl(240, 6%, 90%)",
    300: "hsl(240, 5%, 84%)",
    400: "hsl(240, 5%, 65%)",
    500: "hsl(240, 4%, 46%)",
    600: "hsl(240, 5%, 34%)",
    700: "hsl(240, 5%, 26%)",
    800: "hsl(240, 4%, 16%)",
    900: "hsl(240, 6%, 10%)",
    950: "hsl(240, 10%, 4%)",
  },

  // Black - rds Primary
  black: "hsl(0, 0%, 0%)",
  white: "hsl(0, 0%, 100%)",

  // Semantic Colors
  success: {
    light: "hsl(142, 76%, 36%)",
    DEFAULT: "hsl(142, 71%, 45%)",
    dark: "hsl(142, 69%, 58%)",
  },

  warning: {
    light: "hsl(38, 92%, 50%)",
    DEFAULT: "hsl(45, 93%, 47%)",
    dark: "hsl(48, 96%, 53%)",
  },

  error: {
    light: "hsl(0, 84%, 60%)",
    DEFAULT: "hsl(0, 72%, 51%)",
    dark: "hsl(0, 74%, 42%)",
  },

  info: {
    light: "hsl(199, 89%, 48%)",
    DEFAULT: "hsl(200, 98%, 39%)",
    dark: "hsl(201, 96%, 32%)",
  },
} as const;

// =============================================================================
// rds Theme Colors
// =============================================================================

/**
 * rds-specific color tokens that map to CSS variables.
 * These are the semantic color names used throughout rds components.
 */
export const RdsColors = {
  // Brand - BLACK for rds (different from melabel's blue brand)
  brand: {
    DEFAULT: "hsl(var(--rds-brand))",
    foreground: "hsl(var(--rds-brand-foreground))",
  },

  // Primary (inherits from shadcn)
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },

  // Secondary - Grey tones
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },

  // Accent
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },

  // Background & Foreground
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",

  // Muted
  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },

  // Card
  card: {
    DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
  },

  // Border & Input
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",

  // Semantic
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },

  success: {
    DEFAULT: "hsl(var(--rds-success))",
    foreground: "hsl(var(--rds-success-foreground))",
  },

  warning: {
    DEFAULT: "hsl(var(--rds-warning))",
    foreground: "hsl(var(--rds-warning-foreground))",
  },

  info: {
    DEFAULT: "hsl(var(--rds-info))",
    foreground: "hsl(var(--rds-info-foreground))",
  },
} as const;

// =============================================================================
// CSS Variable Values (HSL without hsl() wrapper)
// =============================================================================

/**
 * Raw HSL values for CSS variables (without the hsl() wrapper).
 * Use these when defining CSS custom properties.
 */
export const cssVariables = {
  light: {
    // rds Brand - Black (different from melabel's blue brand)
    "--rds-brand": "0 0% 0%",
    "--rds-brand-foreground": "0 0% 100%",

    // Semantic Colors
    "--rds-success": "142 71% 45%",
    "--rds-success-foreground": "0 0% 100%",

    "--rds-warning": "45 93% 47%",
    "--rds-warning-foreground": "0 0% 0%",

    "--rds-info": "200 98% 39%",
    "--rds-info-foreground": "0 0% 100%",
  },

  dark: {
    // rds Brand - White (inverted for dark mode)
    "--rds-brand": "0 0% 100%",
    "--rds-brand-foreground": "0 0% 0%",

    // Semantic Colors (slightly adjusted for dark mode)
    "--rds-success": "142 69% 58%",
    "--rds-success-foreground": "0 0% 0%",

    "--rds-warning": "48 96% 53%",
    "--rds-warning-foreground": "0 0% 0%",

    "--rds-info": "199 89% 48%",
    "--rds-info-foreground": "0 0% 0%",
  },
} as const;

// =============================================================================
// Type Exports
// =============================================================================

export type RdsColorKey = keyof typeof RdsColors;
export type SemanticColor = "success" | "warning" | "error" | "info" | "destructive";
