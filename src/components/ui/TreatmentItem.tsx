import { Reveal } from '@/components/ui/Reveal'
import { Placeholder } from '@/components/ui/Placeholder'

interface TreatmentItemProps {
  number: string
  name: string
  description: string
}

/**
 * A single treatment listing.
 * Delineated by hairline rules and space — never a card with shadow.
 */
export function TreatmentItem({ number, name, description }: TreatmentItemProps) {
  return (
    <Reveal kind="fade-up">
      <article
        aria-labelledby={`treatment-${number}`}
        style={{
          display: 'grid',
          gridTemplateColumns: '2.5rem 1fr',
          gap: '0 1.5rem',
          paddingBlock: 'clamp(1.75rem, 4vh, 2.5rem)',
          borderTop: '1px solid var(--color-rule)',
          alignItems: 'start',
        }}
      >
        {/* Number */}
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 400,
            letterSpacing: '0.1em',
            color: 'var(--color-stone)',
            paddingTop: '0.2em',
          }}
        >
          {number}
        </span>

        {/* Content */}
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              gap: '0.5rem 2rem',
              marginBottom: '0.75rem',
            }}
          >
            <h3
              id={`treatment-${number}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 24",
                color: 'var(--color-ink)',
                lineHeight: 1.2,
              }}
            >
              {name}
            </h3>

            {/* Price / duration — never invented */}
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                color: 'var(--color-stone)',
                whiteSpace: 'nowrap',
              }}
            >
              <Placeholder label="duration" /> · <Placeholder label="price" />
            </span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--color-stone)',
              maxWidth: '56ch',
            }}
          >
            {description}
          </p>
        </div>
      </article>
    </Reveal>
  )
}
