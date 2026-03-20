import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Input',
  description: 'A text input field.',
}

export default function InputPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Input</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A text input field.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add input`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Input } from "@/components/ui/input"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<Input type="email" placeholder="Email" />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <CodeBlock>{`<Input placeholder="Disabled" disabled />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">File</h2>
        <CodeBlock>{`<Input type="file" />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With Label</h2>
        <CodeBlock>{`<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email2">Email</Label>
  <Input id="email2" type="email" placeholder="Email" />
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With Button</h2>
        <CodeBlock>{`<div className="flex w-full max-w-sm gap-2">
  <Input placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'type', type: 'string', default: '"text"', description: 'Input type (text, email, password, file, etc.)' },
            { prop: 'placeholder', type: 'string', default: '\u2014', description: 'Placeholder text' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
            { prop: 'value', type: 'string', default: '\u2014', description: 'Controlled value' },
            { prop: 'onChange', type: '(e: ChangeEvent) => void', default: '\u2014', description: 'Change handler' },
          ]}
        />
      </section>
    </div>
  )
}
