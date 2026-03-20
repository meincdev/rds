import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'From zero to a working component in under 2 minutes.',
}

export default function GettingStartedPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Get Started with RDS</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          From zero to a working component in under 2 minutes.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Step 1 — Create a Next.js project</h2>
        <CodeBlock language="bash">{`npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Step 2 — Initialize shadcn/ui</h2>
        <CodeBlock language="bash">{`npx shadcn@latest init`}</CodeBlock>
        <p className="text-sm text-muted-foreground">
          When prompted: choose Default style, select your base color (Neutral
          recommended for RDS), confirm globals.css path.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Step 3 — Add the RDS font stack</h2>
        <p className="text-sm text-muted-foreground">
          In <code className="rounded bg-muted px-1 py-0.5 text-xs">app/layout.tsx</code>, add Google Fonts:
        </p>
        <CodeBlock>{`import { Instrument_Serif, DM_Mono, DM_Sans } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"], weight: "400", variable: "--font-display",
})
const dmMono = DM_Mono({
  subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono",
})
const dmSans = DM_Sans({
  subsets: ["latin"], variable: "--font-sans",
})`}</CodeBlock>
        <p className="text-sm text-muted-foreground">Apply to body:</p>
        <CodeBlock>{`<body className={\`\${instrumentSerif.variable} \${dmMono.variable} \${dmSans.variable} font-sans\`}>`}</CodeBlock>
        <p className="text-sm text-muted-foreground">
          In <code className="rounded bg-muted px-1 py-0.5 text-xs">globals.css</code>, add:
        </p>
        <CodeBlock language="css">{`:root {
  --font-display: var(--font-display);
  --font-mono: var(--font-mono);
  --font-sans: var(--font-sans);
}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Step 4 — Add your first component</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add button`}</CodeBlock>
        <CodeBlock>{`import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Hello RDS</Button>
}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Step 5 — Run it</h2>
        <CodeBlock language="bash">{`npm run dev`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What&rsquo;s Next</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/elements" className="text-primary underline underline-offset-4">
              &rarr; Browse all 63+ components
            </a>
          </li>
          <li>
            <a href="/principles" className="text-primary underline underline-offset-4">
              &rarr; Read the Principles
            </a>
          </li>
          <li>
            <a href="#" className="text-primary underline underline-offset-4">
              &rarr; Download the AI context file (CURSOR.md) for Cursor/Claude
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Requirements</h2>
        <div className="rounded-lg border bg-muted/50 p-4">
          <ul className="space-y-1 text-sm">
            <li>Next.js 14+ (App Router)</li>
            <li>React 18+</li>
            <li>Tailwind CSS 3+</li>
            <li>Node.js 18+</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
