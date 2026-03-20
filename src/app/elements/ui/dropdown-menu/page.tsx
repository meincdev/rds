import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Dropdown Menu',
  description: 'Displays a menu to the user triggered by a button.',
}

export default function DropdownMenuPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dropdown Menu</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a menu to the user triggered by a button.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add dropdown-menu`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu"`}</CodeBlock>
      </section>

      {/* Example 1 — Basic with shortcuts */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic with shortcuts</h2>
        <CodeBlock>{`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        Profile <DropdownMenuShortcut>Shift+P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Settings <DropdownMenuShortcut>Cmd+,</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}</CodeBlock>
      </section>

      {/* Example 2 — Checkbox items */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Checkbox items</h2>
        <CodeBlock>{`const [showBookmarks, setShowBookmarks] = React.useState(true)
const [showHistory, setShowHistory] = React.useState(false)

<DropdownMenuContent>
  <DropdownMenuLabel>View</DropdownMenuLabel>
  <DropdownMenuSeparator />
  <DropdownMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
    Bookmarks
  </DropdownMenuCheckboxItem>
  <DropdownMenuCheckboxItem checked={showHistory} onCheckedChange={setShowHistory}>
    History
  </DropdownMenuCheckboxItem>
</DropdownMenuContent>`}</CodeBlock>
      </section>

      {/* Example 3 — Radio group */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Radio group</h2>
        <CodeBlock>{`const [position, setPosition] = React.useState("bottom")

<DropdownMenuContent>
  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
  </DropdownMenuRadioGroup>
</DropdownMenuContent>`}</CodeBlock>
      </section>

      {/* Example 4 — Nested submenu */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Nested submenu</h2>
        <CodeBlock>{`<DropdownMenuSub>
  <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Export as PDF</DropdownMenuItem>
    <DropdownMenuItem>Export as CSV</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`}</CodeBlock>
      </section>

      {/* Props Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <h3 className="text-lg font-medium">DropdownMenu</h3>
        <PropsTable
          rows={[
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'Controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when open state changes' },
            { prop: 'modal', type: 'boolean', default: 'true', description: 'Whether to render as a modal' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">DropdownMenuContent</h3>
        <PropsTable
          rows={[
            { prop: 'align', type: '"start" | "center" | "end"', default: '"center"', description: 'Alignment relative to trigger' },
            { prop: 'side', type: 'string', default: '\u2014', description: 'Preferred side of the trigger' },
            { prop: 'sideOffset', type: 'number', default: '\u2014', description: 'Offset from the trigger' },
            { prop: 'loop', type: 'boolean', default: 'false', description: 'Whether keyboard navigation loops' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">DropdownMenuCheckboxItem</h3>
        <PropsTable
          rows={[
            { prop: 'checked', type: 'boolean', default: '\u2014', description: 'Controlled checked state' },
            { prop: 'onCheckedChange', type: '(checked: boolean) => void', default: '\u2014', description: 'Called when checked state changes' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">DropdownMenuRadioGroup</h3>
        <PropsTable
          rows={[
            { prop: 'value', type: 'string', default: '\u2014', description: 'Controlled selected value' },
            { prop: 'onValueChange', type: '(val: string) => void', default: '\u2014', description: 'Called when value changes' },
          ]}
        />
      </section>

      {/* Accessibility */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Arrow keys navigate between items</li>
          <li>Enter/Space selects an item</li>
          <li>Escape closes the menu</li>
          <li>Type-ahead jumps to matching item</li>
        </ul>
      </section>
    </div>
  )
}
