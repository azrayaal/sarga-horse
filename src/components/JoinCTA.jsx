import { useState } from 'react'
import { IMAGES } from '../data/content'
import { ArrowRight } from './Icons'

export default function JoinCTA() {
  const [sent, setSent] = useState(false)

  return (
    <section id="join" className="relative bg-ink-900 text-sand py-24 sm:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <img
            src={IMAGES.raceSingle}
            alt="Joki dan kuda balap"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40" />
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-flame-gradient opacity-20 blur-3xl"
            style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-flame-500" />
                Bergabung Bersama Kami
              </p>
              <h2 className="mt-4 font-heading font-800 leading-[1.02] tracking-tight text-[clamp(2rem,4.5vw,3.4rem)]">
                Mulai perjalanan <span className="text-gradient">berkuda Anda.</span>
              </h2>
              <p className="mt-5 max-w-md text-sand/70 leading-relaxed">
                Jadilah bagian dari komunitas Sarga Horse Sport. Ikuti kelas, hadiri
                pacuan, atau daftarkan kuda Anda untuk musim mendatang.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="rounded-[1.75rem] border border-white/10 bg-ink-900/60 p-6 backdrop-blur-xl sm:p-8"
            >
              {sent ? (
                <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-flame-gradient text-white">
                    <ArrowRight className="w-6 h-6" />
                  </span>
                  <p className="mt-5 font-display font-700 text-xl">Terima kasih!</p>
                  <p className="mt-2 text-sm text-sand/60">
                    Tim Sarga akan menghubungi Anda segera. (Demo)
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <Field label="Nama Lengkap" placeholder="Nama Anda" type="text" />
                  <Field label="Email" placeholder="nama@email.com" type="email" />
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-sand/50">
                      Minat
                    </label>
                    <select className="w-full rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-sand outline-none transition-colors focus:border-flame-500/60">
                      <option>Akademi Berkuda</option>
                      <option>Peserta Pacuan</option>
                      <option>Menonton Event</option>
                      <option>Kemitraan / Sponsor</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-flame mt-2 w-full">
                    Kirim Pendaftaran
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, placeholder, type }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-sand/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-sand outline-none transition-colors placeholder:text-sand/30 focus:border-flame-500/60"
      />
    </div>
  )
}
