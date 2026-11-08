'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Rule } from '@/components/ui/Rule'

interface PageHeroProps {
  label: string
  heading: string
  intro?: string
  /** Optional: a pull-quote or secondary statement in display type */
  pull?: string
}

export function PageHero({ label, heading, intro, pull }: PageHeroProps) {
  const shouldReduce = useReducedMotion()

  const baseVariant = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : { hidden: { opacity: 0, filter: 'blur(8px)', y: 12 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const } } }

  const fadeVariant = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } } }

  return (
    <header
      style={{
        paddingTop: 'clamp(8rem, 18vh, 13rem)',
        paddingBottom: 'clamp(3rem, 8vh, 5rem)',
        paddingInline: 'var(--gutter)',
        borderBottom: '1px solid var(--color-rule)',
      }}
    >
      <motion.p
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6875rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-stone)',
          marginBottom: '1.5rem',
        }}
      >
        {label}
      </motion.p>

      <motion.h1
        variants={baseVariant}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 6rem)',
          fontWeight: 300,
          lineHeight: 0.97,
          letterSpacing: '-0.025em',
          fontVariationSettings: "'SOFT' 55, 'WONK' 0, 'opsz' 120",
          color: 'var(--color-ink)',
          maxWidth: '20ch',
          marginLeft: '-0.04em',
          marginBottom: intro || pull ? 'clamp(2rem, 5vh, 3.5rem)' : 0,
        }}
      >
        {heading}
      </motion.h1>

      {intro && (
        <motion.p
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            lineHeight: 1.65,
            color: 'var(--color-stone)',
            maxWidth: '52ch',
          }}
        >
          {intro}
        </motion.p>
      )}

      {pull && (
        <motion.p
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 48",
            color: 'var(--color-clay)',
            maxWidth: '38ch',
            marginTop: '1.5rem',
          }}
        >
          {pull}
        </motion.p>
      )}
    </header>
  )
}
