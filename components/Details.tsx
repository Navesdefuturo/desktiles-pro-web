const cards = [
  { icon: '🎨', title: 'Edit Style', desc: 'Colors, fonts, tile size, borders. Customize every detail until your desktop feels like yours.' },
  { icon: '◻', title: 'Layout presets', desc: 'Eisenhower matrix, rows, columns, free layout. Start organized from day one.' },
  { icon: '⌘', title: 'Native macOS', desc: 'Quick Look, drag & drop, right-click menus, keyboard shortcuts. Zero learning curve.' },
  { icon: '⚡', title: 'Instant animations', desc: 'GPU-accelerated. Every expand and collapse is fluid and immediate.' },
  { icon: '☁️', title: 'No cloud. Ever.', desc: 'Everything stays on your Mac. No sync, no account, no server. Your data is yours.' },
  { icon: '📂', title: 'Real files', desc: 'No virtual layer. DeskTiles points to actual files on your disk — Finder, iCloud, Dropbox, anywhere.' },
  { icon: '⌨️', title: 'Full keyboard', desc: 'Navigate, expand, open, rename — all from the keyboard. Power users feel right at home.' },
  { icon: '🍎', title: 'Sequoia ready', desc: 'Built and tested on macOS Sequoia. Compatible from Ventura (13) to Sequoia (15) and beyond.' },
]

export default function Details() {
  return (
    <section className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-4">
          Built for people who live
          <br />
          on their desktop.
        </h2>
        <p className="text-[17px] text-[#6E6E73] text-center mb-20 max-w-[400px] mx-auto">
          Every feature earned its place. Nothing here by accident.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
