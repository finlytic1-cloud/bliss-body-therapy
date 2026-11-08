import { Reveal, RevealGroup } from '@/components/ui/Reveal'
import { Rule } from '@/components/ui/Rule'

export function ThesisSection() {
  return (
    <section
      aria-labelledby="thesis-heading"
      style={{
        paddingBlock: 'clamp(6rem, 16vh, 12rem)',
        paddingInline: 'var(--gutter)',
      }}
    >
      {/* Section label */}
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
          The Practice
        </p>
      </Reveal>

      <Reveal kind="fade-up" delay={0.05}>
        <div style={{ marginBottom: 'clamp(3rem, 8vh, 6rem)' }}>
          <Rule />
        </div>
      </Reveal>

      {/* Opening statement — pulled large */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '0 clamp(0.75rem, 2vw, 1.5rem)',
          marginBottom: 'clamp(3rem, 8vh, 6rem)',
        }}
      >
        <Reveal
          kind="headline"
          delay={0.1}
          className="thesis-opener"
        >
          <p
            id="thesis-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 72",
              color: 'var(--color-ink)',
            }}
          >
            We are living in a time of<br />
            unprecedented pressure.
          </p>
        </Reveal>
      </div>

      {/* Body copy — editorial asymmetric layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(2rem, 5vw, 4rem) clamp(0.75rem, 2vw, 1.5rem)',
          marginBottom: 'clamp(4rem, 10vh, 8rem)',
          alignItems: 'start',
        }}
      >
        {/* Left column — main body */}
        <RevealGroup className="thesis-col-left">
          <Reveal kind="paragraph" delay={0.1}>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--color-ink)',
                maxWidth: '52ch',
                marginBottom: '1.5em',
              }}
            >
              Our minds are constantly stimulated, our attention is pulled in
              countless directions, and the virtual world offers endless ways to
              escape. In response, many of us unconsciously contract — our muscles
              tighten, our breathing becomes shallow, our senses become quieter.
              We leave the body and retreat into the mind, the screen, the endless
              stream of information.
            </p>
          </Reveal>

          <Reveal kind="paragraph" delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 48",
                color: 'var(--color-clay)',
                maxWidth: '36ch',
                marginBottom: '1.5em',
              }}
            >
              But there is another way.
            </p>
          </Reveal>

          <Reveal kind="paragraph" delay={0.3}>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--color-ink)',
                maxWidth: '52ch',
                marginBottom: '1.5em',
              }}
            >
              The body holds our sensations, emotions, vitality and capacity for
              pleasure. When we begin to soften, breathe and truly inhabit it
              again, something changes. We become more present. More connected.
              More alive.
            </p>
          </Reveal>

          <Reveal kind="paragraph" delay={0.4}>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--color-stone)',
                maxWidth: '52ch',
              }}
            >
              At Bliss Body Therapy, we see touch and bodywork as a pathway back
              to this connection. Through massage, conscious touch, breath,
              movement and energy-based practices, we create space for the body
              to release what it has been holding and rediscover its natural
              capacity for relaxation, pleasure and vitality.
            </p>
          </Reveal>
        </RevealGroup>

        {/* Right column — secondary thought, offset */}
        <Reveal
          kind="paragraph"
          delay={0.5}
          className="thesis-col-right"
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              lineHeight: 1.75,
              color: 'var(--color-stone)',
              maxWidth: '34ch',
            }}
          >
            Because a fulfilled life is not only something we create with the
            mind. It is something we experience through the body.
          </p>
        </Reveal>
      </div>

      {/* Closing pullquote — the thesis statement */}
      <Reveal kind="headline">
        <blockquote
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            fontVariationSettings: "'SOFT' 55, 'WONK' 0, 'opsz' 96",
            color: 'var(--color-ink)',
            maxWidth: '22ch',
            marginLeft: 'auto',  /* right-hang */
            textAlign: 'right',
            borderTop: '1px solid var(--color-rule)',
            paddingTop: '1.5rem',
          }}
        >
          <p>Bliss is not an escape from life.</p>
          <p style={{ color: 'var(--color-clay)' }}>Bliss is coming fully back into it.</p>
        </blockquote>
      </Reveal>
    </section>
  )
}
