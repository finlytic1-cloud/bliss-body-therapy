import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { Rule } from '@/components/ui/Rule'

export function AboutPreviewSection() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      style={{
        paddingBlock: 'clamp(6rem, 16vh, 12rem)',
        paddingInline: 'var(--gutter)',
        backgroundColor: 'var(--color-linen)',
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
        {/* Left — copy */}
        <div className="about-preview-copy">
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
              About Natalia
            </p>
          </Reveal>

          <Reveal kind="headline" delay={0.08}>
            <h2
              id="about-preview-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 72",
                color: 'var(--color-ink)',
                marginBottom: 'clamp(1.5rem, 4vh, 2.5rem)',
              }}
            >
              A journey from
              <br />the mind to the body.
            </h2>
          </Reveal>

          <Reveal kind="paragraph" delay={0.18}>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--color-ink)',
                maxWidth: '48ch',
                marginBottom: '1.25em',
              }}
            >
              I'm Natalia, the founder of Bliss Body Therapy. My journey began in
              Estonia, where I spent five years in a legal firm. Moving to England
              opened a completely new chapter — one that led me into the world of
              massage, bodywork and human potential.
            </p>
          </Reveal>

          <Reveal kind="paragraph" delay={0.26}>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--color-stone)',
                maxWidth: '48ch',
                marginBottom: '2.5rem',
              }}
            >
              Over the years, my curiosity has taken me far beyond traditional
              massage — into energy practices, meditation, conscious movement and
              a deep interest in neuroscience, neurochemistry and the connection
              between body, mind and inner state.
            </p>
          </Reveal>

          <Reveal kind="fade-up" delay={0.34}>
            <Link
              href="/about"
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
              Full story
            </Link>
          </Reveal>
        </div>

        {/* Right — photograph placeholder */}
        <Reveal kind="paragraph" delay={0.1} className="about-preview-image">
          <figure style={{ margin: 0 }}>
            <div
              style={{
                aspectRatio: '3 / 4',
                backgroundColor: 'color-mix(in oklch, var(--color-clay) 15%, var(--color-linen))',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '1.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontStyle: 'italic',
                  color: 'var(--color-stone)',
                  textAlign: 'center',
                  maxWidth: '24ch',
                }}
              >
                [PLACEHOLDER: Portrait — hands, light on linen,
                warm treatment room texture. No faces required.]
              </p>
            </div>
            <figcaption
              style={{
                marginTop: '0.75rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                color: 'var(--color-stone)',
              }}
            >
              Natalia — founder, Bliss Body Therapy
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
