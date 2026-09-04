export default function Quote() {
  return (
    <section className="relative py-[120px] px-6 bg-[#1D1D1F] overflow-hidden">

      {/* Abstract neural / brain pattern — muy atenuado */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 900 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Connection lines */}
        <line x1="200" y1="80"  x2="380" y2="160" stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="380" y1="160" x2="520" y2="90"  stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="520" y1="90"  x2="700" y2="130" stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="700" y1="130" x2="760" y2="280" stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="380" y1="160" x2="450" y2="300" stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="450" y1="300" x2="600" y2="320" stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="600" y1="320" x2="760" y2="280" stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="200" y1="80"  x2="140" y2="220" stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="140" y1="220" x2="450" y2="300" stroke="white" strokeWidth="0.6" strokeOpacity="0.06"/>
        <line x1="520" y1="90"  x2="600" y2="320" stroke="white" strokeWidth="0.6" strokeOpacity="0.05"/>
        <line x1="760" y1="280" x2="820" y2="160" stroke="white" strokeWidth="0.6" strokeOpacity="0.05"/>
        <line x1="820" y1="160" x2="700" y2="130" stroke="white" strokeWidth="0.6" strokeOpacity="0.05"/>
        <line x1="80"  y1="330" x2="140" y2="220" stroke="white" strokeWidth="0.6" strokeOpacity="0.05"/>
        <line x1="380" y1="160" x2="300" y2="310" stroke="white" strokeWidth="0.6" strokeOpacity="0.04"/>
        <line x1="300" y1="310" x2="450" y2="300" stroke="white" strokeWidth="0.6" strokeOpacity="0.04"/>
        {/* Nodes */}
        <circle cx="200" cy="80"  r="3.5" fill="white" fillOpacity="0.08"/>
        <circle cx="380" cy="160" r="5"   fill="white" fillOpacity="0.09"/>
        <circle cx="520" cy="90"  r="3"   fill="white" fillOpacity="0.07"/>
        <circle cx="700" cy="130" r="4"   fill="white" fillOpacity="0.08"/>
        <circle cx="760" cy="280" r="4.5" fill="white" fillOpacity="0.08"/>
        <circle cx="450" cy="300" r="3.5" fill="white" fillOpacity="0.07"/>
        <circle cx="600" cy="320" r="3"   fill="white" fillOpacity="0.06"/>
        <circle cx="140" cy="220" r="3"   fill="white" fillOpacity="0.07"/>
        <circle cx="820" cy="160" r="2.5" fill="white" fillOpacity="0.06"/>
        <circle cx="80"  cy="330" r="2"   fill="white" fillOpacity="0.05"/>
        <circle cx="300" cy="310" r="2.5" fill="white" fillOpacity="0.05"/>
      </svg>

      {/* Content */}
      <div className="relative max-w-[800px] mx-auto text-center">
        <p className="text-[clamp(22px,3.8vw,42px)] font-semibold text-white leading-[1.25] tracking-[-0.02em] mb-10">
          &ldquo;Finally, a desktop that works
          <br />
          the way I actually think.&rdquo;
        </p>

        {/* Secondary quote */}
        <div className="border-t border-white/10 pt-10 mt-2">
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[540px] mx-auto mb-2">
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
