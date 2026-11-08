'use client'

import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { headlineVariants, staggerContainer, paragraphVariants, fadeUpVariants, viewportOnce } from '@/lib/motion'
import { tiers } from '@/lib/tokens'

/*
 * The breathing gradient: a warm elliptical pool of clay light that drifts
 * imperceptibly with the --breath cycle. Felt as warmth, never noticed as motion.
 */
function BreathGradient() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: [
          /* Primary warm pool — drifts with inhale */
          'radial-gradient(',
          '  ellipse 75% 60% at',
          '  calc(22% + var(--breath, 0.5) * 14%)',
          '  calc(38% + var(--breath, 0.5) * 9%),',
          '  color-mix(in oklch, #C08862 calc(var(--breath, 0.5) * 11%), transparent),',
          '  transparent 62%',
          ')',
        ].join(' '),
      }}
    />
  )
}

/* Single line of the headline — blur-to-focus entrance with optional indent */
interface HeadlineLineProps {
  children: React.ReactNode
  delay?: number
  indent?: boolean
  dim?: boolean
  accent?: boolean
}

function HeadlineLine({ children, delay = 0, indent = false, dim = false, accent = false }: HeadlineLineProps) {
  const shouldReduce = useReducedMotion()

  const variants = shouldReduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : {
        hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
        visible: {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const },
        },
      }

  return (
    <motion.span
      variants={variants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'block',
        paddingLeft: indent ? 'clamp(1rem, 3vw, 2.5rem)' : undefined,
        color: dim ? 'var(--color-stone)' : accent ? 'var(--color-clay)' : 'var(--color-ink)',
      }}
    >
      {children}
    </motion.span>
  )
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100svh',
        paddingTop: 'clamp(7rem, 18vh, 13rem)',
        paddingBottom: 'clamp(3rem, 8vh, 5rem)',
        paddingInline: 'var(--gutter)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <BreathGradient />

      <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>

        {/* Descriptor label — top right, small caps */}
        <motion.p
          className="hero-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-stone)',
            lineHeight: 2,
          }}
        >
          Massage · Somatic Bodywork<br />
          Energy Healing<br />
          <span style={{ color: 'var(--color-clay)', fontWeight: 400, letterSpacing: '0.05em' }}>
            [PLACEHOLDER: Location]
          </span>
        </motion.p>

        {/* ── Main headline ──────────────────────────────────────────────── */}
        <div className="hero-headline-wrap">
          <h1
            id="hero-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 9vw, 8rem)',
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              fontVariationSettings: "'SOFT' 60, 'WONK' 0, 'opsz' 144",
              /*
               * Optical margin alignment: the capital C has optical left space.
               * A small negative margin pulls it to true visual left.
               */
              marginLeft: '-0.04em',
            }}
          >
            <HeadlineLine delay={0.05}>Come back</HeadlineLine>
            <HeadlineLine delay={0.14} indent>to your body.</HeadlineLine>
            <HeadlineLine
              delay={0.23}
              accent
            >
              Come back to life.
            </HeadlineLine>
          </h1>
        </div>

        {/* ── Body copy + tier nav — lower right ────────────────────────── */}
        <div className="hero-copy">

          {/* Hairline — ladybird red. One of six uses. */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
            style={{
              height: '1px',
              backgroundColor: 'var(--color-ladybird)',
              marginBottom: '1.75rem',
              transformOrigin: 'left',
              width: '100%',
            }}
          />

          {/* Her thesis — verbatim */}
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'var(--color-stone)',
              maxWidth: '38ch',
              marginBottom: '2rem',
            }}
          >
            We are living in a time of unprecedented pressure.
            The body is not something we need to escape from.{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--color-ink)' }}>
              It is the doorway.
            </em>
          </motion.p>

          {/* Tier nav */}
          <motion.nav
            aria-label="Treatment tiers"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 1.1 } },
            }}
          >
            <ul
              role="list"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(1rem, 3vw, 2rem)',
                listStyle: 'none',
                alignItems: 'center',
              }}
            >
              {tiers.map((tier) => (
                <motion.li key={tier.id} variants={fadeUpVariants}>
                  <Link
                    href={tier.slug}
                    className="link-underline"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: 'var(--color-stone)',
                      textDecoration: 'none',
                    }}
                  >
                    {tier.label.replace(' Healing', '')}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={fadeUpVariants}
                style={{ marginLeft: 'auto' }}
              >
                <Link
                  href="/contact"
                  className="link-underline"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    fontWeight: 400,
                    color: 'var(--color-stone)',
                    textDecoration: 'none',
                  }}
                >
                  Book a session
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        </div>
      </div>

      {/* ── Scroll nudge — bottom left ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
          marginTop: 'clamp(2.5rem, 6vh, 5rem)',
        }}
      >
        <ScrollNeedle />
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-stone)',
          }}
        >
          Begin
        </span>
      </motion.div>
    </section>
  )
}

/*
 * A breathing vertical needle — the height pulses gently with --breath.
 * The only visible breath effect. Subliminal.
 */
function ScrollNeedle() {
  return (
    <div
      style={{
        width: '1px',
        height: 'calc(2.5rem + var(--breath, 0.5) * 0.75rem)',
        backgroundColor: 'var(--color-clay)',
        opacity: 0.55,
        transition: 'height 0.3s linear',
        flexShrink: 0,
      }}
    />
  )
}
