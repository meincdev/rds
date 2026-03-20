import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Aspect Ratio',
  description: 'Displays content within a desired ratio.',
}

export default function AspectRatioPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add aspect-ratio`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { AspectRatio } from "@/components/ui/aspect-ratio"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16:9</h2>
        <CodeBlock>{`<div className="w-full max-w-sm">
  <AspectRatio ratio={16 / 9} className="bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800"
      alt="Photo"
      className="rounded-md object-cover w-full h-full"
    />
  </AspectRatio>
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Other Ratios</h2>
        <CodeBlock>{`// 4:3
<AspectRatio ratio={4 / 3} className="bg-muted">
  <img src="..." alt="Photo" className="rounded-md object-cover w-full h-full" />
</AspectRatio>

// Square (1:1)
<AspectRatio ratio={1} className="bg-muted">
  <img src="..." alt="Photo" className="rounded-md object-cover w-full h-full" />
</AspectRatio>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'ratio', type: 'number', default: '1', description: 'The desired ratio (e.g. 16/9, 4/3, 1)' },
          ]}
        />
      </section>
    </div>
  )
}
