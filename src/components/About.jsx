import { IMAGES } from '../data/content'
import { useInView } from '../hooks'
import { HorseMark, Flag, Shield } from './Icons'

const pillars = [
  {
    icon: Flag,
    title: 'Sportivitas Sejati',
    desc: 'Kompetisi yang adil, terhormat, dan menjunjung tinggi kesejahteraan kuda.',
  },
  {
    icon: Shield,
    title: 'Warisan & Nilai',
    desc: 'Melestarikan tradisi berkuda sekaligus membangun standar profesional modern.',
  },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <img src="/assets/motif8.png" alt="" className='absolute z-10 top-[-120px] left-[-300px] w-[700px]' />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* image cluster — arched frame, not boxy */}
        <div
          className={`relative transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-[2rem] aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <img
              src={IMAGES.gallopWhite}
              alt="Kuda berlari di padang"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 rounded-t-[10rem] rounded-b-[2rem]" />
          </div>

          {/* floating secondary image */}
          <div className="absolute -bottom-8 -right-2 sm:right-6 w-40 sm:w-52 overflow-hidden rounded-[1.5rem] border-4 border-sand shadow-2xl">
            <img src={IMAGES.raceTurf} alt="Pacuan di turf" className="aspect-square w-full object-cover" />
          </div>

          {/* rotating estd badge */}
          <div className="absolute -top-5 -left-3 sm:left-4 grid h-20 w-20 place-items-center rounded-full bg-flame-gradient text-white shadow-xl">
            <div className="text-center leading-none">
              <p className="font-display font-800 text-lg">23</p>
              <p className="text-[0.5rem] uppercase tracking-widest2">Estd</p>
            </div>
          </div>
        </div>

        {/* copy */}
        <div
          className={`transition-all delay-150 duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="eyebrow">
            <HorseMark className="w-5 h-5 text-flame-500" />
            Tentang Kami
          </p>
          <h2 className="mt-5 font-heading font-800 leading-[1.02] tracking-tight text-[clamp(2rem,4.5vw,3.4rem)]">
            Lebih dari sekadar lomba sebuah{' '}
            <span className="text-gradient">gerakan berkuda.</span>
          </h2>

          <div className="mt-6 space-y-5 text-ink/70 leading-relaxed">
            <p>
              <span className="font-semibold text-ink">Sarga Horse Sport</span> lahir
              pada 2023 sebagai wadah bagi para pecinta olahraga berkuda di Indonesia.
              Kami menghadirkan ekosistem lengkap: mulai dari pacuan kuda kelas atas,
              disiplin ekuestrian, hingga pembinaan atlet muda dari nol hingga tingkat
              nasional.
            </p>
            <p>
              Kami percaya setiap kuda punya jiwa juara dan setiap penunggang punya kisah.
              Misi kami adalah mempertemukan keduanya di lintasan yang aman, sportif, dan
              membanggakan—sambil menjaga kesejahteraan kuda sebagai prioritas utama.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-ink/10 bg-brown-100 p-5 transition-colors hover:border-red/40"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange/10 text-red transition-colors group-hover:bg-flame-gradient group-hover:text-white">
                  <p.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-display font-700 text-base text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
