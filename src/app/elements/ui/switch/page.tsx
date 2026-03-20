import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Switch',
  description: 'A control that allows the user to toggle between on and off states.',
}

export default function SwitchPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A control that allows the user to toggle between on and off states.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add switch`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"`}</CodeBlock>
      </section>

      {/* Example 1 — Default */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<Switch />`}</CodeBlock>
      </section>

      {/* Example 2 — With label */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With label</h2>
        <CodeBlock>{`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}</CodeBlock>
      </section>

      {/* Example 3 — Controlled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [enabled, setEnabled] = React.useState(false)

<div className="flex items-center space-x-2">
  <Switch
    id="notifications"
    checked={enabled}
    onCheckedChange={setEnabled}
  />
  <Label htmlFor="notifications">
    {enabled ? "Notifications on" : "Notifications off"}
  </Label>
</div>`}</CodeBlock>
      </section>

      {/* Example 4 — Disabled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <CodeBlock>{`<div className="flex items-center space-x-2">
  <Switch id="disabled" disabled />
  <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
</div>`}</CodeBlock>
      </section>

      {/* Example 5 — Settings panel */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Settings panel</h2>
        <CodeBlock>{`<div className="space-y-4">
  {[
    { id: "email", label: "Email notifications" },
    { id: "sms", label: "SMS alerts" },
    { id: "push", label: "Push notifications" },
  ].map((item) => (
    <div key={item.id} className="flex items-center justify-between rounded-lg border p-4">
      <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
      <Switch id={item.id} />
    </div>
  ))}
</div>`}</CodeBlock>
      </section>

      {/* Props Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'checked', type: 'boolean', default: '\u2014', description: 'Controlled checked state' },
            { prop: 'defaultChecked', type: 'boolean', default: 'false', description: 'Initial state (uncontrolled)' },
            { prop: 'onCheckedChange', type: '(checked: boolean) => void', default: '\u2014', description: 'Called when toggled' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the switch' },
            { prop: 'required', type: 'boolean', default: 'false', description: 'Marks as required in a form' },
            { prop: 'name', type: 'string', default: '\u2014', description: 'Form field name' },
          ]}
        />
      </section>

      {/* Accessibility */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Pressing Space toggles the switch</li>
          <li>Always pair with a <code>Label</code> using matching <code>id</code>/<code>htmlFor</code></li>
        </ul>
      </section>
    </div>
  )
}
