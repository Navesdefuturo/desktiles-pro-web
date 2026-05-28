'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-[#D2D2D7]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-[#1D1D1F] font-semibold text-[15px] tracking-[-0.01em]">
          DeskTiles
        </span>
        <div className="flex items-center gap-4">
          <a
            href="#pricing"
            className="text-[#6E6E73] text-sm hover:text-[#1D1D1F] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#download"
            className="bg-[#1D1D1F] text-white text-sm px-4 py-1.5 rounded-full hover:bg-[#3D3D3F] transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}
