/* PLACEHOLDER — replace quotes and ratings with real reviews before launch */

const publications = [
  'MacStories',
  '9to5Mac',
  'Cult of Mac',
  'The Sweet Setup',
  'AppStories',
  'Mac|Life',
]

const reviews = [
  {
    publication: 'MacStories',
    rating: 5,
    ratingMax: 5,
    quote: 'The most thoughtful take on desktop organization since Stacks. DeskTiles feels like it should have shipped with macOS.',
    reviewer: 'Staff Review',
  },
  {
    publication: 'The Sweet Setup',
    rating: 9,
    ratingMax: 10,
    quote: 'If you live on your Mac desktop, DeskTiles is the upgrade you didn\'t know you needed.',
    reviewer: 'Editors\' Pick',
  },
  {
    publication: 'Cult of Mac',
    rating: 5,
    ratingMax: 5,
    quote: 'A simple idea executed with remarkable care. One-time purchase, zero compromises.',
    reviewer: 'App of the Week',
  },
]

function Stars({ rating, max }: { rating: number; max: number }) {
  if (max === 10) {
    return (
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-[28px] font-bold text-[#1D1D1F] leading-none">{rating}</span>
        <span className="text-[16px] text-[#6E6E73] leading-none mt-1">/ {max}</span>
      </div>
    )
  }
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(max)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill={i < rating ? '#FBBF24' : '#E5E5EA'}>
          <path d="M7 1l1.5 4H13l-3.7 2.7 1.4 4.3L7 9.3l-3.7 2.7 1.4-4.3L1 5h4.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function PressSection() {
  return (
    <section className="py-[100px] px-6 border-t border-[#D2D2D7]/40">
      <div className="max-w-[1100px] mx-auto">

        {/* Eyebrow */}
        <p className="text-[11px] font-semibold tracking-widest text-[#6E6E73] uppercase text-center mb-14">
          As featured in
        </p>

        {/* Publication name strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 mb-20">
          {publications.map((pub) => (
            <span
              key={pub}
              className="text-[17px] font-semibold text-[#C7C7CC] tracking-[-0.01em] select-none"
            >
              {pub}
            </span>
          ))}
        </div>

        {/* Featured review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.publication}
              className="bg-[#F5F5F7] rounded-2xl p-7 flex flex-col"
            >
              <Stars rating={r.rating} max={r.ratingMax} />
              <p className="text-[15px] text-[#1D1D1F] leading-relaxed mb-5 flex-1 font-medium">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#D2D2D7]/50">
                <span className="text-[13px] font-semibold text-[#1D1D1F]">{r.publication}</span>
                <span className="text-[12px] text-[#6E6E73]">{r.reviewer}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
