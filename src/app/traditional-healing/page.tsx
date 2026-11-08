import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { TreatmentItem } from '@/components/ui/TreatmentItem'
import { Reveal } from '@/components/ui/Reveal'
import { Rule } from '@/components/ui/Rule'

export const metadata: Metadata = {
  title: 'Traditional Healing',
  description:
    'Swedish, holistic, deep tissue and signature massage. Traditional bodywork for relaxation, release and reconnection.',
}

const treatments = [
  {
    number: '01',
    name: 'Swedish Massage',
    description:
      'A classic flowing massage using rhythmic techniques to encourage relaxation, ease everyday muscular tension and leave the body feeling lighter and refreshed.',
  },
  {
    number: '02',
    name: 'Holistic Massage',
    description:
      'A whole-body approach that considers you as more than a collection of muscles. The treatment combines flowing touch and therapeutic techniques to encourage physical relaxation and a greater sense of balance.',
  },
  {
    number: '03',
    name: 'Deep Tissue Massage',
    description:
      'A more focused and intensive treatment designed to work with areas of persistent muscular tension and stiffness. Ideal for those who prefer deeper, more targeted pressure.',
  },
  {
    number: '04',
    name: 'Relaxing Massage with Hot Oil',
    description:
      'A deeply soothing experience combining warm oil with slow, nurturing massage movements. The warmth helps create an atmosphere of comfort and relaxation, allowing the body to gradually let go.',
  },
  {
    number: '05',
    name: 'Relaxing Massage with Hot Stones',
    description:
      'Warm stones and flowing massage techniques create a deeply grounding treatment. The combination of heat and touch encourages the muscles to soften and invites the nervous system into a state of profound relaxation.',
  },
  {
    number: '06',
    name: 'Relaxing Massage with Aroma Oils',
    description:
      'A gentle massage combined with carefully selected aromatic oils, creating a sensory experience designed to help you slow down, relax and reconnect with your body.',
  },
  {
    number: '07',
    name: "Natalia's Signature Massage",
    description:
      'My personal expression of massage, developed through years of working with the body and exploring different therapeutic and energetic approaches. Each treatment is intuitively adapted to the person in front of me, combining techniques according to what your body needs in that moment.',
  },
] as const

export default function TraditionalHealingPage() {
  return (
    <>
      <PageHero
        label="Traditional Healing"
        heading="The healing power of touch."
        intro="Traditional massage is one of the simplest and most profound ways to reconnect with the body."
      />

      {/* Philosophy intro */}
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
                In our modern lives, stress often settles into the body as muscular
                tension, shallow breathing, restlessness and fatigue. Massage offers
                an opportunity to slow down, step away from constant stimulation and
                return your attention to yourself.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.1}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                Through skilled touch and therapeutic movement, massage can help relax
                tense muscles, support circulation, encourage easier movement and
                promote a deep sense of physical and mental relaxation. It can also
                create a valuable space to pause, breathe and become aware of what
                your body has been holding.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.18}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch' }}>
                At Bliss Body Therapy, traditional massage is not simply about
                working on muscles. It is about supporting your overall sense of
                wellbeing through the relationship between touch, body and mind.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Treatment listing */}
      <section
        aria-labelledby="treatments-heading"
        style={{
          paddingInline: 'var(--gutter)',
          paddingBottom: 'clamp(4rem, 10vh, 8rem)',
        }}
      >
        <Reveal kind="fade-up">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '0.5rem' }}>
            Treatments
          </p>
          <h2
            id="treatments-heading"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.015em', fontVariationSettings: "'SOFT' 45, 'WONK' 0, 'opsz' 48", color: 'var(--color-ink)', marginBottom: '0.25rem' }}
          >
            Traditional Healing
          </h2>
        </Reveal>

        <div style={{ marginTop: '2rem' }}>
          {treatments.map((t) => (
            <TreatmentItem key={t.number} {...t} />
          ))}
          {/* Close with a final hairline */}
          <div style={{ borderTop: '1px solid var(--color-rule)' }} />
        </div>
      </section>

      <BookingCTA heading="Book a Traditional Healing session" />
    </>
  )
}
