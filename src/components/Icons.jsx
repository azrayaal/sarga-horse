// Lightweight inline line-icons — no emoji, stroke-based for an elegant look.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const Trophy = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 20h6M12 14v6" />
  </svg>
)

export const Flag = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 21V4M5 4c3-1.5 6 1.5 9 0s5-1 5-1v9s-2 .5-5 1-6-1.5-9 0" />
  </svg>
)

export const Shield = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Sparkle = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" opacity="0.5" />
  </svg>
)

export const Play = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" stroke="none" />
  </svg>
)

export const Location = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
)

export const Calendar = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2.5" />
    <path d="M4 10h16M8 3v4M16 3v4" />
  </svg>
)

export const Menu = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

// Stylised galloping horse mark (echoes the logo silhouette)
export const HorseMark = (p) => (
  <svg viewBox="0 0 64 64" fill="currentColor" {...p}>
    <path d="M54 20c-2.2-.4-4 .3-5.6 1.4-1.3-2.2-3.3-4-5.8-5l1.6-3.2c.3-.6.1-1.3-.5-1.7-.6-.3-1.4-.1-1.8.5l-1.9 3.2c-1.3-.3-2.7-.4-4.1-.3-6.9.5-12.9 5-16 11.4-.7 1.4-2 2.4-3.6 2.7l-6.5 1.3c-1 .2-1.6 1.2-1.2 2.1.3.7 1 1.1 1.7 1l4.9-.7-4.2 6.8c-.5.8-.1 1.9.8 2.2.6.2 1.3 0 1.7-.5l3.7-4.9 2.1 8.2c.2.9 1.2 1.4 2 1 .7-.3 1.1-1 .9-1.7l-1.6-7.9 6.6 3.6-1.4 6.9c-.2.9.4 1.8 1.4 1.9.8.1 1.5-.4 1.7-1.2l1.3-6.1 5.9-.5c5.3-.5 9.9-3.7 12.2-8.4l1.8.9c.9.4 1.9-.1 2.1-1 .1-.6-.1-1.2-.7-1.5l-1.6-.8c.3-1.2.4-2.5.3-3.8 1.3-.9 2.7-1.3 4.2-1 .9.2 1.8-.4 1.9-1.4.1-.8-.4-1.5-1.2-1.6Z" />
  </svg>
)
