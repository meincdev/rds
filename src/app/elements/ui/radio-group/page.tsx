import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Radio Group',
  description: 'A group of radio buttons where only one can be selected.',
}

export default function RadioGroupPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A group of radio buttons where only one can be selected.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add radio-group`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [value, setValue] = React.useState("default")

<RadioGroup value={value} onValueChange={setValue}>
  ...
</RadioGroup>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <h3 className="text-lg font-medium">RadioGroup</h3>
        <PropsTable
          rows={[
            { prop: 'value', type: 'string', default: '\u2014', description: 'Controlled selected value' },
            { prop: 'defaultValue', type: 'string', default: '\u2014', description: 'Initial value (uncontrolled)' },
            { prop: 'onValueChange', type: '(value: string) => void', default: '\u2014', description: 'Called when selection changes' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables all items' },
            { prop: 'orientation', type: '"horizontal" | "vertical"', default: '"vertical"', description: 'Layout orientation' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">RadioGroupItem</h3>
        <PropsTable
          rows={[
            { prop: 'value', type: 'string', default: '\u2014', description: 'Item value (required)' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables this item' },
            { prop: 'id', type: 'string', default: '\u2014', description: 'For label pairing' },
          ]}
        />
      </section>
    </div>
  )
}
