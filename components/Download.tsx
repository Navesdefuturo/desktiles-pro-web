import Image from 'next/image'

export default function Download() {
  return (
    <section id="download" className="relative w-full overflow-hidden bg-[#F5F5F7]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Image — left */}
        <div className="relative h-[420px] md:h-[580px] order-1">
          <Image
            src="/desktiles-dream-mac-workspace.png"
            alt="Imagining a better Mac desktop with DeskTiles"
            fill
            className="object-cover object-center"
          />
          {/* Fade right to blend with light section */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: 'linear-gradient(to left, #F5F5F7 0%, transparent 30%)' }}
          />
        </div>

        {/* Text — right */}
        <div className="px-8 md:px-16 py-20 order-2 text-center md:text-left">
          <h2
            className="font-bold text-[#1D1D1F] leading-[1.05] tracking-[-0.04em] mb-6"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
          >
            The desktop you
            <br />
            always dreamed of.
          </h2>

          <p className="text-[16px] text-[#6E6E73] mb-10 leading-relaxed max-w-[380px]">
            macOS Sequoia, Tahoe & Golden Gate.
            <br />
            Works entirely on your Mac. No cloud. No account.
          </p>

          <p className="text-[12px] font-semibold text-[#92620A] uppercase tracking-wide mb-4">
            Launch offer · Limited time
          </p>

          <a
            href="#pricing"
            className="inline-block bg-[#1D1D1F] text-white px-10 py-4 rounded-full text-[17px] font-semibold hover:bg-[#3D3D3F] transition-colors"
          >
            Get DeskTiles — €14.99
          </a>

          <p className="text-[13px] text-[#8E8E93] mt-5 leading-relaxed">
            One-time purchase &nbsp;·&nbsp; All future updates included
          </p>
        </div>

      </div>
    </section>
  )
}
