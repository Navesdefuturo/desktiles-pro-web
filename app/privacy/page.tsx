import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Privacy Policy — DeskTiles',
  description: 'DeskTiles privacy policy. The app collects no data. Everything stays on your Mac.',
}

const LAST_UPDATED = 'September 2026'

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">

          <h1 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-3">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-[#8E8E93] mb-16">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-12 text-[16px] text-[#3D3D3F] leading-relaxed">

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Who we are</h2>
              <p>
                DeskTiles is developed and operated by{' '}
                <strong>Cesar Pedro Julian Ibañez</strong>, based in Barcelona, Spain.
                You can reach us at{' '}
                <a href="mailto:hello@desktiles.app" className="text-[#1D1D1F] underline underline-offset-2">
                  hello@desktiles.app
                </a>{' '}
                or by post at: Apartado de correos 6015, 08022 Barcelona, Spain.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">The short version</h2>
              <div className="bg-[#F5F5F7] rounded-2xl p-6 space-y-3">
                <p className="flex gap-3"><span>✓</span><span>The DeskTiles app collects <strong>no data</strong>. Everything runs on your Mac. Nothing leaves your device.</span></p>
                <p className="flex gap-3"><span>✓</span><span>This website sets <strong>no tracking cookies</strong> and collects no personal information from visitors.</span></p>
                <p className="flex gap-3"><span>✓</span><span>When you buy through the <strong>App Store</strong>, Apple processes your payment. We receive no personal data from Apple beyond what the App Store provides.</span></p>
              </div>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">The DeskTiles app</h2>
              <p>
                DeskTiles runs entirely on your Mac. It makes no network requests, has no backend server,
                requires no account, and sends no telemetry or analytics. Your files, your project names,
                and your tile configuration never leave your device.
              </p>
              <p className="mt-4">
                All data the app stores lives in your Mac's Application Support folder, under your
                user account. You can inspect or delete it at any time in Finder.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">This website</h2>
              <p>
                The desktiles.app website does not use advertising trackers or third-party cookies.
                If we add analytics in the future, we will use a privacy-first tool (such as Plausible)
                that collects no personal data and sets no cookies.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Purchasing</h2>
              <p>
                DeskTiles is sold exclusively through the{' '}
                <strong>Apple App Store</strong>. Payments are processed entirely by Apple.
                We do not receive or store your payment details, card number, or billing address.
                Apple's privacy policy governs any data collected during the purchase.
              </p>
              <p className="mt-4">
                For questions about a purchase, contact Apple Support or email us at{' '}
                <a href="mailto:hello@desktiles.app" className="text-[#1D1D1F] underline underline-offset-2">
                  hello@desktiles.app
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Email contact</h2>
              <p>
                If you email us, we receive your address and message. We use it only to respond to you.
                We do not add you to any mailing list or share your email with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Your rights (GDPR)</h2>
              <p>
                If you are in the European Economic Area, you have the right to access, correct, or
                delete any personal data we hold about you. Given the minimal data we handle, a
                single email to{' '}
                <a href="mailto:hello@desktiles.app" className="text-[#1D1D1F] underline underline-offset-2">
                  hello@desktiles.app
                </a>{' '}
                is enough to exercise any of these rights.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Changes</h2>
              <p>
                If we ever change this policy in a meaningful way, we'll update the date at the top
                and note it in our release notes. Given our zero-data approach, we don't expect this
                to happen often.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Contact</h2>
              <p>
                For any privacy question:{' '}
                <a href="mailto:hello@desktiles.app" className="text-[#1D1D1F] underline underline-offset-2">
                  hello@desktiles.app
                </a>
              </p>
              <p className="mt-4 text-[#6E6E73]">
                Cesar Pedro Julian Ibañez<br />
                Apartado de correos 6015<br />
                08022 Barcelona, Spain
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
