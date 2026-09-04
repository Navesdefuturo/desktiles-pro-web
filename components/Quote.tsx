export default function Quote() {
  return (
    <section className="py-[120px] px-6 bg-[#1D1D1F]">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-[clamp(26px,4.5vw,50px)] font-semibold text-white leading-[1.25] tracking-[-0.02em] mb-10">
          &ldquo;Finally, a desktop that works
          <br />
          the way I actually think.&rdquo;
        </p>

        {/* Secondary quote */}
        <div className="border-t border-white/10 pt-10 mt-2">
          <p className="text-[18px] text-white/50 leading-relaxed max-w-[540px] mx-auto mb-2">
            &ldquo;I open a project tile and everything I need is right there.
            No Finder. No searching. Just work.&rdquo;
          </p>
          <p className="text-[13px] text-white/25 tracking-widest uppercase">
            Designed for Mac · Made in Barcelona
          </p>
        </div>
      </div>
    </section>
  )
}
