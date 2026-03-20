import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Alert Dialog',
  description: 'A modal dialog that interrupts the user and expects a response.',
}

export default function AlertDialogPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alert Dialog</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A modal dialog that interrupts the user and expects a response. Use for destructive or irreversible actions.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add alert-dialog`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Confirm delete</h2>
        <CodeBlock>{`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove all your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'open', type: 'boolean', default: '\u2014', description: 'Controlled open state' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', default: '\u2014', description: 'Called when open state changes' },
          ]}
        />
        <p className="text-sm text-muted-foreground">
          <code>AlertDialogAction</code> renders the confirm button (styled as default Button).
          <code>AlertDialogCancel</code> renders the cancel button (styled as outline Button).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Alert vs AlertDialog</h2>
        <p className="text-muted-foreground">
          <strong>Alert</strong> is a static callout (non-interactive, purely visual).
          <strong>AlertDialog</strong> is a blocking modal requiring user action.
        </p>
      </section>
    </div>
  )
}
