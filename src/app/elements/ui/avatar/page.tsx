import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Avatar',
  description: 'An image element with a fallback for representing the user.',
}

export default function AvatarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add avatar`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With image and fallback</h2>
        <CodeBlock>{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>SC</AvatarFallback>
</Avatar>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Fallback only</h2>
        <CodeBlock>{`<Avatar>
  <AvatarImage src="/broken-link.jpg" alt="User" />
  <AvatarFallback>NM</AvatarFallback>
</Avatar>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <CodeBlock>{`<div className="flex items-center gap-4">
  <Avatar className="h-8 w-8">
    <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
    <AvatarFallback className="text-xs">SM</AvatarFallback>
  </Avatar>
  <Avatar className="h-10 w-10">
    <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-16 w-16">
    <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
    <AvatarFallback className="text-lg">LG</AvatarFallback>
  </Avatar>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Avatar group (stacked)</h2>
        <CodeBlock>{`const users = [
  { src: "https://github.com/shadcn.png", fallback: "SC" },
  { src: "https://github.com/leerob.png", fallback: "LR" },
  { src: "https://github.com/rauchg.png", fallback: "RG" },
  { src: "", fallback: "+4" },
]

<div className="flex items-center">
  {users.map((user, i) => (
    <Avatar
      key={i}
      className={cn("h-9 w-9 ring-2 ring-background", i > 0 && "-ml-3")}
    >
      <AvatarImage src={user.src} />
      <AvatarFallback className="text-xs">{user.fallback}</AvatarFallback>
    </Avatar>
  ))}
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'src', type: 'string', default: '\u2014', description: 'On AvatarImage \u2014 image URL' },
            { prop: 'alt', type: 'string', default: '\u2014', description: 'On AvatarImage \u2014 alt text' },
            { prop: 'delayMs', type: 'number', default: '600', description: 'On AvatarFallback \u2014 delay before showing fallback (prevents flash)' },
          ]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Notes</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li><code>delayMs</code> on AvatarFallback prevents a flash of initials while the image loads</li>
          <li>For the stacked group: <code>ring-2 ring-background</code> creates the visible separation between avatars</li>
        </ul>
      </section>
    </div>
  )
}
