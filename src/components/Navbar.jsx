import { useEffect, useState } from 'react'
import { NAV } from '../data/content'
import { Menu, Close, ArrowRight } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/assets/logo-sarga-reverse.png"
            alt="Sarga"
            className="h-9 w-auto transition-transform duration-500 group-hover:scale-105"
          />
          <span className="hidden sm:flex items-center gap-3 leading-none">
            <span className="h-6 w-px bg-white/20" />
            <span className="text-[0.62rem] font-semibold uppercase tracking-widest2 text-flame-400">
              Horse Sport
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="relative text-sm font-medium text-sand/70 transition-colors hover:text-sand
                           after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-flame-500
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#join" className="hidden md:inline-flex btn-flame !py-2.5 !px-6 text-[0.8rem]">
            Bergabung
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sand"
            aria-label="Menu"
          >
            {open ? <Close className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/[0.06] bg-ink-900/95 backdrop-blur-xl transition-[max-height] duration-500 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sand/80 hover:bg-white/[0.04] hover:text-sand"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#join" onClick={() => setOpen(false)} className="btn-flame mt-2 w-full">
              Bergabung <ArrowRight className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
