import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Command',
  description: 'A fast, composable command menu built on cmdk.',
}

export default function CommandPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Command</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A fast, composable command menu built on cmdk.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add command`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Inline command palette</h2>
        <CodeBlock>{`<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile <CommandShortcut>P</CommandShortcut></CommandItem>
      <CommandItem>Billing <CommandShortcut>B</CommandShortcut></CommandItem>
      <CommandItem>Settings <CommandShortcut>,</CommandShortcut></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Global Cmd+K dialog</h2>
        <CodeBlock>{`export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)} className="text-muted-foreground">
        Search... <CommandShortcut>Cmd+K</CommandShortcut>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => { router.push("/getting-started"); setOpen(false) }}>
              Getting Started
            </CommandItem>
            <CommandItem onSelect={() => { router.push("/elements/ui"); setOpen(false) }}>
              Components
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'placeholder', type: 'string', default: '\u2014', description: 'On CommandInput \u2014 search input placeholder' },
            { prop: 'value', type: 'string', default: '\u2014', description: 'On CommandItem \u2014 item value for filtering' },
            { prop: 'onSelect', type: '() => void', default: '\u2014', description: 'On CommandItem \u2014 called when item is selected' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'On CommandItem \u2014 disables the item' },
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'On CommandDialog \u2014 controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'On CommandDialog \u2014 called when open state changes' },
          ]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Notes</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li><code>CommandInput</code> filters the list automatically \u2014 no extra state needed</li>
          <li><code>CommandEmpty</code> only shows when no items match the current input</li>
          <li>Always clean up the keydown event listener in useEffect return</li>
        </ul>
      </section>
    </div>
  )
}
