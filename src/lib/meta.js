import { BRAND, SITE_URL } from '../data/content'

// Shared page metadata: title, description, canonical and the matching
// OG/Twitter tags (the old useMeta hook, ported to the Metadata API).
export function pageMeta({ title, description, path }) {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: BRAND,
      title,
      description,
      url,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}
