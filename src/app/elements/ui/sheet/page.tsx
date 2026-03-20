import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Sheet',
  description: 'Extends the Dialog component to display content that slides in from the edge of the screen.',
}

export default function SheetPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sheet</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Extends the Dialog component to display content that slides in from the edge of the screen.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add sheet`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"`}</CodeBlock>
      </section>

      {/* Example 1 — Default (right side) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default (right side)</h2>
        <CodeBlock>{`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}</CodeBlock>
      </section>

      {/* Example 2 — All sides */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">All sides</h2>
        <CodeBlock>{`const sides = ["top", "right", "bottom", "left"] as const

export function SheetSides() {
  return (
    <div className="flex gap-2">
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet from {side}</SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side}.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}`}</CodeBlock>
      </section>

      {/* Props Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"right"', description: 'The edge the sheet slides in from' },
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'Controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when open state changes' },
            { prop: 'defaultOpen', type: 'boolean', default: 'false', description: 'Initial open state (uncontrolled)' },
          ]}
        />
      </section>

      {/* Accessibility */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Same accessibility behaviour as Dialog — focus trap, Escape to close, <code>aria-labelledby</code> wired via <code>SheetTitle</code></li>
          <li><code>side</code> is purely visual — screen readers announce it the same as a dialog</li>
        </ul>
      </section>
    </div>
  )
}
