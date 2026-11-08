import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { Reveal } from '@/components/ui/Reveal'
import { Placeholder } from '@/components/ui/Placeholder'
import { Rule } from '@/components/ui/Rule'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to book a session or ask a question.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        heading="Get in touch."
        intro="Sessions are available by appointment. If you're unsure where to begin, reach out and we'll find the right starting point together."
      />

      <section
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 8rem)',
          paddingInline: 'var(--gutter)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(4rem, 10vw, 8rem) clamp(0.75rem, 2vw, 1.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <div className="contact-form-col">
            <Reveal kind="fade-up">
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                  fontVariationSettings: "'SOFT' 45, 'WONK' 0, 'opsz' 48",
                  color: 'var(--color-ink)',
                  marginBottom: '2.5rem',
                }}
              >
                Send a message
              </h2>
            </Reveal>
            <ContactForm />
          </div>

          {/* Details */}
          <div className="contact-details-col">
            <Reveal kind="fade-up">
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '1.5rem' }}>
                Direct contact
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.08}>
              <address
                style={{ fontStyle: 'normal', lineHeight: 2, marginBottom: '2.5rem' }}
              >
                <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-stone)' }}>
                  <Placeholder label="email address" /><br />
                  <Placeholder label="phone number" /><br />
                  <Placeholder label="location / area" />
                </p>
              </address>
            </Reveal>

            <Reveal kind="fade-up" delay={0.14}>
              <div style={{ borderTop: '1px solid var(--color-rule)', paddingTop: '1.5rem', marginBottom: '2.5rem' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '1rem' }}>
                  Hours
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--color-stone)' }}>
                  <Placeholder label="opening hours and availability" />
                </p>
              </div>
            </Reveal>

            <Reveal kind="fade-up" delay={0.18}>
              <div style={{ borderTop: '1px solid var(--color-rule)', paddingTop: '1.5rem', marginBottom: '2.5rem' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '1rem' }}>
                  Cancellations
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--color-stone)' }}>
                  <Placeholder label="cancellation policy" block />
                </p>
              </div>
            </Reveal>

            <Reveal kind="fade-up" delay={0.22}>
              <div style={{ borderTop: '1px solid var(--color-rule)', paddingTop: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '1rem' }}>
                  Credentials & Insurance
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--color-stone)' }}>
                  <Placeholder label="qualifications and training" /><br />
                  <Placeholder label="professional body membership" /><br />
                  <Placeholder label="insurance provider" />
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
