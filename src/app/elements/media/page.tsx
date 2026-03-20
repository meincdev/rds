import type { Metadata } from 'next'
import { CodeBlock, PropsTable } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Media Components',
  description: 'Audio players, waveform displays, and video embeds for multimedia platforms.',
}

export default function MediaPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Media Components</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Audio players, waveform displays, and video embeds for multimedia
          platforms.
        </p>
      </div>

      {/* AudioPlayer */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">AudioPlayer</h2>
        <CodeBlock>{`import { AudioPlayer } from "@/components/media/audio-player"

<AudioPlayer
  src="/audio/track.mp3"
  title="Track Title"
  artist="Artist Name"
  coverArt="/cover.jpg"
/>`}</CodeBlock>
        <PropsTable
          rows={[
            { prop: 'src', type: 'string', default: '\u2014', description: 'Audio source URL (required)' },
            { prop: 'title', type: 'string', default: '\u2014', description: 'Track title' },
            { prop: 'artist', type: 'string', default: '\u2014', description: 'Artist name' },
            { prop: 'coverArt', type: 'string', default: '\u2014', description: 'Cover art image URL' },
            { prop: 'autoPlay', type: 'boolean', default: 'false', description: 'Auto-play on mount' },
            { prop: 'loop', type: 'boolean', default: 'false', description: 'Loop playback' },
            { prop: 'onEnded', type: '() => void', default: '\u2014', description: 'Called when track ends' },
            { prop: 'onTimeUpdate', type: '(time: number) => void', default: '\u2014', description: 'Called on time update' },
          ]}
        />
      </section>

      {/* WaveformDisplay */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">WaveformDisplay</h2>
        <CodeBlock language="bash">{`npm install wavesurfer.js`}</CodeBlock>
        <CodeBlock>{`import { WaveformDisplay } from "@/components/media/waveform-display"

<WaveformDisplay
  src="/audio/track.mp3"
  height={80}
  waveColor="#d1d5db"
  progressColor="#111827"
/>`}</CodeBlock>
        <PropsTable
          rows={[
            { prop: 'src', type: 'string', default: '\u2014', description: 'Audio source URL (required)' },
            { prop: 'height', type: 'number', default: '64', description: 'Waveform height in px' },
            { prop: 'waveColor', type: 'string', default: '\u2014', description: 'Color of the waveform' },
            { prop: 'progressColor', type: 'string', default: '\u2014', description: 'Color of the progress overlay' },
            { prop: 'onReady', type: '() => void', default: '\u2014', description: 'Called when waveform is ready' },
            { prop: 'onSeek', type: '(time: number) => void', default: '\u2014', description: 'Called on seek' },
          ]}
        />
      </section>

      {/* VideoEmbed */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">VideoEmbed</h2>
        <CodeBlock>{`import { VideoEmbed } from "@/components/media/video-embed"

<VideoEmbed
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  aspectRatio="16/9"
/>`}</CodeBlock>
        <PropsTable
          rows={[
            { prop: 'src', type: 'string', default: '\u2014', description: 'Embed URL (required)' },
            { prop: 'aspectRatio', type: '"16/9" | "4/3" | "1/1"', default: '"16/9"', description: 'Video aspect ratio' },
            { prop: 'title', type: 'string', default: '\u2014', description: 'Iframe title for accessibility' },
          ]}
        />
      </section>

      {/* MediaCore */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">MediaCore (State Manager)</h2>
        <p className="text-sm text-muted-foreground">
          MediaCore is not a visual component. It manages shared playback state
          across multiple players so only one plays at a time.
        </p>
        <CodeBlock>{`import { useMediaCore } from "@/components/media/media-core"

const { play, pause, isPlaying, currentTrack } = useMediaCore()

// Play a specific track — pauses any other active player
play({ src: "/audio/track.mp3", title: "My Track" })

// Pause the current track
pause()`}</CodeBlock>
      </section>
    </div>
  )
}
