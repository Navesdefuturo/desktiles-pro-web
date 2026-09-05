'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is it really a one-time purchase?',
    a: 'Yes. €14.99, one time. No subscription, no monthly fee. All future updates are included in the purchase price.',
  },
  {
    q: 'What macOS versions does it support?',
    a: 'DeskTiles runs on macOS Sonoma (14), Sequoia (15), Tahoe (26) and Golden Gate (27). Built and tested on the latest macOS.',
  },
  {
    q: 'Does it work with my iCloud / Dropbox files?',
    a: 'Yes — with one thing worth knowing. A tile keeps its files together in one real folder on your Mac, so dropping a file into a tile moves it there: a file from iCloud Drive, Dropbox or OneDrive leaves that folder and stops syncing. For anything that has to stay put — shared folders, synced projects — drop an alias instead (⌥⌘-drag it from Finder). The alias sits in the tile, opens the file with a double-click, and the original never moves.',
  },
  {
    q: 'Does my data go anywhere?',
    a: 'No. Everything stays on your Mac. DeskTiles has no server, no account, no telemetry. Your files are yours.',
  },
  {
    q: 'What\'s a "tile" exactly?',
    a: 'A tile is a project container that lives on your desktop. It groups real files together — not copies, not shortcuts, the actual files. You can expand it to see all the files, or collapse it into a clean pill that takes almost no space.',
  },
  {
    q: 'What if I change my mind?',
    a: '30-day money-back guarantee, no questions asked. Just email hello@desktiles.app.',
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#D2D2D7]/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-[16px] font-medium text-[#1D1D1F]">{q}</span>
        <span
          className="text-[#6E6E73] flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-[15px] text-[#6E6E73] leading-relaxed pb-5 max-w-[580px]">
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[720px] mx-auto">
        <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-16">
          Questions
        </h2>
        <div>
          {faqs.map((item) => (
            <Item key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
