import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'RDS Example App',
  description: 'Example app consuming @meinc/rds packages',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
