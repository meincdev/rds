import type { Metadata } from 'next'

const baseUrl = 'https://rds.onl'
const siteName = 'Reba Design System'
const defaultDescription =
  'Open-source design system for multimedia platforms. Built on shadcn/ui and Tailwind CSS with copy-paste components and AI-native documentation.'

export function generatePageMetadata({
  title,
  description = defaultDescription,
  path = '',
}: {
  title: string
  description?: string
  path?: string
}): Metadata {
  const url = `${baseUrl}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} \u2013 ${siteName}`,
      description,
      url,
      siteName,
      images: [
        { url: `${baseUrl}/og.png`, width: 1200, height: 630, alt: siteName },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} \u2013 ${siteName}`,
      description,
      images: [`${baseUrl}/og.png`],
    },
  }
}
