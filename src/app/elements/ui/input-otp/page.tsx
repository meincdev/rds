import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Input OTP',
  description: 'A one-time password input with separate slots.',
}

export default function InputOTPPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Input OTP</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A one-time password input with separate slots.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock language="bash">{`npx shadcn@latest add input-otp
npm install input-otp`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock>{`import {
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <CodeBlock>{`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Pattern Validation</h2>
        <CodeBlock>{`<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
  ...
</InputOTP>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Controlled</h2>
        <CodeBlock>{`const [value, setValue] = React.useState("")

<InputOTP maxLength={6} value={value} onChange={setValue}>
  ...
</InputOTP>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          rows={[
            { prop: 'maxLength', type: 'number', default: '\u2014', description: 'Number of OTP slots (required)' },
            { prop: 'value', type: 'string', default: '\u2014', description: 'Controlled value' },
            { prop: 'onChange', type: '(value: string) => void', default: '\u2014', description: 'Called when value changes' },
            { prop: 'pattern', type: 'RegExp', default: '\u2014', description: 'Regex pattern for allowed characters' },
          ]}
        />
      </section>
    </div>
  )
}
