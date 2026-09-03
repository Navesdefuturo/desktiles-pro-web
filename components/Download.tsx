export default function Download() {
  return (
    <section id="download" className="py-[160px] px-6 text-center">
      <div className="max-w-[640px] mx-auto">
        <h2
          className="font-bold tracking-[-0.04em] text-[#1D1D1F] mb-6 leading-[1.05]"
          style={{ fontSize: 'clamp(34px,5vw,64px)' }}
        >
          The desktop experience
          <br />
          macOS should have had
          <br />
          all along.
        </h2>

        <p className="text-[17px] text-[#6E6E73] mb-12 leading-relaxed">
          macOS Ventura, Sonoma & Sequoia.
          <br />
          Works entirely on your Mac. No cloud. No account.
        </p>

        <a
          href="#pricing"
          className="inline-block bg-[#1D1D1F] text-white px-10 py-4 rounded-full text-[17px] font-semibold hover:bg-[#3D3D3F] transition-colors"
        >
          Get DeskTiles — €14.99
        </a>

        <p className="text-[13px] text-[#8E8E93] mt-6 leading-relaxed">
          One-time purchase &nbsp;·&nbsp; 30-day money-back guarantee &nbsp;·&nbsp; All future updates
        </p>
      </div>
    </section>
  )
}
