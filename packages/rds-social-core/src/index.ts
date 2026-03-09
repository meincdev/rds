/**
 * @meinc/rds-social-core
 *
 * Social interaction components for Reba Design System.
 * Provides comments, chat UI, reactions, votes, and thread components.
 */

// =============================================================================
// Types
// =============================================================================

export type {
  RdsComment,
  RdsCommentThread,
  CommentListProps,
  CommentFormProps,
} from "./types";

// =============================================================================
// Social Components
// =============================================================================

export * from "./components/comment";
export * from "./components/comment-thread";
export * from "./components/reaction";
