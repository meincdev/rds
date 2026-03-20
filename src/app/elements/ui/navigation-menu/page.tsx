import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Navigation Menu',
  description: 'A top nav with trigger buttons and popover content panels.',
}

export default function NavigationMenuPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Navigation Menu</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A top nav with trigger buttons and popover content panels.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add navigation-menu`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent,
  NavigationMenuLink, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Example</h2>
        <CodeBlock>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a href="/" className="flex h-full w-full flex-col rounded-md bg-muted p-6">
                <div className="mb-2 mt-4 text-lg font-medium">RDS</div>
                <p className="text-sm text-muted-foreground">
                  Open-source design system for multimedia platforms.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a href="/getting-started">Introduction</a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/elements" className={navigationMenuTriggerStyle()}>
        Components
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</CodeBlock>
      </section>
    </div>
  )
}
