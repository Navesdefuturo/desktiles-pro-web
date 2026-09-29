'use client'

import { useEffect, useRef, useState } from 'react'

const captions = [
  { from: 4,  to: 8,  text: 'Move your icons to tiles' },
  { from: 8,  to: 15, text: 'Organize and resize tiles as you want' },
  { from: 15, to: 20, text: 'Collapse tiles for a clear desktop' },
  { from: 25, to: 29, text: 'Layout presets' },
  { from: 32, to: 38, text: 'Choose a layout visually' },
  { from: 38, to: 41, text: 'Insert layout and start your project' },
  { from: 45, to: 51, text: 'Native macOS preview' },
]

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [caption, setCaption] = useState<string | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function onTimeUpdate() {
      const t = video!.currentTime
      const active = captions.find((c) => t >= c.from && t < c.to)
      setCaption(active ? active.text : null)
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    return () => video.removeEventListener('timeupdate', onTimeUpdate)
  }, [])

  return (
    <section className="py-[48px] px-6 bg-[#F5F5F7] border-t border-[#D2D2D7]/40">
      <div className="max-w-[920px] mx-auto">
        <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase text-center mb-6">
          See it in action
        </p>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60 aspect-video">
          <video
            ref={videoRef}
            src="https://pub-9292379b3ddc43b198e7f745192da27f.r2.dev/hero-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Caption overlay */}
          <div
            className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-[6%] pointer-events-none"
            aria-live="polite"
          >
            <span
              className="text-white font-bold tracking-[0.08em] uppercase text-center transition-all duration-300"
              style={{
                fontSize: 'clamp(20px, 3.5vw, 36px)',
                textShadow: '0 2px 20px rgba(0,0,0,0.6)',
                opacity: caption ? 1 : 0,
              }}
            >
              {caption ?? ' '}
            </span>
          </div>
        </div>

        <p className="text-[13px] text-[#6E6E73] text-center mt-6">
          45 seconds. No narration. Just DeskTiles.
        </p>
      </div>
    </section>
  )
}
