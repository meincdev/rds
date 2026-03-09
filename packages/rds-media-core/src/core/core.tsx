"use client";

/**
 * =============================================================================
 * rds Media Core - Context & Hooks
 * =============================================================================
 *
 * Provides a unified context and hooks for managing media playback state
 * across all rds media components (VideoEmbed, AudioPlayer, etc.).
 *
 * This is the foundation layer that will eventually be wired to real
 * media elements (<video>, <audio>, external players, etc.).
 *
 * Usage:
 * ```tsx
 * import { MediaProvider, useMediaState, useMediaControls } from "@/components/rds/media";
 *
 * function MyPlayer() {
 *   return (
 *     <MediaProvider type="video">
 *       <VideoUI />
 *       <MediaControlBar />
 *     </MediaProvider>
 *   );
 * }
 *
 * function MediaControlBar() {
 *   const state = useMediaState();
 *   const controls = useMediaControls();
 *
 *   return (
 *     <button onClick={controls.togglePlay}>
 *       {state.playing ? 'Pause' : 'Play'}
 *     </button>
 *   );
 * }
 * ```
 */

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from "react";

import type {
  MediaType,
  MediaState,
  MediaControls,
  MediaCapabilities,
  MediaProviderProps,
  MediaEventCallbacks,
  MediaSource,
  MediaCoreOptions,
} from "./types";

import {
  INITIAL_MEDIA_STATE,
  DEFAULT_CAPABILITIES,
} from "./types";

// =============================================================================
// State Reducer
// =============================================================================

type MediaAction =
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "SET_TIME"; payload: number }
  | { type: "SET_DURATION"; payload: number }
  | { type: "SET_BUFFERED"; payload: number }
  | { type: "SET_VOLUME"; payload: number }
  | { type: "SET_MUTED"; payload: boolean }
  | { type: "SET_PLAYBACK_RATE"; payload: number }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_READY"; payload: boolean }
  | { type: "SET_ENDED"; payload: boolean }
  | { type: "SET_ERROR"; payload: { code: number; message: string } | null }
  | { type: "SET_FULLSCREEN"; payload: boolean }
  | { type: "SET_PIP"; payload: boolean }
  | { type: "RESET" };

