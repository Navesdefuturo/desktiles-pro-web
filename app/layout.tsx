import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeskTiles — Projects. Not folders.',
  description: 'Organize your Mac desktop by project, not by folder. DeskTiles turns your desktop into an intelligent workspace.',
  keywords: ['macOS', 'desktop organizer', 'productivity', 'Mac app', 'DeskTiles'],
  openGraph: {
    title: 'DeskTiles — Projects. Not folders.',
    description: 'The Mac Desktop. Reimagined.',
    type: 'website',
    url: 'https://desktiles.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeskTiles — Projects. Not folders.',
    description: 'The Mac Desktop. Reimagined.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
