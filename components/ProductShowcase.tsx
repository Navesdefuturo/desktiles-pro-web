// Feature label pill
function Label({ text }: { text: string }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase mb-4">
      {text}
    </span>
  )
}

// macOS window wrapper
function MacWindow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60 ${className}`}>
      <div className="h-7 bg-[#ECECEC] flex items-center px-4 gap-1.5 border-b border-[#D8D8D8]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      {children}
    </div>
  )
}

// FEATURE 1 — From chaos to focus (before/after)
function ChaosFocusMockup() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Before */}
      <MacWindow>
        <div className="bg-gradient-to-br from-[#E8EAF0] to-[#D8DCE8] p-4 relative min-h-[200px]">
          <p className="text-[9px] font-semibold text-[#6E6E73] mb-3 tracking-widest uppercase">Before</p>
          <div className="absolute top-8 left-3">
            <div className="w-9 h-9 bg-white/50 rounded-lg flex items-center justify-center text-base">📄</div>
            <span className="text-[7px] text-[#6E6E73] block text-center mt-0.5">report.pdf</span>
          </div>
          <div className="absolute top-5 left-16">
            <div className="w-9 h-9 bg-white/50 rounded-lg flex items-center justify-center text-base">🖼️</div>
            <span className="text-[7px] text-[#6E6E73] block text-center mt-0.5">hero_v3.png</span>
          </div>
          <div className="absolute top-16 left-8">
            <div className="w-9 h-9 bg-white/50 rounded-lg flex items-center justify-center text-base">📊</div>
            <span className="text-[7px] text-[#6E6E73] block text-center mt-0.5">budget.xlsx</span>
          </div>
          <div className="absolute top-3 right-3">
            <div className="w-9 h-9 bg-white/50 rounded-lg flex items-center justify-center text-base">📁</div>
            <span className="text-[7px] text-[#6E6E73] block text-center mt-0.5">old stuff</span>
          </div>
          <div className="absolute bottom-8 left-5">
            <div className="w-9 h-9 bg-white/50 rounded-lg flex items-center justify-center text-base">🎨</div>
            <span className="text-[7px] text-[#6E6E73] block text-center mt-0.5">logo_v4.ai</span>
          </div>
          <div className="absolute bottom-5 right-4">
            <div className="w-9 h-9 bg-white/50 rounded-lg flex items-center justify-center text-base">📝</div>
            <span className="text-[7px] text-[#6E6E73] block text-center mt-0.5">notes.txt</span>
          </div>
        </div>
      </MacWindow>

      {/* After */}
      <MacWindow>
        <div className="bg-gradient-to-br from-[#E4EBF5] to-[#D4E0EE] p-4 min-h-[200px] flex flex-col gap-2">
          <p className="text-[9px] font-semibold text-[#6E6E73] mb-1 tracking-widest uppercase">After</p>
          {/* Expanded tile */}
          <div className="rounded-xl bg-white/70 border border-white shadow-sm overflow-hidden">
            <div className="px-3 py-1.5 flex items-center gap-2 bg-[#AABAD6]/35 border-b border-[#AABAD6]/25">
              <div className="w-2 h-2 rounded-full bg-[#7BA8C4]" />
              <span className="text-[10px] font-bold text-[#1D1D1F]">Work</span>
            </div>
            <div className="px-3 py-2 flex gap-2">
              {['📄','📊','🖼️'].map((e, i) => (
                <div key={i} className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-sm shadow-sm">{e}</div>
              ))}
            </div>
          </div>
          <div className="rounded-full bg-[#EDE8F8]/80 border border-[#C5B8E8]/50 px-3 py-1 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#A896D8]" />
            <span className="text-[10px] font-semibold text-[#1D1D1F]">Design</span>
          </div>
          <div className="rounded-full bg-[#F5EFE0]/80 border border-[#D6C870]/50 px-3 py-1 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8B060]" />
            <span className="text-[10px] font-semibold text-[#1D1D1F]">Ideas</span>
          </div>
        </div>
      </MacWindow>
    </div>
  )
}

// FEATURE 2 — Context / expand
function ExpandContextMockup() {
  return (
    <MacWindow className="max-w-[440px]">
      <div className="bg-gradient-to-br from-[#E4EBF5] to-[#D4E0EE] p-5 min-h-[220px] flex flex-col gap-2.5">
        {/* Expanded tile — Client A */}
        <div className="rounded-2xl bg-white/75 border border-white shadow-lg overflow-hidden">
          <div className="px-4 py-2 flex items-center gap-2.5 bg-[#AABAD6]/35 border-b border-[#AABAD6]/25">
            <div className="w-2 h-2 rounded-full bg-[#7BA8C4]" />
            <span className="text-[11px] font-bold text-[#1D1D1F]">Client A</span>
            <span className="ml-auto text-[9px] text-[#6E6E73]">6 files</span>
          </div>
          <div className="px-4 py-3 flex gap-3">
            {[
              { icon: '📄', name: 'Contract.pdf' },
              { icon: '🖼️', name: 'Mockup.fig' },
              { icon: '📊', name: 'Proposal.xlsx' },
              { icon: '📝', name: 'Notes.txt' },
              { icon: '🎨', name: 'Brand.ai' },
            ].map((f) => (
              <div key={f.name} className="text-center">
                <div className="w-9 h-9 bg-white rounded-xl mb-1 flex items-center justify-center text-lg shadow-sm">{f.icon}</div>
                <span className="text-[7px] text-[#6E6E73] block leading-tight">{f.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Other tiles collapsed */}
        <div className="rounded-full bg-[#EDE8F8]/80 border border-[#C5B8E8]/50 px-3 py-1.5 flex items-center gap-2 w-fit">
          <div className="w-2 h-2 rounded-full bg-[#A896D8]" />
          <span className="text-[10px] font-semibold text-[#1D1D1F]">Personal</span>
        </div>
        <div className="rounded-full bg-[#F5EFE0]/80 border border-[#D6C870]/50 px-3 py-1.5 flex items-center gap-2 w-fit">
          <div className="w-2 h-2 rounded-full bg-[#C8B060]" />
          <span className="text-[10px] font-semibold text-[#1D1D1F]">Research</span>
        </div>
      </div>
    </MacWindow>
  )
}

// FEATURE 3 — Native macOS interactions
function NativeMockup() {
  return (
    <MacWindow className="max-w-[440px]">
      <div className="bg-gradient-to-br from-[#E4EBF5] to-[#D4E0EE] p-5 min-h-[220px] flex flex-col gap-2.5">
        {/* Tile with selected item */}
        <div className="rounded-2xl bg-white/75 border border-white shadow-lg overflow-hidden">
          <div className="px-4 py-2 flex items-center gap-2.5 bg-[#AABAD6]/35 border-b border-[#AABAD6]/25">
            <div className="w-2 h-2 rounded-full bg-[#7BA8C4]" />
            <span className="text-[11px] font-bold text-[#1D1D1F]">Work</span>
          </div>
          <div className="px-4 py-3 flex gap-3">
            {[
              { icon: '📄', name: 'Brief.pdf', selected: true },
              { icon: '📊', name: 'Budget.xlsx', selected: true },
              { icon: '🖼️', name: 'Mockup.png', selected: false },
            ].map((f) => (
              <div key={f.name} className="text-center">
                <div className={`w-9 h-9 rounded-xl mb-1 flex items-center justify-center text-lg shadow-sm ${f.selected ? 'bg-[#0071E3]/15 ring-2 ring-[#0071E3]/40' : 'bg-white'}`}>
                  {f.icon}
                </div>
                <span className="text-[7px] text-[#6E6E73] block">{f.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Context menu */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-[#D2D2D7]/60 w-44 ml-8">
          {['Open with…', 'Quick Look', 'Move to tile…', 'Get Info', 'Show in Finder'].map((item, i) => (
            <div key={item} className={`px-3 py-1.5 text-[10px] text-[#1D1D1F] flex items-center gap-2 ${i === 1 ? 'bg-[#0071E3] text-white rounded-lg mx-1' : ''} ${i < 4 ? 'border-b border-[#F0F0F0]' : ''}`}>
              {i === 1 && <span className="text-white/70 text-[9px]">space</span>}
              {item}
            </div>
          ))}
        </div>
      </div>
    </MacWindow>
  )
}

