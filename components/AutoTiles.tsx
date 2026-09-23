function MemoryMockup() {
  const tiles = [
    { name: 'Work', color: '#AABAD6' },
    { name: 'Client A', color: '#A896D8' },
    { name: 'Invoices', color: '#C8B060' },
    { name: 'Research', color: '#7BC4A8' },
  ]

  return (
    <div className="bg-white rounded-2xl border border-[#E5E5EA] shadow-xl p-6 max-w-[420px]">
      {/* Mini desktop preview */}
      <div className="bg-gradient-to-br from-[#E8EDF5] to-[#D4DDE8] rounded-xl p-4 mb-4">
        <div className="flex gap-2 flex-wrap">
          {tiles.map((t) => (
            <div
              key={t.name}
              className="rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm"
              style={{ backgroundColor: t.color }}
            >
              {t.name}
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#8E8E93] mt-3">Focus Mode — 4 tiles</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 bg-[#F5F5F7] rounded-xl px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v7M4 6l3 3 3-3M2 11h10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#1D1D1F]">Save Layout to Memory</p>
            <p className="text-[11px] text-[#8E8E93]">Lock in your current setup</p>
          </div>
          <span className="ml-auto text-[10px] text-[#8E8E93] font-mono">⌥⌘S</span>
        </div>

        <div className="flex items-center gap-3 bg-[#F0F7FF] rounded-xl px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-[#0071E3] flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 12V5M4 8l3-3 3 3M2 3h10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#0071E3]">Recall Layout from Memory</p>
            <p className="text-[11px] text-[#5E9ECC]">Back to your saved workspace</p>
          </div>
          <span className="ml-auto text-[10px] text-[#5E9ECC] font-mono">⌥⌘R</span>
        </div>
      </div>
    </div>
  )
}

export default function AutoTiles() {
  return (
    <section id="auto-tiles" className="py-[120px] px-6 bg-[#F5F5F7]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text left */}
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase mb-4">
              YOUR LAYOUT
            </span>
            <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.03em] text-[#1D1D1F] mb-5 leading-[1.1]">
              Save it once.
              <br />
              Recall it forever.
            </h3>
            <p className="text-[17px] text-[#6E6E73] leading-relaxed">
              DeskTiles remembers your layouts. Save your current arrangement to memory — then recall it with one click, any time. Switch between your "focus mode" and your "full context" setup in seconds.
            </p>
          </div>

          {/* Mockup right */}
          <div className="flex justify-center md:justify-end">
            <MemoryMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
