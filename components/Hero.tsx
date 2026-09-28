'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const slides = [
  {
    line1: 'Files everywhere.',
    line2: 'Not anymore.',
    sub: 'Tiles for a tidy Mac desktop.',
    body: 'Turn a cluttered desktop into calm, colorful tiles. Drop files in, collapse them to a slim bar, and find everything at a glance — no cloud, no account.',
  },
  {
    line1: 'Make it yours.',
    line2: 'Down to every tile.',
    sub: 'Your colors, your style.',
    body: 'Colors, palettes, fonts, corner shapes and transparency for every tile. Copy a style and paste it onto others in one click.',
  },
  {
    line1: 'Below your windows.',
    line2: 'Out of the way.',
    sub: 'Always there when you need it.',
    body: 'Lives on your desktop, below your apps. Show Desktop keeps working the way you expect. No cloud, no account — nothing ever leaves your Mac.',
  },
]

function AppIcon() {
  return (
    <Image
      src="/desktiles-icon.png"
      alt="DeskTiles"
      width={100}
      height={100}
      className="mx-auto mb-6 rounded-[22px] shadow-lg"
      priority
    />
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
      if (now - lastRef.current >= 13000) {
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
    <section className="flex flex-col items-center justify-center pt-16 pb-8 px-6 overflow-hidden">
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

        <p className="text-[13px] text-[#6E6E73] mb-6">
          macOS Sonoma · Sequoia · Tahoe · Golden Gate &nbsp;·&nbsp; One-time purchase &nbsp;·&nbsp; No cloud
        </p>

        <p className="text-[14px] text-[#6E6E73] italic mb-8">
          "It doesn't feel like a tool anymore. It's just how the Mac works."
        </p>

      </div>
    </section>
  )
}
