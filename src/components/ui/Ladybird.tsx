'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

/*
 * Signature moment #3: The Ladybird
 *
 * Appears exactly once — in the Free Healing section where Natalia tells
 * the LadyBird story. A small beautifully-drawn insect walks a short path
 * along a hairline rule and stops. Once on the entire site.
 * The restraint is what makes it land.
 *
 * – inline SVG, never an emoji
 * – triggers on scroll into view, runs once
 * – off under prefers-reduced-motion
 */
function LadybirdSVG({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.1)}
      viewBox="0 0 22 24"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Antennae */}
      <path d="M9 4 Q7 1 5 0"   stroke="#221C18" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M13 4 Q15 1 17 0" stroke="#221C18" strokeWidth="0.9" strokeLinecap="round" />

      {/* Head */}
      <ellipse cx="11" cy="5.5" rx="4" ry="3.5" fill="#221C18" />

      {/* Elytra (wing covers) — left and right halves */}
      <path
        d="M11 8 C5.5 8 3 12 3 15.5 C3 19.5 6.5 22 11 22 L11 8Z"
        fill="#B23A2F"
      />
      <path
        d="M11 8 C16.5 8 19 12 19 15.5 C19 19.5 15.5 22 11 22 L11 8Z"
        fill="#B23A2F"
      />

      {/* Centre seam */}
      <path d="M11 8 L11 22" stroke="#221C18" strokeWidth="0.7" />

      {/* Spots — left wing */}
      <circle cx="7.5"  cy="13" r="1.6" fill="#221C18" />
      <circle cx="7.5"  cy="17.5" r="1.2" fill="#221C18" />

      {/* Spots — right wing */}
      <circle cx="14.5" cy="13" r="1.6" fill="#221C18" />
      <circle cx="14.5" cy="17.5" r="1.2" fill="#221C18" />

      {/* Legs — three pairs, subtle */}
      <path d="M5  12 L1  10" stroke="#221C18" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M5  15 L1  15" stroke="#221C18" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M5  18 L2  20" stroke="#221C18" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M17 12 L21 10" stroke="#221C18" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M17 15 L21 15" stroke="#221C18" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M17 18 L20 20" stroke="#221C18" strokeWidth="0.65" strokeLinecap="round" />
    </svg>
  )
}

export function LadybirdWalk() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-60px' })
  const shouldReduce = useReducedMotion()

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        marginBlock: '2.5rem',
        overflow: 'visible',
      }}
      aria-hidden="true"
    >
      {/* The hairline rule she walks along */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: 'var(--color-rule)',
          transform: 'translateY(-50%)',
        }}
      />

      {/* The ladybird */}
      {!shouldReduce && (
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={
            isInView
              ? { opacity: 1, x: 88 }
              : { opacity: 0, x: 0 }
          }
          transition={{
            delay: 0.6,
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-65%)', /* sits on the rule */
            transformOrigin: 'bottom center',
          }}
        >
          <LadybirdSVG size={22} />
        </motion.div>
      )}
    </div>
  )
}
