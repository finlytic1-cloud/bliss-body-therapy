import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ConsentBlock } from '@/components/sections/ConsentBlock'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { TreatmentItem } from '@/components/ui/TreatmentItem'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Energetic Healing',
  description:
    'Working with the body beyond the physical — conscious touch, shamanic massage, chakra healing, pelvic release and sensory awakening.',
}

const treatments = [
  {
    number: '01',
    name: 'Shamanic Five-Kind Touch Massage',
    description:
      'An immersive massage experience inspired by different qualities of touch. Each type of touch creates a different sensory response, inviting you to move beyond habitual patterns and experience the body with greater awareness.',
  },
  {
    number: '02',
    name: 'Becoming Part of the Ocean Massage',
    description:
      'A flowing, rhythmic experience inspired by the movement of water. Continuous waves of touch create a feeling of being held and carried, encouraging the body to surrender, soften and move into a deeply relaxed state.',
  },
  {
    number: '03',
    name: 'Awakening the Senses Ritual',
    description:
      'A sensory journey designed to bring your awareness out of the busy mind and back into the body. Through conscious touch and sensory exploration, the experience invites you to rediscover the subtle pleasures of seeing, hearing, feeling, breathing and being present.',
  },
  {
    number: '04',
    name: 'Fingertip Massage',
    description:
      "A delicate and highly sensory form of touch using the fingertips to explore the body’s surface with precision and awareness. Gentle stimulation can awaken areas of the body that have become overlooked or less sensitive.",
    sensitive: true,
  },
  {
    number: '05',
    name: 'Chakra Healing',
    description:
      'A holistic energetic practice working with the traditional chakra system as a framework for exploring different dimensions of our physical, emotional and energetic experience. The treatment uses touch, awareness and energetic practices to encourage a sense of balance and inner connection.',
  },
  {
    number: '06',
    name: 'Pelvic Release Massage',
    description:
      'A deeply embodied treatment focused on bringing conscious awareness to the pelvic area, where many people experience habitual muscular holding and disconnection. Through appropriate, respectful bodywork, the practice encourages relaxation, grounding and reconnection with this central area of the body.',
    sensitive: true,
  },
] as const

export default function EnergeticHealingPage() {
  return (
    <>
      <PageHero
        label="Energetic Healing"
        heading="Working with the body beyond the physical."
        intro="The body is more than muscles, bones and organs — it is a field of sensation, emotion and inner experience."
      />

      {/* Consent block — prominent at top per brief */}
      <ConsentBlock />

      {/* Philosophy */}
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
                At Bliss Body Therapy, energetic healing is based on the idea that
                the body is more than muscles, bones and organs. We also experience
                ourselves through an electromagnetic field of information — a subtle
                dimension through which the body, emotions, sensations and our inner
                state are interconnected.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.1}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch', marginBottom: '1.5em' }}>
                This approach invites you to experience the body in a different way:
                not simply as something to be treated, but as something to be felt,
                listened to and awakened. Through conscious touch, subtle movement,
                sensory stimulation, breath and focused attention, energetic
                treatments create an opportunity to slow down and reconnect with
                yourself.
              </p>
            </Reveal>

            <Reveal kind="paragraph" delay={0.18}>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--color-stone)', maxWidth: '52ch' }}>
                For me, energetic healing is about bringing energy back into places
                that have become numb, contracted or disconnected — awakening the
                body's natural sensitivity and reminding us that feeling alive is an
                embodied experience.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section
        aria-labelledby="energetic-treatments-heading"
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
            id="energetic-treatments-heading"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.015em', fontVariationSettings: "'SOFT' 45, 'WONK' 0, 'opsz' 48", color: 'var(--color-ink)', marginBottom: '0.25rem' }}
          >
            Energetic Healing Experiences
          </h2>
        </Reveal>

        {/* Note for sensitive treatments */}
        <Reveal kind="fade-up" delay={0.08}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-stone)', maxWidth: '52ch', marginTop: '1rem', marginBottom: '0' }}>
            Fingertip Massage and Pelvic Release Massage involve boundary-sensitive
            bodywork.{' '}
            <a href="#how-i-work" className="link-underline" style={{ color: 'var(--color-stone)' }}>
              Please read the consent section above
            </a>{' '}
            before booking these treatments.
          </p>
        </Reveal>

        <div style={{ marginTop: '2rem' }}>
          {treatments.map((t) => (
            <TreatmentItem key={t.number} number={t.number} name={t.name} description={t.description} />
          ))}
          <div style={{ borderTop: '1px solid var(--color-rule)' }} />
        </div>
      </section>

      <BookingCTA heading="Book an Energetic Healing session" />
    </>
  )
}
