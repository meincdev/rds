import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: [
    // React ecosystem
    "react",
    "react-dom",
    "react/jsx-runtime",

    // Internal packages
    "@meinc/rds-tokens",

    // All Radix UI packages (bundled in dependencies but marked external to reduce bundle size)
    /^@radix-ui\/.*/,

    // Optional peer dependencies - consumers install these
    "cmdk",
    "embla-carousel-react",
    "input-otp",
    "lucide-react",
    "react-day-picker",
    "react-hook-form",
    "react-resizable-panels",
    "recharts",
    "sonner",
    "vaul",
  ],
});
