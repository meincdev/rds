import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Form',
  description: 'Building forms with React Hook Form and Zod validation.',
}

export default function FormPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Form</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Building forms with React Hook Form and Zod validation.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add form
npm install react-hook-form zod @hookform/resolvers`}</CodeBlock>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"`}</CodeBlock>
      </section>

      {/* Example 1 — Profile form */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Profile form</h2>
        <CodeBlock>{`const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }).max(50),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username..." {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}</CodeBlock>
      </section>

      {/* Example 2 — Multiple field types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Multiple field types</h2>
        <CodeBlock>{`const formSchema = z.object({
  email: z.string().email(),
  role: z.string({ required_error: "Please select a role." }),
  notifications: z.boolean().default(false),
})

// Fields: Input for email, Select for role, Checkbox for notifications
// Each follows the same FormField > FormItem > FormControl pattern`}</CodeBlock>
      </section>

      {/* Props Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'FormField', type: '\u2014', default: '\u2014', description: 'control (from useForm), name (string), render (({ field }) => ReactNode)' },
            { prop: 'FormItem', type: '\u2014', default: '\u2014', description: 'Wraps label + control + description + message (uses context)' },
            { prop: 'FormControl', type: '\u2014', default: '\u2014', description: 'Wraps the actual input component' },
            { prop: 'FormLabel', type: '\u2014', default: '\u2014', description: 'Renders an accessible label linked to the control' },
            { prop: 'FormDescription', type: '\u2014', default: '\u2014', description: 'Renders helper text below the control' },
            { prop: 'FormMessage', type: '\u2014', default: '\u2014', description: 'Auto-displays the Zod validation error for this field' },
          ]}
        />
      </section>

      {/* Key pattern */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Key pattern</h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li><code>FormField</code> render prop receives <code>field</code> — spread it onto your input: <code>{'<Input {...field} />'}</code></li>
          <li><code>FormMessage</code> reads errors automatically from form state — no extra wiring needed</li>
        </ul>
      </section>
    </div>
  )
}
