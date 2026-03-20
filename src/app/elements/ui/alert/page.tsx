import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Alert',
  description: 'Displays a callout for user attention.',
}

export default function AlertPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a callout for user attention. Non-interactive, purely visual.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add alert`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertCircle } from "lucide-react"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Default</h2>
        <CodeBlock>{`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the CLI.
  </AlertDescription>
</Alert>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Destructive</h2>
        <CodeBlock>{`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Without icon</h2>
        <CodeBlock>{`<Alert>
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>This component is part of RDS.</AlertDescription>
</Alert>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'variant', type: '"default" | "destructive"', default: '"default"', description: 'Visual style variant' },
          ]}
        />
        <p className="text-sm text-muted-foreground">All other props pass through to the underlying <code>div</code>.</p>
      </section>
    </div>
  )
}
