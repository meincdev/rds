# @meinc/rds-media-core

Media player building blocks for **Reba Design System** — audio players, video embeds, MIDI players, and transport controls for music applications.

## Installation

```bash
npm install @meinc/rds-media-core
```

### Peer Dependencies

```bash
npm install react react-dom
npm install lucide-react  # Optional, for icons
```

## Usage

### Audio Player

```tsx
import { AudioPlayer } from "@meinc/rds-media-core";

export function MusicPlayer() {
  return (
    <AudioPlayer
      src="/audio/track.mp3"
      title="My Track"
      artist="Artist Name"
      coverUrl="/images/cover.jpg"
    />
  );
}
```

### Video Embed

```tsx
import { VideoEmbed } from "@meinc/rds-media-core";

export function VideoSection() {
  return (
    <VideoEmbed
      src="https://www.youtube.com/watch?v=..."
      title="Music Video"
      aspectRatio="16:9"
    />
  );
}
```

### Media Provider (Advanced)

For custom player implementations:

```tsx
import {
  MediaProvider,
  useMediaState,
  useMediaControls,
  RdsTransportButton,
  RdsTimelineControl,
  RdsVolumeControl,
} from "@meinc/rds-media-core";

export function CustomPlayer() {
  return (
    <MediaProvider>
      <PlayerUI />
    </MediaProvider>
  );
}

function PlayerUI() {
  const { isPlaying, currentTime, duration } = useMediaState();
  const { play, pause, seek } = useMediaControls();

  return (
    <div>
      <RdsTransportButton
        action={isPlaying ? "pause" : "play"}
        onClick={() => (isPlaying ? pause() : play())}
      />
      <RdsTimelineControl
        currentTime={currentTime}
        duration={duration}
        onSeek={seek}
      />
      <RdsVolumeControl />
    </div>
  );
}
```

### MIDI Player (Experimental)

```tsx
import { MidiPlayer } from "@meinc/rds-media-core";

export function MidiSection() {
  return (
    <MidiPlayer
      src="/midi/song.mid"
      title="MIDI Composition"
    />
  );
}
```

## Available Exports

### Players

- `AudioPlayer` — Full-featured audio player with waveform
- `VideoEmbed` — Video player with YouTube/Vimeo support
- `MidiPlayer` — MIDI file player (experimental)

### Controls

- `RdsTransportButton` — Play/pause/stop buttons
- `RdsTimelineControl` — Seekable timeline slider
- `RdsVolumeControl` — Volume slider with mute
- `RdsMediaTransportBar` — Combined transport controls
- `VideoControls` — Video-specific control overlay

### Context & Hooks

- `MediaProvider` — Context provider for custom players
- `useMediaState` — Current playback state
- `useMediaControls` — Playback control methods
- `useMediaCapabilities` — Media capabilities info
- `useMediaType` — Current media type
- `useFormattedTime` — Format seconds as MM:SS
- `useVolumeControl` — Volume state and controls
- `useMediaElementCore` — Core media element management

### Utilities

- `formatTime` — Format time values
- `mediaCommentToRdsComment` — Convert media comment to generic
- `mediaCommentsToRdsComments` — Batch convert comments

## License

MIT
