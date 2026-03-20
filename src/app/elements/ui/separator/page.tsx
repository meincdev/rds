import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Separator',
  description: 'A visual divider between content sections.',
}

export default function SeparatorPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Separator</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A visual divider between content sections.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add separator`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Separator } from "@/components/ui/separator"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Horizontal</h2>
        <CodeBlock>{`<div>
  <p className="text-sm font-medium">Reba Design System</p>
  <Separator className="my-4" />
  <p className="text-sm text-muted-foreground">
    Open-source UI for multimedia platforms.
  </p>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Vertical</h2>
        <CodeBlock>{`<div className="flex h-5 items-center space-x-4 text-sm">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Direction of the separator' },
            { prop: 'decorative', type: 'boolean', default: 'true', description: 'Whether it is purely decorative (hidden from screen readers)' },
          ]}
        />
      </section>
    </div>
  )
}
