# Sarga Horse Sport — Web Mockup

Landing page mockup untuk **Sarga Horse Sport** (bagian dari SARGA.CO, Estd. 2023):
pusat pacuan kuda, ekuestrian, dan pembinaan atlet berkuda Indonesia.

Dibangun dengan **React + Vite + Tailwind CSS**. Konten dummy, tanpa emoji,
tema gelap dengan aksen gradasi api (oranye → merah) sesuai logo brand.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build produksi ke /dist
npm run preview  # preview hasil build
```

## Struktur

- `src/App.jsx` — menyusun semua section
- `src/components/` — Navbar, Hero, Ticker, About, Stats, Disciplines, Events,
  Gallery, Academy, JoinCTA, Footer, Icons (SVG line-icons, bukan emoji)
- `src/data/content.js` — semua teks + daftar gambar (kuda & pacuan)
- `src/hooks.js` — reveal on-scroll + count-up angka statistik
- `public/assets/` — logo (`logo-sarga.png`, `logo-sarga-reverse.png`)

## Bagian halaman

Hero (pacuan kuda) · Ticker · Tentang (apa itu Sarga Horse Sport) · Statistik ·
Disiplin (Racing, Show Jumping, Dressage, Endurance) · Jadwal Event ·
Galeri · Akademi · Formulir Bergabung · Footer.

## Catatan aset

Foto kuda & pacuan diambil dari Unsplash (URL CDN) untuk keperluan mockup.
Logo brand berasal dari folder `asset/` dan disalin ke `public/assets/`.
Berita & gambar artikel bersumber dari Sagara (`sagaratechnology.com`),
diunduh ke `public/assets/news/`.

## Font brand (STADMITTE & Masifa)

Kedua font ini berlisensi (tidak tersedia di CDN gratis), jadi belum disertakan.
Letakkan file font asli di `public/fonts/` untuk mengaktifkannya:

```
public/fonts/StadtMitte.woff2   # display / heading
public/fonts/Masifa.woff2       # body
```

Aturan `@font-face` di `src/index.css` sudah menunjuk ke sana. Selama file belum
ada, situs otomatis memakai fallback: **Oswald** (pengganti StadtMitte, sama-sama
condensed DIN) dan **Archivo** (pengganti Masifa).
# sarga-horse
