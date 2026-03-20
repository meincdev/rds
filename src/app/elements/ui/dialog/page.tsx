import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Dialog',
  description: 'A modal dialog that interrupts the user with important content and expects a response.',
}

export default function DialogPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dialog</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add dialog`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"`}</CodeBlock>
      </section>

      {/* Example 1 — Basic Dialog */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic Dialog</h2>
        <CodeBlock>{`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</CodeBlock>
      </section>

      {/* Example 2 — Controlled Dialog */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled Dialog</h2>
        <CodeBlock>{`export function ControlledDialog() {
  const [open, setOpen] = React.useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => { /* action */ setOpen(false) }}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}</CodeBlock>
      </section>

      {/* Example 3 — Prevent close on overlay click */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Prevent close on overlay click</h2>
        <CodeBlock>{`<DialogContent onInteractOutside={(e) => e.preventDefault()}>
  {/* Dialog stays open when clicking outside */}
</DialogContent>`}</CodeBlock>
      </section>

      {/* Props Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'Controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when open state changes' },
            { prop: 'defaultOpen', type: 'boolean', default: 'false', description: 'Initial open state (uncontrolled)' },
            { prop: 'modal', type: 'boolean', default: 'true', description: 'Whether to render as a modal' },
            { prop: 'onInteractOutside', type: '(e: Event) => void', default: '\u2014', description: 'Called on outside click; call e.preventDefault() to block close' },
            { prop: 'onEscapeKeyDown', type: '(e: KeyboardEvent) => void', default: '\u2014', description: 'Called on Escape key' },
          ]}
        />
      </section>

      {/* Accessibility */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Focus is trapped inside the dialog when open</li>
          <li><code>DialogTitle</code> and <code>DialogDescription</code> are automatically wired to <code>aria-labelledby</code> and <code>aria-describedby</code></li>
          <li>Pressing Escape closes the dialog by default</li>
          <li>Background content gets <code>aria-hidden</code> when dialog is open</li>
        </ul>
      </section>
    </div>
  )
}
