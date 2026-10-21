'use client'

import { useEffect, useRef, useState } from 'react'

// Vídeo real de la app convertido en fotogramas; el scroll controla qué fotograma se ve.
const FRAMES = 90
const BASE = '/scrub/new-tile/'
const ASPECT = 1660 / 1080
const frameSrc = (i: number) => `${BASE}${String(i).padStart(4, '0')}.webp`

const captions = [
  { from: 0, to: 0.18, text: 'Files scattered everywhere.' },
  { from: 0.18, to: 0.4, text: 'Create a tile.' },
  { from: 0.4, to: 0.62, text: 'Name it. Drop your files in.' },
  { from: 0.62, to: 0.85, text: 'Open, preview or put back — in place.' },
  { from: 0.85, to: 1.01, text: 'Collapse it when you are done.' },
]

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))

export default function ScrollScrub() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const frameBoxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgs = useRef<(HTMLImageElement | null)[]>(Array(FRAMES).fill(null))
  const [caption, setCaption] = useState(0)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduce) return
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    const box = frameBoxRef.current
    if (!wrap || !canvas || !box) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let cur = 0 // fotograma mostrado (con inercia)
    let target = 0
    let raf = 0
    let started = false
    let lastCaption = 0
    let lastDrawn = -1

    const loadFrame = (i: number) => {
      if (imgs.current[i]) return
      const im = new Image()
      im.decoding = 'async'
      im.onload = () => {
        imgs.current[i] = im
        lastDrawn = -1
        kick()
      }
      im.src = frameSrc(i)
    }

    // Primero el fotograma 0 y una pasada gruesa; después el resto.
    const startLoading = () => {
      if (started) return
      started = true
      loadFrame(0)
      const order: number[] = []
      for (let i = 0; i < FRAMES; i += 6) order.push(i)
      for (let i = 0; i < FRAMES; i++) if (i % 6) order.push(i)
      order.forEach((i, n) => setTimeout(() => loadFrame(i), n * 12))
    }

    const nearest = (i: number) => {
      for (let d = 0; d < FRAMES; d++) {
        const a = imgs.current[i - d]
        if (a) return { im: a, idx: i - d }
        const b = imgs.current[i + d]
        if (b) return { im: b, idx: i + d }
      }
      return null
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      lastDrawn = -1
      kick()
    }

    const draw = () => {
      const i = Math.round(cur)
      const hit = nearest(i)
      if (!hit || hit.idx === lastDrawn) return
      lastDrawn = hit.idx
      const cw = canvas.width
      const ch = canvas.height
      const iw = hit.im.naturalWidth
      const ih = hit.im.naturalHeight
      const s = Math.max(cw / iw, ch / ih)
      ctx.drawImage(hit.im, (cw - iw * s) / 2, (ch - ih * s) / 2, iw * s, ih * s)
    }

    const readScroll = () => {
      const r = wrap.getBoundingClientRect()
      const span = r.height - window.innerHeight
      const p = clamp(-r.top / span)
      target = p * (FRAMES - 1)
      // Efecto grande: el marco crece y se redondea menos al entrar.
      const e = clamp(p / 0.12)
      box.style.transform = `scale(${0.9 + 0.1 * e})`
      box.style.borderRadius = `${28 - 12 * e}px`
      const ci = captions.findIndex((c) => p >= c.from && p < c.to)
      if (ci !== -1 && ci !== lastCaption) {
        lastCaption = ci
        setCaption(ci)
      }
    }

    const tick = () => {
      raf = 0
      readScroll()
      cur += (target - cur) * 0.18
      if (Math.abs(target - cur) < 0.05) cur = target
      draw()
      if (cur !== target) raf = requestAnimationFrame(tick)
    }
    function kick() {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting) startLoading()
      },
      { rootMargin: '1500px 0px' },
    )
    io.observe(wrap)

    const onScroll = () => kick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', resize)
    resize()
    readScroll()
    cur = target

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduce])

  const heading = (
    <>
      <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase text-center mb-2">
        Real app. Real desktop.
      </p>
      <h2 className="text-center font-semibold tracking-tight text-[#1D1D1F] text-[clamp(28px,5vw,52px)] leading-[1.05]">
        From scattered files to one tile.
      </h2>
    </>
  )

  if (reduce) {
    return (
      <section className="py-16 px-6 bg-[#F5F5F7] border-t border-[#D2D2D7]/40">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-8">{heading}</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={frameSrc(45)}
            alt="DeskTiles: files on the desktop gathered into one tile"
            className="w-full rounded-2xl shadow-2xl border border-[#D8D8D8]/60"
          />
        </div>
      </section>
    )
  }

  return (
    <section
      ref={wrapRef}
      className="relative bg-[#F5F5F7] border-t border-[#D2D2D7]/40 h-[320vh] sm:h-[450vh]"
      aria-label="DeskTiles in action: scroll to play"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 pt-[76px] pb-4 overflow-hidden">
        <div className="mb-5 sm:mb-6">{heading}</div>

        <div
          ref={frameBoxRef}
          className="relative overflow-hidden shadow-2xl border border-[#D8D8D8]/60 bg-[#E8E4DC] will-change-transform touch-pan-y"
          style={{
            width: `min(94vw, calc((100vh - 300px) * ${ASPECT}))`,
            aspectRatio: String(ASPECT),
            transform: 'scale(0.9)',
            borderRadius: 28,
          }}
        >
          <canvas ref={canvasRef} className="w-full h-full block" role="img" aria-label="DeskTiles demo, driven by scroll" />
        </div>

        <p
          key={caption}
          className="mt-5 sm:mt-6 text-center font-semibold tracking-tight text-[#1D1D1F] text-[clamp(18px,3vw,30px)] min-h-[1.4em]"
          style={{ animation: 'scrubIn 0.45s ease both' }}
          aria-live="polite"
        >
          {captions[caption].text}
        </p>
        <p className="mt-2 text-[12px] text-[#6E6E73]">Keep scrolling</p>
      </div>
      <style>{`@keyframes scrubIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </section>
  )
}
