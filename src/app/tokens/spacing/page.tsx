import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spacing',
  description: 'Based on a 4px base unit. Use multiples of 4 for consistency.',
}

const spacingScale = [
  { token: '1', px: '4px' },
  { token: '2', px: '8px' },
  { token: '3', px: '12px' },
  { token: '4', px: '16px' },
  { token: '5', px: '20px' },
  { token: '6', px: '24px' },
  { token: '8', px: '32px' },
  { token: '10', px: '40px' },
  { token: '12', px: '48px' },
  { token: '16', px: '64px' },
]

export default function SpacingPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Spacing</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Based on a 4px base unit. Use multiples of 4 for consistency.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Scale</h2>
        <div className="space-y-2">
          {spacingScale.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">{s.token}</span>
              <div
                className="h-4 rounded bg-foreground"
                style={{ width: s.px }}
              />
              <span className="text-xs text-muted-foreground">{s.px}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Layout Tokens</h2>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Token</th>
                <th className="px-4 py-2 text-left font-medium">Value</th>
                <th className="px-4 py-2 text-left font-medium">Tailwind</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Max content width</td>
                <td className="px-4 py-2 font-mono text-xs">1140px</td>
                <td className="px-4 py-2 font-mono text-xs">max-w-screen-xl</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Page padding</td>
                <td className="px-4 py-2 font-mono text-xs">32px</td>
                <td className="px-4 py-2 font-mono text-xs">px-8</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Section gap</td>
                <td className="px-4 py-2 font-mono text-xs">64px</td>
                <td className="px-4 py-2 font-mono text-xs">gap-16</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Card padding</td>
                <td className="px-4 py-2 font-mono text-xs">24px</td>
                <td className="px-4 py-2 font-mono text-xs">p-6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
