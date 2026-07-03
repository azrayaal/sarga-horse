import { NEWS, NEWS_SOURCE } from '../data/content'
import { useInView } from '../hooks'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function News() {
  const [ref, inView] = useInView({ threshold: 0.08 })
  const [featured, ...rest] = NEWS

  return (
   <section
  id="news"
  ref={ref}
  className="relative overflow-hidden bg-sand text-ink py-24 sm:py-32 bg-[url('/assets/bg/bg_news.png')] bg-cover bg-center bg-no-repeat"
>
   <img src="/assets/motif8.png" alt="" className='absolute z-10 top-[-85px] right-[-300px] w-[700px]' />
      <div className="container-x relative">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-red" />
              Berita &amp; Artikel · news.sarga.co
            </p>
            <h2 className="mt-4 font-heading font-700 uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,5vw,4rem)]">
              Kabar Terbaru
            </h2>
          </div>
          <a
            href={NEWS_SOURCE}
            target="_blank"
            rel="noreferrer"
            className="btn-outline shrink-0"
          >
            Kunjungi news.sarga.co
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* featured */}
          <a
            href={featured.link || NEWS_SOURCE}
            target="_blank"
            rel="noreferrer"
            className={`group flex flex-col overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-ink/10 transition-all duration-700 hover:ring-red/40 hover:-translate-y-1 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover object-[50%_22%] transition-transform duration-[1.3s] group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-md bg-red px-2.5 py-1 text-[0.6rem] font-700 uppercase tracking-widest2 text-white">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="text-xs font-semibold uppercase tracking-widest2 text-ink/40">
                {featured.date}
              </p>
              <h3 className="mt-3 font-display font-700 leading-tight text-2xl sm:text-3xl text-ink transition-colors group-hover:text-red">
                {featured.title}
              </h3>
              <p className="mt-3 text-ink/65 leading-relaxed">{featured.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-red">
                Baca Selengkapnya
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>

          {/* list */}
          <div className="flex flex-col divide-y divide-ink/10">
            {rest.map((n, i) => (
              <a
                key={n.title}
                href={n.link || NEWS_SOURCE}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center gap-5 py-5 first:pt-0 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`}
                style={{ transitionDelay: `${120 + i * 110}ms` }}
              >
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl ring-1 ring-ink/10">
                  <img
                    src={n.image}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.3s] group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-widest2 text-red">
                    {n.category}
                    <span className="h-1 w-1 rounded-full bg-ink/25" />
                    <span className="text-ink/40">{n.date}</span>
                  </p>
                  <h4 className="mt-1.5 font-display font-700 leading-snug text-lg text-ink transition-colors group-hover:text-red">
                    {n.title}
                  </h4>
                </div>
                <ArrowUpRight className="ml-auto hidden h-5 w-5 shrink-0 text-ink/25 transition-all group-hover:text-red group-hover:-translate-y-0.5 sm:block" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-ink/40">
          Artikel &amp; gambar bersumber dari{' '}
          <a href={NEWS_SOURCE} target="_blank" rel="noreferrer" className="underline hover:text-red">
            news.sarga.co
          </a>
          .
        </p>
      </div>
    </section>
  )
}
