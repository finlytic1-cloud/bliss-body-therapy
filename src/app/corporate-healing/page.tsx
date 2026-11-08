import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { Reveal } from '@/components/ui/Reveal'
import { Placeholder } from '@/components/ui/Placeholder'
import { Rule } from '@/components/ui/Rule'

export const metadata: Metadata = {
  title: 'Corporate Healing',
  description:
    'Massage and active meditation for the workplace — transforming inner state to generate energy, presence and wellbeing from within.',
}

export default function CorporateHealingPage() {
  return (
    <>
      <PageHero
        label="Corporate Healing"
        heading="Transform the energy of your workplace — from within."
        intro="Modern businesses invest in technology, strategy and environment. There is another factor often overlooked: the state of the people within the organisation."
      />

      {/* Main philosophy */}
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
                Corporate Healing is a non-traditional approach to workplace
                wellbeing that brings massage and active meditation directly into
                the working environment, giving employees an opportunity to release
                tension, reset their nervous systems, reconnect with their bodies
                and return to work with renewed energy and clarity.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.1}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                The idea is inspired by the philosophy of Feng Shui, which has been
                deeply integrated into many Asian cultures and businesses. Feng Shui
                focuses on creating harmony with the surrounding environment —
                arranging spaces in a way that encourages the positive flow of energy.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.18}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch' }}>
                At Bliss Body Therapy, we explore the same principle from a
                different direction. Instead of changing the environment, we change
                the energy we bring into it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Feng Shui comparison — editorial layout */}
      <section
        aria-labelledby="fengshui-heading"
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 8rem)',
          paddingInline: 'var(--gutter)',
          backgroundColor: 'color-mix(in oklch, var(--color-clay) 10%, var(--color-linen))',
          borderTop: '1px solid var(--color-rule)',
          borderBottom: '1px solid var(--color-rule)',
        }}
      >
        <Reveal kind="fade-up">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '2rem' }}>
            From Feng Shui to Inner Flow
          </p>
        </Reveal>

        <h2 id="fengshui-heading" className="sr-only">The Feng Shui analogy</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
            gap: '0',
            maxWidth: '60rem',
          }}
        >
          {/* Left: Feng Shui */}
          <Reveal kind="fade-up" delay={0.05}>
            <div
              style={{
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                borderRight: '1px solid var(--color-rule)',
                borderBottom: '1px solid var(--color-rule)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '1rem' }}>
                Feng Shui
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.01em', fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 36", color: 'var(--color-stone)', maxWidth: '22ch' }}>
                Create a harmonious environment to support the people within it.
              </p>
            </div>
          </Reveal>

          {/* Right: Corporate Healing */}
          <Reveal kind="fade-up" delay={0.12}>
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-clay)', marginBottom: '1rem' }}>
                Corporate Healing
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.01em', fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 36", color: 'var(--color-ink)', maxWidth: '22ch' }}>
                Support the people so they can create a more harmonious environment
                around them.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal kind="paragraph" delay={0.2}>
          <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginTop: '2.5rem' }}>
            When people feel better in their bodies, they may be more present,
            engaged and capable of meeting the demands of their work. Good energy
            doesn't always have to come from the outside. Sometimes, we can
            generate it ourselves.
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section
        aria-labelledby="corporate-services-heading"
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 8rem)',
          paddingInline: 'var(--gutter)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(3rem, 6vw, 5rem) clamp(0.75rem, 2vw, 1.5rem)' }}>
          <div className="inner-body-col">
            <Reveal kind="fade-up">
              <h2
                id="corporate-services-heading"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.015em', fontVariationSettings: "'SOFT' 45, 'WONK' 0, 'opsz' 48", color: 'var(--color-ink)', marginBottom: '2rem' }}
              >
                Corporate Healing brings this philosophy into the workplace
              </h2>
            </Reveal>

            {[
              {
                title: 'Workplace Massage',
                body: 'Massage can provide a moment to pause, release physical tension and step away from the intensity of the working day — supporting employees to return to their work feeling more present and refreshed.',
              },
              {
                title: 'Active Meditation',
                body: 'Active meditation can help people move, breathe, discharge accumulated stress and reconnect with their physical presence. Not passive or abstract — a practical tool for generating a better internal state.',
              },
            ].map(({ title, body }) => (
              <Reveal key={title} kind="fade-up" delay={0.1}>
                <div style={{ paddingBlock: 'clamp(1.5rem, 4vh, 2.5rem)', borderTop: '1px solid var(--color-rule)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 300, lineHeight: 1.2, fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 24", color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
                    {title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch' }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: '1px solid var(--color-rule)', marginBottom: '2.5rem' }} />

            <Reveal kind="fade-up" delay={0.15}>
              <Placeholder label="corporate packages and pricing" block />
              <Placeholder label="minimum booking requirements" block />
              <Placeholder label="availability: on-site, off-site" block />
            </Reveal>
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Bring Corporate Healing to your team"
        note="For enquiries about workplace programmes, team sessions and ongoing partnerships, please get in touch directly."
      />
    </>
  )
}
