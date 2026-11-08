import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import './globals.css'
import { BreathProvider } from '@/components/ui/BreathProvider'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'

/*
 * Fraunces — variable font, Google Fonts.
 * PRODUCTION: Self-host via next/font/local with subset WOFF2 files.
 * Axes: wght 100–900, opsz 9–144, SOFT 0–100, WONK 0–1
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces-loaded',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
  weight: 'variable',
})

export const metadata: Metadata = {
  title: {
    default: 'Bliss Body Therapy — Massage & Somatic Bodywork',
    template: '%s | Bliss Body Therapy',
  },
  description:
    'Somatic bodywork, massage therapy and energy healing with Natalia. The body isn\'t what we escape from — it\'s the doorway back. Based in [PLACEHOLDER: location].',
  keywords: [
    'massage therapy',
    'somatic bodywork',
    'energy healing',
    'deep tissue massage',
    'pelvic release massage',
    'meditation',
    'nervous system',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Bliss Body Therapy',
    title: 'Bliss Body Therapy — Massage & Somatic Bodywork',
    description:
      'Somatic bodywork, massage therapy and energy healing. The body is the doorway back.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bliss Body Therapy',
  description: 'Massage therapy, somatic bodywork and energy healing practice.',
  url: '[PLACEHOLDER: website URL]',
  telephone: '[PLACEHOLDER: phone number]',
  email: '[PLACEHOLDER: email address]',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '[PLACEHOLDER: city]',
    addressCountry: 'GB',
  },
  priceRange: '[PLACEHOLDER: price range]',
  openingHours: '[PLACEHOLDER: opening hours]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={fraunces.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <BreathProvider />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[--color-ink] focus:text-[--color-linen] focus:text-sm">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
