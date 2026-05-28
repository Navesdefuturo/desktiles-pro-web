export default function Download() {
  return (
    <section id="download" className="py-[160px] px-6 text-center">
      <div className="max-w-[640px] mx-auto">
        <h2
          className="font-bold tracking-[-0.04em] text-[#1D1D1F] mb-6 leading-[1.05]"
          style={{ fontSize: 'clamp(36px,5.5vw,68px)' }}
        >
          The desktop experience
          <br />
          macOS should have had
          <br />
          all along.
        </h2>

        <p className="text-[17px] text-[#6E6E73] mb-12 leading-relaxed">
          Available for macOS Ventura and later.
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <a
            href="#"
            className="border border-[#D2D2D7] text-[#1D1D1F] px-7 py-3.5 rounded-full text-[16px] font-medium hover:bg-[#F0F0F0] transition-colors"
          >
            Download Free
          </a>
          <a
            href="#pricing"
            className="bg-[#1D1D1F] text-white px-7 py-3.5 rounded-full text-[16px] font-medium hover:bg-[#3D3D3F] transition-colors"
          >
            Buy Pro — $39/year
          </a>
        </div>

        <p className="text-[13px] text-[#6E6E73] leading-relaxed">
          One-time purchase available &nbsp;·&nbsp; No subscriptions &nbsp;·&nbsp; Works entirely on your Mac
        </p>
      </div>
    </section>
  )
}
