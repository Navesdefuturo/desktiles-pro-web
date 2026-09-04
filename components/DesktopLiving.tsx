export default function DesktopLiving() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '520px' }}>
      {/* Background image — man inside the Mac desktop */}
      <img
        src="/desktiles-mac-projects-desktop.png"
        alt="Mac power user living inside their desktop with DeskTiles"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />

      {/* Gradient — right side dark so text on right is readable */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)',
        }}
      />

      {/* Content — right aligned */}
      <div className="relative max-w-[1100px] mx-auto px-6 py-24 flex flex-col items-end justify-center" style={{ minHeight: '520px' }}>
        <div className="max-w-[480px] text-right">
          <p className="text-[11px] font-semibold tracking-widest text-white/50 uppercase mb-5">
            For people who live on their desktop
          </p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Your desktop.
            <br />
            Your command center.
          </h2>
          <p className="text-[17px] text-white/70 leading-relaxed">
            Every project at a glance. Every file in its place.
            <br />
            Open, work, close. No searching. No friction.
          </p>
        </div>
      </div>
    </section>
  )
}