function mediaReducer(state: MediaState, action: MediaAction): MediaState {
  switch (action.type) {
    case "PLAY":
      return { ...state, playing: true, ended: false };
    case "PAUSE":
      return { ...state, playing: false };
    case "SET_TIME":
      return { ...state, currentTime: action.payload };
    case "SET_DURATION":
      return { ...state, duration: action.payload };
    case "SET_BUFFERED":
      return { ...state, buffered: action.payload };
    case "SET_VOLUME":
      return { ...state, volume: Math.max(0, Math.min(1, action.payload)) };
    case "SET_MUTED":
      return { ...state, muted: action.payload };
    case "SET_PLAYBACK_RATE":
      return { ...state, playbackRate: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_READY":
      return { ...state, ready: action.payload, loading: false };
    case "SET_ENDED":
      return { ...state, ended: action.payload, playing: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_FULLSCREEN":
      return { ...state, fullscreen: action.payload };
    case "SET_PIP":
      return { ...state, pictureInPicture: action.payload };
    case "RESET":
      return INITIAL_MEDIA_STATE;
    default:
      return state;
  }
}

// =============================================================================
// Context Types
// =============================================================================

interface MediaContextValue {
  /** Current media type */
  type: MediaType;
  /** Current media source */
  source: MediaSource | null;
  /** Player capabilities */
  capabilities: MediaCapabilities;
  /** Current playback state */
  state: MediaState;
  /** Playback controls */
  controls: MediaControls;
  /** Dispatch for internal state updates */
  dispatch: React.Dispatch<MediaAction>;
  /** Ref to attach to media element */
  mediaRef: React.RefObject<HTMLVideoElement | HTMLAudioElement | null>;
  /** Event callbacks */
  callbacks: MediaEventCallbacks;
}

// =============================================================================
// Context
// =============================================================================

const MediaContext = createContext<MediaContextValue | null>(null);

// =============================================================================
// Provider Component
// =============================================================================

/**
 * MediaProvider - Wraps media components with shared state and controls
 *
 * This provider manages the playback state and exposes controls that can
 * be connected to actual media elements.
 *
 * @example
 * ```tsx
 * <MediaProvider type="video" capabilities={{ fullscreen: true }}>
 *   <VideoPlayer />
 *   <ControlBar />
 * </MediaProvider>
 * ```
 */
export function MediaProvider({
  type,
  source,
  capabilities: capabilityOverrides,
  initialVolume = 1,
  initialMuted = false,
  initialPlaybackRate = 1,
  autoplay = false,
  loop = false,
  callbacks = {},
  children,
}: MediaProviderProps) {
  // Merge default capabilities with overrides
  const capabilities = useMemo(
    () => ({
      ...DEFAULT_CAPABILITIES[type],
      ...capabilityOverrides,
    }),
    [type, capabilityOverrides]
  );

  // Initialize state with provided values
  const initialState: MediaState = {
    ...INITIAL_MEDIA_STATE,
    volume: initialVolume,
    muted: initialMuted,
    playbackRate: initialPlaybackRate,
  };

  const [state, dispatch] = useReducer(mediaReducer, initialState);

  // Ref for the underlying media element
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);

  // ==========================================================================
  // Control Functions
  // ==========================================================================
  // These are "stub" implementations that update React state.
  // In the future, they will also interact with the actual media element
  // via mediaRef.current.
  // ==========================================================================

  const play = useCallback(() => {
    dispatch({ type: "PLAY" });
    callbacks.onPlay?.();

    // TODO: Wire to actual media element
    // if (mediaRef.current) {
    //   mediaRef.current.play().catch(handlePlayError);
    // }
  }, [callbacks]);

  const pause = useCallback(() => {
    dispatch({ type: "PAUSE" });
    callbacks.onPause?.();

    // TODO: Wire to actual media element
    // if (mediaRef.current) {
    //   mediaRef.current.pause();
    // }
  }, [callbacks]);

  const togglePlay = useCallback(() => {
    if (state.playing) {
      pause();
    } else {
      play();
    }
  }, [state.playing, play, pause]);

  const seek = useCallback(
    (time: number) => {
      const clampedTime = Math.max(0, Math.min(time, state.duration || Infinity));
      dispatch({ type: "SET_TIME", payload: clampedTime });
      callbacks.onSeeked?.(clampedTime);

      // TODO: Wire to actual media element
      // if (mediaRef.current) {
      //   mediaRef.current.currentTime = clampedTime;
      // }
    },
    [state.duration, callbacks]
  );

  const skipForward = useCallback(
    (seconds = 10) => {
      seek(state.currentTime + seconds);
    },
    [state.currentTime, seek]
  );

  const skipBackward = useCallback(
    (seconds = 10) => {
      seek(state.currentTime - seconds);
    },
    [state.currentTime, seek]
  );

  const setVolume = useCallback(
    (volume: number) => {
      const clampedVolume = Math.max(0, Math.min(1, volume));
      dispatch({ type: "SET_VOLUME", payload: clampedVolume });
      callbacks.onVolumeChange?.(clampedVolume, state.muted);

      // TODO: Wire to actual media element
      // if (mediaRef.current) {
      //   mediaRef.current.volume = clampedVolume;
      // }
    },
    [state.muted, callbacks]
  );

  const toggleMute = useCallback(() => {
    const newMuted = !state.muted;
    dispatch({ type: "SET_MUTED", payload: newMuted });
    callbacks.onVolumeChange?.(state.volume, newMuted);

    // TODO: Wire to actual media element
    // if (mediaRef.current) {
    //   mediaRef.current.muted = newMuted;
    // }
  }, [state.muted, state.volume, callbacks]);

  const setPlaybackRate = useCallback(
    (rate: number) => {
      dispatch({ type: "SET_PLAYBACK_RATE", payload: rate });
      callbacks.onRateChange?.(rate);

      // TODO: Wire to actual media element
      // if (mediaRef.current) {
      //   mediaRef.current.playbackRate = rate;
      // }
    },
    [callbacks]
  );

  const enterFullscreen = useCallback(() => {
    if (!capabilities.fullscreen) return;
    dispatch({ type: "SET_FULLSCREEN", payload: true });
    callbacks.onFullscreenChange?.(true);

    // TODO: Wire to actual fullscreen API
  }, [capabilities.fullscreen, callbacks]);

  const exitFullscreen = useCallback(() => {
    dispatch({ type: "SET_FULLSCREEN", payload: false });
    callbacks.onFullscreenChange?.(false);

    // TODO: Wire to actual fullscreen API
  }, [callbacks]);

  const toggleFullscreen = useCallback(() => {
    if (state.fullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [state.fullscreen, enterFullscreen, exitFullscreen]);

  const enterPictureInPicture = useCallback(() => {
    if (!capabilities.pictureInPicture) return;
    dispatch({ type: "SET_PIP", payload: true });
    callbacks.onPictureInPictureChange?.(true);

    // TODO: Wire to actual PiP API
  }, [capabilities.pictureInPicture, callbacks]);

  const exitPictureInPicture = useCallback(() => {
    dispatch({ type: "SET_PIP", payload: false });
    callbacks.onPictureInPictureChange?.(false);

    // TODO: Wire to actual PiP API
  }, [callbacks]);

  const restart = useCallback(() => {
    seek(0);
    play();
  }, [seek, play]);

  // Assemble controls object
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
      enterFullscreen,
      exitFullscreen,
      toggleFullscreen,
      enterPictureInPicture,
      exitPictureInPicture,
      restart,
    }),
    [
      play,
      pause,
      togglePlay,
      seek,
      skipForward,
      skipBackward,
      setVolume,
      toggleMute,
      setPlaybackRate,
      enterFullscreen,
      exitFullscreen,
      toggleFullscreen,
      enterPictureInPicture,
      exitPictureInPicture,
      restart,
    ]
  );

  // Assemble context value
  const value: MediaContextValue = useMemo(
    () => ({
      type,
      source: source || null,
      capabilities,
      state,
      controls,
      dispatch,
      mediaRef,
      callbacks,
    }),
    [type, source, capabilities, state, controls, callbacks]
  );

  return (
    <MediaContext.Provider value={value}>
      {children}
    </MediaContext.Provider>
  );
}

