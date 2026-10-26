import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const interfaceFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-interface',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://havenstone.example'),
  title: {
    default: 'Havenstone Properties — Thoughtfully chosen homes in Nairobi',
    template: '%s | Havenstone Properties',
  },
  description:
    'Explore thoughtfully selected sample homes and apartments across Nairobi with Havenstone Properties. A fictional real estate portfolio demonstration.',
  applicationName: 'Havenstone Properties',
  generator: 'Portfolio demonstration',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'Havenstone Properties',
    title: 'Havenstone Properties — Thoughtfully chosen homes in Nairobi',
    description:
      'Explore thoughtfully selected sample homes and apartments across Nairobi with Havenstone Properties.',
    images: ['/images/havenstone-hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Havenstone Properties — Thoughtfully chosen homes in Nairobi',
    description: 'A considered way to find your next home in Nairobi.',
    images: ['/images/havenstone-hero.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F7F5EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-KE" data-scroll-behavior="smooth">
      <body className={`${displayFont.variable} ${interfaceFont.variable} antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
