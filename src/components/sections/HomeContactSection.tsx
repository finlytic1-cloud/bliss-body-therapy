import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { Placeholder } from '@/components/ui/Placeholder'
import { Rule } from '@/components/ui/Rule'

export function HomeContactSection() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      style={{
        backgroundColor: 'var(--color-linen)',
        paddingBlock: 'clamp(6rem, 16vh, 12rem)',
        paddingInline: 'var(--gutter)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '0 clamp(0.75rem, 2vw, 1.5rem)',
          alignItems: 'end',
        }}
      >
        {/* Left — headline */}
        <div className="contact-cta-headline">
          <Reveal kind="fade-up">
            <p
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
              Begin
            </p>
          </Reveal>

          <Reveal kind="headline" delay={0.08}>
            <h2
              id="contact-cta-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 96",
                color: 'var(--color-ink)',
                maxWidth: '18ch',
              }}
            >
              Ready to come
              <br />back to your body?
            </h2>
          </Reveal>
        </div>

        {/* Right — details + CTA */}
        <div className="contact-cta-body">
          <Reveal kind="paragraph" delay={0.16}>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--color-stone)',
                maxWidth: '38ch',
                marginBottom: '2rem',
              }}
            >
              Sessions are available by appointment. If you're unsure which treatment
              is right for you, reach out and we'll find the right starting point together.
            </p>
          </Reveal>

          <Reveal kind="fade-up" delay={0.24}>
            <div style={{ marginBottom: '0.5rem' }}>
              <Placeholder label="email address" />
            </div>
            <div style={{ marginBottom: '2.5rem' }}>
              <Placeholder label="booking system / scheduling link" />
            </div>
          </Reveal>

          <Reveal kind="fade-up" delay={0.3}>
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
        </div>
      </div>

      {/* Credentials strip */}
      <Reveal kind="fade-up" delay={0.1}>
        <div
          style={{
            marginTop: 'clamp(4rem, 10vh, 8rem)',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-rule)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem 2.5rem',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--color-stone)',
            }}
          >
            <Placeholder label="qualifications" />
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--color-stone)',
            }}
          >
            <Placeholder label="professional body membership" />
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--color-stone)',
            }}
          >
            <Placeholder label="insurance" />
          </span>
        </div>
      </Reveal>
    </section>
  )
}
