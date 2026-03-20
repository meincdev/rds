import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Context Menu',
  description: 'Displays a menu on right-click or long-press.',
}

export default function ContextMenuPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Context Menu</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a menu on right-click or long-press.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add context-menu`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "@/components/ui/context-menu"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <CodeBlock>{`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>
      Back <ContextMenuShortcut>Cmd+[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled>
      Forward <ContextMenuShortcut>Cmd+]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>
      Reload <ContextMenuShortcut>Cmd+R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Save Page As... <ContextMenuShortcut>Shift+Cmd+S</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>Show Bookmarks Bar</ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value="pedro">
      <ContextMenuLabel inset>People</ContextMenuLabel>
      <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'modal', type: 'boolean', default: 'true', description: 'On ContextMenu \u2014 whether to render as modal' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when menu opens/closes' },
            { prop: 'align', type: '"start" | "center" | "end"', default: '\u2014', description: 'On ContextMenuContent \u2014 alignment' },
            { prop: 'sideOffset', type: 'number', default: '\u2014', description: 'On ContextMenuContent \u2014 offset' },
            { prop: 'inset', type: 'boolean', default: 'false', description: 'On items \u2014 adds left padding to align with items that have icons' },
          ]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Notes</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Make the trigger area visually obvious \u2014 use <code>border-dashed</code> with instructional text</li>
          <li>Same composition API as DropdownMenu \u2014 skills transfer directly</li>
          <li>Long-press triggers the menu on touch devices</li>
        </ul>
      </section>
    </div>
  )
}
