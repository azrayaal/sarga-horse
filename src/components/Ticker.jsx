import { TICKER } from '../data/content'

export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="relative bg-brown py-5 overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display font-700 uppercase tracking-tight text-xl text-sand/90">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brown to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brown to-transparent" />
    </div>
  )
}
