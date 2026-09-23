'use client'

import { useEffect, useRef, useState } from 'react'

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
      src="/desktiles-icon.png"
      alt="DeskTiles"
      width={100}
      height={100}
      className="mx-auto mb-6 rounded-[22px] shadow-lg"
    />
  )
}

function HeroDesktop() {
  return (
    <div className="relative w-full max-w-[960px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-[#A896D8]/15 via-[#AABAD6]/15 to-[#7BC4A8]/15 blur-3xl rounded-full scale-90 -translate-y-4" />
      <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.22)]">
        <img
          src="/screenshots/desktiles-hero-golden-gate-macos.jpg"
          alt="DeskTiles running on macOS Golden Gate — colored project tiles on the desktop with Golden Gate Bridge wallpaper"
          width={2000}
          height={1199}
          fetchPriority="high"
          className="w-full h-auto block"
        />
      </div>
    </div>
  )
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const rafRef = useRef<number>(0)
  const lastRef = useRef<number>(0)

  useEffect(() => {
    const tick = (now: number) => {
      if (lastRef.current === 0) lastRef.current = now
      if (now - lastRef.current >= 4000) {
        lastRef.current = now
        setVisible(false)
        setTimeout(() => {
          setCurrent((c) => (c + 1) % slides.length)
          lastRef.current = 0
          setVisible(true)
        }, 400)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
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

        {/* Apple-style progress indicator */}
        <div className="flex items-center justify-center gap-[7px] mb-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                lastRef.current = 0
                setVisible(false)
                setTimeout(() => { setCurrent(i); setVisible(true) }, 400)
              }}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? 28 : 6,
                height: 6,
                borderRadius: 9999,
                backgroundColor: '#E5E5EA',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                position: 'relative',
                overflow: 'hidden',
                transition: 'width 0.35s ease',
              }}
            >
              {i === current && (
                <span
                  key={current}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#1D1D1F',
                    transformOrigin: 'left center',
                    animation: 'pillFill 4s linear forwards',
                  }}
                />
              )}
            </button>
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
