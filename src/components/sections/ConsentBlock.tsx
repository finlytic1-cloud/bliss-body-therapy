import { Reveal } from '@/components/ui/Reveal'
import { Placeholder } from '@/components/ui/Placeholder'

/**
 * Consent, boundaries and what to expect.
 * Required at the top of every deeper-work page (Energetic, Deep).
 * Prominent by design — not buried. The brief is explicit.
 */
export function ConsentBlock() {
  return (
    <section
      id="how-i-work"
      aria-labelledby="consent-heading"
      style={{
        backgroundColor: 'color-mix(in oklch, var(--color-clay) 12%, var(--color-linen))',
        paddingBlock: 'clamp(3.5rem, 8vh, 6rem)',
        paddingInline: 'var(--gutter)',
        borderBottom: '1px solid var(--color-rule)',
      }}
    >
      <Reveal kind="fade-up">
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-stone)',
            marginBottom: '1rem',
          }}
        >
          Before you book
        </p>
      </Reveal>

      <Reveal kind="headline" delay={0.06}>
        <h2
          id="consent-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.015em',
            fontVariationSettings: "'SOFT' 45, 'WONK' 0, 'opsz' 48",
            color: 'var(--color-ink)',
            marginBottom: 'clamp(2rem, 5vh, 3rem)',
          }}
        >
          How I work — consent,
          <br />boundaries and what to expect
        </h2>
      </Reveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
          gap: 'clamp(2rem, 5vw, 3rem)',
        }}
      >
        {[
          {
            heading: 'Draping and clothing',
            body: <Placeholder label="What you wear, what remains covered, draping protocol" block />,
          },
          {
            heading: 'What a session includes — and does not include',
            body: <Placeholder label="Clear statement of scope of practice: what is and is not part of any session" block />,
          },
          {
            heading: 'The consultation process',
            body: <Placeholder label="Intake form, pre-session conversation, health considerations, goals" block />,
          },
          {
            heading: 'Your right to stop at any moment',
            body: (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  lineHeight: 'var(--leading-body)',
                  color: 'var(--color-stone)',
                }}
              >
                You are in control throughout the session. You can pause, redirect
                or end the session at any moment — no explanation required. Your
                comfort and sense of safety come before anything else.
              </p>
            ),
          },
        ].map(({ heading, body }) => (
          <Reveal key={heading} kind="fade-up">
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'var(--color-ink)',
                  marginBottom: '0.75rem',
                }}
              >
                {heading}
              </p>
              {body}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
