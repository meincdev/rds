import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Resizable',
  description: 'Resizable panel groups and layouts.',
}

export default function ResizablePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resizable</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Resizable panel groups and layouts.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add resizable`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  ResizablePanelGroup, ResizablePanel, ResizableHandle,
} from "@/components/ui/resizable"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Horizontal</h2>
        <CodeBlock>{`<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="p-6">One</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="p-6">Two</div>
  </ResizablePanel>
</ResizablePanelGroup>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Three-Pane Layout</h2>
        <CodeBlock>{`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={75}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={60}>Content</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40}>Footer</ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <h3 className="text-lg font-medium">ResizablePanelGroup</h3>
        <PropsTable
          rows={[
            { prop: 'direction', type: '"horizontal" | "vertical"', default: '\u2014', description: 'Layout direction (required)' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">ResizablePanel</h3>
        <PropsTable
          rows={[
            { prop: 'defaultSize', type: 'number', default: '\u2014', description: 'Initial size as percentage' },
            { prop: 'minSize', type: 'number', default: '10', description: 'Minimum size as percentage' },
            { prop: 'maxSize', type: 'number', default: '\u2014', description: 'Maximum size as percentage' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">ResizableHandle</h3>
        <PropsTable
          rows={[
            { prop: 'withHandle', type: 'boolean', default: 'false', description: 'Show a visible drag handle' },
          ]}
        />
      </section>
    </div>
  )
}
