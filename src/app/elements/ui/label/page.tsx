import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Label',
  description: 'An accessible label for form controls.',
}

export default function LabelPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Label</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An accessible label for form controls.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add label`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Label } from "@/components/ui/label"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <CodeBlock>{`<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Required field</h2>
        <CodeBlock>{`<Label htmlFor="name">
  Name <span className="text-destructive">*</span>
</Label>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Disabled style</h2>
        <CodeBlock>{`<Label htmlFor="disabled" className="text-muted-foreground">Disabled field</Label>
<Input id="disabled" disabled />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'htmlFor', type: 'string', default: '\u2014', description: "Links to the input's id" },
            { prop: 'asChild', type: 'boolean', default: 'false', description: 'Renders children as the label element' },
          ]}
        />
      </section>
    </div>
  )
}
