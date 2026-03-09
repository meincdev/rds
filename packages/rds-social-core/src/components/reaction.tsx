"use client";

import * as React from "react";

export interface RdsReactionProps {
  /** Emoji or icon for the reaction */
  emoji: string;
  /** Count of this reaction */
  count: number;
  /** Whether current user has reacted */
  isActive?: boolean;
  /** Callback when clicked */
  onClick?: () => void;
}

/**
 * RDS Reaction Component (stub)
 *
 * TODO: This is a placeholder. The real implementation will be moved from
 * the main RDS package during the migration phase.
 */
export function RdsReaction({
  emoji,
  count,
  isActive = false,
  onClick,
}: RdsReactionProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm border transition-colors ${
        isActive
          ? "bg-primary/10 border-primary text-primary"
          : "bg-muted border-transparent hover:border-border"
      }`}
    >
      <span>{emoji}</span>
      <span className="tabular-nums">{count}</span>
    </button>
  );
}

export interface RdsReactionBarProps {
  /** Array of reactions */
  reactions: RdsReactionProps[];
  /** Whether to show add reaction button */
  showAddButton?: boolean;
  /** Callback when add button is clicked */
  onAddReaction?: () => void;
}

/**
 * RDS Reaction Bar Component (stub)
 */
export function RdsReactionBar({
  reactions,
  showAddButton = true,
  onAddReaction,
}: RdsReactionBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {reactions.map((reaction, index) => (
        <RdsReaction key={index} {...reaction} />
      ))}
      {showAddButton && (
        <button
          onClick={onAddReaction}
          className="w-7 h-7 rounded-full border border-dashed border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          +
        </button>
      )}
    </div>
  );
}
