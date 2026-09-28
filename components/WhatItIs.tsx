export default function WhatItIs() {
  const features = [
    {
      number: '01',
      title: 'Drop it in.',
      description: 'Each tile is a real folder on your Mac. Drop files onto it and they\'re filed away inside. Open with a double-click, preview with Space, drag back out whenever you need them.',
    },
    {
      number: '02',
      title: 'Collapse it.',
      description: 'Fold a tile to a slim bar when you\'re not using it. Expand again with a double-click. Your desktop stays calm without losing anything.',
    },
    {
      number: '03',
      title: 'Make it yours.',
      description: 'Colors, color palettes, fonts, corner shapes and transparency — every tile, every detail. Copy a tile\'s style and paste it onto others in one click.',
    },
  ]

  return (
    <section className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">

        {/* macOS vs DeskTiles contrast */}
        <div className="text-center mb-24">
          <h2 className="text-[clamp(28px,4.5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-5 leading-[1.1]">
            A cluttered desktop,
            <br />
            <span style={{ color: '#7BA8C4' }}>made calm.</span>
          </h2>
          <p className="text-[17px] text-[#6E6E73] max-w-[480px] mx-auto leading-relaxed">
            DeskTiles turns your Mac desktop into tidy, colorful tiles.
            Each tile is a real folder — no cloud, no account, nothing leaves your Mac.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.number}>
              <span className="text-[13px] font-semibold text-[#AABAD6] tracking-[0.1em] block mb-4">
                {f.number}
              </span>
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] tracking-[-0.01em] mb-3">
                {f.title}
              </h3>
              <p className="text-[15px] text-[#6E6E73] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
