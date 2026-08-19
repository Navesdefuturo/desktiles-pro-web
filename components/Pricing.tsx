'use client'

export default function Pricing() {
  const plan = {
    name: 'DeskTiles',
    price: 'Free',
    description: 'Perfect for getting started.',
    features: [
      'Up to 3 project tiles',
      'Collapse & expand',
      'Basic colors',
      'macOS native feel',
    ],
    cta: 'Download Free',
  }

  return (
    <section id="pricing" className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-4">
          Simple pricing.
        </h2>
        <p className="text-[17px] text-[#6E6E73] text-center mb-14">
          No subscriptions for storage. No data in the cloud. Just the app.
        </p>

        {/* Plan */}
        <div className="max-w-[360px] mx-auto p-8 rounded-2xl border border-[#1D1D1F] bg-[#1D1D1F] text-white">
          <h3 className="text-[15px] font-semibold text-white mb-1">
            {plan.name}
          </h3>

          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-[40px] font-bold tracking-[-0.03em] text-white">
              {plan.price}
            </span>
          </div>

          <p className="text-[14px] mb-8 text-white/60">
            {plan.description}
          </p>

          <ul className="space-y-3 mb-8">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-[14px]">
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 bg-white/20 text-white">
                  ✓
                </span>
                <span className="text-white/80">{f}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              window.location.href = '#download'
            }}
            className="w-full py-3 rounded-full text-[15px] font-medium transition-colors bg-white text-[#1D1D1F] hover:bg-[#F0F0F0]"
          >
            {plan.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
