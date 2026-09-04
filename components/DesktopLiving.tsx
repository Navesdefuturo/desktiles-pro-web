export default function DesktopLiving() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl" style={{ minHeight: '560px' }}>
          {/* Background image */}
          <img
            src="/desktiles-mac-projects-desktop.png"
            alt="Mac power user living inside their desktop with DeskTiles"
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          />

          {/* Gradient — left to right, dark on right for text */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to left, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)',
            }}
          />

          {/* Content — right aligned */}
          <div className="relative h-full flex flex-col items-end justify-center px-12 py-20" style={{ minHeight: '560px' }}>
            <div className="max-w-[420px] text-right">
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
        </div>
      </div>
    </section>
  )
}
