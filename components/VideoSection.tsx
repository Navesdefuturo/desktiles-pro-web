export default function VideoSection() {
  return (
    <section className="py-[48px] px-6 bg-[#F5F5F7] border-t border-[#D2D2D7]/40">
      <div className="max-w-[920px] mx-auto">
        <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase text-center mb-6">
          See it in action
        </p>

        {/* Video placeholder — replace src with your Screen.studio embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8D8D8]/60 aspect-video">
          <video
            src="/hero-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-[13px] text-[#6E6E73] text-center mt-6">
          45 seconds. No narration. Just DeskTiles.
        </p>
      </div>
    </section>
  )
}
