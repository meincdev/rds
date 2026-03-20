import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Typography',
  description: 'Three-font system for clear hierarchy.',
}

export default function TypographyPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Three-font system for clear hierarchy.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Font Families</h2>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Role</th>
                <th className="px-4 py-2 text-left font-medium">Font</th>
                <th className="px-4 py-2 text-left font-medium">CSS Variable</th>
                <th className="px-4 py-2 text-left font-medium">Tailwind Class</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Display</td>
                <td className="px-4 py-2">Instrument Serif</td>
                <td className="px-4 py-2 font-mono text-xs">--font-display</td>
                <td className="px-4 py-2 font-mono text-xs">font-display</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Mono</td>
                <td className="px-4 py-2">DM Mono</td>
                <td className="px-4 py-2 font-mono text-xs">--font-mono</td>
                <td className="px-4 py-2 font-mono text-xs">font-mono</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Sans (body)</td>
                <td className="px-4 py-2">DM Sans</td>
                <td className="px-4 py-2 font-mono text-xs">--font-sans</td>
                <td className="px-4 py-2 font-mono text-xs">font-sans</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Type Scale</h2>
        <div className="space-y-4">
          <div className="flex items-baseline gap-4 border-b pb-2">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">text-4xl</span>
            <span className="text-4xl">The quick brown fox</span>
          </div>
          <div className="flex items-baseline gap-4 border-b pb-2">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">text-3xl</span>
            <span className="text-3xl">The quick brown fox</span>
          </div>
          <div className="flex items-baseline gap-4 border-b pb-2">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">text-2xl</span>
            <span className="text-2xl">The quick brown fox</span>
          </div>
          <div className="flex items-baseline gap-4 border-b pb-2">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">text-xl</span>
            <span className="text-xl">The quick brown fox</span>
          </div>
          <div className="flex items-baseline gap-4 border-b pb-2">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">text-lg</span>
            <span className="text-lg">The quick brown fox</span>
          </div>
          <div className="flex items-baseline gap-4 border-b pb-2">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">text-base</span>
            <span className="text-base">The quick brown fox</span>
          </div>
          <div className="flex items-baseline gap-4 border-b pb-2">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">text-sm</span>
            <span className="text-sm">The quick brown fox</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">text-xs</span>
            <span className="text-xs">The quick brown fox</span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Font Weight</h2>
        <p className="text-sm text-muted-foreground">
          Regular (400), Medium (500), Semibold (600). Avoid Bold (700) except
          for the largest headings.
        </p>
      </section>
    </div>
  )
}
