import Link from 'next/link'
import { Placeholder } from '@/components/ui/Placeholder'
import { Rule } from '@/components/ui/Rule'

const footerNav = [
  { label: 'About', href: '/about' },
  { label: 'Traditional Healing', href: '/traditional-healing' },
  { label: 'Energetic Healing', href: '/energetic-healing' },
  { label: 'Deep Healing', href: '/deep-healing' },
  { label: 'Corporate Healing', href: '/corporate-healing' },
  { label: 'Free Healing', href: '/free-healing' },
  { label: 'Contact', href: '/contact' },
]

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-earth)',
        color: 'var(--color-stone)',
        padding: 'clamp(3rem, 8vw, 6rem) var(--gutter)',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 300,
              color: 'var(--color-linen)',
              marginBottom: '0.75rem',
            }}
          >
            Bliss Body Therapy
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '28ch' }}>
            Massage, somatic bodywork and energy healing.<br />
            The body is the doorway back.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <p
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-clay)',
              marginBottom: '1rem',
            }}
          >
            Pages
          </p>
          <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-stone)',
                    textDecoration: 'none',
                  }}
                  className="link-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & credentials */}
        <div>
          <p
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-clay)',
              marginBottom: '1rem',
            }}
          >
            Contact
          </p>
          <address style={{ fontStyle: 'normal', fontSize: '0.875rem', lineHeight: 1.8 }}>
            <Placeholder label="location" /><br />
            <Placeholder label="phone number" /><br />
            <Placeholder label="email address" />
          </address>

          {/* Credentials — always visible, never invented */}
          <div style={{ marginTop: '1.5rem' }}>
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-clay)',
                marginBottom: '0.5rem',
              }}
            >
              Credentials & Insurance
            </p>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}>
              <Placeholder label="qualifications and training" /><br />
              <Placeholder label="professional body membership" /><br />
              <Placeholder label="insurance provider" />
            </p>
          </div>
        </div>
      </div>

      <Rule />

      {/* Legal row */}
      <div
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} Bliss Body Therapy. All rights reserved.
        </p>
        <p style={{ fontSize: '0.75rem' }}>
          <Placeholder label="cancellation policy link" />
          {' · '}
          <Placeholder label="privacy policy link" />
        </p>
      </div>
    </footer>
  )
}
