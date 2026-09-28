import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — DeskTiles',
  description: 'Terms of service for DeskTiles. One-time purchase, no subscription.',
  alternates: { canonical: 'https://desktiles.app/terms' },
}

const LAST_UPDATED = 'September 2026'

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">

          <h1 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-3">
            Terms of Service
          </h1>
          <p className="text-[14px] text-[#6E6E73] mb-16">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-10 text-[16px] text-[#3D3D3F] leading-relaxed">

            <p>
              These terms cover your purchase and use of DeskTiles, a macOS app.
              By buying or using DeskTiles you agree to them. If you don't agree, don't install
              or use the app.
            </p>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">What you're buying</h2>
              <p>
                A licence to install and use DeskTiles on Macs you own or control — this is a
                one-time purchase, not a subscription. The licence is personal: you can't resell,
                sublicense, or redistribute the app itself.
              </p>
              <p className="mt-4">
                DeskTiles is distributed through the <strong>Mac App Store</strong>.
                Purchases made there are subject to{' '}
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D1D1F] underline underline-offset-2"
                >
                  Apple's standard End User Licence Agreement (EULA)
                </a>
                , which applies alongside these terms.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">What DeskTiles does with your files</h2>
              <p>
                DeskTiles organises files that are already on your Mac. When you drag a file into
                a tile, the app moves it into a folder it manages; when you take it out, it moves
                back. It never uploads, copies to a server, or deletes your documents.
                See the{' '}
                <a href="/privacy" className="text-[#1D1D1F] underline underline-offset-2">Privacy Policy</a>
                {' '}for full details.
              </p>
              <p className="mt-4">
                You are responsible for backing up your own files, the same as with any other app
                on your Mac.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Refunds</h2>
              <p>
                DeskTiles is sold exclusively through the Mac App Store.
                Refund requests are handled by Apple at{' '}
                <a
                  href="https://reportaproblem.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D1D1F] underline underline-offset-2"
                >
                  reportaproblem.apple.com
                </a>
                .
              </p>
              <p className="mt-4">
                If you're unsure where to start, write to{' '}
                <a href="mailto:support@desktiles.app" className="text-[#1D1D1F] underline underline-offset-2">
                  support@desktiles.app
                </a>
                {' '}and we'll point you the right way.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">No warranty</h2>
              <p>
                DeskTiles is provided "as is". We've tested it carefully and stand behind it,
                but we don't promise it's free of bugs or that it will work uninterrupted on
                every Mac configuration. To the extent the law allows, we don't offer any other
                warranty, express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Limitation of liability</h2>
              <p>
                To the extent the law allows, our liability to you for any claim related to
                DeskTiles is limited to the amount you paid for it. We're not liable for indirect
                or consequential losses — lost data included, which is why backups matter
                regardless of which app you use.
              </p>
              <p className="mt-4">
                Nothing here limits liability the law doesn't allow us to limit.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Changes</h2>
              <p>
                We may update the app and these terms over time. If a future version of DeskTiles
                adds something that changes what's written here, we'll update this page before
                that version ships.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Governing law</h2>
              <p>
                These terms are governed by the laws of Spain. If you're a consumer in the EU,
                you also keep any protections your local consumer law gives you regardless of
                this clause.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Contact</h2>
              <p>
                Questions about these terms:{' '}
                <a href="mailto:support@desktiles.app" className="text-[#1D1D1F] underline underline-offset-2">
                  support@desktiles.app
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
