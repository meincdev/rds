import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shadows & Radius',
  description: 'Border radius and shadow tokens.',
}

export default function ShadowsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Shadows &amp; Radius</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Border radius and shadow tokens for consistent surfaces.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Border Radius</h2>
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
                <td className="px-4 py-2 font-mono text-xs">rounded-sm</td>
                <td className="px-4 py-2 font-mono text-xs">2px</td>
                <td className="px-4 py-2 text-muted-foreground">Small elements, badges</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">rounded-md</td>
                <td className="px-4 py-2 font-mono text-xs">6px</td>
                <td className="px-4 py-2 text-muted-foreground">Inputs, buttons</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">rounded-lg</td>
                <td className="px-4 py-2 font-mono text-xs">8px</td>
                <td className="px-4 py-2 text-muted-foreground">Cards, panels</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">rounded-xl</td>
                <td className="px-4 py-2 font-mono text-xs">12px</td>
                <td className="px-4 py-2 text-muted-foreground">Dialogs, large surfaces</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">rounded-full</td>
                <td className="px-4 py-2 font-mono text-xs">9999px</td>
                <td className="px-4 py-2 text-muted-foreground">Avatars, pills</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-end gap-4 pt-2">
          <div className="flex flex-col items-center gap-1">
            <div className="h-12 w-12 rounded-sm border bg-muted" />
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-12 w-12 rounded-md border bg-muted" />
            <span className="text-xs text-muted-foreground">md</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-12 w-12 rounded-lg border bg-muted" />
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-12 w-12 rounded-xl border bg-muted" />
            <span className="text-xs text-muted-foreground">xl</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-12 w-12 rounded-full border bg-muted" />
            <span className="text-xs text-muted-foreground">full</span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Shadows</h2>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Class</th>
                <th className="px-4 py-2 text-left font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">shadow-sm</td>
                <td className="px-4 py-2 text-muted-foreground">Cards on hover</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">shadow-md</td>
                <td className="px-4 py-2 text-muted-foreground">Dropdowns, tooltips</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono text-xs">shadow-lg</td>
                <td className="px-4 py-2 text-muted-foreground">Modals, sheets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
