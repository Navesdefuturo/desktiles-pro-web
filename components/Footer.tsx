// URL provisional — cambiar a @desktilesapp cuando esté disponible en TikTok
const TIKTOK_URL = 'https://www.tiktok.com/@desktiles'

const socials = [
  {
    label: 'DeskTiles on YouTube',
    href: 'https://www.youtube.com/@desktilesapp',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: 'DeskTiles on Instagram',
    href: 'https://www.instagram.com/desktilesapp',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.75"/>
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'DeskTiles on X',
    href: 'https://x.com/desktilesapp',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'DeskTiles on TikTok',
    href: TIKTOK_URL,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#D2D2D7]/40 py-10 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left: brand + socials */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="text-[15px] font-semibold text-[#1D1D1F]">DeskTiles</span>
            <span className="text-[13px] text-[#6E6E73]">© 2026 DeskTiles</span>
            <span className="text-[13px] text-[#6E6E73]">Made with ❤️ in Barcelona</span>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: nav links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {[
            { label: 'Support', href: '/support' },
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
            { label: 'Legal', href: '/legal' },
            { label: 'Release Notes', href: '/changelog' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="max-w-[1100px] mx-auto mt-6 pt-6 border-t border-[#D2D2D7]/30">
        <p className="text-[11px] text-[#6E6E73] leading-relaxed text-center">
          Mac, macOS, Finder, Sequoia, Tahoe, Golden Gate and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. DeskTiles is an independent product and is not affiliated with or endorsed by Apple Inc.
        </p>
      </div>
    </footer>
  )
}
