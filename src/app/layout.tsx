import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'RDS — Reba Design System',
    template: '%s — RDS',
  },
  description: 'Component documentation for the Reba Design System.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="mx-auto max-w-4xl px-6 py-12">{children}</div>
      </body>
    </html>
  )
}
