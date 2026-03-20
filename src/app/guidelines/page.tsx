import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guidelines',
  description: 'Practical rules for building with RDS consistently.',
}

export default function GuidelinesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Guidelines</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Practical rules for building with RDS consistently.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Typography</h2>
        <p className="text-sm text-muted-foreground">
          Use the three-font system intentionally:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-xs">font-display</code>{' '}
            (Instrument Serif) — hero headings, large display text only. Don&rsquo;t
            use for body copy.
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-xs">font-mono</code>{' '}
            (DM Mono) — code blocks, labels, tags, timestamps, numeric data.
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-xs">font-sans</code>{' '}
            (DM Sans) — everything else: body, UI text, captions.
          </li>
        </ul>
        <p className="mt-2 text-sm text-muted-foreground">Type scale usage:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">text-4xl</code> / <code className="rounded bg-muted px-1 py-0.5 text-xs">text-5xl</code> — page heroes only</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">text-2xl</code> / <code className="rounded bg-muted px-1 py-0.5 text-xs">text-3xl</code> — section headings</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">text-lg</code> — subheadings, card titles</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">text-sm</code> — secondary text, metadata, captions</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">text-xs</code> — badges, tags, helper text</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Color</h2>
        <p className="text-sm text-muted-foreground">
          RDS uses a single ink color at varying opacities for hierarchy:
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">text-foreground</code> — primary text (full ink)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">text-muted-foreground</code> — secondary text (~60% opacity)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">text-muted-foreground/60</code> — disabled / hint text</li>
        </ul>
        <p className="mt-2 text-sm text-muted-foreground">
          Avoid introducing custom colors. Use semantic tokens:{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">bg-background</code>,{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">bg-muted</code>,{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">bg-card</code>,{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">border</code>,{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">ring</code>.
        </p>
        <p className="text-sm text-muted-foreground">
          For destructive actions:{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">text-destructive</code>,{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">bg-destructive</code>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Spacing</h2>
        <p className="text-sm text-muted-foreground">
          Use the Tailwind spacing scale. Prefer multiples of 4:
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">gap-2</code> (8px) — tight groups (icon + label)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">gap-4</code> (16px) — form fields, card internals</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">gap-6</code> (24px) — section content</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-xs">gap-8</code> (32px) — between major sections</li>
        </ul>
        <p className="mt-2 text-sm text-muted-foreground">
          Max content width: 1140px (<code className="rounded bg-muted px-1 py-0.5 text-xs">max-w-screen-xl</code>),
          padding: <code className="rounded bg-muted px-1 py-0.5 text-xs">px-8</code> (32px).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Component Composition Rules</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            Always use <code className="rounded bg-muted px-1 py-0.5 text-xs">asChild</code> on
            trigger components when passing a custom element (e.g. Next.js Link
            inside Button)
          </li>
          <li>
            Always pair inputs with a Label using matching{' '}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">id</code> /{' '}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">htmlFor</code>
          </li>
          <li>
            Wrap form inputs in{' '}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">FormField &gt; FormItem &gt; FormControl</code>{' '}
            when using React Hook Form
          </li>
          <li>
            Use <code className="rounded bg-muted px-1 py-0.5 text-xs">cn()</code> utility for
            conditional classNames — never string concatenation
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Multimedia Guidelines</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Media controls should always have visible play/pause state — don&rsquo;t rely on icon alone</li>
          <li>Waveform displays need a loading skeleton while audio data is fetched</li>
          <li>Timeline comment markers need <code className="rounded bg-muted px-1 py-0.5 text-xs">aria-label</code> with the timestamp included</li>
          <li>Audio players must respect <code className="rounded bg-muted px-1 py-0.5 text-xs">prefers-reduced-motion</code> for waveform animations</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Do / Don&rsquo;t</h2>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Do</th>
                <th className="px-4 py-2 text-left font-medium">Don&rsquo;t</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Use <code className="rounded bg-muted px-1 py-0.5 text-xs">font-mono</code> for timestamps and numeric data</td>
                <td className="px-4 py-2">Use serif fonts for body copy</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Use semantic color tokens</td>
                <td className="px-4 py-2">Hardcode hex values in className</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Use <code className="rounded bg-muted px-1 py-0.5 text-xs">asChild</code> to forward props to custom elements</td>
                <td className="px-4 py-2">Wrap components in unnecessary divs</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Use Sonner (toast) for notifications</td>
                <td className="px-4 py-2">Use the legacy Toast component</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Show skeleton while content loads</td>
                <td className="px-4 py-2">Show empty space or layout shift</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
