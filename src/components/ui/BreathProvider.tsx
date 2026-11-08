'use client'

import { useBreath } from '@/hooks/useBreath'

/**
 * Renders nothing. Purely starts the breathing RAF loop
 * that writes --breath to :root. Mounted once in layout.tsx.
 */
export function BreathProvider() {
  useBreath()
  return null
}
