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
    "@meinc/rds-ui-core",
  ],
});
