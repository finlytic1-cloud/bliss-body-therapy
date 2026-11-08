'use client'

import { useEffect, useRef } from 'react'
import { breath } from '@/lib/tokens'

/**
 * Drives a 10-second respiratory cycle (4s in, 6s out).
 * Writes --breath (0→1→0) to :root as a CSS custom property.
 * Every ambient motion that responds to breath reads from that var.
 *
 * Nothing announces the cycle. It is felt, not seen.
 * Stops entirely under prefers-reduced-motion.
 */
export function useBreath() {
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.documentElement.style.setProperty('--breath', '0.5')
      return
    }

    const CYCLE = breath.cycle * 1000     // 10 000ms
    const INHALE = breath.inhale * 1000   // 4 000ms
    const start = performance.now()

    function easeInOutSine(t: number): number {
      return -(Math.cos(Math.PI * t) - 1) / 2
    }

    function tick(now: number) {
      const elapsed = (now - start) % CYCLE
      let phase: number

      if (elapsed < INHALE) {
        // Inhale: 0 → 1
        phase = easeInOutSine(elapsed / INHALE)
      } else {
        // Exhale: 1 → 0  (longer — 6s)
        phase = easeInOutSine(1 - (elapsed - INHALE) / (CYCLE - INHALE))
      }

      document.documentElement.style.setProperty('--breath', phase.toFixed(4))
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])
}
