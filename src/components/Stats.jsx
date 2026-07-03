import { STATS } from '../data/content'
import { useInView, useCountUp } from '../hooks'

function Stat({ stat, active }) {
  const count = useCountUp(stat.value, active)
  const display = stat.raw ? stat.value : count
  return (
    <div className="relative px-2 text-center">
      <p className="font-heading font-800 tracking-tight text-[clamp(2.5rem,6vw,4rem)] leading-none">
        <span className="text-gradient">{display}</span>
        {stat.suffix && <span className="text-gradient">{stat.suffix}</span>}
      </p>
      <p className="mt-3 text-xs sm:text-sm uppercase tracking-widest2 text-sand/55">
        {stat.label}
      </p>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <section ref={ref} className="relative overflow-hidden bg-sage py-20 sm:py-28">
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-y-12 gap-x-6 rounded-[2rem] bg-ink-900 py-12 shadow-[0_30px_60px_-20px_rgba(1,1,1,0.5)] md:grid-cols-4 md:divide-x md:divide-white/[0.08]">
          {STATS.map((s) => (
            <Stat key={s.label} stat={s} active={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
