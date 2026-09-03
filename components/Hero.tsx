'use client'

function AppIcon() {
  return (
    <img
      src="/icon.png"
      alt="DeskTiles"
      width={112}
      height={112}
      className="mx-auto mb-8 rounded-[24px]"
    />
  )
}

function HeroDesktop() {
  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-[#AABAD6]/20 blur-3xl rounded-full scale-75 -translate-y-4" />

      <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)] border border-white/60">
        {/* macOS chrome */}
        <div className="h-8 bg-[#ECECEC] flex items-center px-4 gap-1.5 border-b border-[#D8D8D8]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-auto text-[11px] text-[#8E8E93] font-medium">Desktop</span>
        </div>

        {/* Desktop content */}
        <div className="bg-gradient-to-br from-[#E4EBF5] via-[#D8E4F0] to-[#C8D8E8] p-6 min-h-[320px] relative flex flex-col gap-3">

          {/* Work tile — expanded */}
          <div className="rounded-2xl bg-white/65 backdrop-blur-sm border border-white/80 shadow-lg overflow-hidden w-full max-w-[340px]">
            <div className="px-4 py-2.5 flex items-center gap-2.5 bg-[#AABAD6]/35 border-b border-[#AABAD6]/25">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7BA8C4]" />
              <span className="text-[12px] font-semibold text-[#1D1D1F]">Work</span>
              <span className="ml-auto text-[10px] text-[#6E6E73]">5 files</span>
            </div>
            <div className="px-4 py-3 flex gap-3.5">
              {[
                { icon: '📄', name: 'Brief.pdf' },
                { icon: '📊', name: 'Budget.xlsx' },
                { icon: '🖼️', name: 'Mockup.png' },
                { icon: '📝', name: 'Notes.txt' },
              ].map((f) => (
                <div key={f.name} className="text-center">
                  <div className="w-10 h-10 bg-white/80 rounded-xl mb-1 flex items-center justify-center text-lg shadow-sm">{f.icon}</div>
                  <span className="text-[8px] text-[#6E6E73]">{f.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client A tile — collapsed pill */}
          <div className="rounded-full bg-[#E0EBF5]/80 border border-[#AABAD6]/50 px-4 py-2 flex items-center gap-2.5 w-fit shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#7BA8C4]" />
            <span className="text-[12px] font-semibold text-[#1D1D1F]">Client A</span>
            <span className="ml-2 text-[10px] text-[#6E6E73]">8 files</span>
          </div>

          {/* Personal tile — collapsed pill */}
          <div className="rounded-full bg-[#EDE8F8]/80 border border-[#C5B8E8]/50 px-4 py-2 flex items-center gap-2.5 w-fit shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#A896D8]" />
            <span className="text-[12px] font-semibold text-[#1D1D1F]">Personal</span>
            <span className="ml-2 text-[10px] text-[#6E6E73]">3 files</span>
          </div>

          {/* Research tile — collapsed pill */}
          <div className="rounded-full bg-[#F5EFE0]/80 border border-[#D6C870]/50 px-4 py-2 flex items-center gap-2.5 w-fit shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#C8B060]" />
            <span className="text-[12px] font-semibold text-[#1D1D1F]">Research</span>
            <span className="ml-2 text-[10px] text-[#6E6E73]">12 files</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-14 px-6 overflow-hidden">
      <div className="max-w-[1100px] w-full mx-auto text-center">

        {/* App icon */}
        <AppIcon />

        {/* Headline — una sola línea, "Projects." animado + "Not folders." negro fijo */}
        <h1
          className="font-bold tracking-[-0.05em] leading-[1.0] mb-8 whitespace-nowrap"
          style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}
        >
          <span className="text-animated-gradient">Projects.</span>
          {' '}
          <span style={{ color: '#1D1D1F' }}>Not folders.</span>
        </h1>

        {/* Sub — 20% más grande */}
        <p className="font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-5"
           style={{ fontSize: 'clamp(26px, 3.6vw, 41px)' }}>
          Desktop. Upgraded.
        </p>

        {/* Body */}
        <p className="text-[17px] text-[#6E6E73] max-w-[500px] mx-auto mb-10 leading-relaxed">
          DeskTiles lets you group real Mac files into expandable desktop tiles
          designed for focus, context, and fast access.
        </p>

        <div className="mb-20" />

        {/* Hero desktop mockup */}
        <HeroDesktop />

      </div>
    </section>
  )
}
