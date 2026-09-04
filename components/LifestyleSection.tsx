export default function LifestyleSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F7]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Text — left */}
        <div className="px-8 md:px-16 py-20 order-2 md:order-1">
          <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase mb-5">
            Real people. Real Macs.
          </p>
          <h2
            className="font-bold text-[#1D1D1F] leading-[1.1] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
          >
            The desktop you
            <br />
            always deserved.
          </h2>
          <p className="text-[16px] text-[#6E6E73] leading-relaxed mb-8 max-w-[380px]">
            DeskTiles is for anyone who spends their day on a Mac and wants their workspace to feel intentional — not accidental.
          </p>
          <p className="text-[12px] font-semibold text-[#92620A] uppercase tracking-wide mb-3">
            Launch offer · Limited time
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white text-[14px] font-medium px-6 py-3 rounded-full hover:bg-[#3D3D3F] transition-colors"
          >
            Get DeskTiles — €14.99
          </a>
        </div>

        {/* Image — right */}
        <div className="relative h-[420px] md:h-[560px] order-1 md:order-2">
          <img
            src="/desktiles-imac-creative-workspace.png"
            alt="Working at Mac with DeskTiles"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle left fade to blend with white background */}
          <div
            className="absolute inset-0 md:block hidden"
            style={{
              background: 'linear-gradient(to right, #F5F5F7 0%, transparent 25%)',
            }}
          />
        </div>

      </div>
    </section>
  )
}
