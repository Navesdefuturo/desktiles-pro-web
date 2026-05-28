export default function Download() {
  return (
    <section id="download" className="py-[160px] px-6 text-center">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.04em] text-[#1D1D1F] mb-4">
          Try DeskTiles.
        </h2>
        <p className="text-[17px] text-[#6E6E73] mb-12">
          Available for macOS Ventura and later.
          <br />
          Your desktop will never look the same.
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <a
            href="#"
            className="border border-[#D2D2D7] text-[#1D1D1F] px-7 py-3 rounded-full text-[15px] font-medium hover:bg-[#F0F0F0] transition-colors"
          >
            Download Free
          </a>
          <a
            href="#pricing"
            className="bg-[#1D1D1F] text-white px-7 py-3 rounded-full text-[15px] font-medium hover:bg-[#3D3D3F] transition-colors"
          >
            Buy Pro — $39/year
          </a>
        </div>

        <p className="text-[13px] text-[#6E6E73]">
          Version 1.0 &nbsp;·&nbsp; macOS 13+ &nbsp;·&nbsp; 4.2 MB
        </p>
      </div>
    </section>
  )
}
