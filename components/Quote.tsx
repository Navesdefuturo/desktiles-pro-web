export default function Quote() {
  return (
    <section className="relative py-[80px] px-6 bg-[#1D1D1F] overflow-hidden">

      {/* Neural network — más visible, más nodos */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 900 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Lines */}
        <line x1="60"  y1="60"  x2="200" y2="120" stroke="white" strokeWidth="0.8" strokeOpacity="0.12"/>
        <line x1="200" y1="120" x2="340" y2="55"  stroke="white" strokeWidth="0.8" strokeOpacity="0.12"/>
        <line x1="340" y1="55"  x2="480" y2="100" stroke="white" strokeWidth="0.8" strokeOpacity="0.12"/>
        <line x1="480" y1="100" x2="620" y2="50"  stroke="white" strokeWidth="0.8" strokeOpacity="0.12"/>
        <line x1="620" y1="50"  x2="760" y2="110" stroke="white" strokeWidth="0.8" strokeOpacity="0.12"/>
        <line x1="760" y1="110" x2="860" y2="70"  stroke="white" strokeWidth="0.8" strokeOpacity="0.10"/>

        <line x1="60"  y1="60"  x2="130" y2="200" stroke="white" strokeWidth="0.8" strokeOpacity="0.11"/>
        <line x1="130" y1="200" x2="200" y2="120" stroke="white" strokeWidth="0.8" strokeOpacity="0.11"/>
        <line x1="200" y1="120" x2="280" y2="240" stroke="white" strokeWidth="0.8" strokeOpacity="0.11"/>
        <line x1="280" y1="240" x2="340" y2="55"  stroke="white" strokeWidth="0.8" strokeOpacity="0.09"/>
        <line x1="280" y1="240" x2="420" y2="300" stroke="white" strokeWidth="0.8" strokeOpacity="0.11"/>
        <line x1="420" y1="300" x2="480" y2="100" stroke="white" strokeWidth="0.8" strokeOpacity="0.10"/>
        <line x1="420" y1="300" x2="560" y2="330" stroke="white" strokeWidth="0.8" strokeOpacity="0.12"/>
        <line x1="560" y1="330" x2="680" y2="280" stroke="white" strokeWidth="0.8" strokeOpacity="0.12"/>
        <line x1="680" y1="280" x2="760" y2="110" stroke="white" strokeWidth="0.8" strokeOpacity="0.11"/>
        <line x1="680" y1="280" x2="800" y2="340" stroke="white" strokeWidth="0.8" strokeOpacity="0.10"/>
        <line x1="800" y1="340" x2="860" y2="70"  stroke="white" strokeWidth="0.8" strokeOpacity="0.08"/>
        <line x1="130" y1="200" x2="280" y2="240" stroke="white" strokeWidth="0.8" strokeOpacity="0.10"/>
        <line x1="480" y1="100" x2="560" y2="330" stroke="white" strokeWidth="0.8" strokeOpacity="0.08"/>
        <line x1="620" y1="50"  x2="680" y2="280" stroke="white" strokeWidth="0.8" strokeOpacity="0.09"/>
        <line x1="340" y1="55"  x2="420" y2="300" stroke="white" strokeWidth="0.8" strokeOpacity="0.08"/>
        <line x1="560" y1="330" x2="760" y2="110" stroke="white" strokeWidth="0.8" strokeOpacity="0.09"/>

        {/* Nodes */}
        <circle cx="60"  cy="60"  r="4"   fill="white" fillOpacity="0.18"/>
        <circle cx="200" cy="120" r="5.5" fill="white" fillOpacity="0.20"/>
        <circle cx="340" cy="55"  r="4"   fill="white" fillOpacity="0.16"/>
        <circle cx="480" cy="100" r="5"   fill="white" fillOpacity="0.18"/>
        <circle cx="620" cy="50"  r="3.5" fill="white" fillOpacity="0.15"/>
        <circle cx="760" cy="110" r="5"   fill="white" fillOpacity="0.18"/>
        <circle cx="860" cy="70"  r="3"   fill="white" fillOpacity="0.13"/>
        <circle cx="130" cy="200" r="4"   fill="white" fillOpacity="0.16"/>
        <circle cx="280" cy="240" r="5"   fill="white" fillOpacity="0.18"/>
        <circle cx="420" cy="300" r="5.5" fill="white" fillOpacity="0.20"/>
        <circle cx="560" cy="330" r="4"   fill="white" fillOpacity="0.16"/>
        <circle cx="680" cy="280" r="5"   fill="white" fillOpacity="0.18"/>
        <circle cx="800" cy="340" r="3.5" fill="white" fillOpacity="0.14"/>
      </svg>

      {/* Content */}
      <div className="relative max-w-[800px] mx-auto text-center">
        <p className="text-[clamp(22px,3.8vw,42px)] font-semibold text-white leading-[1.25] tracking-[-0.02em] mb-6">
          &ldquo;Finally, a desktop that works
          <br />
          the way I actually think.&rdquo;
        </p>
        <p className="text-[17px] text-white/50 leading-relaxed max-w-[500px] mx-auto">
          &ldquo;I open a project tile and everything I need is right there.
          No Finder. No searching. Just work.&rdquo;
        </p>
      </div>
    </section>
  )
}
