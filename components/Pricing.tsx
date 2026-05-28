'use client'

import { useState } from 'react'

// Replace these with your real Paddle product IDs
const PADDLE_PRODUCT_MONTHLY = 12001
const PADDLE_PRODUCT_YEARLY = 12002

function openPaddleCheckout(productId: number) {
  if (typeof window !== 'undefined' && (window as { Paddle?: { Checkout: { open: (cfg: { product: number }) => void } } }).Paddle) {
    (window as { Paddle: { Checkout: { open: (cfg: { product: number }) => void } } }).Paddle.Checkout.open({ product: productId })
  }
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  const plans = [
    {
      name: 'DeskTiles',
      price: 'Free',
      period: '',
      description: 'Perfect for getting started.',
      features: [
        'Up to 3 project tiles',
        'Collapse & expand',
        'Basic colors',
        'macOS native feel',
      ],
      cta: 'Download Free',
      paddleId: null as number | null,
      highlight: false,
    },
    {
      name: 'DeskTiles PRO',
      price: yearly ? '$39' : '$4.99',
      period: yearly ? '/year' : '/month',
      badge: yearly ? 'Save 35%' : null,
      description: 'For power users who live on their desktop.',
      features: [
        'Unlimited project tiles',
        'Custom tile colors',
        'Keyboard shortcuts',
        'Priority email support',
        'All future updates',
        'Resizable groups',
      ],
      cta: yearly ? 'Buy DeskTiles PRO — $39/yr' : 'Buy DeskTiles PRO — $4.99/mo',
      paddleId: yearly ? PADDLE_PRODUCT_YEARLY : PADDLE_PRODUCT_MONTHLY,
      highlight: true,
    },
  ]

  return (
    <section id="pricing" className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-4">
          Simple pricing.
        </h2>
        <p className="text-[17px] text-[#6E6E73] text-center mb-10">
          No subscriptions for storage. No data in the cloud. Just the app.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <span className={`text-[14px] ${!yearly ? 'text-[#1D1D1F] font-medium' : 'text-[#6E6E73]'}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              yearly ? 'bg-[#1D1D1F]' : 'bg-[#D2D2D7]'
            }`}
            aria-label="Toggle billing period"
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                yearly ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className={`text-[14px] ${yearly ? 'text-[#1D1D1F] font-medium' : 'text-[#6E6E73]'}`}>Yearly</span>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? 'border-[#1D1D1F] bg-[#1D1D1F] text-white'
                  : 'border-[#D2D2D7] bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className={`text-[15px] font-semibold ${plan.highlight ? 'text-white' : 'text-[#1D1D1F]'}`}>
                  {plan.name}
                </h3>
                {'badge' in plan && plan.badge && (
                  <span className="text-[11px] bg-[#AABAD6] text-[#1D1D1F] px-2 py-0.5 rounded-full font-medium">
                    {plan.badge}
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-[40px] font-bold tracking-[-0.03em] ${plan.highlight ? 'text-white' : 'text-[#1D1D1F]'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-[15px] ${plan.highlight ? 'text-white/60' : 'text-[#6E6E73]'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <p className={`text-[14px] mb-8 ${plan.highlight ? 'text-white/60' : 'text-[#6E6E73]'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[14px]">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${
                      plan.highlight ? 'bg-white/20 text-white' : 'bg-[#AABAD6]/30 text-[#1D1D1F]'
                    }`}>
                      ✓
                    </span>
                    <span className={plan.highlight ? 'text-white/80' : 'text-[#1D1D1F]'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  if (plan.paddleId) {
                    openPaddleCheckout(plan.paddleId)
                  } else {
                    window.location.href = '#download'
                  }
                }}
                className={`w-full py-3 rounded-full text-[15px] font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-white text-[#1D1D1F] hover:bg-[#F0F0F0]'
                    : 'bg-[#1D1D1F] text-white hover:bg-[#3D3D3F]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-[#6E6E73] text-center mt-6">
          30-day money back guarantee. One-time purchase option available on request.
        </p>
      </div>
    </section>
  )
}
