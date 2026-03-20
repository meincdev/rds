import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Sonner (Toast)',
  description: 'Lightweight toast notifications powered by Sonner.',
}

export default function SonnerPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sonner (Toast)</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Lightweight toast notifications powered by Sonner.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add sonner`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Setup</h2>
        <p className="text-sm text-muted-foreground">
          Add the <code className="rounded bg-muted px-1 py-0.5 text-xs">{`<Toaster />`}</code> component
          once in your root layout.
        </p>
        <CodeBlock>{`// app/layout.tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { toast } from "sonner"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Variants</h2>
        <CodeBlock>{`<Button onClick={() => toast("Event has been created")}>Show Toast</Button>
<Button onClick={() => toast.success("Profile updated")}>Success</Button>
<Button onClick={() => toast.error("Something went wrong")}>Error</Button>
<Button onClick={() => toast.warning("Check your input")}>Warning</Button>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Promise</h2>
        <CodeBlock>{`<Button
  onClick={() =>
    toast.promise(saveSettings(), {
      loading: "Saving...",
      success: "Saved!",
      error: "Error saving",
    })
  }
>
  Promise
</Button>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With Description</h2>
        <CodeBlock>{`toast("Event created", {
  description: "Monday, January 3rd at 6:00pm",
})`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">With Action</h2>
        <CodeBlock>{`toast("File deleted", {
  action: {
    label: "Undo",
    onClick: () => restoreFile(),
  },
})`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Note</h2>
        <p className="text-sm text-muted-foreground">
          Sonner replaces the legacy Toast component. Use Sonner for all new work.
        </p>
      </section>
    </div>
  )
}
