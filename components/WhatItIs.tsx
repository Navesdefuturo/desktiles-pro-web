export default function WhatItIs() {
  const features = [
    {
      number: '01',
      title: 'Your order. Not Mac\'s.',
      description: 'macOS Stacks sorts by file type. DeskTiles sorts by how you work. Projects, clients, contexts — you decide what goes where and how it looks.',
    },
    {
      number: '02',
      title: 'Your style. From scratch.',
      description: 'Colors, fonts, tile size, borders. Every detail is yours. Your desktop should reflect your work, not a default macOS setting you never chose.',
    },
    {
      number: '03',
      title: 'Your projects. Always ready.',
      description: 'One click to expand a project. Everything exactly where you left it — files, references, screenshots, PDFs. Zero hunting. Zero friction.',
    },
  ]

  return (
    <section className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">

        {/* macOS vs DeskTiles contrast */}
        <div className="text-center mb-24">
          <h2 className="text-[clamp(28px,4.5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-5 leading-[1.1]">
            macOS organizes your files.
            <br />
            <span style={{ color: '#7BA8C4' }}>DeskTiles organizes your work.</span>
          </h2>
          <p className="text-[17px] text-[#6E6E73] max-w-[480px] mx-auto leading-relaxed">
            Stacks sort by type. Finder sorts by name. Neither sorts by you.
            DeskTiles is the first desktop tool that works the way you actually think.
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
