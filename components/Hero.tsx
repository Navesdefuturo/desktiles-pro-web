'use client'

function DesktopMockup({ variant }: { variant: 'before' | 'after' }) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-[#D2D2D7]/40">
      {/* macOS window chrome */}
      <div className="h-7 bg-[#E8E8E8] flex items-center px-3 gap-1.5 border-b border-[#D2D2D7]/60">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-[10px] text-[#6E6E73]">Desktop</span>
      </div>

      {/* Desktop content */}
      <div
        className="flex-1 bg-gradient-to-br from-[#E8ECF0] to-[#D0D8E4] p-4 relative"
        style={{ height: 'calc(100% - 28px)' }}
      >
        {variant === 'before' ? (
          // BEFORE: Messy desktop with scattered icons
          <div className="relative w-full h-full">
            <div className="absolute top-4 left-8 text-center">
              <div className="w-10 h-10 bg-[#4B9EFF]/20 border border-[#4B9EFF]/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">📄</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">Report.pdf</span>
            </div>
            <div className="absolute top-2 left-32 text-center">
              <div className="w-10 h-10 bg-yellow-400/20 border border-yellow-400/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">📁</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">Projects</span>
            </div>
            <div className="absolute top-16 left-20 text-center">
              <div className="w-10 h-10 bg-green-400/20 border border-green-400/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">🖼️</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">hero_v3.png</span>
            </div>
            <div className="absolute top-6 right-16 text-center">
              <div className="w-10 h-10 bg-purple-400/20 border border-purple-400/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">📊</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">Budget.xlsx</span>
            </div>
            <div className="absolute top-24 right-8 text-center">
              <div className="w-10 h-10 bg-red-400/20 border border-red-400/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">📝</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">Notes.txt</span>
            </div>
            <div className="absolute bottom-12 left-12 text-center">
              <div className="w-10 h-10 bg-blue-400/20 border border-blue-400/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">📁</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">Old stuff</span>
            </div>
            <div className="absolute bottom-8 left-40 text-center">
              <div className="w-10 h-10 bg-orange-400/20 border border-orange-400/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">🎨</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">logo_final2.ai</span>
            </div>
            <div className="absolute bottom-16 right-20 text-center">
              <div className="w-10 h-10 bg-pink-400/20 border border-pink-400/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">📄</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">contract_v2.pdf</span>
            </div>
            <div className="absolute top-32 left-48 text-center">
              <div className="w-10 h-10 bg-teal-400/20 border border-teal-400/30 rounded-xl mb-1 flex items-center justify-center">
                <span className="text-lg">💾</span>
              </div>
              <span className="text-[8px] text-[#1D1D1F]">backup.zip</span>
            </div>
            {/* Label */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-sm text-white text-[9px] px-2 py-0.5 rounded-full">
              Before
            </div>
          </div>
        ) : (
          // AFTER: Clean desktop with DeskTiles tiles
          <div className="relative w-full h-full flex flex-col gap-2 pt-1">
            {/* Label */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#1D1D1F]/70 backdrop-blur-sm text-white text-[9px] px-2 py-0.5 rounded-full z-10">
              After
            </div>

            {/* Work tile - expanded */}
            <div className="rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm overflow-hidden mt-4">
              <div className="px-3 py-1.5 flex items-center gap-2 bg-[#AABAD6]/40 border-b border-[#AABAD6]/30">
                <div className="w-2 h-2 rounded-full bg-[#AABAD6]" />
                <span className="text-[10px] font-semibold text-[#1D1D1F]">Work</span>
                <span className="ml-auto text-[8px] text-[#6E6E73]">4 files</span>
              </div>
              <div className="px-3 py-2 flex gap-3">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg mb-0.5 flex items-center justify-center text-sm">📄</div>
                  <span className="text-[7px] text-[#6E6E73]">Report.pdf</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg mb-0.5 flex items-center justify-center text-sm">📊</div>
                  <span className="text-[7px] text-[#6E6E73]">Budget.xlsx</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg mb-0.5 flex items-center justify-center text-sm">📝</div>
                  <span className="text-[7px] text-[#6E6E73]">Notes.txt</span>
                </div>
              </div>
            </div>

            {/* Design tile - collapsed pill */}
            <div className="rounded-full bg-[#E8F0F8]/80 border border-[#AABAD6]/40 px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#7BA7C7]" />
              <span className="text-[10px] font-semibold text-[#1D1D1F]">Design</span>
              <span className="ml-auto text-[8px] text-[#6E6E73]">6 files</span>
            </div>

            {/* Clients tile - collapsed pill */}
            <div className="rounded-full bg-[#F0EFF8]/80 border border-[#B5AED6]/40 px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#9B8FD6]" />
              <span className="text-[10px] font-semibold text-[#1D1D1F]">Clients</span>
              <span className="ml-auto text-[8px] text-[#6E6E73]">3 files</span>
            </div>

            {/* Ideas tile - collapsed pill */}
            <div className="rounded-full bg-[#F8F4E8]/80 border border-[#D6C76E]/40 px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D6B85A]" />
              <span className="text-[10px] font-semibold text-[#1D1D1F]">Ideas</span>
              <span className="ml-auto text-[8px] text-[#6E6E73]">12 files</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-14 px-6">
      <div className="max-w-[1100px] w-full mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#AABAD6]/20 border border-[#AABAD6]/40 rounded-full px-4 py-1.5 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#AABAD6]" />
          <span className="text-sm text-[#1D1D1F]">DeskTiles PRO — Now available</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(52px,8vw,96px)] font-bold tracking-[-0.04em] text-[#1D1D1F] leading-[1.0] mb-6">
          Projects.
          <br />
          <span className="text-[#6E6E73]">Not folders.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[clamp(20px,3vw,28px)] font-medium text-[#1D1D1F] tracking-[-0.02em] mb-4">
          Desktop. Upgraded.
        </p>

        {/* Supporting copy */}
        <p className="text-[17px] text-[#6E6E73] max-w-[480px] mx-auto mb-10 leading-relaxed">
          Organize your Mac desktop by project, not by folder.
          Your workspace, finally as smart as you are.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <a
            href="#download"
            className="bg-[#1D1D1F] text-white px-7 py-3 rounded-full text-[15px] font-medium hover:bg-[#3D3D3F] transition-colors"
          >
            Download Pro
          </a>
          <a
            href="#showcase"
            className="border border-[#D2D2D7] text-[#1D1D1F] px-7 py-3 rounded-full text-[15px] font-medium hover:bg-[#F0F0F0] transition-colors"
          >
            Watch Demo
          </a>
        </div>

        {/* Platform note */}
        <p className="text-[13px] text-[#6E6E73] mb-20">
          macOS 13 Ventura and later
        </p>

        {/* Before / After mockup */}
        <div className="grid grid-cols-2 gap-6 max-w-[900px] mx-auto">
          <div>
            <p className="text-[13px] text-[#6E6E73] mb-3 font-medium">Before</p>
            <DesktopMockup variant="before" />
          </div>
          <div>
            <p className="text-[13px] text-[#6E6E73] mb-3 font-medium">After</p>
            <DesktopMockup variant="after" />
          </div>
        </div>

      </div>
    </section>
  )
}