// =============================================================================
// Hooks
// =============================================================================

/**
 * Access the full media context
 *
 * Use this when you need access to everything (type, capabilities, etc.)
 *
 * @throws Error if used outside of MediaProvider
 */
export function useMediaContext(): MediaContextValue {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error("useMediaContext must be used within a MediaProvider");
  }
  return context;
}

/**
 * Access just the media playback state
 *
 * @example
 * ```tsx
 * const { playing, currentTime, duration } = useMediaState();
 * ```
 */
export function useMediaState(): MediaState {
  const context = useMediaContext();
  return context.state;
}

/**
 * Access just the media playback controls
 *
 * @example
 * ```tsx
 * const { play, pause, seek, togglePlay } = useMediaControls();
 * ```
 */
export function useMediaControls(): MediaControls {
  const context = useMediaContext();
  return context.controls;
}

/**
 * Access the media capabilities
 *
 * @example
 * ```tsx
 * const capabilities = useMediaCapabilities();
 * if (capabilities.fullscreen) {
 *   // Show fullscreen button
 * }
 * ```
 */
export function useMediaCapabilities(): MediaCapabilities {
  const context = useMediaContext();
  return context.capabilities;
}

/**
 * Access the media type
 *
 * @example
 * ```tsx
 * const type = useMediaType();
 * if (type === 'video') {
 *   // Show video-specific UI
 * }
 * ```
 */
export function useMediaType(): MediaType {
  const context = useMediaContext();
  return context.type;
}

/**
 * Access the internal dispatch function
 *
 * Use this for advanced use cases where you need to update state directly,
 * such as when wiring up to actual media element events.
 */
export function useMediaDispatch(): React.Dispatch<MediaAction> {
  const context = useMediaContext();
  return context.dispatch;
}

/**
 * Access the media element ref
 *
 * Use this to attach the ref to an actual <video> or <audio> element.
 *
 * @example
 * ```tsx
 * const mediaRef = useMediaRef();
 * return <video ref={mediaRef} src={url} />;
 * ```
 */
export function useMediaRef(): React.RefObject<HTMLVideoElement | HTMLAudioElement | null> {
  const context = useMediaContext();
  return context.mediaRef;
}

// =============================================================================
// Utility Hooks
// =============================================================================

/**
 * Formatted time display hook
 *
 * @example
 * ```tsx
 * const { currentTime, duration, remaining, progress } = useFormattedTime();
 * // currentTime: "1:23"
 * // duration: "4:56"
 * // remaining: "-3:33"
 * // progress: 28.5 (percent)
 * ```
 */
