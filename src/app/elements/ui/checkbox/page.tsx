import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Checkbox',
  description: 'A control that allows the user to select one or more items from a set.',
}

export default function CheckboxPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A control that allows the user to select one or more items from a set.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add checkbox`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"`}</CodeBlock>
      </section>

      {/* Example 1 — Default */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<Checkbox id="terms" />`}</CodeBlock>
      </section>

      {/* Example 2 — With label */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With label</h2>
        <CodeBlock>{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}</CodeBlock>
      </section>

      {/* Example 3 — Controlled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [checked, setChecked] = React.useState(false)

<div className="flex items-center space-x-2">
  <Checkbox id="controlled" checked={checked} onCheckedChange={setChecked} />
  <Label htmlFor="controlled">Subscribe to newsletter</Label>
</div>`}</CodeBlock>
      </section>

      {/* Example 4 — Indeterminate state */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Indeterminate state</h2>
        <CodeBlock>{`<div className="flex items-center space-x-2">
  <Checkbox id="indeterminate" checked="indeterminate" />
  <Label htmlFor="indeterminate">Select all (partial)</Label>
</div>`}</CodeBlock>
      </section>

      {/* Example 5 — Checkbox group */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Checkbox group</h2>
        <CodeBlock>{`const items = [
  { id: "recents", label: "Recents" },
  { id: "home", label: "Home" },
  { id: "applications", label: "Applications" },
  { id: "desktop", label: "Desktop" },
]

export function CheckboxGroup() {
  const [selected, setSelected] = React.useState<string[]>([])

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox
            id={item.id}
            checked={selected.includes(item.id)}
            onCheckedChange={() => toggle(item.id)}
          />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
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
            { prop: 'checked', type: 'boolean | "indeterminate"', default: '\u2014', description: 'Controlled checked state' },
            { prop: 'defaultChecked', type: 'boolean', default: 'false', description: 'Initial state (uncontrolled)' },
            { prop: 'onCheckedChange', type: '(checked: boolean | "indeterminate") => void', default: '\u2014', description: 'Called on change' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox' },
            { prop: 'required', type: 'boolean', default: 'false', description: 'Marks as required in a form' },
            { prop: 'name', type: 'string', default: '\u2014', description: 'Form field name' },
          ]}
        />
      </section>

      {/* Accessibility */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Space toggles the checkbox</li>
          <li>Always pair with a <code>Label</code></li>
          <li>For a &quot;select all&quot; pattern, use indeterminate state when only some items are selected</li>
        </ul>
      </section>
    </div>
  )
}
