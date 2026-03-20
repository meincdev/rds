import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Scroll Area',
  description: 'A custom scrollbar container.',
}

export default function ScrollAreaPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Scroll Area</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A custom scrollbar container.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add scroll-area`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { ScrollArea } from "@/components/ui/scroll-area"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Vertical</h2>
        <CodeBlock>{`const tags = Array.from({ length: 50 }).map((_, i) => \`v1.0.\${i}\`)

<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <React.Fragment key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </React.Fragment>
    ))}
  </div>
</ScrollArea>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Horizontal</h2>
        <CodeBlock>{`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="w-32 shrink-0 rounded-md border p-4">
        Item {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'className', type: 'string', default: '\u2014', description: 'Sets dimensions (height/width) of the scroll container' },
            { prop: 'orientation', type: '"vertical" | "horizontal"', default: '"vertical"', description: 'Scroll direction' },
          ]}
        />
      </section>
    </div>
  )
}
