'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const HEADLINE_SETS = [
  { line1: 'Projects.', line2: 'Not folders.', tagline: 'Desktop. Upgraded.' },
  { line1: 'Ok, think different…', line2: 'But organize better!', tagline: 'Way better.' },
  { line1: 'The Desktop, Reimagined.', line2: 'From Chaos to Clarity.', tagline: 'Your Desktop. Your Way.' },
]

function HeadlineCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HEADLINE_SETS.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const { line1, line2, tagline } = HEADLINE_SETS[index]

  return (
    <>
      {/* Massive headline — DockDoor style */}
      <h1 className="font-bold tracking-[-0.05em] text-[#1D1D1F] leading-[0.95] mb-3 transition-opacity duration-500"
          style={{ fontSize: 'clamp(72px, 11vw, 140px)' }}>
        {line1}
      </h1>
      <h1 className="font-bold tracking-[-0.05em] leading-[0.95] mb-8 transition-opacity duration-500"
          style={{ fontSize: 'clamp(72px, 11vw, 140px)', color: '#7BA8C4' }}>
        {line2}
      </h1>

      {/* Sub */}
      <p className="font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-5 transition-opacity duration-500"
         style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
        {tagline}
      </p>
    </>
  )
}

function AppIcon() {
  return (
    <div className="w-24 h-24 mx-auto mb-8 rounded-[22px] shadow-2xl overflow-hidden">
      <Image src="/desktiles-icon.png" alt="DeskTiles icon" width={96} height={96} priority />
    </div>
  )
}

function HeroDesktop() {
  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-[#AABAD6]/20 blur-3xl rounded-full scale-75 -translate-y-4" />

      <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)] border border-white/60">
        {/* macOS chrome */}
        <div className="h-8 bg-[#ECECEC] flex items-center px-4 gap-1.5 border-b border-[#D8D8D8]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-auto text-[11px] text-[#8E8E93] font-medium">Desktop</span>
        </div>

        {/* Desktop content */}
        <div className="bg-gradient-to-br from-[#E4EBF5] via-[#D8E4F0] to-[#C8D8E8] p-6 min-h-[320px] relative flex flex-col gap-3">

          {/* Work tile — expanded */}
          <div className="rounded-2xl bg-white/65 backdrop-blur-sm border border-white/80 shadow-lg overflow-hidden w-full max-w-[340px]">
            <div className="px-4 py-2.5 flex items-center gap-2.5 bg-[#AABAD6]/35 border-b border-[#AABAD6]/25">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7BA8C4]" />
              <span className="text-[12px] font-semibold text-[#1D1D1F]">Work</span>
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
                  <div className="w-10 h-10 bg-white/80 rounded-xl mb-1 flex items-center justify-center text-lg shadow-sm">{f.icon}</div>
                  <span className="text-[8px] text-[#6E6E73]">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client A tile — collapsed pill */}
          <div className="rounded-full bg-[#E0EBF5]/80 border border-[#AABAD6]/50 px-4 py-2 flex items-center gap-2.5 w-fit shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#7BA8C4]" />
            <span className="text-[12px] font-semibold text-[#1D1D1F]">Client A</span>
            <span className="ml-2 text-[10px] text-[#6E6E73]">8 files</span>
          </div>

          {/* Personal tile — collapsed pill */}
          <div className="rounded-full bg-[#EDE8F8]/80 border border-[#C5B8E8]/50 px-4 py-2 flex items-center gap-2.5 w-fit shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#A896D8]" />
            <span className="text-[12px] font-semibold text-[#1D1D1F]">Personal</span>
            <span className="ml-2 text-[10px] text-[#6E6E73]">3 files</span>
          </div>

          {/* Research tile — collapsed pill */}
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
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-14 px-6 overflow-hidden">
      <div className="max-w-[1100px] w-full mx-auto text-center">

        {/* App icon */}
        <AppIcon />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#D2D2D7]/70 rounded-full px-4 py-1.5 mb-6 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
          <span className="text-[13px] text-[#1D1D1F]">DeskTiles — Available now</span>
        </div>

        <HeadlineCarousel />

        {/* Body */}
        <p className="text-[17px] text-[#6E6E73] max-w-[500px] mx-auto mb-10 leading-relaxed">
          DeskTiles lets you group real Mac files into expandable desktop tiles
          designed for focus, context, and fast access.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <a
            href="#download"
            className="bg-[#1D1D1F] text-white px-8 py-3.5 rounded-full text-[16px] font-medium hover:bg-[#3D3D3F] transition-colors"
          >
            Download Free
          </a>
          <a
            href="#how-it-works"
            className="border border-[#D2D2D7] text-[#1D1D1F] px-8 py-3.5 rounded-full text-[16px] font-medium hover:bg-[#F5F5F5] transition-colors"
          >
            See How it Works
          </a>
        </div>

        <p className="text-[13px] text-[#6E6E73] mb-20">
          macOS 13 Ventura and later &nbsp;·&nbsp; No cloud
        </p>

        {/* Hero desktop mockup */}
        <HeroDesktop />

      </div>
    </section>
  )
}
