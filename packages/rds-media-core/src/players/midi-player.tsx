"use client";

/**
 * =============================================================================
 * rds MidiPlayer - MIDI Playback Component (MediaCore-Compatible Skeleton)
 * =============================================================================
 *
 * A MIDI player component that is structurally aligned with MediaCore.
 * Uses the same MediaState/MediaControls interfaces as AudioPlayer and VideoEmbed,
 * enabling future "drop-in" integration with a MIDI synthesis engine.
 *
 * Usage:
 * ```tsx
 * import { MidiPlayer } from "@/components/rds/media";
 *
 * <MidiPlayer
 *   src="https://example.com/song.mid"
 *   title="My MIDI Song"
 * />
 * ```
 *
 * =============================================================================
 * MediaCore Compatibility
 * =============================================================================
 *
 * This component uses the same state/controls shape as other rds media players:
 *
 * - `state: MediaState` - playing, currentTime, duration, volume, muted, etc.
 * - `controls: MediaControls` - play, pause, seek, setVolume, toggleMute, etc.
 *
 * Currently, these are stubbed (state updates only, no actual audio).
 * When MIDI synthesis is implemented, the controls will call into the engine.
 *
 * =============================================================================
 * MIDI Engine Integration Points (Search: "TODO [MIDI-ENGINE")
 * =============================================================================
 *
 * When implementing MIDI playback, look for these TODO markers:
 *
 * - [MIDI-ENGINE-STATE]: Where state will be driven by Tone.Transport
 * - [MIDI-ENGINE-CONTROLS]: Where controls will call Tone.Transport methods
 * - [MIDI-ENGINE-TIMELINE]: Where progress bar will show playback position
 * - [MIDI-ENGINE-UI]: Where to remove disabled state from buttons
 * - [MIDI-ENGINE-COMMENTS]: Where comment button becomes enabled
 * - [MIDI-ENGINE]: General integration points in control functions
 *
 * =============================================================================
 * Phase 2 Implementation Options
 * =============================================================================
 *
 * Option 1: Create a `useMidiCore` hook
 * -------------------------------------
 * ```ts
 * // Returns the same interface as useMediaElementCore
 * function useMidiCore(options: MidiCoreOptions): {
 *   state: MediaState;
 *   controls: MediaControls;
 *   // No mediaRef - MIDI doesn't have a DOM element
 * }
 * ```
 *
 * Option 2: Use MediaCore as a wrapper
 * ------------------------------------
 * - MediaProvider wraps the component
 * - MIDI engine updates state via dispatch or callbacks
 * - Controls are wired to both MediaCore and Tone.Transport
 *
 * =============================================================================
 * Tone.js Integration Steps (Phase 2)
 * =============================================================================
 *
 * 1. Install: npm install tone @tonejs/midi
 *
 * 2. Parse MIDI file:
 *    ```ts
 *    import { Midi } from "@tonejs/midi";
 *    const midi = await Midi.fromUrl(src);
 *    setState(prev => ({ ...prev, duration: midi.duration }));
 *    ```
 *
 * 3. Create synth and schedule notes:
 *    ```ts
 *    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
 *    midi.tracks.forEach(track => {
 *      track.notes.forEach(note => {
 *        synth.triggerAttackRelease(note.name, note.duration, note.time, note.velocity);
 *      });
 *    });
 *    ```
 *
 * 4. Sync Transport to state:
 *    ```ts
 *    Tone.Transport.scheduleRepeat(() => {
 *      setState(prev => ({ ...prev, currentTime: Tone.Transport.seconds }));
 *    }, 0.1);
 *    ```
 *
 * See: src/components/rds/media/media-core.tsx for the MediaCore implementation
 * =============================================================================
 */

import { useCallback, useState, useMemo } from "react";
import { cn } from "../lib/utils";
import { Music, AlertCircle } from "lucide-react";
import { Badge } from "@meinc/rds-ui-core";
import { RdsTransportButton } from "../controls/rds-transport-button";
import { RdsMediaTransportBar } from "../controls/rds-media-transport-bar";
import { formatTime } from "../controls/rds-timeline-control";
import type {
  MediaCapabilities,
  MediaCommentProps,
  MediaState,
  MediaControls,
} from "../core/types";
import { INITIAL_MEDIA_STATE } from "../core/types";


// =============================================================================
// Types
// =============================================================================

export interface MidiPlayerProps extends MediaCommentProps {
  /**
   * MIDI file URL (.mid, .midi)
   */
  src: string;

  /**
   * Optional title to display
   */
  title?: string;

  /**
   * Player capabilities (for future use)
   * TODO: Wire to MediaProvider capabilities
   */
  capabilities?: MediaCapabilities;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Callback when playback starts
   */
  onPlay?: () => void;

  /**
   * Callback when playback pauses
   */
  onPause?: () => void;

  /**
   * Callback when playback stops
   */
  onStop?: () => void;
}

