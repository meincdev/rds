import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Principles',
  description: 'The core principles behind the Reba Design System.',
}

export default function PrinciplesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Principles</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Five ideas that shape every component, token, and documentation
          decision in RDS.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Copy-paste first</h2>
        <p className="text-sm font-medium text-foreground">
          You own the code. No black-box abstractions.
        </p>
        <p className="text-sm text-muted-foreground">
          RDS components are designed to be copied directly into your project.
          There&rsquo;s no library to update, no breaking changes to absorb — just
          code you control.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Composable by design</h2>
        <p className="text-sm font-medium text-foreground">
          Small pieces that combine cleanly.
        </p>
        <p className="text-sm text-muted-foreground">
          Every component does one thing well. Compose them together to build
          complex interfaces without fighting the system.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Accessible by default</h2>
        <p className="text-sm font-medium text-foreground">
          ARIA, keyboard navigation, and focus management — built in.
        </p>
        <p className="text-sm text-muted-foreground">
          RDS components are built on Radix UI primitives, which handle the hard
          parts of accessibility so you don&rsquo;t have to think about it. Keyboard
          navigation, screen reader support, and focus trapping come standard.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. AI-native documentation</h2>
        <p className="text-sm font-medium text-foreground">
          Your AI tools understand RDS out of the box.
        </p>
        <p className="text-sm text-muted-foreground">
          Every component page is written for both humans and AI assistants. The
          naming conventions, prop descriptions, and code examples are structured
          so Cursor, Claude, and Copilot can suggest the right component and
          usage without extra prompting.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Multimedia-aware</h2>
        <p className="text-sm font-medium text-foreground">
          Built for the use cases most design systems ignore.
        </p>
        <p className="text-sm text-muted-foreground">
          RDS includes first-class components for audio players, waveform
          displays, timeline comments, and media transport controls — the
          building blocks of podcasting apps, streaming platforms, and audio
          tools.
        </p>
      </section>

      <div className="border-t pt-6">
        <p className="text-sm text-muted-foreground">
          These principles shape every component, every token, and every
          documentation decision in RDS.{' '}
          <a href="/guidelines" className="text-primary underline underline-offset-4">
            &rarr; Read the Guidelines
          </a>
        </p>
      </div>
    </div>
  )
}
