import { NAV } from '../data/content'

const socials = ['Instagram', 'YouTube', 'TikTok', 'X']

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-sand border-t border-white/[0.07] pt-16">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <img
              src="/assets/logo-sarga-reverse.png"
              alt="Sarga"
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/60">
              Sarga Horse Sport—pusat pacuan kuda dan ekuestrian Indonesia. Merawat
              naluri juara di setiap derap langkah sejak 2023.
            </p>
            <p className="mt-6 font-display font-700 text-lg text-gradient">
              Where Speed Meets Legacy
            </p>
          </div>

          {/* nav */}
          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-sand/40">Jelajahi</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sand/70 transition-colors hover:text-flame-400"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact + social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-sand/40">Terhubung</h4>
            <ul className="mt-5 flex flex-col gap-3 text-sand/70">
              <li>Karawaci Turf Club, Tangerang</li>
              <li>
                <a href="mailto:halo@sarga.co" className="transition-colors hover:text-flame-400">
                  halo@sarga.co
                </a>
              </li>
              <li>+62 21 000 2023</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-sand/70 transition-colors hover:border-flame-500/50 hover:text-sand"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] py-8 sm:flex-row">
          <p className="text-xs text-sand/40">
            © 2026 Sarga Horse Sport · Estd. 2023. Dibuat sebagai mockup demo.
          </p>
          <p className="text-xs text-sand/40">
            Kesejahteraan kuda adalah prioritas kami.
          </p>
        </div>
      </div>
    </footer>
  )
}
