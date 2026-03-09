# Reba Design System (RDS)

A **music-native design system** for building beautiful, accessible applications in the music industry. RDS provides a comprehensive set of React components, design tokens, and utilities specifically designed for music apps, audio players, AI assistants, and social collaboration features.

Built on top of [Radix UI](https://radix-ui.com/) primitives and [Tailwind CSS](https://tailwindcss.com/), RDS offers both low-level primitives and higher-level, music-specific components that help designers and developers—including vibe coders—create cohesive music experiences faster.

Whether you're building a DAW interface, a music streaming app, an AI-powered composition tool, or a collaborative music platform, RDS gives you the building blocks you need.

## Packages

| Package | Description | NPM |
|---------|-------------|-----|
| [`@meinc/rds-tokens`](./packages/rds-tokens) | Design tokens (colors, spacing, typography, shadows) | [![npm](https://img.shields.io/npm/v/@meinc/rds-tokens)](https://www.npmjs.com/package/@meinc/rds-tokens) |
| [`@meinc/rds-ui-core`](./packages/rds-ui-core) | Core UI primitives + RDS-wrapped components (46 primitives, 27 wrappers) | [![npm](https://img.shields.io/npm/v/@meinc/rds-ui-core)](https://www.npmjs.com/package/@meinc/rds-ui-core) |
| [`@meinc/rds-media-core`](./packages/rds-media-core) | Media players and transport controls (audio, video, MIDI) | [![npm](https://img.shields.io/npm/v/@meinc/rds-media-core)](https://www.npmjs.com/package/@meinc/rds-media-core) |
| [`@meinc/rds-ai-elements`](./packages/rds-ai-elements) | AI chat and assistant UI components | [![npm](https://img.shields.io/npm/v/@meinc/rds-ai-elements)](https://www.npmjs.com/package/@meinc/rds-ai-elements) |
| [`@meinc/rds-social-core`](./packages/rds-social-core) | Social interaction components (comments, reactions, threads) | [![npm](https://img.shields.io/npm/v/@meinc/rds-social-core)](https://www.npmjs.com/package/@meinc/rds-social-core) |

## Quick Start

### Installation

```bash
# Install core UI components
npm install @meinc/rds-ui-core

# Install media components for audio/video players
npm install @meinc/rds-media-core

# Install AI components for chat interfaces
npm install @meinc/rds-ai-elements

# Install social components for comments/reactions
npm install @meinc/rds-social-core

# Install tokens only (for custom implementations)
npm install @meinc/rds-tokens
```

### Basic Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@meinc/rds-ui-core";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to RDS</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

### Music-Native Components

```tsx
import { RdsButton, RdsSlider } from "@meinc/rds-ui-core";
import { AudioPlayer, RdsTransportButton } from "@meinc/rds-media-core";

export function MusicPlayer() {
  return (
    <div>
      {/* Transport controls with music-specific variants */}
      <RdsButton variant="play" size="transport">Play</RdsButton>
      <RdsSlider variant="timeline" />

      {/* Full-featured audio player */}
      <AudioPlayer
        src="/audio/track.mp3"
        title="My Track"
        artist="Artist Name"
      />
    </div>
  );
}
```

### AI Chat Interface

```tsx
import { RdsAiChat } from "@meinc/rds-ai-elements";

export function AiAssistant() {
  return (
    <RdsAiChat
      title="Music Assistant"
      onSend={(message) => console.log("User:", message)}
      placeholder="Ask about music production..."
    />
  );
}
```

## Requirements

- React 18+
- Tailwind CSS (for styling)
- Node.js 18+

## Documentation

- [Getting Started Guide](./docs/getting-started.md)
- [Component API Reference](./docs/api-reference.md)
- [Design Tokens](./packages/rds-tokens/README.md)

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

Built with love for the music community by [ME Inc.](https://meinc.com)
