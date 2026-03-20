import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Badge',
  description: 'A small status label.',
}

export default function BadgePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A small status label.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add badge`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Badge } from "@/components/ui/badge"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Variants</h2>
        <CodeBlock>{`<div className="flex gap-2 flex-wrap">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With Icon</h2>
        <CodeBlock>{`<Badge><CheckCircle2 className="mr-1 h-3 w-3" />Verified</Badge>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">As Link</h2>
        <CodeBlock>{`<Badge asChild><a href="#">New</a></Badge>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'variant', type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: 'Visual style variant' },
            { prop: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto child element' },
          ]}
        />
      </section>
    </div>
  )
}
