import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Progress',
  description: 'A linear progress indicator.',
}

export default function ProgressPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A linear progress indicator.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add progress`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Progress } from "@/components/ui/progress"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Static</h2>
        <CodeBlock>{`<Progress value={66} className="w-[60%]" />`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Animated</h2>
        <CodeBlock>{`export function ProgressDemo() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'value', type: 'number', default: '0', description: 'Progress value (0\u2013100)' },
            { prop: 'max', type: 'number', default: '100', description: 'Maximum value' },
          ]}
        />
      </section>
    </div>
  )
}
