'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-[480px]">
        <p className="text-[72px] font-bold text-[#D2D2D7] leading-none mb-6">500</p>
        <h1 className="text-[28px] font-semibold text-[#1D1D1F] tracking-[-0.02em] mb-3">
          Something went wrong
        </h1>
        <p className="text-[16px] text-[#6E6E73] mb-10 leading-relaxed">
          An unexpected error occurred. Try again or go back to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="bg-[#1D1D1F] text-white text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-[#3D3D3F] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-[#D2D2D7] text-[#1D1D1F] text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-[#F5F5F7] transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  )
}
