import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Pagination',
  description: 'Previous/next navigation with page numbers.',
}

export default function PaginationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pagination</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Previous/next navigation with page numbers.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add pagination`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <CodeBlock>{`<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [page, setPage] = React.useState(1)
const totalPages = 10

// Render PaginationLink with isActive={page === n}
// and onClick={() => setPage(n)}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'isActive', type: 'boolean', default: 'false', description: 'On PaginationLink \u2014 highlights the active page' },
            { prop: 'href', type: 'string', default: '\u2014', description: 'On PaginationLink/Previous/Next \u2014 link destination' },
          ]}
        />
      </section>
    </div>
  )
}
