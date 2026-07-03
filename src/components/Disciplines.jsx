import { useState } from 'react'
import { DISCIPLINES } from '../data/content'
import { useInView } from '../hooks'
import { ArrowUpRight } from './Icons'

export default function Disciplines() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()
  const current = DISCIPLINES[active]

  return (
    <section id="disciplines" ref={ref} className="relative bg-forest text-sand py-24 sm:py-32 overflow-hidden">
      {/* soft glow */}
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-orange/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-sage/10 blur-[120px]" />

      <div className="container-x relative">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-flame-500" />
              Disiplin Olahraga
            </p>
            <h2 className="mt-4 font-heading font-800 leading-[1.02] tracking-tight text-[clamp(2rem,4.5vw,3.4rem)]">
              Empat cabang, satu <span className="text-gradient">semangat.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sand/60 leading-relaxed">
            Dari kecepatan pacuan hingga keanggunan dressage setiap disiplin punya
            ritme dan disiplinnya sendiri.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* interactive list */}
          <ul className="order-2 lg:order-1 flex flex-col">
            {DISCIPLINES.map((d, i) => {
              const on = i === active
              return (
                <li key={d.key}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group w-full border-b border-white/[0.08] py-6 text-left transition-colors"
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className={`font-display font-700 text-sm transition-colors ${
                          on ? 'text-flame-500' : 'text-sand/30'
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3
                            className={`font-heading font-700 tracking-tight text-2xl sm:text-3xl transition-colors ${
                              on ? 'text-sand' : 'text-sand/45 group-hover:text-sand/80'
                            }`}
                          >
                            {d.name}
                          </h3>
                          <ArrowUpRight
                            className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                              on ? 'text-flame-500 translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                            }`}
                          />
                        </div>
                        <p className="mt-0.5 text-xs uppercase tracking-widest2 text-sand/40">
                          {d.sub}
                        </p>
                        <div
                          className={`grid transition-all duration-500 ${
                            on ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <p className="overflow-hidden text-sm leading-relaxed text-sand/60">
                            {d.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* preview */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-[2rem] rounded-tr-[7rem]">
              {DISCIPLINES.map((d, i) => (
                <img
                  key={d.key}
                  src={d.image}
                  alt={d.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest2 text-flame-400">{current.sub}</p>
                <p className="mt-1 font-heading font-800 text-2xl tracking-tight">{current.name}</p>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] rounded-tr-[7rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
