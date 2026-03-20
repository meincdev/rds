import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Skeleton',
  description: 'A placeholder loading state for content.',
}

export default function SkeletonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Skeleton</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A placeholder loading state for content.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add skeleton`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Skeleton } from "@/components/ui/skeleton"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Card Skeleton</h2>
        <CodeBlock>{`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Full Card</h2>
        <CodeBlock>{`<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Usage Notes</h2>
        <p className="text-sm text-muted-foreground">
          Skeleton has no component-level props. Style it entirely via{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">className</code> to set
          width, height, and border-radius.
        </p>
      </section>
    </div>
  )
}
