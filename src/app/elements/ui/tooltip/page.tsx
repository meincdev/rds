import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Tooltip',
  description: 'A popup that displays information on hover.',
}

export default function TooltipPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A popup that displays information on hover.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add tooltip`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
} from "@/components/ui/tooltip"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Setup</h2>
        <p className="text-sm text-muted-foreground">
          Wrap your app (or layout) with{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">{`<TooltipProvider>`}</code> once.
        </p>
        <CodeBlock>{`<TooltipProvider>
  {/* your app */}
</TooltipProvider>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <CodeBlock>{`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Custom Delay</h2>
        <CodeBlock>{`<Tooltip delayDuration={100}>
  <TooltipTrigger asChild>
    <Button variant="outline">Quick tooltip</Button>
  </TooltipTrigger>
  <TooltipContent>Appears faster</TooltipContent>
</Tooltip>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">On Disabled Button</h2>
        <CodeBlock>{`<Tooltip>
  <TooltipTrigger asChild>
    <span tabIndex={0}>
      <Button disabled>Disabled</Button>
    </span>
  </TooltipTrigger>
  <TooltipContent>This action is not available yet</TooltipContent>
</Tooltip>`}</CodeBlock>
        <p className="text-sm text-muted-foreground">
          Disabled buttons need a span wrapper to receive pointer events for the tooltip to work.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <h3 className="text-lg font-medium">Tooltip</h3>
        <PropsTable
          rows={[
            { prop: 'delayDuration', type: 'number', default: '700', description: 'Delay in ms before tooltip appears' },
          ]}
        />
        <h3 className="mt-4 text-lg font-medium">TooltipContent</h3>
        <PropsTable
          rows={[
            { prop: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: 'Preferred side of the trigger' },
            { prop: 'sideOffset', type: 'number', default: '4', description: 'Offset from the trigger' },
          ]}
        />
      </section>
    </div>
  )
}
