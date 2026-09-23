// Backup version of Newsletter.tsx using Buttondown instead of Mailrelay.
// Native <form> POST — no iframe, no CSP changes needed, styled to match the site directly.
//
// To activate: replace TU_USUARIO below with your real Buttondown username
// (buttondown.com/settings, once the account exists), then in app/page.tsx
// swap the import from './Newsletter' to './NewsletterButtondown'.

export default function NewsletterButtondown() {
  return (
    <section className="py-[100px] px-6 text-center border-t border-[#D2D2D7]/40 bg-[#FAFAFA]">
      <div className="max-w-[480px] mx-auto">
        <h2 className="font-bold tracking-[-0.03em] text-[#1D1D1F] mb-3 text-[28px] leading-[1.1]">
          Stay in the loop
        </h2>
        <p className="text-[15px] text-[#6E6E73] mb-6 leading-relaxed">
          New features for DeskTiles, and a heads-up when we launch new apps.
          No spam, unsubscribe anytime.
        </p>

        <form
          action="https://buttondown.com/api/emails/embed-subscribe/TU_USUARIO"
          method="post"
          target="popupwindow"
          onSubmit={() => {
            window.open('https://buttondown.com/confirm', 'popupwindow')
          }}
          className="flex flex-col sm:flex-row gap-3 items-center justify-center"
        >
          <label htmlFor="bd-email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="bd-email"
            required
            placeholder="you@example.com"
            className="w-full sm:w-[280px] border border-[#D2D2D7] rounded-full px-5 py-3 text-[15px] text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1D1D1F] transition-colors"
          />
          <input type="hidden" value="1" name="embed" />
          <button
            type="submit"
            className="bg-[#1D1D1F] text-white px-7 py-3 rounded-full text-[15px] font-medium hover:bg-[#3D3D3F] transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
