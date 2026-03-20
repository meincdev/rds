import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Textarea',
  description: 'A multi-line text input.',
}

export default function TextareaPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A multi-line text input.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add textarea`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Textarea } from "@/components/ui/textarea"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<Textarea placeholder="Type your message here." />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <CodeBlock>{`<Textarea placeholder="Disabled" disabled />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With Label</h2>
        <CodeBlock>{`<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea id="message" placeholder="Type your message here." />
  <p className="text-sm text-muted-foreground">
    Your message will be copied to support.
  </p>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With Button</h2>
        <CodeBlock>{`<div className="grid w-full gap-2">
  <Textarea placeholder="Type your message here." />
  <Button>Send message</Button>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'placeholder', type: 'string', default: '\u2014', description: 'Placeholder text' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the textarea' },
            { prop: 'rows', type: 'number', default: '\u2014', description: 'Number of visible text lines' },
            { prop: 'value', type: 'string', default: '\u2014', description: 'Controlled value' },
            { prop: 'onChange', type: '(e: ChangeEvent) => void', default: '\u2014', description: 'Change handler' },
          ]}
        />
      </section>
    </div>
  )
}
