"use client";

import * as React from "react";

export interface RdsAiMessageProps {
  /** Message role */
  role: "user" | "assistant" | "system";
  /** Message content (can include markdown) */
  content: string;
  /** Optional avatar URL */
  avatarUrl?: string;
  /** Optional timestamp */
  timestamp?: Date;
  /** Whether message is being streamed */
  isStreaming?: boolean;
  /** Optional actions */
  actions?: React.ReactNode;
}

/**
 * RDS AI Message Component (stub)
 *
 * TODO: This is a placeholder. Will support markdown rendering,
 * code blocks, and streaming content.
 */
export function RdsAiMessage({
  role,
  content,
  avatarUrl,
  timestamp,
  isStreaming = false,
  actions,
}: RdsAiMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        }`}
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt={role} className="w-full h-full rounded-full object-cover" />
        ) : isUser ? (
          "U"
        ) : (
          "AI"
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 space-y-1 ${isUser ? "text-right" : ""}`}>
        <div className="flex items-baseline gap-2">
          <span className="font-medium text-sm capitalize">{role}</span>
          {timestamp && (
            <span className="text-xs text-muted-foreground">
              {timestamp.toLocaleTimeString()}
            </span>
          )}
        </div>
        <div
          className={`text-sm rounded-lg px-3 py-2 inline-block max-w-[90%] ${
            isUser ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
        >
          {content}
          {isStreaming && <span className="animate-pulse ml-1">▌</span>}
        </div>
        {actions && <div className="mt-2">{actions}</div>}
      </div>
    </div>
  );
}
