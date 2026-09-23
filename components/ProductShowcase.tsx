import Image from 'next/image'

// Feature label pill
function Label({ text }: { text: string }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase mb-4">
      {text}
    </span>
  )
}

// macOS window wrapper (kept for MultiTile)
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

// FEATURE 1a — Eisenhower layout on desktop
function EisenhowerMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60">
      <Image
        src="/screenshots/desktiles-eisenhower-layout-auto-tiles.jpg"
        alt="Eisenhower Matrix layout applied on the Mac desktop — Do, Decide, Delegate, Delete tiles with Golden Gate Bridge wallpaper"
        width={1400}
        height={421}
        loading="lazy"
        className="w-full h-auto block"
      />
    </div>
  )
}

// FEATURE 1b — Layout Gallery window showing all presets
function LayoutGalleryMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60">
      <Image
        src="/screenshots/desktiles-layout-gallery-window.jpg"
        alt="DeskTiles Layout Gallery — My Projects, Kanban Flow, Sprint Board, Eisenhower Matrix, My Life, Inbox + Lists and more presets"
        width={1300}
        height={900}
        loading="lazy"
        className="w-full h-auto block"
      />
    </div>
  )
}

// FEATURE 2 — From chaos to focus (before/after with overlay labels)
function ChaosFocusMockup() {
  return (
    <div className="flex flex-col gap-3">
      {/* Before */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D8D8D8]/60">
        <Image
          src="/screenshots/desktiles-before-messy-desktop.jpg"
          alt="Messy Mac desktop before DeskTiles — files scattered everywhere"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold tracking-[0.12em] uppercase"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
            Before
          </span>
        </div>
      </div>

      {/* After */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D8D8D8]/60">
        <Image
          src="/screenshots/desktiles-after-organized-project-tiles.jpg"
          alt="Organized Mac desktop after DeskTiles — project tiles collapsed and clean"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold tracking-[0.12em] uppercase"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
            After
          </span>
        </div>
      </div>
    </div>
  )
}

// FEATURE 3 — Context / expand
function ExpandContextMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60">
      <Image
        src="/screenshots/desktiles-expanded-tiles-project-files.jpg"
        alt="DeskTiles with all project tiles expanded showing files inside each tile"
        width={1400}
        height={547}
        loading="lazy"
        className="w-full h-auto block"
      />
    </div>
  )
}

// FEATURE 4 — Native macOS interactions
function NativeMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60 max-w-[540px]">
      <Image
        src="/screenshots/desktiles-native-right-click-context-menu.jpg"
        alt="Right-click context menu on a file inside a DeskTiles tile — Open, Quick Look, Show in Finder, Put Back on Desktop"
        width={1400}
        height={466}
        loading="lazy"
        className="w-full h-auto block"
      />
    </div>
  )
}

// FEATURE 5 — Real files
function RealFilesMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60 max-w-[540px]">
      <Image
        src="/screenshots/desktiles-real-files-finder-window.jpg"
        alt="DeskTiles tile open alongside a Finder window showing the same real files — same folder, no copy"
        width={1400}
        height={574}
        loading="lazy"
        className="w-full h-auto block"
      />
    </div>
  )
}

// FEATURE 6 — Multi-tile workflows
function MultiTileMockup() {
  return (
    <MacWindow className="max-w-[440px]">
      <div className="bg-gradient-to-br from-[#E4EBF5] to-[#D4E0EE] p-5 min-h-[220px] flex flex-col gap-2.5">
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
    label: 'AUTO TILES',
    title: 'Automatic Tiles.\nSmart by default.',
    body: 'Start from a template designed for how you actually work. DeskTiles comes with pre-built layouts for common workflows — so your desktop is organized from day one, not day thirty.',
    chips: ['🎨 Designer', '💻 Developer', '📋 Freelancer', '🔬 Researcher'],
    extra: 'Or build your own. Pick from the Layout Gallery — rows, columns, Eisenhower matrix, and more — and apply it in one click. Each tile maps to a real project on your desktop, not a virtual folder.',
    imageLeft: true,
    mockup: <EisenhowerMockup />,
  },
  {
    label: 'LAYOUT GALLERY',
    title: 'Pick a template.\nStart instantly.',
    body: 'DeskTiles ships with layouts for every workflow. Projects, organizing, focus, minimalism. Choose one and your desktop is ready in seconds — not in days.',
    imageLeft: false,
    mockup: <LayoutGalleryMockup />,
  },
  {
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
    body: 'DeskTiles works with real Finder files — not a database, not a cloud container. No subscriptions. No sync engine. No vendor lock-in.',
    imageLeft: false,
    mockup: <RealFilesMockup />,
  },
  {
    label: 'WORKFLOWS',
    title: 'Move entire workflows together.',
    body: 'Select multiple tiles and reorganize your workspace in seconds. A professional spatial tool — not a simple sorter.',
    imageLeft: true,
    mockup: <MultiTileMockup />,
  },
]


export default function ProductShowcase() {
  return (
    <section id="highlights" className="py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto space-y-[100px]">
        {features.map((f) => (
          <div key={f.label}>
            <div
              id={f.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              {/* Image */}
              <div className={f.imageLeft ? 'md:order-1' : 'md:order-2'}>
                {f.mockup}
              </div>

              {/* Text */}
              <div className={f.imageLeft ? 'md:order-2' : 'md:order-1'}>
                <Label text={f.label} />
                <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.03em] text-[#1D1D1F] mb-5 leading-[1.1]"
                  style={{ whiteSpace: 'pre-line' }}>
                  {f.title}
                </h3>
                <p className="text-[17px] text-[#6E6E73] leading-relaxed mb-6">
                  {f.body}
                </p>
                {'chips' in f && f.chips && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(f.chips as string[]).map((c) => (
                      <div key={c} className="flex items-center gap-1.5 bg-[#F5F5F7] border border-[#D2D2D7]/60 rounded-full px-4 py-2 text-[13px] text-[#1D1D1F] font-medium">
                        {c}
                      </div>
                    ))}
                  </div>
                )}
                {'extra' in f && f.extra && (
                  <p className="text-[14px] text-[#6E6E73] leading-relaxed">{f.extra as string}</p>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
