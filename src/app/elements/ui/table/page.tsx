import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Table',
  description: 'A responsive table component for displaying structured data.',
}

export default function TablePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Table</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A responsive table component for displaying structured data.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add table`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"`}</CodeBlock>
      </section>

      {/* Example 1 — Basic invoices table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic invoices table</h2>
        <CodeBlock>{`const invoices = [
  { invoice: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV-002", status: "Pending", method: "Bank Transfer", amount: "$150.00" },
  { invoice: "INV-003", status: "Unpaid", method: "PayPal", amount: "$350.00" },
  { invoice: "INV-004", status: "Paid", method: "Credit Card", amount: "$450.00" },
]

<div className="rounded-md border">
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((invoice) => (
        <TableRow key={invoice.invoice}>
          <TableCell className="font-medium">{invoice.invoice}</TableCell>
          <TableCell>{invoice.status}</TableCell>
          <TableCell>{invoice.method}</TableCell>
          <TableCell className="text-right">{invoice.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$1,200.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
</div>`}</CodeBlock>
      </section>

      {/* Example 2 — Selectable row */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Selectable row</h2>
        <CodeBlock>{`{/* Add data-state="selected" to TableRow for selected highlight styling */}
<TableRow data-state="selected">
  <TableCell>INV-001</TableCell>
  <TableCell>Paid</TableCell>
  <TableCell>Credit Card</TableCell>
  <TableCell className="text-right">$250.00</TableCell>
</TableRow>`}</CodeBlock>
      </section>

      {/* Props */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <p className="text-muted-foreground">
          All parts extend their native HTML equivalents (<code>table</code>, <code>thead</code>, <code>tbody</code>, <code>tr</code>, <code>th</code>, <code>td</code>) and pass through <code>className</code>.
        </p>
      </section>

      {/* Notes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Notes</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Wrap the Table in a <code>div</code> with <code>rounded-md border</code> for the standard card look</li>
          <li>Table is semantic HTML — not a data-grid library. For sortable/filterable tables, pair with TanStack Table</li>
          <li>For horizontal scroll on mobile: wrap in <code>{'<div className="overflow-x-auto">'}</code></li>
        </ul>
      </section>
    </div>
  )
}
