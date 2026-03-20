import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Toggle Group',
  description: 'A set of two-state buttons that can be toggled on or off.',
}

export default function ToggleGroupPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Toggle Group</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A set of two-state buttons that can be toggled on or off.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add toggle-group`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Single Selection</h2>
        <CodeBlock>{`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Multiple Selection</h2>
        <CodeBlock>{`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
</ToggleGroup>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <h3 className="text-lg font-medium">ToggleGroup</h3>
        <PropsTable
          rows={[
            { prop: 'type', type: '"single" | "multiple"', default: '\u2014', description: 'Selection mode (required)' },
            { prop: 'value', type: 'string | string[]', default: '\u2014', description: 'Controlled value' },
            { prop: 'defaultValue', type: 'string | string[]', default: '\u2014', description: 'Initial value (uncontrolled)' },
            { prop: 'onValueChange', type: '(value) => void', default: '\u2014', description: 'Called when selection changes' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables all items' },
            { prop: 'variant', type: '"default" | "outline"', default: '"default"', description: 'Visual style variant' },
            { prop: 'size', type: '"sm" | "default" | "lg"', default: '"default"', description: 'Toggle size' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">ToggleGroupItem</h3>
        <PropsTable
          rows={[
            { prop: 'value', type: 'string', default: '\u2014', description: 'Item value (required)' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables this item' },
          ]}
        />
      </section>
    </div>
  )
}
