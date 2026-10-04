import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Legal Notice — DeskTiles',
  description: 'Legal notice for desktiles.app, in compliance with Spanish Law 34/2002 (LSSI-CE).',
  alternates: { canonical: 'https://desktiles.app/legal' },
}

export default function LegalPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">

          <h1 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-3">
            Legal Notice
          </h1>
          <p className="text-[14px] text-[#6E6E73] mb-16">
            In compliance with Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE).
          </p>

          <div className="space-y-10 text-[16px] text-[#3D3D3F] leading-relaxed">

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Website owner</h2>
              <ul className="space-y-3 text-[15px]">
                <li><span className="font-semibold text-[#1D1D1F]">Name:</span> Cesar Pedro Julian Ibañez</li>
                <li><span className="font-semibold text-[#1D1D1F]">NIF:</span> 46343787Y</li>
                <li><span className="font-semibold text-[#1D1D1F]">Address:</span> Calle Balmes 421, Apartado de correos 6015, 08022 Barcelona, Spain</li>
                <li>
                  <span className="font-semibold text-[#1D1D1F]">Email: </span>
                  <a href="mailto:hello@desktiles.app" className="text-[#1D1D1F] underline underline-offset-2">
                    hello@desktiles.app
                  </a>
                </li>
                <li><span className="font-semibold text-[#1D1D1F]">Activity:</span> Development and distribution of software for macOS.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Purpose of this website</h2>
              <p>
                desktiles.app is a promotional website for DeskTiles, a macOS app distributed exclusively
                through the Apple App Store. This website does not process payments directly.
                All purchases are handled by Apple under their own terms and privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Intellectual property</h2>
              <p>
                The content of this website — including texts, images, graphics, and software — is
                the property of the website owner or licensed for use here. Reproduction, distribution,
                or modification without prior written permission is not permitted.
              </p>
              <p className="mt-4">
                Mac, macOS, Finder, and the Apple logo are trademarks of Apple Inc.
                DeskTiles is an independent product and is not affiliated with or endorsed by Apple Inc.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Limitation of liability</h2>
              <p>
                The owner of this website is not responsible for damages arising from the use of
                this website or from decisions made based on the information it contains.
                Links to third-party websites are provided for reference only; we are not responsible
                for their content or privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Applicable law</h2>
              <p>
                This notice is governed by Spanish law. Any disputes arising from the use of
                this website shall be submitted to the courts of Barcelona, Spain,
                unless mandatory consumer law in your country requires otherwise.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