// FEATURE 4 — Real files
function RealFilesMockup() {
  return (
    <MacWindow className="max-w-[440px]">
      <div className="bg-[#F5F5F7] p-5 min-h-[220px] flex flex-col gap-4">
        {/* Finder window */}
        <div className="rounded-xl bg-white border border-[#D2D2D7]/60 shadow-sm overflow-hidden">
          <div className="px-4 py-2 bg-[#F5F5F7] border-b border-[#D2D2D7]/60 flex items-center gap-2">
            <span className="text-[10px] text-[#6E6E73] font-medium">Finder — Desktop</span>
          </div>
          <div className="px-4 py-3 flex gap-3">
            {['📄','🖼️','📊','📁'].map((icon, i) => (
              <div key={i} className="w-8 h-8 bg-[#F5F5F7] rounded-lg flex items-center justify-center text-base">{icon}</div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center gap-3 text-[11px] text-[#6E6E73]">
          <span>Real Finder files</span>
          <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
            <path d="M0 6h28M22 1l6 5-6 5" stroke="#AABAD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Inside your tile</span>
        </div>

        {/* DeskTiles tile */}
        <div className="rounded-full bg-[#AABAD6]/30 border border-[#AABAD6]/50 px-4 py-2.5 flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#7BA8C4]" />
          <span className="text-[11px] font-bold text-[#1D1D1F]">Work tile</span>
          <span className="ml-auto text-[9px] text-[#6E6E73]">same files, real path</span>
        </div>

        <p className="text-[10px] text-[#6E6E73] text-center">No database. No copy. No cloud sync.</p>
      </div>
    </MacWindow>
  )
}

// FEATURE 5 — Multi-tile workflows
function MultiTileMockup() {
  return (
    <MacWindow className="max-w-[440px]">
      <div className="bg-gradient-to-br from-[#E4EBF5] to-[#D4E0EE] p-5 min-h-[220px] flex flex-col gap-2.5">
        {/* 3 tiles selected */}
        {[
          { name: 'Work', color: '#7BA8C4', bg: '#AABAD6', files: 5 },
          { name: 'Client A', color: '#A896D8', bg: '#C5B8E8', files: 3 },
          { name: 'Research', color: '#C8B060', bg: '#D6C870', files: 8 },
        ].map((tile) => (
          <div key={tile.name} className="rounded-full border-2 px-4 py-2 flex items-center gap-2.5 shadow-md"
               style={{ backgroundColor: `${tile.bg}20`, borderColor: `${tile.bg}80`, boxShadow: `0 0 0 3px ${tile.bg}30` }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tile.color }} />
            <span className="text-[11px] font-bold text-[#1D1D1F]">{tile.name}</span>
            <span className="ml-auto text-[9px] text-[#6E6E73]">{tile.files} files</span>
            {/* selection checkbox */}
            <div className="w-4 h-4 rounded-full bg-[#0071E3] flex items-center justify-center flex-shrink-0">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}

        <p className="text-[10px] text-[#6E6E73] text-center mt-2">
          3 tiles selected — drag to move workspace
        </p>
      </div>
    </MacWindow>
  )
}

const features = [
  {
    id: 'how-it-works',
    label: 'FOCUS',
    title: 'From chaos to focus.',
    body: 'Collapse entire projects into a single clean pill. Reduce visual noise instantly while keeping every file exactly where you need it.',
    imageLeft: true,
    mockup: <ChaosFocusMockup />,
  },
  {
    label: 'CONTEXT',
    title: 'Your projects stay together.',
    body: 'Expand a tile and instantly recover the full context of your work. Files, references, screenshots, PDFs, ideas — exactly where you left them.',
    imageLeft: false,
    mockup: <ExpandContextMockup />,
  },
  {
    label: 'NATIVE EXPERIENCE',
    title: 'Feels like macOS.',
    body: 'Quick Look. Keyboard navigation. Drag & drop. Finder behavior. Everything works exactly the way Mac users expect.',
    imageLeft: true,
    mockup: <NativeMockup />,
  },
  {
    label: 'REAL FILES',
    title: 'Your files stay yours.',
    body: 'DeskTiles works with real Finder files — not shortcuts, databases, or cloud containers. No subscriptions. No sync engine. No vendor lock-in.',
    imageLeft: false,
    mockup: <RealFilesMockup />,
  },
  {
    label: 'WORKFLOWS',
    title: 'Move entire workflows together.',
    body: 'Select multiple tiles and reorganize your workspace in seconds. Multi-tile selection communicates that DeskTiles is a professional spatial tool — not a simple sorter.',
    imageLeft: true,
    mockup: <MultiTileMockup />,
  },
]

export default function ProductShowcase() {
  return (
    <section id="highlights" className="py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto space-y-[100px]">
        {features.map((f) => (
          <div
            key={f.label}
            id={f.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}
          >
            {/* Image */}
            <div className={f.imageLeft ? 'md:order-1' : 'md:order-2'}>
              {f.mockup}
            </div>

            {/* Text */}
            <div className={f.imageLeft ? 'md:order-2' : 'md:order-1'}>
              <Label text={f.label} />
              <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.03em] text-[#1D1D1F] mb-5 leading-[1.1]">
                {f.title}
              </h3>
              <p className="text-[17px] text-[#6E6E73] leading-relaxed">
                {f.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
