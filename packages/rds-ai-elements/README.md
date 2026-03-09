# @meinc/rds-ai-elements

AI assistant UI components for Reba Design System.

## Overview

This package provides AI-powered UI components inspired by Vercel AI SDK and AI Elements patterns. Designed for building conversational interfaces, chatbots, and AI-assisted workflows in music industry applications.

## Installation

```bash
npm install @meinc/rds-ai-elements
```

## Dependencies

- `@meinc/rds-tokens` - Design tokens
- `@meinc/rds-ui-core` - Core UI components
- `@meinc/rds-social-core` - Social components (for chat-like UIs)
- `react` (peer) - React 18+
- `react-dom` (peer) - React DOM 18+

## Usage

```tsx
import { RdsAiChat, RdsAiMessage, RdsAiPrompt } from "@meinc/rds-ai-elements";

function MyAiAssistant() {
  const [messages, setMessages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSend = async (prompt: string) => {
    setIsGenerating(true);
    // Call your AI API here
    setIsGenerating(false);
  };

  return (
    <RdsAiChat
      title="Music Assistant"
      messages={messages}
      isGenerating={isGenerating}
      onSend={handleSend}
    />
  );
}
```

## Components

### Chat
- `RdsAiChat` - Full chat interface with messages and input
- `RdsAiMessage` - Single AI/user message with avatar
- `RdsAiPrompt` - Prompt input with suggestions

### Coming Soon
- `RdsAiCodeBlock` - Syntax-highlighted code blocks
- `RdsAiMarkdown` - Markdown renderer
- `RdsAiToolCall` - Tool/function call display
- `RdsAiStreamingText` - Streaming text animation

## Integration

Designed to work with:
- [Vercel AI SDK](https://sdk.vercel.ai/)
- [OpenAI API](https://openai.com/api/)
- [Anthropic Claude](https://anthropic.com/)

## License

MIT
