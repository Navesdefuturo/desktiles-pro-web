import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You're subscribed — DeskTiles",
  description: 'Thanks for subscribing to DeskTiles updates.',
}

export default function SubscribedPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="max-w-[420px] mx-auto text-center">
        <Image
          src="/desktiles-icon.png"
          alt="DeskTiles"
          width={72}
          height={72}
          className="mx-auto mb-8 rounded-[16px]"
        />

        <h1 className="font-bold tracking-[-0.03em] text-[#1D1D1F] mb-3 text-[28px] leading-[1.1]">
          You&apos;re subscribed!
        </h1>

        <p className="text-[15px] text-[#6E6E73] mb-10 leading-relaxed">
          Thanks for joining. We&apos;ll email you when there&apos;s something new —
          nothing more, nothing less.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#1D1D1F] text-white px-7 py-3 rounded-full text-[15px] font-medium hover:bg-[#3D3D3F] transition-colors"
        >
          Back to DeskTiles
        </Link>
      </div>
    </main>
  )
}
