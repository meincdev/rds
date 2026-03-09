"use client";

import * as React from "react";

export interface RdsVideoPlayerProps {
  /** Video source URL */
  src: string;
  /** Video poster image */
  poster?: string;
  /** Aspect ratio (default 16:9) */
  aspectRatio?: "16:9" | "4:3" | "1:1" | "9:16";
  /** Enable controls */
  controls?: boolean;
}

/**
 * RDS Video Player Component (stub)
 *
 * TODO: This is a placeholder. The real implementation will be moved from
 * the main RDS package during the migration phase.
 */
export function RdsVideoPlayer({
  src,
  poster,
  aspectRatio = "16:9",
  controls = true,
}: RdsVideoPlayerProps) {
  return (
    <div className="relative rounded-lg overflow-hidden bg-black">
      <div
        className="w-full"
        style={{
          paddingBottom:
            aspectRatio === "16:9"
              ? "56.25%"
              : aspectRatio === "4:3"
              ? "75%"
              : aspectRatio === "1:1"
              ? "100%"
              : "177.78%",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
          <div className="text-center">
            <div className="text-lg mb-2">▶</div>
            <div className="text-xs opacity-70 max-w-[200px] truncate">{src}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
