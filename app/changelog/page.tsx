import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Release Notes — DeskTiles',
  description: 'What\'s new in DeskTiles. Version history and release notes.',
  alternates: { canonical: 'https://desktiles.app/changelog' },
}

const releases = [
  {
    version: '1.0',
    date: 'Coming soon',
    label: 'Initial release',
    notes: [
      'Project tiles — expand, collapse, drag and rename',
      'Save & Recall — reopen every file and folder in one click',
      'Auto Tiles — Smart, Eisenhower and Organize layouts',
      'Quick Look preview without opening apps',
      'Layout gallery with presets',
      'Native macOS design — menu bar, right-click, keyboard shortcuts',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">

          <h1 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-3">
            Release Notes
          </h1>
          <p className="text-[16px] text-[#6E6E73] mb-16">
            What's new in DeskTiles.
          </p>

          <div className="space-y-16">
            {releases.map((r) => (
              <div key={r.version} className="border-t border-[#D2D2D7]/60 pt-10">
                <div className="flex items-baseline gap-4 mb-6">
                  <h2 className="text-[22px] font-semibold text-[#1D1D1F] tracking-[-0.02em]">
                    Version {r.version}
                  </h2>
                  <span className="text-[13px] text-[#6E6E73]">{r.date}</span>
                  {r.label && (
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#92620A] bg-[#FFF8ED] px-2.5 py-0.5 rounded-full">
                      {r.label}
                    </span>
                  )}
                </div>
                <ul className="space-y-3">
                  {r.notes.map((note, i) => (
                    <li key={i} className="flex gap-3 text-[16px] text-[#3D3D3F] leading-relaxed">
                      <span className="text-[#A896D8] mt-1 shrink-0">·</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
