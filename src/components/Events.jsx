import { EVENTS } from '../data/content'
import { useInView, useCountdown } from '../hooks'
import { Location, ArrowUpRight, ArrowRight, Calendar } from './Icons'

const STATUS = {
  open: { label: 'Registration Open', cls: 'bg-status-open' },
  hot: { label: 'Selling Fast', cls: 'bg-status-hot' },
  soon: { label: 'Coming Soon', cls: 'bg-status-soon' },
}

function TimeBlock({ value, label }) {
  return (
    <div className="text-center">
      <p className="font-display font-700 text-2xl leading-none tabular-nums text-sand">
        {String(value).padStart(2, '0')}
      </p>
      <p className="mt-1 text-[0.55rem] font-semibold uppercase tracking-widest2 text-sand/40">
        {label}
      </p>
    </div>
  )
}

function EventCard({ e, i, inView }) {
  const t = useCountdown(e.target)
  const status = STATUS[e.status]
  const filled = e.cta === 'filled'

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[1.4rem] bg-ink-800 ring-1 ring-white/[0.06] transition-all duration-700 hover:ring-red/40 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${i * 90}ms` }}
    >
      {/* image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={e.image}
          alt={e.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.3s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-ink-900/10" />
        <span className="absolute left-3 top-3 rounded-md bg-red px-2.5 py-1 text-[0.6rem] font-700 uppercase tracking-widest2 text-white">
          {e.category}
        </span>
        <span
          className={`absolute right-3 top-3 rounded-md px-2.5 py-1 text-[0.6rem] font-700 uppercase tracking-widest2 text-white ${status.cls}`}
        >
          {status.label}
        </span>
        <span className="absolute bottom-3 left-3 rounded-md bg-ink-900/85 px-2.5 py-1 text-[0.7rem] font-600 tracking-wide text-sand backdrop-blur-sm">
          {e.dateLabel}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display font-700 italic-sport uppercase leading-tight text-xl text-sand">
          {e.name}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-sand/60">
          <Location className="w-4 h-4 shrink-0 text-red" />
          {e.venue}
        </p>

        <div className="my-5 h-px w-full bg-white/[0.08]" />

        <div className="grid grid-cols-4 gap-1">
          <TimeBlock value={t.days} label="Days" />
          <TimeBlock value={t.hrs} label="Hrs" />
          <TimeBlock value={t.min} label="Min" />
          <TimeBlock value={t.sec} label="Sec" />
        </div>

        <div className="my-5 h-px w-full bg-white/[0.08]" />

        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-widest2 text-sand/40">From</p>
            <p className="font-display font-700 text-lg text-red">{e.price}</p>
          </div>
          <button
            aria-label={`Daftar ${e.name}`}
            className={`grid h-11 w-11 place-items-center rounded-lg transition-all duration-300 group-hover:translate-x-0.5 ${
              filled
                ? 'bg-red text-white hover:bg-red-600'
                : 'border border-white/20 text-sand hover:border-red hover:text-red'
            }`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Events() {
  const [ref, inView] = useInView({ threshold: 0.06 })

  return (
    <section id="events" ref={ref} className="relative overflow-hidden bg-ink-900 text-sand py-24 sm:py-32">
      {/* <img src="/assets/motif9.png" alt="" className='absolute z-0 top-[-100px] right-[-200px] h-[700px]' /> */}
       <img src="/assets/motif4.png" alt="" className='absolute z-0 bottom-[-0] left-[-0] h-[100px] hidden md:block' />
       <img src="/assets/motif6.png" alt="" className='absolute z-0 top-[-0] left-[-0] h-[100px] hidden md:block' />
       <img src="/assets/motif5.png" alt="" className='absolute z-0 top-[-0] right-[-0] h-[100px] hidden md:block' />
       <img src="/assets/motif3.png" alt="" className='absolute z-0 bottom-[-0] right-[-0] h-[100px] hidden md:block' />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">
              <Calendar className="w-4 h-4 text-red" />
              Kalender Musim 2026
            </p>
            <h2 className="mt-4 font-heading font-700 uppercase leading-[0.95] tracking-tight text-[clamp(2.4rem,6vw,4.5rem)]">
              Jadwal Pacuan <span className="text-accent">&amp; Event</span>
            </h2>
            <p className="mt-4 max-w-xl text-sand/60 leading-relaxed">
              Setiap ronde musim 2026 Sarga Horse Sport—pacuan, dressage, endurance,
              hingga akademi. Amankan tiket Anda sebelum start.
            </p>
          </div>
          <a href="#join" className="btn-ghost shrink-0">
            Semua Event
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <EventCard key={e.name} e={e} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
