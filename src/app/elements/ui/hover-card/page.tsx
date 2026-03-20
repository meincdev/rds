import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Hover Card',
  description: 'A card that appears when hovering over a trigger.',
}

export default function HoverCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hover Card</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A card that appears when hovering over a trigger. For previewing linked content.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add hover-card`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">User profile preview</h2>
        <CodeBlock>{`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nafiz</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/nmfolio.png" />
        <AvatarFallback>NM</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nafiz</h4>
        <p className="text-sm text-muted-foreground">
          Building Reba Design System — open-source UI for multimedia platforms.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Joined March 2021</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Custom delays</h2>
        <CodeBlock>{`<HoverCard openDelay={200} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button variant="link">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p className="text-sm">Opens faster, closes faster.</p>
  </HoverCardContent>
</HoverCard>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'openDelay', type: 'number', default: '700', description: 'Delay in ms before the card opens' },
            { prop: 'closeDelay', type: 'number', default: '300', description: 'Delay in ms before the card closes' },
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'Controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when open state changes' },
            { prop: 'align', type: '"start" | "center" | "end"', default: '"center"', description: 'On HoverCardContent \u2014 alignment relative to trigger' },
            { prop: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: 'On HoverCardContent \u2014 preferred side' },
            { prop: 'sideOffset', type: 'number', default: '4', description: 'On HoverCardContent \u2014 distance from trigger' },
          ]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility warning</h2>
        <p className="text-muted-foreground">
          HoverCard is not accessible via keyboard or touch \u2014 it only works on hover (pointer devices).
          Do not put critical information exclusively in a HoverCard. The trigger should always be a link
          or button that goes somewhere meaningful on its own.
        </p>
      </section>
    </div>
  )
}
