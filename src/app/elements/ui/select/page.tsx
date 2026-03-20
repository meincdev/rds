import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Select',
  description: 'Displays a list of options for the user to pick from, triggered by a button.',
}

export default function SelectPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Select</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a list of options for the user to pick from, triggered by a button.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add select`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@/components/ui/select"`}</CodeBlock>
      </section>

      {/* Example 1 — Basic */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <CodeBlock>{`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`}</CodeBlock>
      </section>

      {/* Example 2 — Grouped options */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Grouped options</h2>
        <CodeBlock>{`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Time (EST)</SelectItem>
      <SelectItem value="cst">Central Time (CST)</SelectItem>
      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}</CodeBlock>
      </section>

      {/* Example 3 — Controlled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [value, setValue] = React.useState("")

<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Pick one" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`}</CodeBlock>
      </section>

      {/* Example 4 — Disabled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <CodeBlock>{`{/* Disable the entire select */}
<Select disabled>
  <SelectTrigger><SelectValue placeholder="Disabled" /></SelectTrigger>
</Select>

{/* Disable individual items */}
<SelectItem value="x" disabled>Unavailable option</SelectItem>`}</CodeBlock>
      </section>

      {/* Props Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <h3 className="text-lg font-medium">Select</h3>
        <PropsTable
          rows={[
            { prop: 'value', type: 'string', default: '\u2014', description: 'Controlled selected value' },
            { prop: 'onValueChange', type: '(val: string) => void', default: '\u2014', description: 'Called when value changes' },
            { prop: 'defaultValue', type: 'string', default: '\u2014', description: 'Initial value (uncontrolled)' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the entire select' },
            { prop: 'required', type: 'boolean', default: 'false', description: 'Marks as required in a form' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">SelectContent</h3>
        <PropsTable
          rows={[
            { prop: 'position', type: '"popper" | "item-aligned"', default: '"popper"', description: 'Positioning mode for the dropdown' },
            { prop: 'side', type: 'string', default: '\u2014', description: 'Preferred side of the trigger' },
            { prop: 'sideOffset', type: 'number', default: '\u2014', description: 'Offset from the trigger' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">SelectItem</h3>
        <PropsTable
          rows={[
            { prop: 'value', type: 'string', default: '\u2014', description: 'Item value (required)' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the item' },
          ]}
        />
      </section>

      {/* Accessibility */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Arrow Up/Down navigates items</li>
          <li>Type a character to jump to matching item</li>
          <li>Enter selects the focused item</li>
          <li>Escape closes the dropdown</li>
        </ul>
      </section>
    </div>
  )
}
