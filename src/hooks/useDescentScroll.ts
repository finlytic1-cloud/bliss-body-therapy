'use client'

import { useEffect, useRef } from 'react'

/* Interpolates between two hex colours */
function lerpHex(c1: string, c2: string, t: number): string {
  const parse = (s: string, i: number) => parseInt(s.replace('#', '').slice(i, i + 2), 16)
  const blend = (a: number, b: number) => Math.round(a + (b - a) * t).toString(16).padStart(2, '0')
  return `#${blend(parse(c1, 0), parse(c2, 0))}${blend(parse(c1, 2), parse(c2, 2))}${blend(parse(c1, 4), parse(c2, 4))}`
}

const LINEN  = '#F5F0E8'
const EARTH  = '#3A302A'
const INK    = '#221C18'
const STONE  = '#9A9187'
const CLAY   = '#C08862'

/* A warm light cream — readable on the earth background */
const LINEN_WARM = '#EDE5D8'

/**
 * Signature moment #2: The Descent
 * Scroll-links the palette transition Traditional → Energetic → Deep:
 *   background: linen → earth
 *   text:       ink   → linen
 *   secondary:  stone → clay-warm
 *
 * Writes directly to the section element's inline style to stay scoped.
 * Also writes --descent to :root for children that need fine-grained access.
 */
export function useDescentScroll(sectionRef: React.RefObject<HTMLElement | null>) {
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    function onScroll() {
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const sectionHeight = el.offsetHeight
      const viewHeight = window.innerHeight

      /* 0 when section top hits bottom of viewport, 1 when bottom of section exits top */
      const raw = (-rect.top) / (sectionHeight - viewHeight)
      const t = Math.max(0, Math.min(1, raw))

      const bg        = lerpHex(LINEN, EARTH, t)
      const textPrim  = lerpHex(INK,   LINEN_WARM, t)
      const textSec   = lerpHex(STONE, CLAY, t)
      const ruleColor = lerpHex('#d9c9b4', '#4a3d35', t)  // clay@30% → earth-lighter

      el.style.setProperty('--descent', t.toFixed(4))
      el.style.setProperty('--descent-text', textPrim)
      el.style.setProperty('--descent-text-sec', textSec)
      el.style.setProperty('--descent-rule', ruleColor)
      el.style.backgroundColor = bg

      /* Also write to :root for any CSS that needs it */
      document.documentElement.style.setProperty('--descent', t.toFixed(4))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current)
    }
  }, [sectionRef])
}
