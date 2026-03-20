import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Templates',
  description: 'Pre-built layouts and starter apps for multimedia platforms.',
}

const templates = [
  {
    title: 'Audio Dashboard Starter',
    description:
      'A complete audio analytics dashboard with waveform display, playback controls, track list, and stats cards.',
    tags: ['Audio', 'Dashboard'],
    templateHref: 'https://github.com/meincdev/rds/tree/main/templates/audio-dashboard',
  },
  {
    title: 'Podcast Player Layout',
    description:
      'Episode list, player bar, show notes panel, and chapter markers. Everything you need for a podcast app.',
    tags: ['Podcast', 'Media'],
    templateHref: '#',
  },
  {
    title: 'Music App in a Box',
    description:
      'Full-featured music app starter: library, queue, now playing, artist pages, and search. Built with RDS + Next.js.',
    tags: ['Music', 'Full App'],
    templateHref: 'https://github.com/meincdev/rds/tree/main/templates/music-app',
  },
  {
    title: 'AI Chat Interface',
    description:
      'Tansen-ready AI chat UI with message thread, prompt input, typing indicator, and system prompt panel.',
    tags: ['AI', 'Chat'],
    templateHref: '#',
  },
  {
    title: 'Media Upload Flow',
    description:
      'Drag-and-drop upload, file progress, waveform preview, and metadata form. Perfect for DAW integrations.',
    tags: ['Upload', 'Media'],
    templateHref: '#',
  },
]

export default function TemplatesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Pre-built layouts and starter apps for multimedia platforms. Copy,
          paste, customize.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <div key={t.title} className="rounded-lg border">
            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
              <svg
                className="h-12 w-12 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-medium">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-muted"
                >
                  Preview
                </a>
                <a
                  href={t.templateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-foreground text-background px-3 py-1.5 text-xs font-medium hover:bg-foreground/90"
                >
                  Get template
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Missing a template? Open a GitHub issue and we&rsquo;ll build it.
        </p>
        <a
          href="https://github.com/meincdev/rds/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90"
        >
          Request a template &rarr;
        </a>
      </div>
    </div>
  )
}
