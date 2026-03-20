import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Accordion',
  description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
}

export default function AccordionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add accordion`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Single (collapsible)</h2>
        <CodeBlock>{`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the rest of the design system.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It uses CSS transitions for smooth open/close animations.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Multiple open</h2>
        <CodeBlock>{`<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2.</AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default open item</h2>
        <CodeBlock>{`<Accordion type="single" defaultValue="item-2" collapsible>
  <AccordionItem value="item-1">...</AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Open by default</AccordionTrigger>
    <AccordionContent>This item starts open.</AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'type', type: '"single" | "multiple"', default: '"single"', description: 'Whether one or many items can be open' },
            { prop: 'collapsible', type: 'boolean', default: 'false', description: 'When type="single", allows closing the open item' },
            { prop: 'defaultValue', type: 'string | string[]', default: '\u2014', description: 'Initially open item(s)' },
            { prop: 'value', type: 'string | string[]', default: '\u2014', description: 'Controlled open item(s)' },
            { prop: 'onValueChange', type: '(value) => void', default: '\u2014', description: 'Called when open items change' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'On AccordionItem \u2014 disables expand/collapse' },
          ]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Space/Enter toggles the focused item</li>
          <li>Arrow Up/Down moves focus between triggers</li>
        </ul>
      </section>
    </div>
  )
}
