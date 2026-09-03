'use client'

const features = [
  'Unlimited project tiles',
  'Custom colors, fonts & layouts',
  'All preset templates (Eisenhower, Designer, Developer…)',
  'Keyboard shortcuts & Quick Look',
  'Native drag & drop — real Finder files',
  'macOS Ventura, Sonoma & Sequoia',
  'All future updates included',
  'No cloud · No account · No subscription',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[640px] mx-auto">
        <h2 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-3">
          Simple pricing.
        </h2>
        <p className="text-[17px] text-[#6E6E73] text-center mb-16">
          One purchase. Everything included. Forever.
        </p>

        {/* Single pricing card */}
        <div className="rounded-3xl bg-[#1D1D1F] p-10 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#A896D8]/20 to-transparent rounded-full -translate-y-20 translate-x-20 pointer-events-none" />

          {/* Launch badge */}
          <div className="inline-flex items-center gap-2 bg-[#A896D8]/20 border border-[#A896D8]/30 rounded-full px-3.5 py-1 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A896D8]" />
            <span className="text-[12px] font-semibold text-[#A896D8] tracking-wide">Launch price</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-[72px] font-bold text-white tracking-[-0.04em] leading-none">€14.99</span>
          </div>
          <p className="text-[15px] text-white/40 mb-10">
            Price goes to €19.99 after launch &nbsp;·&nbsp; One-time purchase
          </p>

          {/* Features */}
          <ul className="space-y-4 mb-10">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[15px]">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5l2.5 2.5 5-5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-white/80">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#download"
            className="block w-full text-center bg-white text-[#1D1D1F] text-[16px] font-semibold py-4 rounded-2xl hover:bg-[#F0F0F0] transition-colors"
          >
            Get DeskTiles — €14.99
          </a>
        </div>

        {/* Guarantee */}
        <p className="text-[13px] text-[#8E8E93] text-center mt-8 leading-relaxed">
          30-day money-back guarantee, no questions asked.
          <br />
          Your files never leave your Mac.
        </p>
      </div>
    </section>
  )
}
