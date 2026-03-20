import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Popover',
  description: 'A floating panel that appears next to a trigger.',
}

export default function PopoverPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Popover</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A floating panel that appears next to a trigger.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add popover`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Example</h2>
        <CodeBlock>{`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <h3 className="text-lg font-medium">Popover</h3>
        <PropsTable
          rows={[
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'Controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when open state changes' },
            { prop: 'defaultOpen', type: 'boolean', default: 'false', description: 'Initial open state (uncontrolled)' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">PopoverContent</h3>
        <PropsTable
          rows={[
            { prop: 'align', type: '"start" | "center" | "end"', default: '"center"', description: 'Alignment relative to trigger' },
            { prop: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: 'Preferred side of the trigger' },
            { prop: 'sideOffset', type: 'number', default: '4', description: 'Offset from the trigger' },
          ]}
        />
      </section>
    </div>
  )
}
