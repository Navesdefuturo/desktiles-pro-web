export default function Comparison() {
  const rows = [
    { label: 'Visibility', folders: 'One folder at a time', desktiles: 'All projects, always' },
    { label: 'Context', folders: 'None — just files', desktiles: 'Project-aware grouping' },
    { label: 'Organization', folders: 'Manual, fragile', desktiles: 'Smart, persistent tiles' },
    { label: 'Flexibility', folders: 'Fixed structure', desktiles: 'Expand, collapse, resize' },
    { label: 'Speed', folders: 'Navigate > Open > Dig', desktiles: 'One click' },
  ]

  return (
    <section className="py-[120px] px-6 bg-white/50">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[clamp(32px,5vw,48px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] text-center mb-20">
          The difference.
        </h2>

        <div className="rounded-2xl border border-[#D2D2D7]/60 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#F5F5F7]">
            <div className="p-5 text-[13px] text-[#6E6E73] font-medium" />
            <div className="p-5 text-[13px] text-[#6E6E73] font-medium border-l border-[#D2D2D7]/40 text-center">
              Desktop Folders
            </div>
            <div className="p-5 text-[13px] font-semibold text-[#1D1D1F] border-l border-[#D2D2D7]/40 text-center bg-[#AABAD6]/10">
              DeskTiles PRO
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-t border-[#D2D2D7]/40 ${
                i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
              }`}
            >
              <div className="p-5 text-[14px] font-medium text-[#1D1D1F]">{row.label}</div>
              <div className="p-5 text-[14px] text-[#6E6E73] border-l border-[#D2D2D7]/40 text-center">
                {row.folders}
              </div>
              <div className="p-5 text-[14px] text-[#1D1D1F] font-medium border-l border-[#D2D2D7]/40 text-center bg-[#AABAD6]/5">
                ✓ {row.desktiles}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
