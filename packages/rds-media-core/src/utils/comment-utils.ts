/**
 * =============================================================================
 * rds Media Comment Utilities
 * =============================================================================
 *
 * Helper functions for mapping between time-based MediaComment objects
 * (used by media players like AudioPlayer, VideoEmbed, MidiPlayer) and
 * generic RdsComment objects (used by standalone comment display components).
 *
 * This enables media components to easily display their comments using
 * the generic CommentList component while maintaining their time-based
 * MediaComment data structures internally.
 *
 * Usage:
 * ```tsx
 * import { mediaCommentsToRdsComments } from "@/components/rds/media";
 *
 * // Convert media comments for display in CommentList
 * const RdsComments = mediaCommentsToRdsComments(mediaComments);
 *
 * <CommentList comments={RdsComments} />
 * ```
 */

import type { MediaComment } from "../core/types";
import type { RdsComment } from "@meinc/rds-social-core";

// =============================================================================
// Conversion Functions
// =============================================================================

/**
 * Convert a single MediaComment to an RdsComment.
 *
 * Maps the time-based MediaComment structure to the generic RdsComment
 * structure used by rds display components. The `time` field is preserved
 * in the `meta` object for reference.
 *
 * @param comment - The MediaComment to convert
 * @returns An RdsComment suitable for use with CommentList
 *
 * @example
 * ```tsx
 * const mediaComment: MediaComment = {
 *   id: "1",
 *   text: "Great part!",
 *   time: 45.5,
 *   authorName: "Alice",
 *   createdAt: "2024-01-15T10:30:00Z",
 * };
 *
 * const RdsComment = mediaCommentToRdsComment(mediaComment);
 * // { id: "1", text: "Great part!", authorName: "Alice", createdAt: "2024-01-15T10:30:00Z", meta: { time: 45.5 } }
 * ```
 */
export function mediaCommentToRdsComment(comment: MediaComment): RdsComment {
  return {
    id: comment.id,
    text: comment.text,
    authorName: comment.authorName,
    avatarUrl: comment.avatarUrl,
    createdAt: comment.createdAt,
    meta: {
      // Preserve the time for reference (e.g., for seeking on click)
      time: comment.time,
      // Include source if available
      source: comment.source,
      // Merge any additional metadata
      ...comment.metadata,
    },
  };
}

/**
 * Convert an array of MediaComments to RdsComments.
 *
 * Convenience wrapper for batch conversion. Handles undefined/null
 * input gracefully by returning an empty array.
 *
 * @param comments - Array of MediaComments to convert (optional)
 * @returns Array of RdsComments suitable for use with CommentList
 *
 * @example
 * ```tsx
 * // In a media player component:
 * const { comments } = useMediaComments(mediaId);
 * const RdsComments = mediaCommentsToRdsComments(comments);
 *
 * <CommentList
 *   comments={RdsComments}
 *   onSelectComment={(id) => {
 *     // Find original comment and seek to its time
 *     const comment = comments.find(c => c.id === id);
 *     if (comment?.time != null) controls.seek(comment.time);
 *   }}
 * />
 * ```
 */
export function mediaCommentsToRdsComments(
  comments: MediaComment[] = []
): RdsComment[] {
  return comments.map(mediaCommentToRdsComment);
}
