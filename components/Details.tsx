'use client'

import Image from 'next/image'

const cards = [
  {
    title: 'Edit Style',
    desc: 'Colors, fonts, tile size, header shape, borders, opacity. Customize every detail until your desktop feels like yours.',
    img: '/screenshots/details/dt-edit-style.png',
  },
  {
    title: 'Layout presets',
    desc: 'Eisenhower matrix, rows, columns, free layout. Start organized from day one.',
    img: '/screenshots/details/dt-layout-presets.png',
  },
  {
    title: 'Native macOS',
    desc: 'Quick Look, drag & drop, right-click menus, keyboard shortcuts. Zero learning curve.',
    img: '/screenshots/details/dt-native-macos.png',
  },
  {
    title: 'Instant animations',
    desc: 'GPU-accelerated. Every expand and collapse is fluid and immediate.',
    img: '/screenshots/details/dt-animations.png',
  },
  {
    title: 'No cloud. Ever.',
    desc: 'Everything stays on your Mac. No sync, no account, no server. Your data is yours.',
    img: '/screenshots/details/dt-no-cloud.png',
  },
  {
    title: 'Real files',
    desc: 'No database, no hidden container. Each tile is a real folder on your disk you can open in Finder any time.',
    img: '/screenshots/details/dt-real-files.png',
  },
  {
    title: 'Full keyboard',
    desc: 'Navigate, expand, open, rename — all from the keyboard. Power users feel right at home.',
    img: '/screenshots/details/dt-keyboard.png',
  },
  {
    title: 'Always up to date',
    desc: 'Built and tested on the latest macOS. Runs on Sonoma, Sequoia, Tahoe & Golden Gate.',
    img: '/screenshots/details/dt-update.webp',
  },
]

export default function Details() {
  return (
    <section className="py-[60px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-4">
          Built for people who live
          <br />
          on their desktop.
        </h2>
        <p className="text-[17px] text-[#6E6E73] text-center mb-12 max-w-[400px] mx-auto">
          Every feature earned its place. Nothing here by accident.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-default"
            >
              {/* Background image */}
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Always-on gradient for title legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title — always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-[15px] font-bold text-white leading-tight mb-0 group-hover:mb-2 transition-all duration-300">
                  {card.title}
                </h3>
                {/* Description — slides in on hover */}
                <p className="text-[12px] text-white/85 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