export function useFormattedTime() {
  const { currentTime, duration } = useMediaState();

  const formatTime = useCallback((seconds: number): string => {
    if (!isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, []);

  return useMemo(() => {
    const remaining = duration ? duration - currentTime : 0;
    const progress = duration ? (currentTime / duration) * 100 : 0;

    return {
      currentTime: formatTime(currentTime),
      duration: formatTime(duration || 0),
      remaining: `-${formatTime(remaining)}`,
      progress,
      rawCurrentTime: currentTime,
      rawDuration: duration,
    };
  }, [currentTime, duration, formatTime]);
}

/**
 * Volume control hook with convenience methods
 *
 * @example
 * ```tsx
 * const { volume, muted, isSilent, setVolume, toggleMute, volumeUp, volumeDown } = useVolumeControl();
 * ```
 */
export function useVolumeControl() {
  const { volume, muted } = useMediaState();
  const controls = useMediaControls();

  const volumeUp = useCallback(
    (step = 0.1) => {
      controls.setVolume(volume + step);
    },
    [volume, controls]
  );

  const volumeDown = useCallback(
    (step = 0.1) => {
      controls.setVolume(volume - step);
    },
    [volume, controls]
  );

  return {
    volume,
    muted,
    isSilent: muted || volume === 0,
    setVolume: controls.setVolume,
    toggleMute: controls.toggleMute,
    volumeUp,
    volumeDown,
  };
}

// =============================================================================
// useMediaElementCore - Standalone Hook for Real Media Elements
// =============================================================================

/**
 * Return type for useMediaElementCore
 */
export interface UseMediaElementCoreReturn {
  /** Current playback state */
  state: MediaState;
  /** Playback controls bound to the media element */
  controls: MediaControls;
  /** Callback ref to attach to the <video> or <audio> element */
  mediaRef: (node: HTMLVideoElement | HTMLAudioElement | null) => void;
  /** Merged capabilities */
  capabilities: MediaCapabilities;
}

/**
 * Hook to bind MediaCore state and controls to a real HTMLMediaElement
 *
 * This is a standalone hook that doesn't require MediaProvider.
 * Use it when you want to control a single media element directly.
 *
 * @example
 * ```tsx
 * function MyVideoPlayer({ src }: { src: string }) {
 *   const { state, controls, mediaRef } = useMediaElementCore({ type: "video" });
 *
 *   return (
 *     <div>
 *       <video ref={mediaRef} src={src} />
 *       <button onClick={controls.togglePlay}>
 *         {state.playing ? "Pause" : "Play"}
 *       </button>
 *       <span>{state.currentTime} / {state.duration}</span>
 *     </div>
 *   );
 * }
 * ```
 */
export function useMediaElementCore(
  options: MediaCoreOptions
): UseMediaElementCoreReturn {
  const {
    type,
    capabilities: capabilityOverrides,
    initialVolume = 1,
    initialMuted = false,
    initialPlaybackRate = 1,
    callbacks = {},
  } = options;

  // Merge default capabilities with overrides
  const capabilities = useMemo(
    () => ({
      ...DEFAULT_CAPABILITIES[type],
      ...capabilityOverrides,
    }),
    [type, capabilityOverrides]
  );

  // Track the media element using state so React re-renders when it changes
  const [mediaElement, setMediaElement] = useState<HTMLVideoElement | HTMLAudioElement | null>(null);

  // Internal ref to store the element for control functions (doesn't trigger re-render)
  const mediaElementRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);

  // ==========================================================================
  // State
  // ==========================================================================

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number | null>(null);
  const [buffered, setBuffered] = useState<number | null>(null);
  const [volume, setVolumeState] = useState(initialVolume);
  const [muted, setMutedState] = useState(initialMuted);
  const [playbackRate, setPlaybackRateState] = useState(initialPlaybackRate);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [ended, setEnded] = useState(false);
  const [error, setError] = useState<{ code: number; message: string } | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [pictureInPicture, setPictureInPicture] = useState(false);

  // Assemble state object
  const state: MediaState = useMemo(
    () => ({
      playing,
      currentTime,
      duration,
      buffered,
      volume,
      muted,
      playbackRate,
      loading,
      ready,
      ended,
      error,
      fullscreen,
      pictureInPicture,
    }),
    [
      playing,
      currentTime,
      duration,
      buffered,
      volume,
      muted,
      playbackRate,
      loading,
      ready,
      ended,
      error,
      fullscreen,
      pictureInPicture,
    ]
  );

  // ==========================================================================
  // Control Functions
  // ==========================================================================

  const play = useCallback(() => {
    const el = mediaElementRef.current;
    if (el) {
      el.play().catch((err) => {
        console.error("[MediaCore] Play error:", err);
        setError({ code: 1, message: err.message || "Failed to play" });
        callbacks.onError?.({ code: 1, message: err.message || "Failed to play" });
      });
    }
  }, [callbacks]);

  const pause = useCallback(() => {
    const el = mediaElementRef.current;
    if (el) {
      el.pause();
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (playing) {
      pause();
    } else {
      play();
    }
  }, [playing, play, pause]);

  const seek = useCallback(
    (time: number) => {
      const el = mediaElementRef.current;
      if (el) {
        const clampedTime = Math.max(0, Math.min(time, el.duration || Infinity));
        el.currentTime = clampedTime;
      }
    },
    []
  );

  const skipForward = useCallback(
    (seconds = 10) => {
      seek(currentTime + seconds);
    },
    [currentTime, seek]
  );

  const skipBackward = useCallback(
    (seconds = 10) => {
      seek(currentTime - seconds);
    },
    [currentTime, seek]
  );

  const setVolume = useCallback(
    (newVolume: number) => {
      const el = mediaElementRef.current;
      const clampedVolume = Math.max(0, Math.min(1, newVolume));
      if (el) {
        el.volume = clampedVolume;
        // Unmute if setting volume > 0
        if (clampedVolume > 0 && el.muted) {
          el.muted = false;
        }
      }
    },
    []
  );

  const toggleMute = useCallback(() => {
    const el = mediaElementRef.current;
    if (el) {
      el.muted = !el.muted;
    }
  }, []);

  const setPlaybackRate = useCallback(
    (rate: number) => {
      const el = mediaElementRef.current;
      if (el) {
        el.playbackRate = rate;
      }
    },
    []
  );

  const enterFullscreen = useCallback(() => {
    if (!capabilities.fullscreen) return;
    const el = mediaElementRef.current;
    if (el && el.requestFullscreen) {
      el.requestFullscreen().catch(console.error);
    }
  }, [capabilities.fullscreen]);

  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(console.error);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (fullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [fullscreen, enterFullscreen, exitFullscreen]);

  const enterPictureInPicture = useCallback(() => {
    if (!capabilities.pictureInPicture) return;
    const el = mediaElementRef.current as HTMLVideoElement | null;
    if (el && "requestPictureInPicture" in el) {
      el.requestPictureInPicture().catch(console.error);
    }
  }, [capabilities.pictureInPicture]);

  const exitPictureInPicture = useCallback(() => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(console.error);
    }
  }, []);

  const restart = useCallback(() => {
    seek(0);
    play();
  }, [seek, play]);

  // Assemble controls object
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
      enterFullscreen,
      exitFullscreen,
      toggleFullscreen,
      enterPictureInPicture,
      exitPictureInPicture,
      restart,
    }),
    [
      play,
      pause,
      togglePlay,
      seek,
      skipForward,
      skipBackward,
      setVolume,
      toggleMute,
      setPlaybackRate,
      enterFullscreen,
      exitFullscreen,
      toggleFullscreen,
      enterPictureInPicture,
      exitPictureInPicture,
      restart,
    ]
  );

  // ==========================================================================
  // Callback Ref
  // ==========================================================================
  // Using a callback ref pattern so React notifies us when the ref is attached.
  // This is the proper way to detect when a ref becomes available.

  const mediaRef = useCallback((node: HTMLVideoElement | HTMLAudioElement | null) => {
    // Update both the ref (for control functions) and state (to trigger effect)
    mediaElementRef.current = node;
    setMediaElement(node);
  }, []);

  // ==========================================================================
  // Event Listeners
  // ==========================================================================

  // Store callbacks in a ref to avoid re-running the effect when callbacks change
  const callbacksRef = useRef(callbacks);
  callbacksRef.current = callbacks;

  // Track if initial values have been set
  const initializedRef = useRef(false);

  useEffect(() => {
    const el = mediaElement;
    if (!el) return;

    // Only set initial values once per element
    if (!initializedRef.current) {
      el.volume = initialVolume;
      el.muted = initialMuted;
      el.playbackRate = initialPlaybackRate;
      initializedRef.current = true;
    }

    // Event handlers - use callbacksRef to get latest callbacks without re-running effect
    const handlePlay = () => {
      setPlaying(true);
      setEnded(false);
      callbacksRef.current.onPlay?.();
    };

    const handlePause = () => {
      setPlaying(false);
      callbacksRef.current.onPause?.();
    };

    const handleTimeUpdate = () => {
      setCurrentTime(el.currentTime);
      callbacksRef.current.onTimeUpdate?.(el.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(el.duration);
      callbacksRef.current.onDurationChange?.(el.duration);
    };

    const handleVolumeChange = () => {
      setVolumeState(el.volume);
      setMutedState(el.muted);
      callbacksRef.current.onVolumeChange?.(el.volume, el.muted);
    };

    const handleRateChange = () => {
      setPlaybackRateState(el.playbackRate);
      callbacksRef.current.onRateChange?.(el.playbackRate);
    };

    const handleEnded = () => {
      setPlaying(false);
      setEnded(true);
      callbacksRef.current.onEnded?.();
    };

    const handleSeeked = () => {
      callbacksRef.current.onSeeked?.(el.currentTime);
    };

    const handleProgress = () => {
      if (el.buffered.length > 0) {
        const bufferedEnd = el.buffered.end(el.buffered.length - 1);
        setBuffered(bufferedEnd);
        if (el.duration) {
          callbacksRef.current.onProgress?.((bufferedEnd / el.duration) * 100);
        }
      }
    };

    const handleCanPlay = () => {
      setLoading(false);
      setReady(true);
      callbacksRef.current.onReady?.();
    };

    const handleWaiting = () => {
      setLoading(true);
      callbacksRef.current.onLoadingChange?.(true);
    };

    const handleCanPlayThrough = () => {
      setLoading(false);
      callbacksRef.current.onLoadingChange?.(false);
    };

    const handleError = () => {
      const mediaError = el.error;
      const errorInfo = {
        code: mediaError?.code || 0,
        message: mediaError?.message || "Unknown error",
      };
      setError(errorInfo);
      setLoading(false);
      callbacksRef.current.onError?.(errorInfo);
    };

    const handleLoadedMetadata = () => {
      setDuration(el.duration);
      setLoading(false);
    };

    const handleFullscreenChange = () => {
      const isFullscreen = document.fullscreenElement === el;
      setFullscreen(isFullscreen);
      callbacksRef.current.onFullscreenChange?.(isFullscreen);
    };

    const handlePipChange = () => {
      const isPip = document.pictureInPictureElement === el;
      setPictureInPicture(isPip);
      callbacksRef.current.onPictureInPictureChange?.(isPip);
    };

    // Attach event listeners
    el.addEventListener("play", handlePlay);
    el.addEventListener("pause", handlePause);
    el.addEventListener("timeupdate", handleTimeUpdate);
    el.addEventListener("durationchange", handleDurationChange);
    el.addEventListener("volumechange", handleVolumeChange);
    el.addEventListener("ratechange", handleRateChange);
    el.addEventListener("ended", handleEnded);
    el.addEventListener("seeked", handleSeeked);
    el.addEventListener("progress", handleProgress);
    el.addEventListener("canplay", handleCanPlay);
    el.addEventListener("waiting", handleWaiting);
    el.addEventListener("canplaythrough", handleCanPlayThrough);
    el.addEventListener("error", handleError);
    el.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Fullscreen and PiP events
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    el.addEventListener("enterpictureinpicture", handlePipChange);
    el.addEventListener("leavepictureinpicture", handlePipChange);

    // Cleanup
    return () => {
      el.removeEventListener("play", handlePlay);
      el.removeEventListener("pause", handlePause);
      el.removeEventListener("timeupdate", handleTimeUpdate);
      el.removeEventListener("durationchange", handleDurationChange);
      el.removeEventListener("volumechange", handleVolumeChange);
      el.removeEventListener("ratechange", handleRateChange);
      el.removeEventListener("ended", handleEnded);
      el.removeEventListener("seeked", handleSeeked);
      el.removeEventListener("progress", handleProgress);
      el.removeEventListener("canplay", handleCanPlay);
      el.removeEventListener("waiting", handleWaiting);
      el.removeEventListener("canplaythrough", handleCanPlayThrough);
      el.removeEventListener("error", handleError);
      el.removeEventListener("loadedmetadata", handleLoadedMetadata);

      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      el.removeEventListener("enterpictureinpicture", handlePipChange);
      el.removeEventListener("leavepictureinpicture", handlePipChange);

      // Reset initialized flag when element changes
      initializedRef.current = false;
    };
  }, [mediaElement, initialVolume, initialMuted, initialPlaybackRate]);

  return {
    state,
    controls,
    mediaRef,
    capabilities,
  };
}
