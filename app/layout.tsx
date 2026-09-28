import type { Metadata } from 'next'
import './globals.css'
import PaddleProvider from '@/components/PaddleProvider'

export const metadata: Metadata = {
  title: 'DeskTiles — Tidy, colorful tiles for your Mac desktop',
  description: 'Turn a cluttered Mac desktop into calm, colorful tiles. Drop files in, collapse to a slim bar, find everything at a glance. No cloud, no account. One-time purchase — €14.99.',
  keywords: ['macOS', 'desktop organizer', 'Mac productivity', 'Mac app', 'DeskTiles', 'project tiles', 'desktop management'],
  metadataBase: new URL('https://desktiles.app'),
  alternates: {
    canonical: 'https://desktiles.app',
  },
  openGraph: {
    title: 'DeskTiles — Tidy, colorful tiles for your Mac desktop',
    description: 'Turn a cluttered Mac desktop into calm, colorful tiles. Drop files in, collapse to a slim bar, find everything at a glance. No cloud, no account. One-time purchase — €14.99.',
    type: 'website',
    url: 'https://desktiles.app',
    siteName: 'DeskTiles',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.webp',
        width: 2000,
        height: 1299,
        alt: 'DeskTiles — Mac desktop organized into project tiles with Golden Gate Bridge wallpaper',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeskTiles — Tidy, colorful tiles for your Mac desktop',
    description: 'Turn a cluttered Mac desktop into calm, colorful tiles. No cloud, no account. One-time purchase — €14.99.',
    site: '@desktiles_app',
    creator: '@desktiles_app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Paddle script — activar cuando tengas cuenta */}
        {/* <script src="https://cdn.paddle.com/paddle/v2/paddle.js" async></script> */}
      </head>
      <body>
        <PaddleProvider />
        {children}
      </body>
    </html>
  )
}
