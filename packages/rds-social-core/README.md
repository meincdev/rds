# @meinc/rds-social-core

Social interaction components for Reba Design System.

## Overview

This package provides social interaction components for music industry applications, including comments, threads, reactions, votes, and chat interfaces.

## Installation

```bash
npm install @meinc/rds-social-core
```

## Dependencies

- `@meinc/rds-tokens` - Design tokens
- `@meinc/rds-ui-core` - Core UI components
- `react` (peer) - React 18+
- `react-dom` (peer) - React DOM 18+

## Usage

```tsx
import {
  RdsComment,
  RdsCommentThread,
  RdsCommentInput,
  RdsReaction,
  RdsReactionBar,
} from "@meinc/rds-social-core";

function MySocialComponent() {
  const comments = [
    { author: "John", body: "Great track!", timestamp: new Date() },
    { author: "Jane", body: "Love the beat", timestamp: new Date() },
  ];

  const reactions = [
    { emoji: "🔥", count: 12, isActive: true },
    { emoji: "❤️", count: 8, isActive: false },
  ];

  return (
    <div>
      <RdsCommentThread comments={comments} />
      <RdsCommentInput onSubmit={(text) => console.log(text)} />
      <RdsReactionBar reactions={reactions} />
    </div>
  );
}
```

## Components

### Comments
- `RdsComment` - Single comment with avatar
- `RdsCommentThread` - List of comments
- `RdsCommentInput` - Comment input form

### Reactions
- `RdsReaction` - Single reaction button
- `RdsReactionBar` - Row of reactions with add button

### Coming Soon
- `RdsVote` - Upvote/downvote
- `RdsChatMessage` - Chat-style message
- `RdsChatThread` - Chat thread container

## License

MIT
