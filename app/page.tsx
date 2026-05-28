import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhatItIs from '@/components/WhatItIs'
import ProductShowcase from '@/components/ProductShowcase'
import AutoTiles from '@/components/AutoTiles'
import Details from '@/components/Details'
import Pricing from '@/components/Pricing'
import Quote from '@/components/Quote'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WhatItIs />
      <ProductShowcase />
      <AutoTiles />
      <Details />
      <Pricing />
      <Quote />
      <Download />
      <Footer />
    </main>
  )
}
