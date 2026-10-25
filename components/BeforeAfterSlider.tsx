'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'

interface Props {
  before: string
  after: string
  alt: string
  width: number
  height: number
  initialPosition?: number // 0–100, default 42
}

export default function BeforeAfterSlider({
  before,
  after,
  alt,
  width,
  height,
  initialPosition = 42,
}: Props) {
  const [pos, setPos] = useState(initialPosition)
  const dragging = useRef(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  const clamp = (v: number) => Math.min(96, Math.max(1, v))

  const move = useCallback((clientX: number) => {
    if (!wrapRef.current) return
    const { left, width: w } = wrapRef.current.getBoundingClientRect()
    setPos(clamp(((clientX - left) / w) * 100))
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    move(e.clientX)
    const onMove = (ev: MouseEvent) => { if (dragging.current) move(ev.clientX) }
    const onUp = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true
    move(e.touches[0].clientX)
    const onMove = (ev: TouchEvent) => { if (dragging.current) move(ev.touches[0].clientX) }
    const onEnd = () => { dragging.current = false; window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd) }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
  }

  const paddingBottom = `${(height / width) * 100}%`

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60 select-none cursor-col-resize"
      style={{ position: 'relative', paddingBottom }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
    <div ref={wrapRef} className="absolute inset-0">
      {/* After (full width, background) */}
      <Image
        src={after}
        alt={`${alt} — after`}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-left-top pointer-events-none"
        priority
      />

      {/* Before (clipped to left of divider) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${alt} — before`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-left-top"
          priority
        />
      </div>

      {/* Labels — outside the clip so they never get cut off */}
      <span
        className="absolute bottom-4 left-6 text-white text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}
      >
        After
      </span>
      <span
        className="absolute bottom-4 right-6 text-white text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}
      >
        Before
      </span>

      {/* Divider line + handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 7H1M10 7h3M1 7l2-2M1 7l2 2M13 7l-2-2M13 7l-2 2" stroke="#1D1D1F" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
    </div>
  )
}
