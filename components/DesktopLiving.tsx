import Image from 'next/image'

export default function DesktopLiving() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '560px' }}>
      {/* Background image */}
      <Image
        src="/desktiles-desktop-living.webp"
        alt="Mac power user at their desk working with DeskTiles"
        fill
        className="object-cover object-center"
        aria-hidden
      />

      {/* Gradient — dark on right for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)',
        }}
      />

      {/* Content — right aligned */}
      <div className="relative max-w-[1100px] mx-auto px-6 py-28 flex flex-col items-center md:items-end justify-center" style={{ minHeight: '560px' }}>
        <div className="max-w-[420px] text-center md:text-right">
          <p className="text-[11px] font-semibold tracking-widest text-white/50 uppercase mb-5">
            For people who live on their desktop
          </p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: 'clamp(30px, 4vw, 54px)' }}
          >
            Your desktop.
            <br />
            Your command center.
          </h2>
          <p className="text-[17px] text-white/70 leading-relaxed">
            Every project at a glance. Every file in its place.
            Open, work, close. No searching. No friction.
          </p>
        </div>
      </div>
    </section>
  )
}
