import React from 'react'

export function CodeBlock({ children, language = 'tsx' }: { children: string; language?: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}

export function PropsTable({
  rows,
}: {
  rows: { prop: string; type: string; default: string; description: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-md border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-4 py-2 text-left font-medium">Prop</th>
            <th className="px-4 py-2 text-left font-medium">Type</th>
            <th className="px-4 py-2 text-left font-medium">Default</th>
            <th className="px-4 py-2 text-left font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.prop} className="border-b">
              <td className="px-4 py-2 font-mono text-xs">{row.prop}</td>
              <td className="px-4 py-2 font-mono text-xs">{row.type}</td>
              <td className="px-4 py-2 font-mono text-xs">{row.default}</td>
              <td className="px-4 py-2">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
