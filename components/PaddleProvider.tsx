'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Paddle: {
      Setup: (config: { vendor: number }) => void
      Checkout: {
        open: (config: { product: number; email?: string }) => void
      }
    }
  }
}

export default function PaddleProvider() {
  useEffect(() => {
    const initPaddle = () => {
      if (typeof window !== 'undefined' && window.Paddle) {
        // Replace 12345 with your real Paddle vendor ID
        window.Paddle.Setup({ vendor: 12345 })
      }
    }

    if (window.Paddle) {
      initPaddle()
    } else {
      window.addEventListener('load', initPaddle)
      return () => window.removeEventListener('load', initPaddle)
    }
  }, [])

  return null
}

export function openPaddleCheckout(productId: number, email?: string) {
  if (typeof window !== 'undefined' && window.Paddle) {
    window.Paddle.Checkout.open({ product: productId, email })
  }
}
