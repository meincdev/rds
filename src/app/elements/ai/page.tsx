import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'AI Components',
  description: 'Chat interfaces and AI assistant building blocks.',
}

export default function AIPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Components</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Chat interfaces and AI assistant building blocks.
        </p>
      </div>

      {/* ChatMessage */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ChatMessage</h2>
        <CodeBlock>{`import { ChatMessage } from "@/components/ai/chat-message"

<ChatMessage role="user" content="What key is this track in?" />
<ChatMessage
  role="assistant"
  content="Based on the chord progression, this track is in A minor."
/>`}</CodeBlock>
        <PropsTable
          rows={[
            { prop: 'role', type: '"user" | "assistant" | "system"', default: '\u2014', description: 'Message sender role' },
            { prop: 'content', type: 'string', default: '\u2014', description: 'Message text content' },
            { prop: 'timestamp', type: 'Date', default: '\u2014', description: 'Message timestamp' },
            { prop: 'isLoading', type: 'boolean', default: 'false', description: 'Shows typing indicator' },
          ]}
        />
      </section>

      {/* ChatThread */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">ChatThread</h2>
        <CodeBlock>{`import { ChatThread } from "@/components/ai/chat-thread"

<ChatThread messages={messages} isLoading={false} />`}</CodeBlock>
        <PropsTable
          rows={[
            { prop: 'messages', type: 'ChatMessage[]', default: '\u2014', description: 'Array of chat messages' },
            { prop: 'isLoading', type: 'boolean', default: 'false', description: 'Shows loading state at end of thread' },
          ]}
        />
      </section>

      {/* PromptInput */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">PromptInput</h2>
        <CodeBlock>{`import { PromptInput } from "@/components/ai/prompt-input"

<PromptInput
  onSubmit={(value) => handleSend(value)}
  placeholder="Ask Tansen anything..."
/>`}</CodeBlock>
        <PropsTable
          rows={[
            { prop: 'onSubmit', type: '(value: string) => void', default: '\u2014', description: 'Called on submit' },
            { prop: 'placeholder', type: 'string', default: '\u2014', description: 'Placeholder text' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
            { prop: 'maxLength', type: 'number', default: '\u2014', description: 'Maximum character count' },
          ]}
        />
      </section>

      {/* AIAssistantPanel */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">AIAssistantPanel</h2>
        <CodeBlock>{`import { AIAssistantPanel } from "@/components/ai/ai-assistant-panel"

<AIAssistantPanel
  title="Tansen AI"
  onSend={handleSend}
  messages={messages}
  isLoading={false}
/>`}</CodeBlock>
      </section>
    </div>
  )
}
