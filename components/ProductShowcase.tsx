function TileMockup({ type }: { type: 'collapse' | 'expand' | 'move' | 'native' }) {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#EEF1F5] to-[#E0E8F0] border border-[#D2D2D7]/60 shadow-xl">
      {/* macOS bar */}
      <div className="h-6 bg-[#E8E8E8]/80 flex items-center px-3 gap-1.5 border-b border-[#D2D2D7]/60">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>

      <div className="p-4" style={{ height: 'calc(100% - 24px)' }}>
        {type === 'collapse' && (
          <div className="flex flex-col gap-2">
            <div className="rounded-full bg-[#AABAD6]/50 border border-[#AABAD6]/60 px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#AABAD6]" />
              <span className="text-[11px] font-semibold text-[#1D1D1F]">Work</span>
              <span className="ml-auto text-[9px] text-[#6E6E73]">collapsed</span>
            </div>
            <div className="rounded-full bg-[#D6C7F0]/50 border border-[#C5B8E8]/60 px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#B8A8D8]" />
              <span className="text-[11px] font-semibold text-[#1D1D1F]">Personal</span>
              <span className="ml-auto text-[9px] text-[#6E6E73]">collapsed</span>
            </div>
            <div className="rounded-full bg-[#F0EAC8]/50 border border-[#E0D8A8]/60 px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D4C070]" />
              <span className="text-[11px] font-semibold text-[#1D1D1F]">Ideas</span>
              <span className="ml-auto text-[9px] text-[#6E6E73]">collapsed</span>
            </div>
            <p className="text-[10px] text-[#6E6E73] text-center mt-4">Three projects. Zero clutter.</p>
          </div>
        )}

        {type === 'expand' && (
          <div className="flex flex-col gap-2">
            <div className="rounded-xl bg-white/70 border border-white/90 shadow-sm overflow-hidden">
              <div className="px-3 py-1.5 flex items-center gap-2 bg-[#AABAD6]/30 border-b border-[#AABAD6]/20">
                <div className="w-2 h-2 rounded-full bg-[#AABAD6]" />
                <span className="text-[11px] font-semibold text-[#1D1D1F]">Design</span>
              </div>
              <div className="px-3 py-2 flex gap-2">
                {['🎨', '🖼️', '📐', '✏️'].map((icon, i) => (
                  <div key={i} className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center text-sm">{icon}</div>
                ))}
              </div>
            </div>
            <div className="rounded-full bg-[#D6C7F0]/50 border border-[#C5B8E8]/60 px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#B8A8D8]" />
              <span className="text-[11px] font-semibold text-[#1D1D1F]">Clients</span>
            </div>
          </div>
        )}

        {type === 'move' && (
          <div className="relative flex flex-col gap-2">
            <div className="rounded-xl bg-white/70 border border-white/90 shadow-sm overflow-hidden">
              <div className="px-3 py-1.5 bg-[#AABAD6]/30 border-b border-[#AABAD6]/20">
                <span className="text-[11px] font-semibold text-[#1D1D1F]">Work</span>
              </div>
              <div className="px-3 py-2 flex gap-2">
                {['📄', '📊'].map((icon, i) => (
                  <div key={i} className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center text-sm">{icon}</div>
                ))}
              </div>
            </div>
            <div className="absolute right-4 top-8 w-7 h-7 bg-white shadow-lg rounded-lg flex items-center justify-center text-sm border border-[#AABAD6]/40 animate-bounce">
              📝
            </div>
            <div className="rounded-xl bg-white/70 border-2 border-dashed border-[#AABAD6]/60 shadow-sm overflow-hidden">
              <div className="px-3 py-1.5 bg-[#D6C7F0]/30 border-b border-[#D6C7F0]/20">
                <span className="text-[11px] font-semibold text-[#1D1D1F]">Personal</span>
              </div>
              <div className="px-3 py-2 h-10" />
            </div>
          </div>
        )}

        {type === 'native' && (
          <div className="flex flex-col gap-2">
            <div className="rounded-xl bg-white/70 border border-white/90 shadow-sm overflow-hidden">
              <div className="px-3 py-1.5 flex items-center gap-2 bg-[#AABAD6]/30 border-b border-[#AABAD6]/20">
                <div className="w-2 h-2 rounded-full bg-[#AABAD6]" />
                <span className="text-[11px] font-semibold text-[#1D1D1F]">DeskTiles</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
                </div>
              </div>
              <div className="p-3 text-[10px] text-[#6E6E73] space-y-1">
                <div className="flex justify-between"><span>Version</span><span className="text-[#1D1D1F] font-medium">1.0.0</span></div>
                <div className="flex justify-between"><span>macOS</span><span className="text-[#1D1D1F] font-medium">Ventura+</span></div>
                <div className="flex justify-between"><span>Size</span><span className="text-[#1D1D1F] font-medium">4.2 MB</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  const features = [
    {
      id: 'showcase',
      title: 'Collapse when you want focus.',
      description: 'Reduce visual noise instantly. Every project becomes a minimal pill. Your desktop breathes again.',
      type: 'collapse' as const,
    },
    {
      title: 'Expand when you need context.',
      description: 'One click and your entire project is visible. Files, context, everything — right where you left it.',
      type: 'expand' as const,
    },
    {
      title: 'Move files naturally.',
      description: 'Drag files between tiles. Between projects. Just like Finder — but with the context your work actually needs.',
      type: 'move' as const,
    },
    {
      title: 'Designed to feel native.',
      description: 'Rounded corners. Soft shadows. SF Pro. DeskTiles looks like Apple built it themselves.',
      type: 'native' as const,
    },
  ]

  return (
    <section className="py-[120px] px-6 bg-white/50">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-4">
          See it in action.
        </h2>
        <p className="text-[17px] text-[#6E6E73] text-center mb-24 max-w-[420px] mx-auto">
          Every interaction is designed to feel completely at home on your Mac.
        </p>

        <div className="space-y-32">
          {features.map((feature, i) => (
            <div
              key={feature.type}
              id={'id' in feature ? feature.id : undefined}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <TileMockup type={feature.type} />
              </div>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[17px] text-[#6E6E73] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
