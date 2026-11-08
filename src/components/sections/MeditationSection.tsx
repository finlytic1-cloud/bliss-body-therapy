import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { Rule } from '@/components/ui/Rule'
import { Placeholder } from '@/components/ui/Placeholder'

export function MeditationSection() {
  return (
    <section
      aria-labelledby="meditation-heading"
      style={{
        backgroundColor: 'var(--color-earth)',
        paddingBlock: 'clamp(6rem, 16vh, 12rem)',
        paddingInline: 'var(--gutter)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(3rem, 8vw, 5rem) clamp(0.75rem, 2vw, 1.5rem)',
          alignItems: 'start',
        }}
      >
        {/* Left — time display */}
        <div className="meditation-time">
          <Reveal kind="headline" delay={0.05}>
            <p
              aria-label="6 o'clock in the morning"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 14vw, 11rem)',
                fontWeight: 300,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                fontVariationSettings: "'SOFT' 30, 'WONK' 0, 'opsz' 144",
                color: 'var(--color-clay)',
                marginBottom: '1rem',
              }}
            >
              6:00
            </p>
          </Reveal>
          <Reveal kind="fade-up" delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-stone)',
              }}
            >
              Morning · Free · Open to all
            </p>
          </Reveal>
        </div>

        {/* Right — copy */}
        <div className="meditation-copy">
          <Reveal kind="fade-up">
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-clay)',
                marginBottom: '1.5rem',
              }}
            >
              Free Healing
            </p>
          </Reveal>

          <Reveal kind="headline" delay={0.08}>
            <h2
              id="meditation-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
                fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 72",
                color: 'var(--color-linen)',
                marginBottom: '1.75rem',
              }}
            >
              Morning Active Meditation
            </h2>
          </Reveal>

          <Reveal kind="paragraph" delay={0.18}>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--color-stone)',
                maxWidth: '44ch',
                marginBottom: '1.25em',
              }}
            >
              I invite you to join me for free morning active meditation practices
              at 6:00&thinsp;am. A chance to begin the day differently — before the
              noise, responsibilities and demands of everyday life take over.
            </p>
          </Reveal>

          <Reveal kind="paragraph" delay={0.26}>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--color-stone)',
                maxWidth: '44ch',
                marginBottom: '1.25em',
              }}
            >
              Through movement, breathing, awareness and active meditation, we
              awaken the body, release what no longer needs to be carried and
              create space for a new quality of energy.
            </p>
          </Reveal>

          <Reveal kind="paragraph" delay={0.32}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 2vw, 1.375rem)',
                fontWeight: 300,
                lineHeight: 1.4,
                fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 24",
                color: 'var(--color-clay)',
                maxWidth: '34ch',
                marginBottom: '2.5rem',
              }}
            >
              You don't need to be experienced in meditation. You simply need to
              come as you are.
            </p>
          </Reveal>

          {/* Four-beat cadence */}
          <Reveal kind="fade-up" delay={0.38}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem 1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              {['We move together.', 'We breathe together.', 'We awaken together.', 'We rise together.'].map((line) => (
                <span
                  key={line}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    fontStyle: 'italic',
                    color: 'var(--color-stone)',
                    display: 'block',
                    width: '100%',
                  }}
                >
                  {line}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal kind="fade-up" delay={0.44}>
            <p style={{ marginBottom: '0.5rem' }}>
              <Placeholder label="location / meeting point" />
            </p>
            <Link
              href="/free-healing"
              className="link-underline"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-stone)',
                textDecoration: 'none',
              }}
            >
              Learn more about Free Healing
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
