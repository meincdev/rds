"use client";

import * as React from "react";

export interface RdsAiChatProps {
  /** Chat title */
  title?: string;
  /** Array of messages */
  messages?: RdsAiChatMessage[];
  /** Whether AI is currently generating */
  isGenerating?: boolean;
  /** Callback when user sends a message */
  onSend?: (message: string) => void;
  /** Placeholder text for input */
  placeholder?: string;
}

export interface RdsAiChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: Date;
}

/**
 * RDS AI Chat Component (stub)
 *
 * TODO: This is a placeholder. Will be integrated with Vercel AI SDK
 * during the implementation phase.
 */
export function RdsAiChat({
  title = "AI Assistant",
  messages = [],
  isGenerating = false,
  onSend,
  placeholder = "Ask me anything...",
}: RdsAiChatProps) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && onSend) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b bg-muted/50">
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isGenerating && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg px-3 py-2 text-sm">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
        {messages.length === 0 && !isGenerating && (
          <div className="text-center text-muted-foreground text-sm py-8">
            Start a conversation
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            disabled={isGenerating}
            className="flex-1 rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            disabled={!input.trim() || isGenerating}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
