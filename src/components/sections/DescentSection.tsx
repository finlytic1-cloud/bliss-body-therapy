'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useDescentScroll } from '@/hooks/useDescentScroll'
import { Reveal, RevealGroup } from '@/components/ui/Reveal'
import { viewportOnce, fadeUpVariants, staggerContainer } from '@/lib/motion'

const tiers = [
  {
    number: '01',
    id: 'traditional',
    name: 'Traditional Healing',
    slug: '/traditional-healing',
    headline: 'The healing power of touch',
    body: 'Traditional massage is one of the simplest and most profound ways to reconnect with the body. Through skilled touch and therapeutic movement, massage can help relax tense muscles, support circulation and promote a deep sense of physical and mental relaxation.',
    note: null,
    /* space: generous — near the surface */
    paddingBlock: 'clamp(5rem, 14vh, 10rem)',
  },
  {
    number: '02',
    id: 'energetic',
    name: 'Energetic Healing',
    slug: '/energetic-healing',
    headline: 'Working with the body beyond the physical',
    body: 'The body is more than muscles, bones and organs. We also experience ourselves through an electromagnetic field of information — a subtle dimension through which the body, emotions, sensations and our inner state are interconnected.',
    note: null,
    /* space: slightly tighter — going deeper */
    paddingBlock: 'clamp(4rem, 11vh, 8rem)',
  },
  {
    number: '03',
    id: 'deep',
    name: 'Deep Healing',
    slug: '/deep-healing',
    headline: 'Entering the sacred caves',
    body: 'The most profound level of this work — an invitation to explore the deeper layers of the body, sensation and inner experience through conscious, respectful and deeply embodied touch.',
    note: 'Available to returning clients only',
    /* space: most intimate — in the caves */
    paddingBlock: 'clamp(3.5rem, 9vh, 7rem)',
  },
] as const

interface TierPanelProps {
  tier: (typeof tiers)[number]
  index: number
}

function TierPanel({ tier, index }: TierPanelProps) {
  return (
    <article
      aria-labelledby={`tier-${tier.id}-heading`}
      style={{
        paddingBlock: tier.paddingBlock,
        paddingInline: 'var(--gutter)',
        borderTop: '1px solid var(--descent-rule, var(--color-rule))',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '0 clamp(0.75rem, 2vw, 1.5rem)',
        alignItems: 'start',
      }}
    >
      {/* Tier number — far left */}
      <Reveal kind="fade-up" delay={0.05} className="descent-tier-num">
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 400,
            letterSpacing: '0.12em',
            color: 'var(--descent-text-sec, var(--color-stone))',
            display: 'block',
            paddingTop: '0.25rem',
          }}
        >
          {tier.number}
        </span>
      </Reveal>

      {/* Main content */}
      <RevealGroup className="descent-tier-content">
        {/* Name */}
        <Reveal kind="fade-up" delay={0.0}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--descent-text-sec, var(--color-stone))',
              marginBottom: '1rem',
            }}
          >
            {tier.name}
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal kind="headline" delay={0.08}>
          <h3
            id={`tier-${tier.id}-heading`}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              fontVariationSettings: `'SOFT' ${50 + index * 8}, 'WONK' 0, 'opsz' 96`,
              color: 'var(--descent-text, var(--color-ink))',
              marginBottom: '1.5rem',
            }}
          >
            {tier.headline}
          </h3>
        </Reveal>

        {/* Body */}
        <Reveal kind="paragraph" delay={0.18}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--descent-text-sec, var(--color-stone))',
              maxWidth: '48ch',
              marginBottom: tier.note ? '1rem' : '2rem',
            }}
          >
            {tier.body}
          </p>
        </Reveal>

        {/* Trust signal for Deep — foregrounded, never fine print */}
        {tier.note && (
          <Reveal kind="fade-up" delay={0.25}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: 'var(--color-ladybird)',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  width: '1.5rem',
                  height: '1px',
                  backgroundColor: 'var(--color-ladybird)',
                  verticalAlign: 'middle',
                  flexShrink: 0,
                }}
              />
              {tier.note}
            </p>
          </Reveal>
        )}

        {/* CTA */}
        <Reveal kind="fade-up" delay={0.3}>
          <Link
            href={tier.slug}
            className="link-underline"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--descent-text-sec, var(--color-stone))',
              textDecoration: 'none',
            }}
          >
            Explore {tier.name.replace(' Healing', '')}
          </Link>
        </Reveal>
      </RevealGroup>
    </article>
  )
}

/*
 * Signature moment #2: The Descent
 * One continuous scroll-linked palette transition:
 * surface (linen) → mid (clay-tinted) → caves (earth)
 * Background, text and rule colours all transition together.
 */
export function DescentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useDescentScroll(sectionRef)

  return (
    <section
      ref={sectionRef}
      aria-labelledby="descent-heading"
      style={{
        /*
         * Initial background — JS will override this as the user scrolls.
         * The transition: none is intentional — JS writes values each frame,
         * CSS transition would introduce lag and fight the scroll link.
         */
        backgroundColor: 'var(--color-linen)',
        paddingBottom: '2rem',
      }}
    >
      {/* Section header */}
      <div
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 7rem)',
          paddingInline: 'var(--gutter)',
        }}
      >
        <Reveal kind="fade-up">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--descent-text-sec, var(--color-stone))',
              marginBottom: '1.5rem',
            }}
          >
            The Work
          </p>
        </Reveal>

        <Reveal kind="headline" delay={0.1}>
          <h2
            id="descent-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 96",
              color: 'var(--descent-text, var(--color-ink))',
              maxWidth: '24ch',
            }}
          >
            Three tiers of healing.
            <br />
            Each one deeper.
          </h2>
        </Reveal>
      </div>

      {/* The three tiers */}
      {tiers.map((tier, i) => (
        <TierPanel key={tier.id} tier={tier} index={i} />
      ))}
    </section>
  )
}
