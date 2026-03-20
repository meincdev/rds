import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Toggle',
  description: 'A two-state button that can be on or off.',
}

export default function TogglePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Toggle</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A two-state button that can be on or off.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add toggle`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Toggle } from "@/components/ui/toggle"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Outline</h2>
        <CodeBlock>{`<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With Text</h2>
        <CodeBlock>{`<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
  Italic
</Toggle>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <CodeBlock>{`<Toggle size="sm">Small</Toggle>
<Toggle size="default">Default</Toggle>
<Toggle size="lg">Large</Toggle>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [pressed, setPressed] = React.useState(false)

<Toggle pressed={pressed} onPressedChange={setPressed}>
  Bold
</Toggle>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'variant', type: '"default" | "outline"', default: '"default"', description: 'Visual style variant' },
            { prop: 'size', type: '"sm" | "default" | "lg"', default: '"default"', description: 'Toggle size' },
            { prop: 'pressed', type: 'boolean', default: '\u2014', description: 'Controlled pressed state' },
            { prop: 'defaultPressed', type: 'boolean', default: 'false', description: 'Initial pressed state (uncontrolled)' },
            { prop: 'onPressedChange', type: '(pressed: boolean) => void', default: '\u2014', description: 'Called when pressed state changes' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the toggle' },
          ]}
        />
      </section>
    </div>
  )
}
