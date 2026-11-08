import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { Reveal } from '@/components/ui/Reveal'
import { Rule } from '@/components/ui/Rule'

export const metadata: Metadata = {
  title: 'About Natalia',
  description:
    'From a legal firm in Estonia to somatic bodywork in England. The story behind Bliss Body Therapy.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        heading="A journey from the mind to the body."
        pull="My journey began in Estonia — and led me somewhere I could not have predicted."
      />

      {/* Main story */}
      <article
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 8rem)',
          paddingInline: 'var(--gutter)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(3rem, 8vw, 6rem) clamp(0.75rem, 2vw, 1.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Photo placeholder */}
          <Reveal kind="paragraph" className="about-image-col">
            <figure style={{ margin: 0 }}>
              <div
                style={{
                  aspectRatio: '3 / 4',
                  backgroundColor: 'color-mix(in oklch, var(--color-clay) 15%, var(--color-linen))',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.25rem',
                }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontStyle: 'italic', color: 'var(--color-stone)', maxWidth: '22ch' }}>
                  [PLACEHOLDER: Portrait — hands on linen, warm treatment room, light. No faces required.]
                </p>
              </div>
            </figure>
          </Reveal>

          {/* Copy column */}
          <div className="about-copy-col">
            <Reveal kind="paragraph">
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-ink)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                I'm Natalia, the founder of Bliss Body Therapy. My journey began in
                Estonia, where I spent much of my life and worked for five years in a
                legal firm. Moving to England opened a completely new chapter — one
                that led me into the world of massage, bodywork and human potential.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.1}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                Over the years, my curiosity about the human being has taken me far
                beyond traditional massage. I have explored energy practices,
                meditation, conscious movement and touch, while developing a deep
                interest in neuroscience, neurochemistry and the fascinating
                connection between the body, mind and our inner state.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.18}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch' }}>
                Through years of practice and exploration, I began to bring these
                different worlds together, creating an approach that is uniquely my
                own.
              </p>
            </Reveal>
          </div>
        </div>
      </article>

      {/* Philosophy */}
      <section
        aria-labelledby="philosophy-heading"
        style={{
          paddingBlock: 'clamp(4rem, 10vh, 8rem)',
          paddingInline: 'var(--gutter)',
          borderTop: '1px solid var(--color-rule)',
          backgroundColor: 'color-mix(in oklch, var(--color-clay) 7%, var(--color-linen))',
        }}
      >
        <Reveal kind="fade-up">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '1.5rem' }}>
            The Approach
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0 clamp(0.75rem, 2vw, 1.5rem)' }}>
          <div className="philosophy-col">
            <Reveal kind="headline" delay={0.08}>
              <h2
                id="philosophy-heading"
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
                Come back to your body.
                <br />Come back to life.
              </h2>
            </Reveal>

            <Reveal kind="paragraph" delay={0.16}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '48ch', marginBottom: '1.5em' }}>
                We are living in a time of unprecedented pressure. Our minds are
                constantly stimulated, our attention is pulled in countless
                directions, and the virtual world offers endless ways to escape.
                In response, many of us unconsciously contract — our muscles
                tighten, our breathing becomes shallow, our senses become quieter.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.22}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '48ch', marginBottom: '1.5em' }}>
                But there is another way. The body is not something we need to
                escape from. It is the doorway. The body holds our sensations,
                emotions, vitality and capacity for pleasure. When we begin to
                soften, breathe and truly inhabit it again, something changes. We
                become more present. More connected. More alive.
              </p>
            </Reveal>

            <Reveal kind="headline" delay={0.28}>
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 48",
                color: 'var(--color-clay)',
                maxWidth: '30ch',
                marginTop: '1rem',
              }}>
                Bliss is not an escape from life.
                Bliss is coming fully back into it.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <BookingCTA heading="Work with Natalia" note="Sessions are available by appointment. If you're unsure where to begin, reach out — we'll find the right starting point together." />
    </>
  )
}
