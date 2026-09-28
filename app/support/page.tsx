import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Support — DeskTiles',
  description: 'Get help with DeskTiles. Report a bug, ask a question, or get in touch.',
  alternates: { canonical: 'https://desktiles.app/support' },
}

const faqs = [
  {
    q: 'Where do my files go when I add them to a tile?',
    a: 'Each tile is a real folder on your Mac, visible in Finder at any time. Files you drop onto a tile are moved into that folder — they stay on your Mac, exactly where the tile keeps them.',
  },
  {
    q: 'What happens if I drag a file into a tile by mistake?',
    a: 'Dragging a file into a tile moves it there. To put it back where it was, just drag it out again. If you want a file to appear in a tile without moving it — for example, a shared or synced file that must stay put — drag an alias instead: hold ⌥⌘ while dragging from Finder, then drop the alias onto the tile.',
  },
  {
    q: 'What happens to my files if I delete DeskTiles?',
    a: 'Nothing changes. Your files stay in their folders. DeskTiles only keeps track of your tiles\' layout and appearance; deleting the app removes that configuration, not your documents.',
  },
  {
    q: 'Which macOS versions does DeskTiles support?',
    a: 'DeskTiles requires macOS 14 Sonoma or later. It is also compatible with macOS 15 Sequoia, macOS 26 Tahoe, and macOS 27 Golden Gate.',
  },
  {
    q: 'How do I request a refund?',
    a: 'DeskTiles is sold through the Mac App Store. Refund requests are handled by Apple at reportaproblem.apple.com.',
  },
]

export default function SupportPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">

          <h1 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-3">
            Support
          </h1>
          <p className="text-[16px] text-[#6E6E73] mb-16 leading-relaxed">
            We're here to help.
          </p>

          <div className="space-y-12">

            {/* Contact */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-6">Get in touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:support@desktiles.app"
                  className="block border border-[#D2D2D7]/60 rounded-2xl p-6 hover:bg-[#F5F5F7] transition-colors"
                >
                  <p className="text-[13px] font-semibold text-[#6E6E73] uppercase tracking-widest mb-2">Bug or issue</p>
                  <p className="text-[16px] font-medium text-[#1D1D1F] mb-1">support@desktiles.app</p>
                  <p className="text-[14px] text-[#6E6E73]">Something not working? We'll get back to you.</p>
                </a>
                <a
                  href="mailto:hello@desktiles.app"
                  className="block border border-[#D2D2D7]/60 rounded-2xl p-6 hover:bg-[#F5F5F7] transition-colors"
                >
                  <p className="text-[13px] font-semibold text-[#6E6E73] uppercase tracking-widest mb-2">Ideas or hello</p>
                  <p className="text-[16px] font-medium text-[#1D1D1F] mb-1">hello@desktiles.app</p>
                  <p className="text-[14px] text-[#6E6E73]">Feature ideas, feedback, or just saying hi.</p>
                </a>
              </div>
            </section>

            {/* Report a Bug */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">How to report a bug</h2>
              <div className="bg-[#F5F5F7] rounded-2xl p-6 space-y-3 text-[15px] text-[#3D3D3F] leading-relaxed">
                <p>The fastest way is from inside the app:</p>
                <p className="font-mono text-[14px] bg-white rounded-xl px-4 py-3 border border-[#D2D2D7]/60">
                  Help menu → Report a Bug
                </p>
                <p>
                  This opens a new email in your mail app with a small diagnostic log already
                  attached — app version, macOS version, and recent activity like menu and
                  activation events. It never contains file names, file contents, or anything
                  from your tiles.
                </p>
                <p>
                  You can open, review, or remove the attachment before sending, like any
                  other file. Nothing is sent until you press Send.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-6">Common questions</h2>
              <div className="divide-y divide-[#D2D2D7]/50">
                {faqs.map((item) => (
                  <div key={item.q} className="py-6">
                    <h3 className="text-[16px] font-medium text-[#1D1D1F] mb-2">{item.q}</h3>
                    <p className="text-[15px] text-[#6E6E73] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
