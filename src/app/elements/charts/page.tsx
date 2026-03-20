import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Charts',
  description: 'Data visualization components built on Recharts.',
}

export default function ChartsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Charts</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Data visualization components built on Recharts.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npm install recharts`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Bar Chart</h2>
        <CodeBlock>{`import {
  Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip,
} from "recharts"

const data = [
  { name: "Jan", streams: 4000 },
  { name: "Feb", streams: 3000 },
  { name: "Mar", streams: 5000 },
]

<ResponsiveContainer width="100%" height={350}>
  <BarChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar
      dataKey="streams"
      fill="hsl(var(--foreground))"
      radius={[4, 4, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Line Chart</h2>
        <CodeBlock>{`import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

<ResponsiveContainer width="100%" height={350}>
  <LineChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line
      type="monotone"
      dataKey="streams"
      stroke="hsl(var(--foreground))"
      strokeWidth={2}
    />
  </LineChart>
</ResponsiveContainer>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Area Chart</h2>
        <CodeBlock>{`import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

<ResponsiveContainer width="100%" height={350}>
  <AreaChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="streams"
      fill="hsl(var(--muted))"
      stroke="hsl(var(--foreground))"
    />
  </AreaChart>
</ResponsiveContainer>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Pie Chart</h2>
        <CodeBlock>{`import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts"

const platformData = [
  { name: "Spotify", value: 60 },
  { name: "Apple Music", value: 25 },
  { name: "Other", value: 15 },
]

const COLORS = [
  "hsl(var(--foreground))",
  "hsl(var(--muted-foreground))",
  "hsl(var(--primary))",
]

<ResponsiveContainer width="100%" height={350}>
  <PieChart>
    <Tooltip />
    <Pie data={platformData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120}>
      {platformData.map((_, index) => (
        <Cell key={index} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
</ResponsiveContainer>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Color Guidelines</h2>
        <p className="text-sm text-muted-foreground">
          Always use CSS variables for chart colors — never hardcode hex values.
          Use{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">hsl(var(--foreground))</code>,{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">hsl(var(--muted-foreground))</code>,{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">hsl(var(--primary))</code>{' '}
          etc. so charts respect dark mode automatically.
        </p>
      </section>
    </div>
  )
}
