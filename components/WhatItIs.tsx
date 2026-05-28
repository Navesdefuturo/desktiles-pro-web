export default function WhatItIs() {
  const features = [
    {
      icon: '⌃',
      title: 'Collapse projects.',
      description: 'When you need clarity, collapse entire projects into a single clean pill. Zero visual noise. Instant calm.',
    },
    {
      icon: '⌄',
      title: 'Expand for context.',
      description: 'One click. Your entire project is visible — files, references, ideas. Exactly where you left them.',
    },
    {
      icon: '⌘',
      title: 'Works like Mac.',
      description: 'Drag & drop. Quick Look. Right-click menus. No learning curve. If you use Finder, you already know how.',
    },
  ]

  return (
    <section className="py-[120px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-4">
          Your desktop becomes
          <br />
          a workspace.
        </h2>
        <p className="text-[17px] text-[#6E6E73] text-center mb-20 max-w-[500px] mx-auto">
          Less chaos. More focus. Projects that stay together.
          The desktop experience macOS never shipped — until now.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#AABAD6]/20 border border-[#AABAD6]/30 flex items-center justify-center mx-auto mb-6 text-2xl font-light text-[#1D1D1F]">
                {f.icon}
              </div>
              <h3 className="text-[22px] font-semibold text-[#1D1D1F] tracking-[-0.01em] mb-3">
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
