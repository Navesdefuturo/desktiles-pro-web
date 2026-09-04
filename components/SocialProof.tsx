const testimonials = [
  {
    quote: 'The moment you try it, you wonder how you ever worked without it. It just makes sense.',
    author: 'Marc T.',
    role: 'Freelance designer',
  },
  {
    quote: 'I have 6 active clients at any time. DeskTiles is the only thing that keeps my desktop from looking like a disaster.',
    author: 'Laura K.',
    role: 'UX consultant',
  },
  {
    quote: 'It sounds simple until you use it. Then you realize it changes the way you think about your work.',
    author: 'David R.',
    role: 'Indie developer',
  },
]

const stars = (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FBBF24">
        <path d="M7 1l1.5 4H13l-3.7 2.7 1.4 4.3L7 9.3l-3.7 2.7 1.4-4.3L1 5h4.5z"/>
      </svg>
    ))}
  </div>
)

export default function SocialProof() {
  return (
    <section className="py-[120px] px-6 bg-[#F5F5F7] border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase text-center mb-16">
          What people say
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl p-8 border border-[#EBEBEB]"
            >
              {stars}
              <p className="text-[16px] text-[#1D1D1F] leading-relaxed mb-6 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[14px] font-semibold text-[#1D1D1F]">{t.author}</p>
                <p className="text-[13px] text-[#6E6E73]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App Store rating placeholder */}
        <div className="flex items-center justify-center gap-3 mt-14">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="#FBBF24">
                <path d="M7 1l1.5 4H13l-3.7 2.7 1.4 4.3L7 9.3l-3.7 2.7 1.4-4.3L1 5h4.5z"/>
              </svg>
            ))}
          </div>
          <span className="text-[15px] font-semibold text-[#1D1D1F]">5.0</span>
          <span className="text-[14px] text-[#6E6E73]">· Mac App Store</span>
        </div>
      </div>
    </section>
  )
}
