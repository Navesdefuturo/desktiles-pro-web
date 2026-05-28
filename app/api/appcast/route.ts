import { NextResponse } from 'next/server'

export async function GET() {
  const appcast = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>DeskTiles Changelog</title>
    <link>https://desktiles.app</link>
    <description>DeskTiles update feed</description>
    <language>en</language>
    <item>
      <title>Version 1.0.0</title>
      <sparkle:releaseNotesLink>https://desktiles.app/release-notes</sparkle:releaseNotesLink>
      <pubDate>Thu, 01 May 2025 12:00:00 +0000</pubDate>
      <enclosure
        url="https://desktiles.app/download/DeskTiles-1.0.0.zip"
        sparkle:version="1"
        sparkle:shortVersionString="1.0.0"
        length="0"
        type="application/octet-stream"
        sparkle:edSignature="PLACEHOLDER_REPLACE_WITH_REAL_SIGNATURE"
      />
      <sparkle:minimumSystemVersion>13.0</sparkle:minimumSystemVersion>
    </item>
  </channel>
</rss>`

  return new NextResponse(appcast, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
