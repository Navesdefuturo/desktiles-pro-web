export default function LifestyleMid() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row items-stretch">

        {/* Image — full bleed left, 58% viewport width */}
        <div className="relative w-full md:w-[58vw] h-[380px] md:h-[520px] shrink-0 order-1">
          <img
            src="/screenshots/desktiles-lifestyle-woman-imac-workspace.jpg"
            alt="Woman working on a yellow iMac with DeskTiles — organized workspace with project tiles"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Fade to white on the right for smooth text transition */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: 'linear-gradient(to right, transparent 70%, white 100%)',
            }}
          />
        </div>

        {/* Text — right */}
        <div className="flex-1 px-8 md:px-12 py-14 flex flex-col justify-center order-2">
          <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase mb-4">
            Every power user who's tried it
          </p>
          <h2
            className="font-bold text-[#1D1D1F] leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: 'clamp(24px, 2.6vw, 36px)' }}
          >
            &ldquo;Once you get it,
            <br />
            <span className="text-[#6E6E73]">you can't live
            <br />without it.&rdquo;</span>
          </h2>
          <p className="text-[15px] text-[#6E6E73] leading-relaxed mb-8 max-w-[320px]">
            The first time you open a project and everything is right there — files, references, work in progress — you'll wonder how you ever managed without it.
          </p>
          <div>
            <p className="text-[11px] font-semibold text-[#92620A] uppercase tracking-wide mb-3">
              Launch offer · Limited time
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white text-[14px] font-medium px-6 py-3 rounded-full hover:bg-[#3D3D3F] transition-colors"
            >
              Get DeskTiles — €14.99
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
