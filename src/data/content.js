// Central content + verified horse/racing imagery (Unsplash CDN)
const u = (id, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const IMAGES = {
  racePackDirt: u('1526094798790-1df6f28275cc', 2000), // pack of racehorses, dirt track
  raceTurf: u('1495543377553-b2aba1f925d7', 1600),     // jockeys on turf
  raceSingle: u('1516673699707-4f2a243fafaf', 1400),   // single racehorse #6
  raceDramatic: u('1635895901494-539a6b2647af', 1400), // dramatic jockey gallop
  gallopWhite: u('1553284965-83fd3e82fa5a', 1400),     // white horse galloping
  portrait: u('1598974357801-cbca100e65d3', 1000),     // chestnut horse portrait
  standing: u('1450052590821-8bf91254a353', 1200),     // horse standing, mountains
  grazing: u('1534773728080-33d31da27ae5', 1200),      // palomino grazing
}

export const NAV = [
  { label: 'Tentang', href: '#about' },
  { label: 'Disiplin', href: '#disciplines' },
  { label: 'Jadwal', href: '#events' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Berita', href: '#news' },
  // { label: 'Akademi', href: '#academy' },
]

export const TICKER = [
  'Sarga Grand Derby 2026',
  'Thoroughbred Racing',
  'Estd. 2023',
  'Ekuestrian Nasional',
  'Show Jumping',
  'Where Speed Meets Legacy',
  'Junior Riders Academy',
  'Karawaci Turf Club',
]

export const STATS = [
  { value: 48, suffix: '', label: 'Kuda Juara Terdaftar' },
  { value: 12, suffix: '', label: 'Trek & Arena Latihan' },
  { value: 6, suffix: 'K+', label: 'Anggota Komunitas' },
  { value: 2023, suffix: '', label: 'Tahun Berdiri', raw: true },
]

export const DISCIPLINES = [
  {
    key: 'racing',
    name: 'Thoroughbred Racing',
    sub: 'Pacuan Kuda',
    desc: 'Adu kecepatan murni di lintasan turf dan dirt. Kuda ras terbaik dipadu joki terlatih untuk setiap detik yang menentukan.',
    image: IMAGES.raceSingle,
  },
  {
    key: 'jumping',
    name: 'Show Jumping',
    sub: 'Lompat Rintangan',
    desc: 'Presisi, keberanian, dan harmoni. Menaklukkan rangkaian rintangan dengan ketepatan milimeter di setiap lompatan.',
    image: IMAGES.raceDramatic,
  },
  {
    key: 'dressage',
    name: 'Dressage',
    sub: 'Tunggang Serasi',
    desc: 'Seni gerak yang halus—balet antara penunggang dan kuda, menampilkan keseimbangan, ritme, dan kendali sempurna.',
    image: IMAGES.portrait,
  },
  {
    key: 'endurance',
    name: 'Endurance',
    sub: 'Ketahanan',
    desc: 'Uji stamina dan strategi menempuh lintasan panjang. Ketangguhan kuda dan penunggang diuji hingga garis akhir.',
    image: IMAGES.standing,
  },
]

// status: 'open' (REGISTRATION OPEN), 'hot' (SELLING FAST), 'soon' (COMING SOON)
export const EVENTS = [
  {
    category: 'ENDURANCE',
    status: 'open',
    dateLabel: '09 AUG 2026',
    target: '2026-08-09T07:00:00',
    name: 'Sarga Highland Endurance',
    venue: 'Dago Highland Trail, Bandung',
    price: 'IDR 120K',
    image: IMAGES.standing,
    cta: 'filled',
  },
  {
    category: 'PACUAN',
    status: 'open',
    dateLabel: '30 AUG 2026',
    target: '2026-08-30T15:00:00',
    name: 'Sarga Speed Series — Mandalika',
    venue: 'Mandalika Turf Ground, Lombok',
    price: 'IDR 250K',
    image: IMAGES.raceTurf,
    cta: 'outline',
  },
  {
    category: 'PACUAN',
    status: 'hot',
    dateLabel: '12 SEP 2026',
    target: '2026-09-12T16:00:00',
    name: 'Sarga Night Sprint — Sentul',
    venue: 'Sentul Turf Club, Bogor',
    price: 'IDR 180K',
    image: IMAGES.raceDramatic,
    cta: 'outline',
  },
  {
    category: 'DRESSAGE',
    status: 'open',
    dateLabel: '24 OKT 2026',
    target: '2026-10-24T09:00:00',
    name: 'National Dressage Open',
    venue: 'Grand Equestrian Hall, Jakarta',
    price: 'IDR 150K',
    image: IMAGES.portrait,
    cta: 'filled',
  },
  {
    category: 'PACUAN',
    status: 'hot',
    dateLabel: '15 NOV 2026',
    target: '2026-11-15T15:30:00',
    name: 'Sarga Grand Derby — Karawaci',
    venue: 'Karawaci Turf Club, Tangerang',
    price: 'IDR 200K',
    image: IMAGES.raceSingle,
    cta: 'outline',
  },
  {
    category: 'ACADEMY',
    status: 'soon',
    dateLabel: '06 DEC 2026',
    target: '2026-12-06T08:00:00',
    name: 'Junior Riders Cup',
    venue: 'Sarga Academy Field, Bogor',
    price: 'IDR 90K',
    image: IMAGES.grazing,
    cta: 'outline',
  },
]

// Latest articles sourced from news.sarga.co (cover images downloaded to /public/assets/news).
export const NEWS_SOURCE = 'https://news.sarga.co/'
export const NEWS = [
  {
    category: 'Galeri Foto',
    date: '02 Jul 2026',
    title: 'Alexandra Aesthetic Menangi Duel Empat Kuda di Lintasan Lurus Terakhir',
    excerpt:
      'Galeri foto persaingan sengit Alexandra Aesthetic melawan empat kuda, dengan momen penentu di lintasan lurus terakhir.',
    image: '/assets/news/n1.webp',
    link: 'https://news.sarga.co/id/news/alexandra-aesthetic-menangi-duel-empat-kuda-di-lintasan-lurus-terakhir-mvk.html',
    featured: true,
  },
  {
    category: 'King Halim Stable',
    date: '03 Jul 2026',
    title: 'Maxi of Khalim Absen di Indonesia Derby 2026',
    excerpt:
      'Joki Jemmy Runtu menjelaskan cedera kaki muncul sehari sebelum keberangkatan, memaksa King Halim Stable tampil tanpa Maxi.',
    image: '/assets/news/n2.webp',
    link: 'https://news.sarga.co/id/news/maxi-of-khalim-absen-di-indonesia-derby-2026-mvk.html',
  },
  {
    category: 'Triple Crown Jepang',
    date: '02 Jul 2026',
    title: 'Mengenal Senior Triple Crown Jepang',
    excerpt:
      'Di luar Triple Crown klasik, Jepang punya Senior Triple Crown musim gugur & semi untuk kuda dewasa—satu di antaranya tak terkalahkan.',
    image: '/assets/news/n3.webp',
    link: 'https://news.sarga.co/id/news/mengenal-senior-triple-crown-jepang-mahkota-bergengsi-yang-lebih-sulit-dari-triple-crown-klasik-mvk.html',
  },
  {
    category: 'G1 Jepang',
    date: '02 Jul 2026',
    title: 'Mikki Fight Jadi Juara Bertahan Teio Sho 2026',
    excerpt:
      'Kemenangan Mikki Fight jadi pelipur lara usai kekalahan dari Forever Young dan Diktaean di beberapa balapan bergengsi sebelumnya.',
    image: '/assets/news/n4.webp',
    link: 'https://news.sarga.co/id/news/mikki-fight-jadi-juara-bertahan-teio-sho-2026-jagoan-baru-kuda-dirt-jepang-mvk.html',
  },
  {
    category: 'Kuda Pacuan Amerika',
    date: '02 Jul 2026',
    title: 'Anak Flightline Mulai Buktikan Kualitas',
    excerpt:
      'Flight Command jadi keturunan Flightline pertama yang menang di Amerika, unggul sepuluh panjang pada debutnya di Aqueduct.',
    image: '/assets/news/n5.webp',
    link: 'https://news.sarga.co/id/news/anak-flightline-mulai-buktikan-kualitas-flight-command-menang-telak-pada-debut-perdana-mvk.html',
  },
]

export const GALLERY = [
  { src: IMAGES.racePackDirt, span: 'lg:col-span-7 lg:row-span-2', label: 'Final Stretch' },
  { src: IMAGES.gallopWhite, span: 'lg:col-span-5', label: 'Morning Gallop' },
  { src: IMAGES.raceTurf, span: 'lg:col-span-5', label: 'Turf Classic' },
  { src: IMAGES.grazing, span: 'lg:col-span-4', label: 'Stable Life' },
  { src: IMAGES.raceDramatic, span: 'lg:col-span-4', label: 'The Finish' },
  { src: IMAGES.portrait, span: 'lg:col-span-4', label: 'Champion Portrait' },
]

export const ACADEMY = [
  {
    title: 'Pembinaan Atlet Muda',
    desc: 'Program berjenjang dari pemula hingga kompetitif, dibimbing pelatih bersertifikat internasional.',
  },
  {
    title: 'Perawatan & Istal Modern',
    desc: 'Fasilitas kandang, klinik veteriner, dan nutrisi kuda berstandar tinggi untuk performa puncak.',
  },
  {
    title: 'Manajemen Event',
    desc: 'Penyelenggaraan pacuan, kejuaraan, dan sport tourism berkelas untuk komunitas berkuda nasional.',
  },
]
