const cards = [
  { icon: '⤡', title: 'Resizable groups', desc: 'Resize tiles freely. Make them as big or small as your project needs.' },
  { icon: '🎨', title: 'Custom colors', desc: 'Each tile gets its own color. Find your projects at a glance.' },
  { icon: '⌘', title: 'Native interactions', desc: 'Right-click menus, drag and drop, keyboard navigation. All standard macOS.' },
  { icon: '⚡', title: 'Fast animations', desc: 'GPU-accelerated. No lag. Every collapse and expand is instant.' },
  { icon: '⌨️', title: 'Keyboard support', desc: 'Full keyboard navigation. Power users will feel right at home.' },
  { icon: '☁️', title: 'No cloud', desc: 'Your files stay on your Mac. No sync, no subscriptions for storage, no data leaving your computer.' },
  { icon: '📂', title: 'Real files', desc: 'Works with actual files and folders. Not a virtual layer — real Finder integration.' },
  { icon: '✦', title: 'Minimal noise', desc: 'Hidden when you need nothing. Present when you need everything.' },
]

export default function Details() {
  return (
    <section className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-4">
          Built for people who live
          <br />
          on their desktop.
        </h2>
        <p className="text-[17px] text-[#6E6E73] text-center mb-20 max-w-[460px] mx-auto">
          Every feature earned its place. Nothing here by accident.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#AABAD6]/60 transition-colors"
            >
              <div className="text-2xl mb-4">{card.icon}</div>
              <h3 className="text-[15px] font-semibold text-[#1D1D1F] mb-2">{card.title}</h3>
              <p className="text-[13px] text-[#6E6E73] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
