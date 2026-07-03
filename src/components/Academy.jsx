import { ACADEMY, IMAGES } from '../data/content'
import { useInView } from '../hooks'
import { ArrowRight } from './Icons'

export default function Academy() {
  const [ref, inView] = useInView()

  return (
    <section id="academy" ref={ref} className="relative overflow-hidden bg-sage text-ink py-24 sm:py-32">
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* copy */}
        <div
          className={`order-2 lg:order-1 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="eyebrow">
            <span className="h-px w-8 bg-red" />
            Akademi & Ekosistem
          </p>
          <h2 className="mt-4 font-heading font-800 leading-[1.02] tracking-tight text-[clamp(2rem,4.5vw,3.4rem)]">
            Membina juara, <span className="text-gradient">merawat warisan.</span>
          </h2>
          <p className="mt-5 text-ink/75 leading-relaxed">
            Sarga bukan hanya lintasan lomba. Kami membangun jalur lengkap bagi
            penunggang dan kudanya—dari latihan pertama hingga podium juara.
          </p>

          <ul className="mt-9 flex flex-col">
            {ACADEMY.map((a, i) => (
              <li
                key={a.title}
                className="group flex gap-5 border-t border-ink/15 py-6"
              >
                <span className="font-display font-800 text-gradient text-xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display font-700 text-lg text-ink transition-colors group-hover:text-red">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#join" className="btn-flame mt-8">
            Gabung Akademi
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* image */}
        <div
          className={`order-1 lg:order-2 relative transition-all delay-150 duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative overflow-hidden rounded-[2rem] rounded-bl-[7rem] aspect-[5/6]">
            <img
              src={IMAGES.standing}
              alt="Kuda di akademi Sarga"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 rounded-[2rem] rounded-bl-[7rem]" />
          </div>
          {/* stat chip */}
          <div className="absolute -top-6 right-4 sm:right-10 rounded-2xl border border-white/10 bg-ink-900 px-6 py-4 shadow-xl">
            <p className="font-heading font-800 text-3xl text-gradient leading-none">120+</p>
            <p className="mt-1.5 text-[0.65rem] uppercase tracking-widest2 text-sand/55">
              Atlet Muda Dibina
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
