export default function VideoSection() {
  return (
    <section className="py-[80px] px-6 bg-[#F5F5F7] border-t border-[#D2D2D7]/40">
      <div className="max-w-[920px] mx-auto">
        <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase text-center mb-6">
          See it in action
        </p>

        {/* Video placeholder — replace src with your Screen.studio embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] border border-white/60 bg-[#1D1D1F] aspect-video flex items-center justify-center">
          {/* macOS chrome */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-[#2A2A2A] flex items-center px-4 gap-1.5 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-auto text-[11px] text-white/30 font-medium">DeskTiles — Demo</span>
          </div>

          {/* Play button placeholder */}
          <div className="flex flex-col items-center gap-4 opacity-40">
            <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="white">
                <path d="M2 2l16 9-16 9V2z" />
              </svg>
            </div>
            <span className="text-white/60 text-[13px] font-medium">Demo video — coming soon</span>
          </div>

          {/* When you have the Screen.studio embed, replace the above div with: */}
          {/* <video
            src="YOUR_SCREEN_STUDIO_VIDEO_URL"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          /> */}
        </div>

        <p className="text-[13px] text-[#6E6E73] text-center mt-6">
          45 seconds. No narration. Just DeskTiles.
        </p>
      </div>
    </section>
  )
}
