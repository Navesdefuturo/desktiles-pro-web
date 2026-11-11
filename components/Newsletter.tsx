'use client'

import Script from 'next/script'
import { useState } from 'react'

export default function Newsletter() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-[100px] px-6 text-center border-t border-[#D2D2D7]/40 bg-[#FAFAFA]">
      <div className="max-w-[480px] mx-auto">
        <h2 className="font-bold tracking-[-0.03em] text-[#1D1D1F] mb-3 text-[28px] leading-[1.1]">
          Stay in the loop
        </h2>
        <p className="text-[15px] text-[#6E6E73] mb-6 leading-relaxed">
          News about DeskTiles from{' '}
          <a href="https://pepemundo.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#1D1D1F] transition-colors">
            Pepemundo
          </a>
          , the software studio behind it, and a heads-up when we launch a new app.
          No spam, unsubscribe anytime.
        </p>

        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center min-h-[44px] bg-[#1D1D1F] text-white text-[15px] font-medium px-7 py-3 rounded-full hover:bg-[#3D3D3F] transition-colors"
          >
            Subscribe
          </button>
        ) : (
          <>
            <iframe
              data-skip-lazy=""
              src="https://news.pepemundo.com/f/1BD1kvZRad8"
              frameBorder="0"
              scrolling="no"
              width="100%"
              className="ipz-iframe"
              title="Newsletter signup form"
            />
            <Script
              src="https://assets.ipzmarketing.com/assets/signup_form/iframe_v1.js"
              strategy="lazyOnload"
            />
          </>
        )}

        <p className="text-[11px] text-[#6E6E73] mt-4 leading-relaxed">
          By subscribing you agree to receive occasional emails from Pepemundo about DeskTiles
          and our other apps. No spam. Unsubscribe at any time. Opening the form loads Google
          reCAPTCHA to protect it from spam.{' '}
          <a href="/privacy" className="underline underline-offset-2 hover:text-[#1D1D1F]">Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}
