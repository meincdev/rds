import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Contributing',
  description: 'RDS is open source. Every contribution makes it better.',
}

export default function ContributingPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contributing</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          RDS is open source. Every contribution — big or small — makes it
          better.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Ways to Contribute</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Report a bug</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Open a GitHub issue with steps to reproduce.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Suggest a component</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Open a discussion with your use case.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Improve docs</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fix typos, clarify examples, add missing props.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Submit a PR</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Build a component or fix a bug yourself.
            </p>
          </div>
        </div>
        <p className="text-sm">
          <a
            href="https://github.com/meincdev/rds/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Open a GitHub issue &rarr;
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Development Setup</h2>
        <CodeBlock language="bash">{`# 1. Fork and clone the repo
git clone https://github.com/YOUR_USERNAME/rds.git
cd rds

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev`}</CodeBlock>
        <p className="text-sm text-muted-foreground">
          Open{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">http://localhost:3000</code>{' '}
          to see the docs site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">PR Guidelines</h2>
        <p className="text-sm text-muted-foreground">
          Before opening a PR, make sure your contribution:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          <li>Follows the existing component file structure</li>
          <li>Includes a working usage example</li>
          <li>Has TypeScript types with an exported props interface</li>
          <li>Includes or updates the relevant doc page</li>
          <li>Is added to the sidebar navigation</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Component Submission Checklist</h2>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>Based on shadcn/ui if applicable (or clearly documents why not)</li>
          <li>TypeScript with exported Props interface</li>
          <li>JSDoc comment on each prop</li>
          <li>Doc page at <code className="rounded bg-muted px-1 py-0.5 text-xs">src/app/elements/[category]/[name]/page.tsx</code></li>
          <li>Added to sidebar nav</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Code of Conduct</h2>
        <p className="text-sm text-muted-foreground">
          We follow the Contributor Covenant. Be kind, be constructive, be
          helpful.
        </p>
      </section>

      <div className="border-t pt-6">
        <p className="text-sm text-muted-foreground">
          New to open source? Issues labeled{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">good first issue</code>{' '}
          are a great place to start.{' '}
          <a
            href="https://github.com/meincdev/rds/issues?q=label%3A%22good+first+issue%22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            View open issues &rarr;
          </a>
        </p>
      </div>
    </div>
  )
}
