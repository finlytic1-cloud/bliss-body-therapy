/**
 * Design tokens — single source of truth.
 * Mirror of what's in globals.css @theme.
 * Use these in TS/TSX; reference CSS vars in styles.
 */

export const palette = {
  linen: '#F5F0E8',
  ink: '#221C18',
  earth: '#3A302A',
  clay: '#C08862',
  stone: '#9A9187',
  ladybird: '#B23A2F',
} as const

export const font = {
  display: "'Fraunces Variable', Georgia, serif",
  body: "'Switzer', system-ui, sans-serif",
} as const

export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as const,
} as const

export const duration = {
  fast: 0.4,
  enter: 0.7,
  slow: 1.1,
  image: 1.2,
} as const

export const stagger = 0.09 // 90ms

export const breath = {
  cycle: 10,    // total seconds
  inhale: 4,    // seconds
  exhale: 6,    // seconds
} as const

/**
 * The three tiers — used to drive the descent palette transition.
 * As descent value goes 0→1, background moves linen→earth.
 */
export const tiers = [
  {
    id: 'traditional',
    label: 'Traditional Healing',
    slug: '/traditional-healing',
    descentStart: 0,
    descentEnd: 0.33,
    bg: palette.linen,
  },
  {
    id: 'energetic',
    label: 'Energetic Healing',
    slug: '/energetic-healing',
    descentStart: 0.33,
    descentEnd: 0.66,
    bg: '#E8DDD0', // clay-tinted mid
  },
  {
    id: 'deep',
    label: 'Deep Healing',
    slug: '/deep-healing',
    descentStart: 0.66,
    descentEnd: 1,
    bg: palette.earth,
  },
] as const