// =============================================================================
// Component
// =============================================================================

/**
 * MidiPlayer - rds MIDI Player Skeleton
 *
 * Renders a placeholder UI for MIDI playback.
 * Actual synthesis will be implemented in Phase 2.
 */
export function MidiPlayer({
  src,
  title,
  capabilities,
  className,
  comments = [],
  onPlay,
  onPause,
  onStop,
  onAddComment,
  onCommentSelect,
}: MidiPlayerProps) {
  // ==========================================================================
  // MediaState-Compatible State
  // ==========================================================================
  // Using the same MediaState shape as AudioPlayer and VideoEmbed.
  // This enables future "drop-in" integration with a MIDI engine.
  //
  // TODO [MIDI-ENGINE-STATE]: When implementing MIDI playback, this state
  // will be driven by the MIDI engine (Tone.js Transport). Options:
  //   1. Create a `useMidiCore` hook that returns { state, controls, ... }
  //      matching the same interface as useMediaElementCore
  //   2. Use MediaCore as a wrapper, with MIDI engine feeding state updates
  //
  // For now, state updates are stubbed but the shape is correct.

  const [state, setState] = useState<MediaState>({
    ...INITIAL_MEDIA_STATE,
    // MIDI-specific initial state
    loading: false, // No loading until we have a real MIDI engine
  });

  // Convenience destructuring
  const { playing, currentTime, duration, volume, muted, playbackRate, loading } = state;
  const durationValue = duration ?? 0;

  // ==========================================================================
  // MediaControls-Compatible Controls
  // ==========================================================================
  // These controls match the MediaControls interface exactly.
  // Currently they only update local state, but the signatures are ready
  // for MIDI engine integration.
  //
  // TODO [MIDI-ENGINE-CONTROLS]: When implementing MIDI playback, these
  // controls will call into the MIDI engine:
  //   - play() → Tone.Transport.start()
  //   - pause() → Tone.Transport.pause()
  //   - seek() → Tone.Transport.seconds = time
  //   - setPlaybackRate() → Tone.Transport.bpm.value = ...
  //   - setVolume() → Tone.Destination.volume.value = ...

  const play = useCallback(() => {
    // TODO [MIDI-ENGINE]: await Tone.start(); Tone.Transport.start();
    setState((prev) => ({ ...prev, playing: true, ended: false }));
    onPlay?.();
  }, [onPlay]);

  const pause = useCallback(() => {
    // TODO [MIDI-ENGINE]: Tone.Transport.pause();
    setState((prev) => ({ ...prev, playing: false }));
    onPause?.();
  }, [onPause]);

  const togglePlay = useCallback(() => {
    if (playing) {
      pause();
    } else {
      play();
    }
  }, [playing, play, pause]);

  const seek = useCallback((time: number) => {
    // TODO [MIDI-ENGINE]: Tone.Transport.seconds = time;
    const clampedTime = Math.max(0, Math.min(time, durationValue || Infinity));
    setState((prev) => ({ ...prev, currentTime: clampedTime }));
  }, [durationValue]);

  const skipForward = useCallback((seconds = 10) => {
    seek(currentTime + seconds);
  }, [currentTime, seek]);

  const skipBackward = useCallback((seconds = 10) => {
    seek(currentTime - seconds);
  }, [currentTime, seek]);

  const setVolume = useCallback((newVolume: number) => {
    // TODO [MIDI-ENGINE]: Tone.Destination.volume.value = Tone.gainToDb(newVolume);
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setState((prev) => ({
      ...prev,
      volume: clampedVolume,
      muted: clampedVolume > 0 ? false : prev.muted,
    }));
  }, []);

  const toggleMute = useCallback(() => {
    // TODO [MIDI-ENGINE]: Tone.Destination.mute = !muted;
    setState((prev) => ({ ...prev, muted: !prev.muted }));
  }, []);

  const setPlaybackRate = useCallback((rate: number) => {
    // TODO [MIDI-ENGINE]: Adjust Tone.Transport.bpm based on rate
    setState((prev) => ({ ...prev, playbackRate: rate }));
  }, []);

  const restart = useCallback(() => {
    // TODO [MIDI-ENGINE]: Tone.Transport.stop(); Tone.Transport.seconds = 0; Tone.Transport.start();
    seek(0);
    play();
  }, [seek, play]);

  // Stop is MIDI-specific (not in standard MediaControls)
  const stop = useCallback(() => {
    // TODO [MIDI-ENGINE]: Tone.Transport.stop(); Tone.Transport.seconds = 0;
    setState((prev) => ({ ...prev, playing: false, currentTime: 0 }));
    onStop?.();
  }, [onStop]);

  // Assemble controls object matching MediaControls interface
  const controls: MediaControls = useMemo(
    () => ({
      play,
      pause,
      togglePlay,
      seek,
      skipForward,
      skipBackward,
      setVolume,
      toggleMute,
      setPlaybackRate,
      restart,
      // Note: fullscreen/PiP not applicable for MIDI
    }),
    [play, pause, togglePlay, seek, skipForward, skipBackward, setVolume, toggleMute, setPlaybackRate, restart]
  );

  // ==========================================================================
  // Comment Support
  // ==========================================================================

  // Check if comments feature is enabled
  const commentsEnabled = capabilities?.comments === true;

  // Convert MediaComments to TimelineMarkers for transport bar
  const timelineMarkers = comments
    .filter((c) => c.time != null && c.time >= 0)
    .map((c) => ({
      time: c.time!,
      label: `${c.authorName || "Comment"}: ${c.text}`,
      type: "comment" as const,
      id: c.id,
    }));

  // Handle adding a comment at the current time
  const handleAddComment = useCallback(() => {
    // TODO: Replace window.prompt with proper rds comment input UI.
    // This is a temporary UX for initial implementation.
    const text = window.prompt(
      `Add a comment at ${formatTime(currentTime)}:`
    );

    if (text && text.trim()) {
      onAddComment?.({ time: currentTime, text: text.trim() });
    }
  }, [currentTime, onAddComment]);

  // ==========================================================================
  // Render
  // ==========================================================================

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-lg border bg-card p-4",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* MIDI Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Music className="h-5 w-5" />
          </div>

          {/* Title & Source */}
          <div className="min-w-0">
            {title && <p className="truncate font-medium">{title}</p>}
            <p className="truncate text-xs text-muted-foreground">
              {src.split("/").pop() || "MIDI File"}
            </p>
          </div>
        </div>

        {/* MIDI Badge */}
        <Badge variant="secondary" className="shrink-0">
          MIDI
        </Badge>
      </div>

      {/* Transport Controls - Using shared RdsMediaTransportBar */}
      <div className="flex items-center gap-2">
        {/* Stop - MIDI-specific control (not in shared transport bar) */}
        <RdsTransportButton
          action="stop"
          size="sm"
          onClick={stop}
          disabled={loading} // TODO [MIDI-ENGINE-UI]: Enable when MIDI playback is implemented
          className="shrink-0"
        />

        {/* Shared Transport Bar */}
        <RdsMediaTransportBar
          playing={playing}
          currentTime={currentTime}
          duration={durationValue}
          volume={volume}
          muted={muted}
          loading={loading}
          onTogglePlay={controls.togglePlay}
          onSeek={controls.seek}
          onVolumeChange={controls.setVolume}
          onMuteToggle={controls.toggleMute}
          markers={commentsEnabled ? timelineMarkers : undefined}
          onMarkerClick={
            commentsEnabled && onCommentSelect
              ? (marker) => onCommentSelect(marker.id || "")
              : undefined
          }
          showAddComment={commentsEnabled && !!onAddComment}
          onAddComment={onAddComment ? handleAddComment : undefined}
          className="flex-1"
        />
      </div>

      {/* Coming Soon Notice */}
      <div className="flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm">
        <AlertCircle className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">
          MIDI synthesis coming soon. See{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            midi-player.tsx
          </code>{" "}
          for Phase 2 roadmap.
        </span>
      </div>

      {/* TODO: Future enhancements based on capabilities */}
      {/*
        TODO: Phase 2 UI additions:

        {capabilities?.midi && (
          <MidiVisualization
            midi={parsedMidi}
            currentTime={currentTime}
          />
        )}

        <InstrumentSelector
          value={selectedInstrument}
          onChange={setInstrument}
        />

        <MidiTrackList
          tracks={parsedMidi?.tracks}
          onMuteTrack={handleMuteTrack}
          onSoloTrack={handleSoloTrack}
        />
      */}
    </div>
  );
}

// =============================================================================
// Phase 2 Helper Functions (Not Yet Implemented)
// =============================================================================

/*
TODO: Implement these utilities in Phase 2

import * as Tone from "tone";
import { Midi } from "@tonejs/midi";

async function loadMidi(url: string): Promise<Midi> {
  const midi = await Midi.fromUrl(url);
  return midi;
}

function createSynth(): Tone.PolySynth {
  return new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "triangle" },
    envelope: {
      attack: 0.02,
      decay: 0.1,
      sustain: 0.3,
      release: 0.8,
    },
  }).toDestination();
}

function scheduleMidi(midi: Midi, synth: Tone.PolySynth): void {
  const now = Tone.now();
  midi.tracks.forEach((track) => {
    track.notes.forEach((note) => {
      synth.triggerAttackRelease(
        note.name,
        note.duration,
        note.time + now,
        note.velocity
      );
    });
  });
}

// MediaCore integration helper
function syncTransportToMediaState(
  dispatch: React.Dispatch<MediaAction>
): void {
  Tone.Transport.scheduleRepeat((time) => {
    const position = Tone.Transport.seconds;
    dispatch({ type: "SET_TIME", payload: position });
  }, 0.1); // Update every 100ms
}
*/
