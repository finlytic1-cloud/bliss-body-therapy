/**
 * Motion primitives — all animation in the site flows from here.
 *
 * One easing for everything: cubic-bezier(0.16, 1, 0.3, 1)
 * Entrances 700–1100ms, never 300ms.
 * Stagger children 90ms.
 */

import type { Variants } from 'motion/react'
import { easing, duration, stagger } from './tokens'

const expo = easing.outExpo

/* ── Headline: blur-to-focus ─────────────────────────────────────────────── */
export const headlineVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: duration.slow,
      ease: expo,
    },
  },
}

/* ── Body paragraph: opacity only ────────────────────────────────────────── */
export const paragraphVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: expo,
    },
  },
}

/* ── Image: mask wipe + scale settle ─────────────────────────────────────── */
export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: duration.image,
      ease: expo,
    },
  },
}

/* ── Stagger container ───────────────────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0,
    },
  },
}

/* ── Fade up (general entrance) ──────────────────────────────────────────── */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.enter,
      ease: expo,
    },
  },
}

/* ── Fade in (opacity only, for reduced-motion fallback) ─────────────────── */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.enter,
      ease: expo,
    },
  },
}

/* ── Nav link underline transition ───────────────────────────────────────── */
export const underlineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: duration.fast,
      ease: expo,
    },
  },
}

/* ── Ladybird walk (Section: Free Healing) ───────────────────────────────── */
export const ladybirdVariants: Variants = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 1,
    x: 80,   // walks 80px along the rule
    transition: {
      delay: 0.8,
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ── Helper: motion-safe wrapper ─────────────────────────────────────────── */
export function reducedMotionVariants(base: Variants): Variants {
  const safe: Variants = {}
  for (const [key, value] of Object.entries(base)) {
    if (typeof value === 'object' && value !== null) {
      const { filter: _filter, y: _y, scale: _scale, ...rest } = value as Record<string, unknown>
      safe[key] = { ...rest, transition: { duration: 0 } }
    } else {
      safe[key] = value
    }
  }
  return safe
}

/* ── Viewport trigger defaults ───────────────────────────────────────────── */
export const viewportOnce = { once: true, margin: '-80px' } as const
