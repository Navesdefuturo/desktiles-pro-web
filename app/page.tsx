import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DeskTiles — Coming soon',
  description: 'DeskTiles is coming soon to the Mac App Store.',
  robots: { index: false, follow: false },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="text-center max-w-[420px]">

        <Image
          src="/desktiles-icon.png"
          alt="DeskTiles"
          width={80}
          height={80}
          className="mx-auto mb-8 rounded-[18px] shadow-md"
          priority
        />

        <h1 className="text-[28px] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-3">
          DeskTiles
        </h1>

        <p className="text-[17px] text-[#6E6E73] leading-relaxed mb-10">
          Coming soon to the Mac App Store.
        </p>

        <a
          href="mailto:hello@desktiles.app"
          className="text-[15px] text-[#1D1D1F] underline underline-offset-2 hover:text-[#6E6E73] transition-colors"
        >
          hello@desktiles.app
        </a>

      </div>

      <footer className="absolute bottom-8 flex items-center gap-6 text-[13px] text-[#6E6E73]">
        <Link href="/privacy" className="hover:text-[#1D1D1F] transition-colors">Privacy</Link>
        <Link href="/support" className="hover:text-[#1D1D1F] transition-colors">Support</Link>
      </footer>
    </main>
  )
}
