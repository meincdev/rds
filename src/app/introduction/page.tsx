import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Introduction',
  description: 'What is RDS and why it exists.',
}

export default function IntroductionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Reba Design System (RDS) is an open-source component library built for
          multimedia platforms — podcasting apps, streaming tools, audio
          dashboards, and video experiences. It&rsquo;s built on top of shadcn/ui and
          Tailwind CSS, with copy-paste components, full TypeScript support, and
          documentation designed to work with AI coding tools like Cursor and
          Claude.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          RDS is not a traditional npm package you import. It&rsquo;s a copy-paste
          system — you own the code.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">63+ Components</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              UI, Media, AI, Charts, Layouts
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Built on shadcn/ui</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Radix primitives, Tailwind CSS, TypeScript
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">AI-native docs</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Works out of the box with Cursor, Claude, Copilot
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Quick Install</h2>
        <CodeBlock language="bash">{`npx shadcn@latest init
npx shadcn@latest add button`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Next Steps</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/getting-started" className="text-primary underline underline-offset-4">
              &rarr; Getting Started
            </a>
          </li>
          <li>
            <a href="/elements" className="text-primary underline underline-offset-4">
              &rarr; Browse Components
            </a>
          </li>
          <li>
            <a
              href="https://github.com/meincdev/rds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              &rarr; View on GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
