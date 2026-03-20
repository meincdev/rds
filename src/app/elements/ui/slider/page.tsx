import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Slider',
  description: 'A draggable range input.',
}

export default function SliderPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A draggable range input.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add slider`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Slider } from "@/components/ui/slider"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Custom Range</h2>
        <CodeBlock>{`<Slider defaultValue={[50]} min={0} max={200} step={10} className="w-[60%]" />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Range (Two Handles)</h2>
        <CodeBlock>{`<Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [value, setValue] = React.useState([50])

<Slider value={value} onValueChange={setValue} max={100} step={1} />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'defaultValue', type: 'number[]', default: '[0]', description: 'Initial value (uncontrolled)' },
            { prop: 'value', type: 'number[]', default: '\u2014', description: 'Controlled value' },
            { prop: 'onValueChange', type: '(value: number[]) => void', default: '\u2014', description: 'Called when value changes' },
            { prop: 'min', type: 'number', default: '0', description: 'Minimum value' },
            { prop: 'max', type: 'number', default: '100', description: 'Maximum value' },
            { prop: 'step', type: 'number', default: '1', description: 'Step increment' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the slider' },
            { prop: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Layout orientation' },
          ]}
        />
      </section>
    </div>
  )
}
