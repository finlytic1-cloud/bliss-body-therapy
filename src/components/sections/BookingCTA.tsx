import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { Placeholder } from '@/components/ui/Placeholder'

interface BookingCTAProps {
  heading?: string
  note?: string
}

/**
 * Booking call-to-action with credential strip.
 * Credentials appear beside every booking CTA per the brief — never invented.
 */
export function BookingCTA({
  heading = 'Book a session',
  note,
}: BookingCTAProps) {
  return (
    <section
      aria-labelledby="booking-cta-heading"
      style={{
        paddingBlock: 'clamp(4rem, 10vh, 7rem)',
        paddingInline: 'var(--gutter)',
        borderTop: '1px solid var(--color-rule)',
      }}
    >
      <Reveal kind="headline" delay={0.05}>
        <h2
          id="booking-cta-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 72",
            color: 'var(--color-ink)',
            marginBottom: '1.5rem',
          }}
        >
          {heading}
        </h2>
      </Reveal>

      {note && (
        <Reveal kind="paragraph" delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--color-stone)',
              maxWidth: '44ch',
              marginBottom: '2rem',
            }}
          >
            {note}
          </p>
        </Reveal>
      )}

      <Reveal kind="fade-up" delay={0.15}>
        <div style={{ marginBottom: '1rem' }}>
          <Placeholder label="email address" />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <Placeholder label="booking / scheduling link" />
        </div>
      </Reveal>

      <Reveal kind="fade-up" delay={0.2}>
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
          Get in touch
        </Link>
      </Reveal>

      {/* Credentials — always visible beside CTA */}
      <Reveal kind="fade-up" delay={0.25}>
        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-rule)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem 2rem',
          }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-stone)' }}>
            <Placeholder label="qualifications" />
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-stone)' }}>
            <Placeholder label="professional body" />
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-stone)' }}>
            <Placeholder label="insurance" />
          </span>
        </div>
      </Reveal>
    </section>
  )
}
