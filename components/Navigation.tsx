'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Auto Tiles', href: '#auto-tiles' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-[#D2D2D7]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-[#1D1D1F] font-semibold text-[15px] tracking-[-0.01em] shrink-0">
          DeskTiles
        </span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="hidden md:inline-flex bg-[#1D1D1F] text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-[#3D3D3F] transition-colors shrink-0"
        >
          Download Free
        </a>

        <button
          className="md:hidden text-[#1D1D1F] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#D2D2D7]/40 px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] text-[#1D1D1F]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="bg-[#1D1D1F] text-white text-[15px] font-medium px-4 py-2.5 rounded-full text-center"
          >
            Download Free
          </a>
        </div>
      )}
    </nav>
  )
}
