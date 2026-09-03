export default function WhatItIs() {
  const features = [
    {
      icon: '◻',
      title: 'Your order. Not Mac\'s.',
      description: 'macOS Stacks sorts by file type. DeskTiles sorts by how you work. Projects, clients, contexts — you decide what goes where.',
    },
    {
      icon: '◈',
      title: 'Your style. From scratch.',
      description: 'Colors, fonts, layouts, tile size. Every detail is yours. Your desktop should look like your work, not a default macOS setting.',
    },
    {
      icon: '◉',
      title: 'Your projects. Always ready.',
      description: 'One click to expand a project. Everything exactly where you left it — files, references, screenshots, PDFs. Zero hunting.',
    },
  ]

  return (
    <section className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">

        {/* macOS vs DeskTiles contrast */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(28px,4.5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-5 leading-[1.1]">
            macOS organizes your files.
            <br />
            <span className="text-[#7BA8C4]">DeskTiles organizes your work.</span>
          </h2>
          <p className="text-[17px] text-[#6E6E73] max-w-[480px] mx-auto leading-relaxed">
            Stacks sort by type. Finder sorts by name. Neither sorts by you.
            DeskTiles is the first desktop tool that works the way you actually think.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title}>
              <div className="w-12 h-12 rounded-2xl bg-[#AABAD6]/15 border border-[#AABAD6]/25 flex items-center justify-center mx-auto mb-5 text-[22px] text-[#7BA8C4]">
                {f.icon}
              </div>
              <h3 className="text-[19px] font-semibold text-[#1D1D1F] tracking-[-0.01em] mb-3 text-center">
                {f.title}
              </h3>
              <p className="text-[15px] text-[#6E6E73] leading-relaxed text-center">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
