export default function Footer() {
  return (
    <footer className="border-t border-[#D2D2D7]/40 py-10 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <span className="text-[15px] font-semibold text-[#1D1D1F]">DeskTiles</span>
          <span className="text-[13px] text-[#6E6E73]">© 2026 Cesar Pedro Julian Ibañez · NIF 46343787Y</span>
          <span className="text-[13px] text-[#6E6E73]">Made with ❤️ in Barcelona</span>
        </div>

        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {[
            { label: 'Privacy', href: '/privacy' },
            { label: 'Contact', href: 'mailto:hello@desktiles.app' },
            { label: 'Release Notes', href: '/changelog' },
            { label: 'Report a Bug', href: 'mailto:support@desktiles.app' },
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
