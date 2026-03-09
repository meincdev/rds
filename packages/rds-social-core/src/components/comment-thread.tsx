"use client";

import * as React from "react";
import { RdsComment, type RdsCommentProps } from "./comment";

export interface RdsCommentThreadProps {
  /** Array of comments */
  comments: RdsCommentProps[];
  /** Current user ID for highlighting own comments */
  currentUserId?: string;
}

/**
 * RDS Comment Thread Component (stub)
 *
 * TODO: This is a placeholder. The real implementation will be moved from
 * the main RDS package during the migration phase.
 */
export function RdsCommentThread({ comments }: RdsCommentThreadProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <RdsComment key={index} {...comment} />
      ))}
      {comments.length === 0 && (
        <div className="text-center text-sm text-muted-foreground py-8">
          No comments yet
        </div>
      )}
    </div>
  );
}

export interface RdsCommentInputProps {
  /** Placeholder text */
  placeholder?: string;
  /** Callback when comment is submitted */
  onSubmit?: (text: string) => void;
  /** Whether submission is in progress */
  isSubmitting?: boolean;
}

/**
 * RDS Comment Input Component (stub)
 */
export function RdsCommentInput({
  placeholder = "Write a comment...",
  onSubmit,
  isSubmitting = false,
}: RdsCommentInputProps) {
  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && onSubmit) {
      onSubmit(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        disabled={isSubmitting}
        className="flex-1 rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <button
        type="submit"
        disabled={!text.trim() || isSubmitting}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50"
      >
        {isSubmitting ? "..." : "Send"}
      </button>
    </form>
  );
}
