import Navigation from '@/components/Navigation'

const APP_STORE_URL = 'https://apps.apple.com/app/id6817085786'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://desktiles.app/#website',
      name: 'DeskTiles',
      url: 'https://desktiles.app',
      publisher: { '@id': 'https://desktiles.app/#org' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://desktiles.app/#org',
      name: 'Pepemundo',
      url: 'https://pepemundo.com',
      logo: 'https://pepemundo.com/press/pepemundo-mark-black.png',
      email: 'hello@pepemundo.com',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'DeskTiles',
      description: 'Organize your Mac desktop by project, not by folder. Custom project tiles — expand, collapse, drag, rename. Native macOS. No cloud. No subscription.',
      url: 'https://desktiles.app',
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'macOS 14, macOS 15, macOS 26, macOS 27',
      offers: {
        '@type': 'Offer',
        price: '14.99',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
      },
      publisher: { '@id': 'https://desktiles.app/#org' },
      releaseNotes: 'https://desktiles.app/changelog',
      sameAs: [
        'https://www.youtube.com/@desktilesapp',
        'https://www.instagram.com/desktilesapp',
        'https://x.com/desktilesapp',
        'https://www.tiktok.com/@desktiles',
      ],
    },
  ],
}
import Hero from '@/components/Hero'
import ScrollScrub from '@/components/ScrollScrub'
import VideoSection from '@/components/VideoSection'
import WhatItIs from '@/components/WhatItIs'
import DesktopLiving from '@/components/DesktopLiving'
import ProductShowcase from '@/components/ProductShowcase'
import AutoTiles from '@/components/AutoTiles'
import PeopleSection from '@/components/PeopleSection'
// import SocialProof from '@/components/SocialProof'   // pendiente: reactivar cuando haya reseñas reales
import LifestyleSection from '@/components/LifestyleSection'
import Details from '@/components/Details'
// import PressSection from '@/components/PressSection'  // pendiente: reactivar cuando haya cobertura de prensa
import Pricing from '@/components/Pricing'
import LifestyleMid from '@/components/LifestyleMid'
import FAQ from '@/components/FAQ'
import Quote from '@/components/Quote'
import Download from '@/components/Download'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <Hero />
      <ScrollScrub />
      <VideoSection />
      <WhatItIs />
      <DesktopLiving />
      <ProductShowcase />
      <AutoTiles />
      <PeopleSection />
      {/* <SocialProof /> */}
      <LifestyleSection />
      <Details />
      {/* <PressSection /> */}
      <Pricing />
      <LifestyleMid />
      <FAQ />
      <Quote />
      <Download />
      <Newsletter />
      <Footer />
    </main>
  )
}
