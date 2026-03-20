import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Calendar & DatePicker',
  description: 'A date field component built on react-day-picker, plus a DatePicker pattern using Calendar + Popover.',
}

export default function CalendarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A date field component built on react-day-picker, plus a DatePicker pattern using Calendar + Popover.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add calendar
npx shadcn@latest add popover`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic Calendar</h2>
        <CodeBlock>{`export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">DatePicker (Calendar + Popover)</h2>
        <CodeBlock>{`import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Date range picker</h2>
        <CodeBlock>{`import { DateRange } from "react-day-picker"

export function DateRangePicker() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: new Date(2024, 0, 25),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={date?.from}
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      className="rounded-md border"
    />
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'mode', type: '"single" | "multiple" | "range"', default: '"single"', description: 'Selection mode' },
            { prop: 'selected', type: 'Date | Date[] | DateRange', default: '\u2014', description: 'Controlled selected date(s)' },
            { prop: 'onSelect', type: '(date) => void', default: '\u2014', description: 'Called when selection changes' },
            { prop: 'disabled', type: 'Matcher | Matcher[]', default: '\u2014', description: 'Dates to disable (e.g. past dates)' },
            { prop: 'numberOfMonths', type: 'number', default: '1', description: 'Number of months to display' },
            { prop: 'initialFocus', type: 'boolean', default: 'false', description: 'Focus the calendar when mounted (useful in popovers)' },
          ]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Notes</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Calendar is built on <code>react-day-picker</code> \u2014 all DayPicker props are supported</li>
          <li>DatePicker is a composition pattern (Calendar + Popover), not a separate component</li>
          <li>Use <code>date-fns</code> for formatting: <code>format(date, &quot;PPP&quot;)</code></li>
        </ul>
      </section>
    </div>
  )
}
