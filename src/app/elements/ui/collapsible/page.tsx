import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Collapsible',
  description: 'An interactive component that expands and collapses content.',
}

export default function CollapsiblePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Collapsible</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An interactive component that expands and collapses content.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add collapsible`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Collapsible, CollapsibleTrigger, CollapsibleContent,
} from "@/components/ui/collapsible"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Example</h2>
        <CodeBlock>{`const [isOpen, setIsOpen] = React.useState(false)

<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 text-sm">@radix-ui/primitives</div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 text-sm">@radix-ui/colors</div>
    <div className="rounded-md border px-4 py-3 text-sm">@stitches/react</div>
  </CollapsibleContent>
</Collapsible>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'Controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when open state changes' },
            { prop: 'defaultOpen', type: 'boolean', default: 'false', description: 'Initial open state (uncontrolled)' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the collapsible' },
          ]}
        />
      </section>
    </div>
  )
}
