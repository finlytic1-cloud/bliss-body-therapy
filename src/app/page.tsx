import { HeroSection } from '@/components/sections/Hero'
import { ThesisSection } from '@/components/sections/ThesisSection'
import { DescentSection } from '@/components/sections/DescentSection'
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection'
import { MeditationSection } from '@/components/sections/MeditationSection'
import { HomeContactSection } from '@/components/sections/HomeContactSection'

export const metadata = {
  title: 'Bliss Body Therapy — Massage & Somatic Bodywork',
  description:
    'Somatic bodywork, massage therapy and energy healing. Come back to your body. Come back to life.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — "Come back to your body." */}
      <HeroSection />

      {/* 2. The thesis — unprecedented pressure / the doorway / Bliss */}
      <ThesisSection />

      {/* 3. The three tiers — scroll-linked descent linen → earth */}
      <DescentSection />

      {/* 4. About preview — a journey from the mind to the body */}
      <AboutPreviewSection />

      {/* 5. Morning meditation — the free offering */}
      <MeditationSection />

      {/* 6. Contact CTA */}
      <HomeContactSection />
    </>
  )
}
