"use client";

import * as React from "react";

export interface RdsCommentProps {
  /** Comment author name */
  author: string;
  /** Author avatar URL */
  avatarUrl?: string;
  /** Comment body text */
  body: string;
  /** Timestamp */
  timestamp?: string | Date;
  /** Whether this is the current user's comment */
  isOwn?: boolean;
}

/**
 * RDS Comment Component (stub)
 *
 * TODO: This is a placeholder. The real implementation will be moved from
 * the main RDS package during the migration phase.
 */
export function RdsComment({
  author,
  avatarUrl,
  body,
  timestamp,
  isOwn = false,
}: RdsCommentProps) {
  const formattedTime =
    timestamp instanceof Date
      ? timestamp.toLocaleDateString()
      : timestamp ?? "";

  return (
    <div className={`flex gap-3 ${isOwn ? "flex-row-reverse" : ""}`}>
      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">
        {avatarUrl ? (
          <img src={avatarUrl} alt={author} className="w-full h-full rounded-full object-cover" />
        ) : (
          author.charAt(0).toUpperCase()
        )}
      </div>
      <div className={`flex-1 ${isOwn ? "text-right" : ""}`}>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-medium text-sm">{author}</span>
          {formattedTime && (
            <span className="text-xs text-muted-foreground">{formattedTime}</span>
          )}
        </div>
        <div className="text-sm bg-muted rounded-lg px-3 py-2 inline-block max-w-[80%]">
          {body}
        </div>
      </div>
    </div>
  );
}
