'use client'

import { useEffect } from 'react'

/**
 * Signature moment #1: Warmth cursor.
 * Trails a soft radial warm light (clay, 12% opacity, 400px)
 * at 0.08 lerp — like heat from a passing hand.
 *
 * Only active on the treatments index.
 * Disabled on touch devices and reduced-motion.
 */
export function useWarmthCursor() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none)').matches

    if (prefersReduced || isTouch) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let raf: number

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t
    }

    function onMouseMove(e: MouseEvent) {
      targetX = e.clientX
      targetY = e.clientY
    }

    function tick() {
      currentX = lerp(currentX, targetX, 0.08)
      currentY = lerp(currentY, targetY, 0.08)

      document.documentElement.style.setProperty('--cursor-x', `${currentX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${currentY}px`)

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])
}
