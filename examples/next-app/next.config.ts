import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@meinc/rds-tokens',
    '@meinc/rds-ui-core',
    '@meinc/rds-social-core',
    '@meinc/rds-media-core',
    '@meinc/rds-ai-elements',
  ],
};

export default nextConfig;
