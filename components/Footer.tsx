export default function Footer() {
  return (
    <footer className="border-t border-[#D2D2D7]/40 py-10 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[15px] font-semibold text-[#1D1D1F]">DeskTiles</span>
          <span className="text-[13px] text-[#6E6E73]">© 2025 DeskTiles</span>
          <span className="text-[13px] text-[#6E6E73]">Made with ❤️ in Barcelona</span>
        </div>

        <nav className="flex items-center gap-6">
          {[
            { label: 'Privacy', href: '/privacy' },
            { label: 'Contact', href: 'mailto:hello@desktiles.app' },
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
    </footer>
  )
}
