import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Drawer',
  description: 'A panel that slides up from the bottom of the screen. Built on Vaul.',
}

export default function DrawerPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Drawer</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A panel that slides up from the bottom of the screen. Built on Vaul.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add drawer`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"`}</CodeBlock>
      </section>

      {/* Example 1 — Basic (bottom sheet) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic (bottom sheet)</h2>
        <CodeBlock>{`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <p className="text-sm text-muted-foreground">Content goes here.</p>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}</CodeBlock>
      </section>

      {/* Example 2 — Responsive Dialog + Drawer */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Responsive Dialog + Drawer</h2>
        <p className="text-sm text-muted-foreground">
          The recommended RDS pattern for any modal content — Dialog on desktop, Drawer on mobile.
        </p>
        <CodeBlock>{`import { useMediaQuery } from "@/hooks/use-media-query"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"

export function ResponsiveModal({ open, onOpenChange, children }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader><DialogTitle>Edit Profile</DialogTitle></DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader><DrawerTitle>Edit Profile</DrawerTitle></DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  )
}`}</CodeBlock>
      </section>

      {/* useMediaQuery hook */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">useMediaQuery hook</h2>
        <p className="text-sm text-muted-foreground">
          Add this hook at <code>hooks/use-media-query.ts</code> for the responsive pattern above.
        </p>
        <CodeBlock>{`import { useEffect, useState } from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [query])
  return matches
}`}</CodeBlock>
      </section>

      {/* Props Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'Controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when open state changes' },
            { prop: 'shouldScaleBackground', type: 'boolean', default: 'false', description: 'Scales the background page when drawer opens' },
            { prop: 'dismissible', type: 'boolean', default: 'true', description: 'Whether swipe-down closes the drawer' },
          ]}
        />
      </section>

      {/* Notes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Notes</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Drawer is mobile-first — default is a bottom sheet with drag handle</li>
          <li>The Responsive Dialog+Drawer pattern above is the recommended RDS approach for any modal content</li>
        </ul>
      </section>
    </div>
  )
}
