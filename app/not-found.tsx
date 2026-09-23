import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found — DeskTiles',
}

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-[480px]">
          <p className="text-[72px] font-bold text-[#D2D2D7] leading-none mb-6">404</p>
          <h1 className="text-[28px] font-semibold text-[#1D1D1F] tracking-[-0.02em] mb-3">
            Page not found
          </h1>
          <p className="text-[16px] text-[#6E6E73] mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex bg-[#1D1D1F] text-white text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-[#3D3D3F] transition-colors"
          >
            Go home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
