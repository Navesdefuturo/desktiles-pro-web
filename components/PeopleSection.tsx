export default function PeopleSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '560px' }}>
      {/* Background image */}
      <img
        src="/desktiles-mac-projects-desktop.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />

      {/* Gradient overlay — dark left side for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1100px] mx-auto px-6 py-28 flex flex-col justify-center" style={{ minHeight: '560px' }}>
        <div className="max-w-[520px]">
          <p className="text-[11px] font-semibold tracking-widest text-white/50 uppercase mb-5">
            For people who live on their desktop
          </p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
          >
            Your desktop.
            <br />
            Your projects.
            <br />
            Your rules.
          </h2>
          <p className="text-[17px] text-white/70 leading-relaxed max-w-[420px]">
            Stop organizing for Mac.
            Start organizing for yourself.
          </p>
        </div>
      </div>
    </section>
  )
}
