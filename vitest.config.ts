import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@meinc/rds-tokens': path.resolve(__dirname, 'packages/rds-tokens/src/index.ts'),
      '@meinc/rds-ui-core': path.resolve(__dirname, 'packages/rds-ui-core/src/index.ts'),
      '@meinc/rds-media-core': path.resolve(__dirname, 'packages/rds-media-core/src/index.ts'),
      '@meinc/rds-ai-elements': path.resolve(__dirname, 'packages/rds-ai-elements/src/index.ts'),
      '@meinc/rds-social-core': path.resolve(__dirname, 'packages/rds-social-core/src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['packages/*/src/**/*.test.{ts,tsx}'],
    css: true,
    benchmark: {
      include: ['packages/*/src/**/*.bench.{ts,tsx}'],
    },
  },
});
