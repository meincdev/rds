/**
 * =============================================================================
 * rds Social Core - Type Definitions
 * =============================================================================
 *
 * Generic, data-agnostic types for social interactions in the Reba Design System.
 *
 * Usage:
 * ```tsx
 * import type { RdsComment, RdsCommentThread } from "@meinc/rds-social-core";
 * ```
 */

// =============================================================================
// Core Comment Type
// =============================================================================

/**
 * A generic comment in the rds design system.
 */
export interface RdsComment {
  /** Unique identifier for this comment */
  id: string;

  /** The comment text content */
  text: string;

  /** Display name of the comment author */
  authorName?: string;

  /** Avatar/profile image URL of the author */
  avatarUrl?: string;

  /**
   * When the comment was created.
   * Accepts Date object or ISO string for flexibility with different backends.
   */
  createdAt?: Date | string;

  /**
   * Optional metadata for extensibility.
   * Use this for app-specific data like:
   * - `time`: timestamp for media comments
   * - `parentId`: for threaded replies
   * - `reactions`: emoji reactions
   * - `edited`: whether the comment was edited
   */
  meta?: Record<string, unknown>;
}

// =============================================================================
// Comment Thread Type
// =============================================================================

/**
 * A thread of comments, typically anchored to a specific context.
 */
export interface RdsCommentThread {
  /** Unique identifier for this thread */
  id: string;

  /** Array of comments in this thread */
  comments: RdsComment[];

  /**
   * Optional metadata for the thread itself.
   */
  meta?: Record<string, unknown>;
}

// =============================================================================
// Component Props Types
// =============================================================================

/**
 * Props for the CommentList component
 */
export interface CommentListProps {
  /** Array of comments to display */
  comments: RdsComment[];

  /** Callback when a comment is clicked/selected */
  onSelectComment?: (id: string) => void;

  /** Additional CSS classes */
  className?: string;

  /** Whether the list is in a loading state */
  loading?: boolean;

  /** Empty state message when no comments */
  emptyMessage?: string;
}

/**
 * Props for the CommentForm component
 */
export interface CommentFormProps {
  /** Callback when a comment is submitted */
  onSubmit: (text: string) => void | Promise<void>;

  /** Placeholder text for the input */
  placeholder?: string;

  /** Label for the submit button */
  submitLabel?: string;

  /** Additional CSS classes */
  className?: string;

  /** Whether the form is disabled */
  disabled?: boolean;
}
