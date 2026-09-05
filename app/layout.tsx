import type { Metadata } from 'next'
import './globals.css'
import PaddleProvider from '@/components/PaddleProvider'

export const metadata: Metadata = {
  title: 'DeskTiles — Projects. Not folders.',
  description: 'Organize your Mac desktop by project, not by folder. DeskTiles gives you custom project tiles — expand, collapse, drag, rename. One-time purchase. macOS Sonoma · Sequoia · Tahoe · Golden Gate.',
  keywords: ['macOS', 'desktop organizer', 'Mac productivity', 'Mac app', 'DeskTiles', 'project tiles', 'desktop management'],
  metadataBase: new URL('https://desktiles.app'),
  alternates: {
    canonical: 'https://desktiles.app',
  },
  openGraph: {
    title: 'DeskTiles — Projects. Not folders.',
    description: 'The Mac desktop. Reimagined. Organize by project, not by folder. One-time purchase — €14.99.',
    type: 'website',
    url: 'https://desktiles.app',
    siteName: 'DeskTiles',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeskTiles — Projects. Not folders.',
    description: 'The Mac desktop. Reimagined. Organize by project, not by folder. One-time purchase — €14.99.',
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
