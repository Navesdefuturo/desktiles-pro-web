export default function LifestyleSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F7]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Text — left */}
        <div className="px-8 md:px-16 py-20 order-2 md:order-1">
          <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase mb-5">
            For people who live on their Mac
          </p>
          <h2
            className="font-bold text-[#1D1D1F] leading-[1.1] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(26px, 3.2vw, 44px)' }}
          >
            Your Mac is smart.
            <br />
            <span className="text-[#6E6E73]">Your desktop
            <br />should be too.</span>
          </h2>
          <p className="text-[16px] text-[#6E6E73] leading-relaxed mb-8 max-w-[380px]">
            DeskTiles organizes everything around how you actually work — not around how a folder hierarchy was invented in 1984.
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
            src="/screenshots/desktiles-lifestyle-imac-layout-gallery.jpg"
            alt="Person using DeskTiles on a yellow iMac — Layout Gallery open with project templates"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 md:block hidden"
            style={{
              background: 'linear-gradient(to right, #F5F5F7 0%, transparent 30%)',
            }}
          />
        </div>

      </div>
    </section>
  )
}
