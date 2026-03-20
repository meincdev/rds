import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colors',
  description: 'The RDS color system uses semantic tokens for hierarchy and interactive states.',
}

const tokens = [
  { token: 'Background', variable: '--background', usage: 'Page background (warm off-white in light mode)' },
  { token: 'Foreground', variable: '--foreground', usage: 'Primary text, full ink' },
  { token: 'Card', variable: '--card', usage: 'Card/surface background' },
  { token: 'Card Foreground', variable: '--card-foreground', usage: 'Text on cards' },
  { token: 'Muted', variable: '--muted', usage: 'Subtle backgrounds, disabled states' },
  { token: 'Muted Foreground', variable: '--muted-foreground', usage: 'Secondary text, placeholders' },
  { token: 'Border', variable: '--border', usage: 'All borders and dividers' },
  { token: 'Ring', variable: '--ring', usage: 'Focus rings' },
  { token: 'Primary', variable: '--primary', usage: 'Primary interactive elements' },
  { token: 'Destructive', variable: '--destructive', usage: 'Errors, delete actions' },
  { token: 'Accent', variable: '--accent', usage: 'Hover states on ghost elements' },
]

export default function ColorsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Colors</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          The RDS color system uses a single ink color at varying opacities for
          hierarchy, plus semantic tokens for interactive states.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Color Tokens</h2>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Token</th>
                <th className="px-4 py-2 text-left font-medium">CSS Variable</th>
                <th className="px-4 py-2 text-left font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((t) => (
                <tr key={t.variable} className="border-b">
                  <td className="px-4 py-2 font-medium">{t.token}</td>
                  <td className="px-4 py-2 font-mono text-xs">{t.variable}</td>
                  <td className="px-4 py-2 text-muted-foreground">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Swatches</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          <div className="space-y-1.5">
            <div className="h-16 rounded-md border bg-background" />
            <p className="text-xs font-mono">bg-background</p>
          </div>
          <div className="space-y-1.5">
            <div className="h-16 rounded-md border bg-foreground" />
            <p className="text-xs font-mono">bg-foreground</p>
          </div>
          <div className="space-y-1.5">
            <div className="h-16 rounded-md border bg-card" />
            <p className="text-xs font-mono">bg-card</p>
          </div>
          <div className="space-y-1.5">
            <div className="h-16 rounded-md border bg-muted" />
            <p className="text-xs font-mono">bg-muted</p>
          </div>
          <div className="space-y-1.5">
            <div className="h-16 rounded-md border bg-primary" />
            <p className="text-xs font-mono">bg-primary</p>
          </div>
          <div className="space-y-1.5">
            <div className="h-16 rounded-md border bg-destructive" />
            <p className="text-xs font-mono">bg-destructive</p>
          </div>
          <div className="space-y-1.5">
            <div className="h-16 rounded-md border bg-accent" />
            <p className="text-xs font-mono">bg-accent</p>
          </div>
          <div className="space-y-1.5">
            <div className="h-16 rounded-md border" />
            <p className="text-xs font-mono">border</p>
          </div>
        </div>
      </section>
    </div>
  )
}
