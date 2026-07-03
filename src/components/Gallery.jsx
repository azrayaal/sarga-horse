import { GALLERY } from '../data/content'
import { useInView } from '../hooks'
import { Sparkle } from './Icons'

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.08 })

  return (
    <section id="gallery" ref={ref} className="relative overflow-hidden bg-brown-700 text-sand py-24 sm:py-32">
      <div className="container-x relative border border-collapse border-ink/10 bg-ink-900/5 p-8 sm:p-12 lg:p-16 rounded-t-[5rem]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-orange">
            <Sparkle className="w-4 h-4 text-orange" />
            Galeri
          </p>
          <h2 className="mt-4 font-heading font-800 leading-[1.02] tracking-tight text-[clamp(2rem,4.5vw,3.4rem)]">
            Momen di <span className="text-gradient">lintasan.</span>
          </h2>
          <p className="mt-4 text-sand/70 leading-relaxed">
            Debu yang beterbangan, derap yang bergemuruh, dan detik-detik menuju
            garis akhir—terekam dalam bingkai.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-[1.5rem] transition-all duration-700 ${g.span} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-5 translate-y-3 text-sm font-semibold uppercase tracking-widest2 text-sand opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
