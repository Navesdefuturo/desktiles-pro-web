import type { WithContext, SoftwareApplication } from 'schema-dts'
import Navigation from '@/components/Navigation'

const jsonLd: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DeskTiles',
  description: 'Organize your Mac desktop by project, not by folder. Custom project tiles — expand, collapse, drag, rename. Native macOS. No cloud. No subscription.',
  url: 'https://desktiles.app',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS 14, macOS 15, macOS 26, macOS 27',
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'EUR',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
  },
  author: {
    '@type': 'Organization',
    name: 'DeskTiles',
    url: 'https://desktiles.app',
    email: 'hello@desktiles.app',
  },
  releaseNotes: 'https://desktiles.app/changelog',
}
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import WhatItIs from '@/components/WhatItIs'
import DesktopLiving from '@/components/DesktopLiving'
import ProductShowcase from '@/components/ProductShowcase'
import AutoTiles from '@/components/AutoTiles'
import PeopleSection from '@/components/PeopleSection'
import SocialProof from '@/components/SocialProof'
import LifestyleSection from '@/components/LifestyleSection'
import Details from '@/components/Details'
import PressSection from '@/components/PressSection'
import Pricing from '@/components/Pricing'
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
      <VideoSection />
      <WhatItIs />
      <DesktopLiving />
      <ProductShowcase />
      <AutoTiles />
      <PeopleSection />
      <SocialProof />
      <LifestyleSection />
      <Details />
      <PressSection />
      <Pricing />
      <FAQ />
      <Quote />
      <Download />
      <Newsletter />
      <Footer />
    </main>
  )
}
