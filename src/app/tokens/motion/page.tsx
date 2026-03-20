import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Motion',
  description: 'Subtle animations that support content, never distract from it.',
}

export default function MotionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Motion</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Subtle animations that support content, never distract from it.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Duration Scale</h2>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Token</th>
                <th className="px-4 py-2 text-left font-medium">Value</th>
                <th className="px-4 py-2 text-left font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">duration-75</td>
                <td className="px-4 py-2 font-mono text-xs">75ms</td>
                <td className="px-4 py-2 text-muted-foreground">Micro feedback (checkbox check, button press)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">duration-150</td>
                <td className="px-4 py-2 font-mono text-xs">150ms</td>
                <td className="px-4 py-2 text-muted-foreground">Hover states, color transitions</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">duration-200</td>
                <td className="px-4 py-2 font-mono text-xs">200ms</td>
                <td className="px-4 py-2 text-muted-foreground">Dropdowns, tooltips opening</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">duration-300</td>
                <td className="px-4 py-2 font-mono text-xs">300ms</td>
                <td className="px-4 py-2 text-muted-foreground">Panels, sheets, dialogs</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">duration-500</td>
                <td className="px-4 py-2 font-mono text-xs">500ms</td>
                <td className="px-4 py-2 text-muted-foreground">Page transitions (use sparingly)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Easing</h2>
        <p className="text-sm text-muted-foreground">
          Always use <code className="rounded bg-muted px-1 py-0.5 text-xs">ease-out</code> for
          elements entering the screen. Use{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">ease-in</code> for elements
          leaving.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Accessibility</h2>
        <p className="text-sm text-muted-foreground">
          All animations must respect{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">prefers-reduced-motion</code>.
          Add the <code className="rounded bg-muted px-1 py-0.5 text-xs">motion-safe:</code>{' '}
          prefix for any non-essential animation.
        </p>
        <CodeBlock language="css">{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}</CodeBlock>
      </section>
    </div>
  )
}
