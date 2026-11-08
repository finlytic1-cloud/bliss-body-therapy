'use client'

import { useReducedMotion, motion, type Variants } from 'motion/react'
import {
  headlineVariants,
  paragraphVariants,
  fadeUpVariants,
  staggerContainer,
  viewportOnce,
} from '@/lib/motion'

type RevealKind = 'headline' | 'paragraph' | 'fade-up' | 'stagger'

interface RevealProps {
  children: React.ReactNode
  kind?: RevealKind
  delay?: number
  className?: string
}

const opacityOnly = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay },
  },
})

/**
 * Viewport-triggered entrance. Degrades to opacity-only under reduced-motion.
 */
export function Reveal({
  children,
  kind = 'fade-up',
  delay = 0,
  className,
}: RevealProps) {
  const shouldReduce = useReducedMotion()

  const variantMap: Record<RevealKind, Variants> = {
    headline: headlineVariants,
    paragraph: paragraphVariants,
    'fade-up': fadeUpVariants,
    stagger: staggerContainer,
  }

  const base = variantMap[kind]

  const variants: Variants = shouldReduce
    ? opacityOnly(delay)
    : {
        hidden: base.hidden ?? { opacity: 0 },
        visible: {
          ...(typeof base.visible === 'object' && base.visible !== null
            ? base.visible
            : {}),
          transition: {
            ...(typeof base.visible === 'object' &&
            base.visible !== null &&
            'transition' in base.visible
              ? (base.visible as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  )
}

/**
 * Stagger container — children animate in sequence.
 */
export function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  )
}
