import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { LadybirdWalk } from '@/components/ui/Ladybird'
import { Reveal } from '@/components/ui/Reveal'
import { Placeholder } from '@/components/ui/Placeholder'
import { Rule } from '@/components/ui/Rule'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Healing',
  description:
    'Morning active meditation — free and open to all. The story of LadyBird, and the invitation to move, breathe and rise together.',
}

export default function FreeHealingPage() {
  return (
    <>
      <PageHero
        label="Free Healing"
        heading="Giving back. Growing together."
        intro="One of the most beautiful purposes of being part of a society is to support one another in growth."
      />

      {/* The philosophy of giving */}
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
                I believe that one of the most beautiful purposes of being part of
                a society is to support one another in growth — to help each other
                move from fear towards trust, from limitation towards possibility,
                and from simply surviving towards fully experiencing our potential.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.1}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                We are not here only for ourselves. Sometimes a simple act of
                presence, encouragement, touch or shared practice can become a
                turning point in another person's journey. This is why I have
                chosen to offer some experiences freely and openly, as a way of
                giving back and creating a space where people can meet, connect
                and grow together.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/*
       * The LadyBird story
       * Signature moment #3 lives here — the ladybird walks the rule below this text.
       * Once on the entire site. The restraint is what makes it land.
       */}
      <section
        aria-labelledby="ladybird-heading"
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 8rem)',
          paddingInline: 'var(--gutter)',
          backgroundColor: 'color-mix(in oklch, var(--color-clay) 10%, var(--color-linen))',
          borderTop: '1px solid var(--color-rule)',
          borderBottom: '1px solid var(--color-rule)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0 clamp(0.75rem, 2vw, 1.5rem)' }}>
          <div className="inner-body-col">
            <Reveal kind="fade-up">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '1.5rem' }}>
                The Story of LadyBird
              </p>
            </Reveal>

            <Reveal kind="headline" delay={0.08}>
              <h2
                id="ladybird-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: '-0.018em',
                  fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 72",
                  color: 'var(--color-ink)',
                  marginBottom: '2rem',
                }}
              >
                LadyBird
              </h2>
            </Reveal>

            <Reveal kind="paragraph" delay={0.16}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-ink)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                Some years ago, I experienced a traditional Vision Quest — a period
                of solitude and deep inner exploration. The experience became an
                important turning point in my own journey.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.24}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                As a result, I received my shamanic name: LadyBird.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.3}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '2.5rem' }}>
                In many traditions, the ladybird is associated with healing, good
                fortune, protection and the arrival of something positive. I have
                embraced this symbol as a reminder of the energy I wish to bring
                into my work — lightness, transformation, trust and the possibility
                of a new beginning.
              </p>
            </Reveal>

            {/*
             * Signature moment #3: the ladybird walks the rule and stops.
             * Exactly once. Never repeated.
             */}
            <LadybirdWalk />

          </div>
        </div>
      </section>

      {/* Morning meditation */}
      <section
        aria-labelledby="meditation-heading"
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 8rem)',
          paddingInline: 'var(--gutter)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0 clamp(0.75rem, 2vw, 1.5rem)' }}>
          <div className="inner-body-col">
            <Reveal kind="fade-up">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '1.5rem' }}>
                Morning Active Meditation
              </p>
            </Reveal>

            <Reveal kind="headline" delay={0.08}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                  fontWeight: 300,
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  fontVariationSettings: "'SOFT' 30, 'WONK' 0, 'opsz' 144",
                  color: 'var(--color-clay)',
                  marginBottom: '2rem',
                }}
                aria-label="6 o'clock in the morning"
              >
                6:00
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.16}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-ink)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                I invite you to join me for free morning active meditation practices
                at 6:00&thinsp;am. It is a chance to begin the day differently —
                before the noise, responsibilities and demands of everyday life take
                over.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.22}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                Through movement, breathing, awareness and active meditation, we
                awaken the body, release what no longer needs to be carried and
                create space for a new quality of energy.
              </p>
            </Reveal>

            <Reveal kind="headline" delay={0.28}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
                  fontWeight: 300,
                  lineHeight: 1.3,
                  fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 36",
                  color: 'var(--color-clay)',
                  maxWidth: '28ch',
                  marginBottom: '2.5rem',
                }}
              >
                You don't need to be experienced in meditation.
                You simply need to come as you are.
              </p>
            </Reveal>

            {/* Four-beat cadence */}
            <Reveal kind="fade-up" delay={0.34}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', marginBottom: '2.5rem' }}>
                {['We move together.', 'We breathe together.', 'We awaken together.', 'We rise together.'].map((line, i) => (
                  <p
                    key={line}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body)',
                      fontStyle: 'italic',
                      color: i < 2 ? 'var(--color-stone)' : 'var(--color-ink)',
                      lineHeight: 1.5,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal kind="paragraph" delay={0.38}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '48ch', marginBottom: '2rem' }}>
                Because perhaps our greatest potential is not something we achieve
                alone. It is something we help awaken in one another.
              </p>
            </Reveal>

            <Reveal kind="fade-up" delay={0.42}>
              <div style={{ marginBottom: '0.75rem' }}>
                <Placeholder label="location / meeting point" />
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <Placeholder label="schedule and frequency" />
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <Placeholder label="how to register / join" />
              </div>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-linen)',
                  backgroundColor: 'var(--color-ink)',
                  padding: '0.875em 2em',
                  textDecoration: 'none',
                }}
              >
                Join the morning practice
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
