/**
 * Component Page Template
 *
 * Every component doc page must follow this exact structure in this order:
 * 1. Page Header
 * 2. Installation
 * 3. Import
 * 4. Examples (one or more)
 * 5. Props Table
 * 6. Accessibility (if applicable)
 *
 * CodeBlock conventions:
 * - `language` prop accepts: "bash", "tsx", "ts", "css", "json"
 * - Copy-to-clipboard button is built into CodeBlock automatically
 * - Use `filename` prop when showing a specific file (e.g. filename="app/layout.tsx")
 */

import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: '[ComponentName]',
  description: '[One sentence description of what it does]',
}

export default function ComponentNamePage() {
  return (
    <div className="space-y-10">
      {/* 1. PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">ComponentName</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          One sentence description.
        </p>
      </div>

      {/* 2. INSTALLATION */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add [component]`}</CodeBlock>
      </section>

      {/* 3. IMPORT */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { ComponentName } from "@/components/ui/[name]"`}</CodeBlock>
      </section>

      {/* 4. EXAMPLES — one or more */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Example Name</h2>
        <CodeBlock>{`<ComponentName>...</ComponentName>`}</CodeBlock>
      </section>

      {/* 5. PROPS TABLE */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'propName', type: 'string', default: '\u2014', description: 'Description of the prop' },
          ]}
        />
      </section>

      {/* 6. ACCESSIBILITY (if applicable) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <p className="text-sm text-muted-foreground">
          Keyboard interactions and ARIA notes.
        </p>
      </section>
    </div>
  )
}
