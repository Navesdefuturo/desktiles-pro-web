export default function Quote() {
  return (
    <section className="py-[120px] px-6 bg-[#1D1D1F]">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-[clamp(28px,5vw,52px)] font-semibold text-white leading-[1.2] tracking-[-0.02em] mb-8">
          &ldquo;Feels like something macOS
          <br />
          has always been missing.&rdquo;
        </p>
        <p className="text-[15px] text-white/40 tracking-widest uppercase text-sm">
          Designed for Mac
        </p>
      </div>
    </section>
  )
}
