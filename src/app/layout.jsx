import { Inter, Space_Grotesk } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import ScrollToTop from '../components/ScrollToTop'
// Library styles first so the site's overrides in global.css win the cascade.
import 'intl-tel-input/styles'
import '../styles/global.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_TITLE = 'Mirevuno AI - Official AI Trading Platform for Australia'
const SITE_DESCRIPTION =
  "Mirevuno AI - Australia's online trading platform. Trade crypto, forex, shares and more with AI-powered analysis and round-the-clock access."

export const metadata = {
  metadataBase: new URL('https://mirevuno-ai.com'),
  title: { default: SITE_TITLE, template: '%s' },
  description: SITE_DESCRIPTION,
  keywords: [
    'Mirevuno AI',
    'Mirevuno AI platform',
    'Mirevuno AI review',
    'AI trading platform',
    'crypto trading Australia',
    'automated crypto trading',
    'AI trading Australia',
    'Bitcoin',
    'Ethereum',
    'Solana',
  ],
  icons: { icon: '/favicon.svg' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: { google: 'xKKPgesnDzb91NfSKasFHD57WGpZs0QbQ2TSWiIEsHI' },
}

export const viewport = {
  themeColor: '#faf9fd',
}

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://mirevuno-ai.com/#organization',
      name: 'Mirevuno AI',
      url: 'https://mirevuno-ai.com/',
      logo: 'https://mirevuno-ai.com/favicon.svg',
      email: 'support@mirevuno-ai.com',
      areaServed: 'AU',
      description: SITE_DESCRIPTION,
    },
    {
      '@type': 'WebSite',
      '@id': 'https://mirevuno-ai.com/#website',
      url: 'https://mirevuno-ai.com/',
      name: 'Mirevuno AI',
      publisher: { '@id': 'https://mirevuno-ai.com/#organization' },
      inLanguage: 'en-AU',
    },
  ],
}

const GTAG_ID = 'G-YTV4SX2VDY'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <Reveal>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </Reveal>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GTAG_ID}');`,
          }}
        />
      </body>
    </html>
  )
}
