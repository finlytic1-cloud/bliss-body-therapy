import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ConsentBlock } from '@/components/sections/ConsentBlock'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { Reveal } from '@/components/ui/Reveal'
import { Rule } from '@/components/ui/Rule'

export const metadata: Metadata = {
  title: 'Deep Healing',
  description:
    'The most profound level of this work — available to returning clients only. Entering the sacred caves of the first chakras.',
}

export default function DeepHealingPage() {
  return (
    <>
      <PageHero
        label="Deep Healing"
        heading="Entering the sacred caves."
        intro="The most profound level of this work — an invitation to explore the deeper layers of the body, sensation and inner experience."
      />

      {/*
       * Returning clients only — designed as a feature, not fine print.
       * This is a trust signal. It should be the second thing a visitor reads.
       */}
      <section
        aria-labelledby="returning-clients-heading"
        style={{
          backgroundColor: 'var(--color-earth)',
          paddingBlock: 'clamp(3rem, 8vh, 5rem)',
          paddingInline: 'var(--gutter)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
          {/* Ladybird-red vertical bar — one of the six uses */}
          <div
            aria-hidden="true"
            style={{
              width: '3px',
              alignSelf: 'stretch',
              backgroundColor: 'var(--color-ladybird)',
              flexShrink: 0,
              marginTop: '0.2em',
            }}
          />
          <div>
            <Reveal kind="fade-up">
              <h2
                id="returning-clients-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                  fontWeight: 300,
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 48",
                  color: 'var(--color-linen)',
                  marginBottom: '0.875rem',
                }}
              >
                Available to returning clients only
              </h2>
            </Reveal>
            <Reveal kind="paragraph" delay={0.1}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch' }}>
                Because this work requires a strong foundation of trust and
                familiarity with my approach, Deep Healing is available only to
                clients who have previously experienced a Traditional Healing or
                Energetic Healing session with me. This allows us to establish a
                relationship, understand how your body responds to my work and
                create the level of safety and awareness necessary for a deeper
                experience.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Consent block — mandatory and prominent */}
      <ConsentBlock />

      {/* Main copy */}
      <section
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 8rem)',
          paddingInline: 'var(--gutter)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0 clamp(0.75rem, 2vw, 1.5rem)' }}>
          <div className="inner-body-col">
            <Reveal kind="paragraph">
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-ink)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                Deep Healing is the most profound level of my work. It is an
                invitation to explore the deeper layers of the body, sensation and
                inner experience through conscious, respectful and deeply embodied
                touch.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.1}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                This work focuses on what I call the "sacred caves" of the first
                chakras — the areas connected with grounding, instinct, vitality,
                embodiment and our most fundamental relationship with life.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.18}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                Rather than approaching the body as something to be fixed, Deep
                Healing creates a space where you can slow down, feel more deeply
                and become aware of places that may have been holding tension,
                protection or disconnection.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.24}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '2rem' }}>
                The experience is highly individual and unfolds gradually. It is
                based on trust, presence, conscious touch and respect for the
                body's boundaries. There is no goal to perform or achieve. The
                invitation is simply to listen to what your body is communicating.
              </p>
            </Reveal>

            <Reveal kind="headline" delay={0.3}>
              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 48",
                  color: 'var(--color-clay)',
                  maxWidth: '30ch',
                  borderTop: '1px solid var(--color-rule)',
                  paddingTop: '1.25rem',
                }}
              >
                Deep Healing is a journey inward — toward the places where we can
                rediscover grounding, vitality, presence and our connection with
                the body.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Begin Deep Healing"
        note="Available to returning clients only. If you have already worked with me and feel ready to go deeper, please get in touch to discuss next steps."
      />
    </>
  )
}
