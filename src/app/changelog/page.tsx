import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'What\u2019s new in Reba Design System.',
}

export default function ChangelogPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Changelog</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          What&rsquo;s new in Reba Design System.{' '}
          <a
            href="https://github.com/meincdev/rds/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            View GitHub releases &rarr;
          </a>
        </p>
      </div>

      <div className="relative border-l-2 border-border pl-8 space-y-12">
        {/* v0.2.0 */}
        <div className="relative">
          <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-foreground" />
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              v0.2.0
            </span>
            <span className="text-sm text-muted-foreground">February 2025</span>
          </div>
          <div className="mt-3 space-y-2 text-sm">
            <p className="font-medium">Added</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>MediaCore: AudioPlayer, VideoEmbed, WaveformDisplay</li>
              <li>AI Elements: ChatMessage, ChatThread, PromptInput</li>
              <li>Charts: Bar, Line, Area, Pie via Recharts</li>
              <li>5 Layout components</li>
              <li>Templates page</li>
              <li>Cmd+K search</li>
              <li>Dark mode via next-themes</li>
            </ul>
            <p className="font-medium mt-3">Changed</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Repositioned from music-only to multimedia platforms</li>
              <li>Updated Getting Started with font setup</li>
            </ul>
          </div>
        </div>

        {/* v0.1.0 */}
        <div className="relative">
          <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-foreground" />
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              v0.1.0
            </span>
            <span className="text-sm text-muted-foreground">January 2025</span>
          </div>
          <div className="mt-3 space-y-2 text-sm">
            <p className="font-medium">Added</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Initial release — 45 core UI components on shadcn/ui</li>
              <li>Design token system: Colors, Typography, Spacing, Shadows, Motion</li>
              <li>Three-font system: Instrument Serif, DM Mono, DM Sans</li>
              <li>Ink-at-opacity color hierarchy</li>
              <li>Introduction, Principles, Getting Started, Guidelines pages</li>
              <li>GitHub repo at github.com/meincdev/rds</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <p className="text-sm text-muted-foreground">
          Entries are added manually. To propose a release, open a PR with the
          changelog entry included.
        </p>
      </div>
    </div>
  )
}
