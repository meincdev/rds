"use client";

import * as React from "react";

export interface RdsAudioPlayerProps {
  /** Audio source URL */
  src: string;
  /** Optional title */
  title?: string;
  /** Optional artist name */
  artist?: string;
  /** Callback when playback state changes */
  onPlayStateChange?: (isPlaying: boolean) => void;
}

/**
 * RDS Audio Player Component (stub)
 *
 * TODO: This is a placeholder. The real implementation will be moved from
 * the main RDS package during the migration phase.
 */
export function RdsAudioPlayer({ src, title, artist }: RdsAudioPlayerProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
        <span className="text-xs">▶</span>
      </div>
      <div className="flex-1 min-w-0">
        {title && <div className="font-medium text-sm truncate">{title}</div>}
        {artist && <div className="text-xs text-muted-foreground truncate">{artist}</div>}
        <div className="text-xs text-muted-foreground truncate mt-0.5">{src}</div>
      </div>
    </div>
  );
}
