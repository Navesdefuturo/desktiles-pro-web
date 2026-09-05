'use client'

import { useEffect, useState } from 'react'

const slides = [
  {
    line1: 'Projects.',
    line2: 'Not folders.',
    sub: 'Desktop. Upgraded.',
    body: 'Mac gives you folders. DeskTiles gives you projects — one tile, everything you need, exactly where you left it.',
  },
  {
    line1: 'Ok, think different…',
    line2: 'But organize better!',
    sub: 'Way better.',
    body: 'macOS organizes your files. DeskTiles organizes your work. Stacks sorts by type. DeskTiles sorts by you.',
  },
  {
    line1: 'The Desktop, Reimagined.',
    line2: 'Your Rules. Your Way.',
    sub: 'From Chaos to Clarity.',
    body: 'Custom tiles, your colors, your layouts. A desktop that works the way you think — not the way they decided.',
  },
]

function AppIcon() {
  return (
    <img
      src="/icon.png"
      alt="DeskTiles"
      width={100}
      height={100}
      className="mx-auto mb-6 rounded-[22px] shadow-lg"
    />
  )
}

function HeroDesktop() {
  return (
    <div className="relative w-full max-w-[920px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-[#A896D8]/20 via-[#AABAD6]/20 to-[#7BC4A8]/20 blur-3xl rounded-full scale-90 -translate-y-4" />
      <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.18)] border border-white/60">
        {/* macOS titlebar */}
        <div className="h-8 bg-[#EBEBEB] flex items-center px-4 gap-1.5 border-b border-[#D8D8D8]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-auto text-[11px] text-[#8E8E93] font-medium">Desktop — Sequoia</span>
        </div>
        {/* Desktop surface */}
        <div className="bg-gradient-to-br from-[#E2EBF5] via-[#D6E2EF] to-[#C6D5E8] p-6 min-h-[300px] relative flex flex-col gap-3">
          {/* Expanded tile */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-xl overflow-hidden w-full max-w-[360px]">
            <div className="px-4 py-2.5 flex items-center gap-2.5 bg-[#AABAD6]/40 border-b border-[#AABAD6]/30">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7BA8C4]" />
              <span className="text-[12px] font-semibold text-[#1D1D1F]">Website Redesign</span>
              <span className="ml-auto text-[10px] text-[#6E6E73]">5 files</span>
            </div>
            <div className="px-4 py-3 flex gap-3.5">
              {[
                { icon: '📄', name: 'Brief.pdf' },
                { icon: '📊', name: 'Budget.xlsx' },
                { icon: '🖼️', name: 'Mockup.png' },
                { icon: '📝', name: 'Notes.txt' },
              ].map((f) => (
                <div key={f.name} className="text-center">
                  <div className="w-10 h-10 bg-white/90 rounded-xl mb-1 flex items-center justify-center text-lg shadow-sm">{f.icon}</div>
                  <span className="text-[8px] text-[#6E6E73]">{f.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Collapsed pills */}
          <div className="rounded-full bg-[#E0EBF5]/80 border border-[#AABAD6]/50 px-4 py-2 flex items-center gap-2.5 w-fit shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#7BA8C4]" />
            <span className="text-[12px] font-semibold text-[#1D1D1F]">Client A</span>
            <span className="ml-2 text-[10px] text-[#6E6E73]">8 files</span>
          </div>
          <div className="rounded-full bg-[#EDE8F8]/80 border border-[#C5B8E8]/50 px-4 py-2 flex items-center gap-2.5 w-fit shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#A896D8]" />
            <span className="text-[12px] font-semibold text-[#1D1D1F]">Personal</span>
            <span className="ml-2 text-[10px] text-[#6E6E73]">3 files</span>
          </div>
          <div className="rounded-full bg-[#F5EFE0]/80 border border-[#D6C870]/50 px-4 py-2 flex items-center gap-2.5 w-fit shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#C8B060]" />
            <span className="text-[12px] font-semibold text-[#1D1D1F]">Research</span>
            <span className="ml-2 text-[10px] text-[#6E6E73]">12 files</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length)
        setVisible(true)
      }, 500)
    }, 7500)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-6 overflow-hidden">
      <div className="max-w-[1100px] w-full mx-auto text-center">

        <AppIcon />

        {/* Carousel headline */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            marginBottom: '1.25rem',
          }}
        >
          <h1
            className="font-bold tracking-[-0.04em] leading-[1.05] mb-1"
            style={{ fontSize: 'clamp(26px, 4.2vw, 62px)' }}
          >
            <span style={{ color: '#1D1D1F' }}>{slide.line1}</span>
          </h1>
          <h1
            className="font-bold tracking-[-0.04em] leading-[1.05]"
            style={{ fontSize: 'clamp(26px, 4.2vw, 62px)' }}
          >
            <span className="text-animated-gradient">{slide.line2}</span>
          </h1>
        </div>

        {/* Sub */}
        <p
          className="font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-4"
          style={{
            fontSize: 'clamp(18px, 2.6vw, 32px)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.5s ease 0.1s',
          }}
        >
          {slide.sub}
        </p>

        {/* Body */}
        <p
          className="text-[17px] text-[#6E6E73] max-w-[520px] mx-auto mb-8 leading-relaxed"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.5s ease 0.15s',
          }}
        >
          {slide.body}
        </p>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false)
                setTimeout(() => { setCurrent(i); setVisible(true) }, 400)
              }}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 9999,
                background: i === current ? '#1D1D1F' : '#D2D2D7',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* CTAs */}
        <p className="text-[12px] font-semibold text-[#92620A] uppercase tracking-wide mb-3">
          Launch offer · Limited time
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
          <a
            href="#pricing"
            className="bg-[#1D1D1F] text-white text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-[#3D3D3F] transition-colors"
          >
            Get DeskTiles — €14.99
          </a>
          <a
            href="#highlights"
            className="border border-[#D2D2D7] text-[#1D1D1F] text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-[#F5F5F7] transition-colors"
          >
            See How it Works
          </a>
        </div>

        <p className="text-[13px] text-[#8E8E93] mb-20">
          macOS Sonoma · Sequoia · Tahoe · Golden Gate &nbsp;·&nbsp; One-time purchase &nbsp;·&nbsp; No cloud
        </p>

        <HeroDesktop />
      </div>
    </section>
  )
}
