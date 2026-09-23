import Script from 'next/script'

export default function Newsletter() {
  return (
    <section className="py-[100px] px-6 text-center border-t border-[#D2D2D7]/40 bg-[#FAFAFA]">
      <div className="max-w-[480px] mx-auto">
        <h2 className="font-bold tracking-[-0.03em] text-[#1D1D1F] mb-3 text-[28px] leading-[1.1]">
          Stay in the loop
        </h2>
        <p className="text-[15px] text-[#6E6E73] mb-2 leading-relaxed">
          New features for DeskTiles, and a heads-up when we launch new apps.
          No spam, unsubscribe anytime.
        </p>

        <iframe
          data-skip-lazy=""
          src="https://desktiles.ipzmarketing.com/f/9llm_Hz7y4w"
          frameBorder="0"
          scrolling="no"
          width="100%"
          className="ipz-iframe"
        />
        <Script
          src="https://assets.ipzmarketing.com/assets/signup_form/iframe_v1.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  )
}
