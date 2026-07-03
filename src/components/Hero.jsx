import { IMAGES } from '../data/content'
import { ArrowRight, Play, Trophy } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain">
      {/* backdrop image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.racePackDirt}
          alt="Pacuan kuda di lintasan"
          className="h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/30 to-transparent" />
      </div>

      {/* diagonal flame speed-line, echoes the logo */}
      <div
        className="absolute right-[-6rem] top-0 h-full w-[42%] bg-flame-gradient opacity-[0.14] blur-2xl"
        style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 20% 100%)' }}
      />

      <div className="container-x relative flex min-h-screen flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-up">
            <span className="h-px w-8 bg-flame-500" />
            Estd. 2023 — Sarga Horse Sport
          </p>

          <h1
            className="mt-6 font-heading text-white font-800 leading-[0.92] tracking-tight text-[clamp(2.9rem,8vw,6.5rem)] animate-fade-up"
            style={{ animationDelay: '0.08s' }}
          >
            Race
            <br />
            to the  
            <br />
            <span className="text-gradient">WORLD</span>{" "}stage
          </h1>

          <p
            className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-sand/70 animate-fade-up"
            style={{ animationDelay: '0.16s' }}
          >
            Rumah bagi olahraga berkuda Indonesia pacuan kuda, ekuestrian, dan
            pembinaan atlet. Kami merawat naluri juara di setiap derap langkah.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.24s' }}
          >
            <a href="#events" className="btn-flame">
              Lihat Jadwal Pacuan
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#about" className="btn-ghost group">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-flame-500">
                <Play className="w-3 h-3" />
              </span>
              Kisah Sarga
            </a>
          </div>
        </div>

        {/* floating champion card */}
        {/* <div
          className="pointer-events-none absolute bottom-16 right-6 hidden lg:block animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="pointer-events-auto w-72 rounded-[1.75rem] border border-white/10 bg-ink-800/60 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-flame-gradient text-white">
                <Trophy className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-sand/50">Musim Ini</p>
                <p className="font-display font-700 text-lg">48 Kuda Juara</p>
              </div>
            </div>
            <div className="mt-5 h-px w-full bg-white/10" />
            <p className="mt-4 text-sm leading-relaxed text-sand/60">
              Kuda ras terbaik & joki terlatih berlomba di lintasan resmi Sarga
              sepanjang musim 2026.
            </p>
          </div>
        </div> */}
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-sand/40">
        <span className="text-[0.6rem] uppercase tracking-widest2">Scroll</span>
        <span className="h-10 w-px animate-gallop bg-gradient-to-b from-flame-500 to-transparent" />
      </div>
    </section>
  )
}
