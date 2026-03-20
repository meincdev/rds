import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Menubar',
  description: 'A desktop-style horizontal menu bar with dropdowns.',
}

export default function MenubarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Menubar</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A desktop-style horizontal menu bar with dropdowns.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add menubar`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent,
  MenubarItem, MenubarCheckboxItem, MenubarRadioGroup,
  MenubarRadioItem, MenubarLabel, MenubarSeparator,
  MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger,
} from "@/components/ui/menubar"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Example</h2>
        <CodeBlock>{`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>Cmd+T</MenubarShortcut></MenubarItem>
      <MenubarItem>New Window <MenubarShortcut>Cmd+N</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print... <MenubarShortcut>Cmd+P</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo <MenubarShortcut>Cmd+Z</MenubarShortcut></MenubarItem>
      <MenubarItem>Redo <MenubarShortcut>Shift+Cmd+Z</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Find</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Search the web</MenubarItem>
          <MenubarItem>Find...</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
      <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarRadioGroup value="100%">
        <MenubarRadioItem value="75%">75%</MenubarRadioItem>
        <MenubarRadioItem value="100%">100%</MenubarRadioItem>
        <MenubarRadioItem value="125%">125%</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</CodeBlock>
      </section>
    </div>
  )
}
