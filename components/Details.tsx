const cards = [
  { icon: '🎨', title: 'Edit Style', desc: 'Colors, fonts, tile size, borders. Customize every detail until your desktop feels like yours.' },
  { icon: '◻', title: 'Layout presets', desc: 'Eisenhower matrix, rows, columns, free layout. Start organized from day one.' },
  { icon: '⌘', title: 'Native macOS', desc: 'Quick Look, drag & drop, right-click menus, keyboard shortcuts. Zero learning curve.' },
  { icon: '⚡', title: 'Instant animations', desc: 'GPU-accelerated. Every expand and collapse is fluid and immediate.' },
  { icon: '☁️', title: 'No cloud. Ever.', desc: 'Everything stays on your Mac. No sync, no account, no server. Your data is yours.' },
  { icon: '📂', title: 'Real files', desc: 'No virtual layer. DeskTiles points to actual files on your disk — Finder, iCloud, Dropbox, anywhere.' },
  { icon: '⌨️', title: 'Full keyboard', desc: 'Navigate, expand, open, rename — all from the keyboard. Power users feel right at home.' },
  { icon: '🍎', title: 'Always up to date', desc: 'Built and tested on the latest macOS. Runs on Sequoia, Tahoe & Golden Gate.' },
]

export default function Details() {
  return (
    <section className="border-t border-[#D2D2D7]/40">

      {/* Hero image — man inside Mac desktop */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '420px' }}>
        <img
          src="/desktiles-mac-projects-desktop.png"
          alt="Mac power user with DeskTiles desktop projects"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Bottom fade to blend into the cards section */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(249,249,249,1) 100%)' }}
        />
        {/* Text overlay */}
        <div className="relative max-w-[1100px] mx-auto px-6 pt-20 pb-10 text-center">
          <h2 className="text-[clamp(28px,4.5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-4 leading-[1.1]">
            Built for people who live
            <br />
            on their desktop.
          </h2>
          <p className="text-[17px] text-[#6E6E73] max-w-[400px] mx-auto">
            Every feature earned its place. Nothing here by accident.
          </p>
        </div>
      </div>

      {/* Feature cards */}
      <div className="px-6 pb-[120px]" style={{ background: '#F9F9F9' }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-white border border-[#EBEBEB] hover:border-[#AABAD6]/60 hover:shadow-sm transition-all duration-200"
            >
              <div className="text-2xl mb-4">{card.icon}</div>
              <h3 className="text-[14px] font-semibold text-[#1D1D1F] mb-2">{card.title}</h3>
              <p className="text-[13px] text-[#6E6E73] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
