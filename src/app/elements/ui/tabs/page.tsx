import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Tabs',
  description: 'A set of layered sections of content that are displayed one at a time.',
}

export default function TabsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A set of layered sections of content that are displayed one at a time.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add tabs`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"`}</CodeBlock>
      </section>

      {/* Example 1 — Default */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Manage your account settings.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`}</CodeBlock>
      </section>

      {/* Example 2 — Controlled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [tab, setTab] = React.useState("account")

<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Manage your account settings.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`}</CodeBlock>
      </section>

      {/* Example 3 — Disabled tab */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Disabled tab</h2>
        <CodeBlock>{`<TabsTrigger value="billing" disabled>Billing</TabsTrigger>`}</CodeBlock>
      </section>

      {/* Props Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <h3 className="text-lg font-medium">Tabs</h3>
        <PropsTable
          rows={[
            { prop: 'defaultValue', type: 'string', default: '\u2014', description: 'Default active tab value (uncontrolled)' },
            { prop: 'value', type: 'string', default: '\u2014', description: 'Controlled active tab value' },
            { prop: 'onValueChange', type: '(value: string) => void', default: '\u2014', description: 'Called when active tab changes' },
            { prop: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Orientation of the tab list' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">TabsTrigger</h3>
        <PropsTable
          rows={[
            { prop: 'value', type: 'string', default: '\u2014', description: 'Unique value identifying this tab (required)' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the tab trigger' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">TabsContent</h3>
        <PropsTable
          rows={[
            { prop: 'value', type: 'string', default: '\u2014', description: 'Value matching the corresponding TabsTrigger (required)' },
            { prop: 'forceMount', type: 'boolean', default: 'false', description: 'Force mount the content even when not active' },
          ]}
        />
      </section>

      {/* Accessibility */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Arrow Left/Right navigates between tabs</li>
          <li>Space/Enter activates the focused tab</li>
          <li>Each panel is linked to its trigger via <code>aria-controls</code></li>
        </ul>
      </section>
    </div>
  )
}
