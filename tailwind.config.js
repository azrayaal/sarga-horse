/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // near-black (warm) — used sparingly, not everywhere
        ink: {
          DEFAULT: '#010101',
          900: '#010101',
          800: '#0B0908',
          700: '#15100D',
          600: '#1F1713',
        },
        // krem
        sand: {
          DEFAULT: '#F8EED0',
          100: '#FCF6E2',
          200: '#F1E4C1',
          300: '#E6D3A6',
        },
        // cokelat
        brown: {
          DEFAULT: '#763627',
          700: '#5C2A1E',
          600: '#8A4230',
          500: '#9E4C37',
          200: '#E7D5CD',
          100: '#F0E5DF',
        },
        // hijau muda / sage
        sage: {
          DEFAULT: '#87B2A5',
          600: '#6C998B',
          500: '#7BA89A',
          400: '#9CC1B6',
          200: '#C9DED7',
          100: '#E3EEEA',
        },
        // near-black forest green (dark section base)
        forest: {
          DEFAULT: '#0E1512',
          800: '#101B16',
        },
        // functional status colours (event badges)
        status: {
          open: '#1F9D57',
          hot: '#FF6B00',
          soon: '#6B7280',
        },
        // oranye
        orange: {
          DEFAULT: '#FF6B00',
          400: '#FF8A33',
          600: '#E85E00',
        },
        // merah
        red: {
          DEFAULT: '#ED1C24',
          600: '#C7151C',
        },
        flame: {
          400: '#FF8A33',
          500: '#FF6B00',
          600: '#ED1C24',
        },
      },
      fontFamily: {
        // STADMITTE for display/headings (fallback: Oswald, DIN-based condensed)
        display: ['StadtMitte', 'Oswald', 'system-ui', 'sans-serif'],
        heading: ['StadtMitte', 'Oswald', 'system-ui', 'sans-serif'],
        // Masifa for body copy (fallback: Archivo grotesque)
        body: ['Masifa', 'Archivo', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'flame-gradient': 'linear-gradient(135deg, #FF8A33 0%, #FF6B00 45%, #ED1C24 100%)',
        'flame-soft': 'linear-gradient(135deg, #FF6B00 0%, #ED1C24 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gallop: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        gallop: 'gallop 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
}
