function EisenhowerMatrix() {
  const quadrants = [
    {
      q: 'DO FIRST',
      sub: 'Urgent + Important',
      tiles: ['Deadline: Client A', 'Launch assets'],
      bg: '#FFF0F0',
      border: '#FFCDD2',
      dot: '#EF5350',
      label: 'bg-red-100 text-red-600',
    },
    {
      q: 'SCHEDULE',
      sub: 'Not urgent + Important',
      tiles: ['Research', 'Side Project'],
      bg: '#F0F4FF',
      border: '#C5CAE9',
      dot: '#5C6BC0',
      label: 'bg-indigo-100 text-indigo-600',
    },
    {
      q: 'DELEGATE',
      sub: 'Urgent + Not important',
      tiles: ['Admin', 'Invoices'],
      bg: '#FFF8E1',
      border: '#FFE082',
      dot: '#FFA726',
      label: 'bg-amber-100 text-amber-600',
    },
    {
      q: 'ELIMINATE',
      sub: 'Not urgent + Not important',
      tiles: ['Old drafts', 'Archive'],
      bg: '#F5F5F5',
      border: '#E0E0E0',
      dot: '#9E9E9E',
      label: 'bg-gray-100 text-gray-500',
    },
  ]

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60 bg-[#FAFAFA]">
      {/* macOS chrome */}
      <div className="h-7 bg-[#ECECEC] flex items-center px-4 gap-1.5 border-b border-[#D8D8D8]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="mx-auto text-[11px] text-[#8E8E93] font-medium">DeskTiles — Eisenhower Layout</span>
      </div>

      {/* Axis labels */}
      <div className="relative px-4 pt-3 pb-4">
        {/* X axis */}
        <div className="flex justify-between mb-1 px-2">
          <span className="text-[9px] font-semibold text-[#6E6E73] uppercase tracking-widest">Urgent</span>
          <span className="text-[9px] font-semibold text-[#6E6E73] uppercase tracking-widest">Not Urgent</span>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-2 gap-2">
          {quadrants.map((q) => (
            <div
              key={q.q}
              className="rounded-xl p-3"
              style={{ backgroundColor: q.bg, border: `1px solid ${q.border}` }}
            >
              <div className={`inline-block text-[8px] font-bold px-2 py-0.5 rounded-full mb-2 ${q.label}`}>
                {q.q}
              </div>
              <p className="text-[8px] text-[#6E6E73] mb-2">{q.sub}</p>
              <div className="flex flex-col gap-1">
                {q.tiles.map((t) => (
                  <div key={t} className="rounded-full bg-white/80 border border-white px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: q.dot }} />
                    <span className="text-[9px] font-semibold text-[#1D1D1F]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Y axis label */}
        <div className="flex justify-between mt-1 px-2">
          <span className="text-[9px] font-semibold text-[#6E6E73] uppercase tracking-widest">Important</span>
          <span className="text-[9px] font-semibold text-[#6E6E73] uppercase tracking-widest">Not Important</span>
        </div>
      </div>
    </div>
  )
}

const presets = [
  { name: 'Designer', icon: '🎨', tiles: ['Work', 'Client A', 'Research', 'Ideas'] },
  { name: 'Developer', icon: '💻', tiles: ['Codebase', 'Issues', 'Docs', 'Side Project'] },
  { name: 'Freelancer', icon: '📋', tiles: ['Active Client', 'Proposals', 'Admin', 'Archive'] },
  { name: 'Researcher', icon: '🔬', tiles: ['Active Study', 'References', 'Notes', 'Drafts'] },
]

export default function AutoTiles() {
  return (
    <section id="auto-tiles" className="py-[120px] px-6 bg-[#F5F5F7]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image left */}
          <div>
            <EisenhowerMatrix />
          </div>

          {/* Text right */}
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase mb-4">
              AUTO TILES
            </span>
            <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.03em] text-[#1D1D1F] mb-5 leading-[1.1]">
              Automatic Tiles.
              <br />
              Smart by default.
            </h3>
            <p className="text-[17px] text-[#6E6E73] leading-relaxed mb-8">
              Start from a template designed for how you actually work.
              DeskTiles comes with pre-built layouts for common workflows —
              so your desktop is organized from day one, not day thirty.
            </p>

            {/* Preset chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {presets.map((p) => (
                <div key={p.name} className="flex items-center gap-2 bg-white border border-[#D2D2D7]/60 rounded-full px-4 py-2 text-[13px] text-[#1D1D1F] font-medium shadow-sm">
                  <span>{p.icon}</span>
                  <span>{p.name}</span>
                </div>
              ))}
            </div>

            <p className="text-[14px] text-[#6E6E73] leading-relaxed">
              Or build your own. The Eisenhower matrix layout — urgent vs. important —
              is one of several templates that come included. Each tile maps to a real
              project on your desktop, not a virtual folder.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
