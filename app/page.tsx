import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import WhatItIs from '@/components/WhatItIs'
import ProductShowcase from '@/components/ProductShowcase'
import AutoTiles from '@/components/AutoTiles'
import Details from '@/components/Details'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Quote from '@/components/Quote'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <VideoSection />
      <WhatItIs />
      <ProductShowcase />
      <AutoTiles />
      <Details />
      <Pricing />
      <FAQ />
      <Quote />
      <Download />
      <Footer />
    </main>
  )
}
