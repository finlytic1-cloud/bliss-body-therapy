'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { NavLink } from './NavLink'

const nav = [
  { label: 'About', href: '/about' },
  { label: 'Traditional', href: '/traditional-healing' },
  { label: 'Energetic', href: '/energetic-healing' },
  { label: 'Deep', href: '/deep-healing' },
  { label: 'Corporate', href: '/corporate-healing' },
  { label: 'Free Healing', href: '/free-healing' },
  { label: 'Contact', href: '/contact' },
]

/* ── Hamburger / close icon ───────────────────────────────────────────────── */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        width: '22px',
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          display: 'block',
          height: '1px',
          backgroundColor: 'var(--color-ink)',
          transformOrigin: 'center',
          transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
          transition: 'transform 350ms var(--ease-out-expo)',
        }}
      />
      <span
        style={{
          display: 'block',
          height: '1px',
          backgroundColor: 'var(--color-ink)',
          opacity: open ? 0 : 1,
          transition: 'opacity 250ms ease',
        }}
      />
      <span
        style={{
          display: 'block',
          height: '1px',
          backgroundColor: 'var(--color-ink)',
          transformOrigin: 'center',
          transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
          transition: 'transform 350ms var(--ease-out-expo)',
        }}
      />
    </span>
  )
}

/* ── Mobile overlay menu ──────────────────────────────────────────────────── */
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const shouldReduce = useReducedMotion()

  /* Close on Escape */
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: shouldReduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: shouldReduce ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.07,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
        },
      }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'var(--color-earth)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingInline: 'var(--gutter)',
            paddingBlock: 'clamp(5rem, 15vh, 8rem)',
            overflowY: 'auto',
          }}
        >
          <motion.nav
            aria-label="Mobile navigation"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={itemVariants}
                  style={{ borderTop: '1px solid color-mix(in oklch, var(--color-clay) 25%, transparent)' }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                      fontWeight: 300,
                      lineHeight: 1.0,
                      letterSpacing: '-0.02em',
                      fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 72",
                      color: 'var(--color-linen)',
                      textDecoration: 'none',
                      paddingBlock: 'clamp(0.875rem, 2.5vh, 1.25rem)',
                      transition: 'color 250ms ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color =
                        'var(--color-clay)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color =
                        'var(--color-linen)'
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              {/* Close with final rule */}
              <li
                style={{
                  borderTop:
                    '1px solid color-mix(in oklch, var(--color-clay) 25%, transparent)',
                }}
              />
            </ul>
          </motion.nav>

          {/* Book CTA in mobile menu */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.55 }}
            style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}
          >
            <Link
              href="/contact"
              onClick={onClose}
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-ink)',
                backgroundColor: 'var(--color-linen)',
                padding: '0.875em 2em',
                textDecoration: 'none',
              }}
            >
              Book a session
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Main header ──────────────────────────────────────────────────────────── */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  /* Close on route change */
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const close = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: 'clamp(1rem, 3vw, 1.75rem) var(--gutter)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          backgroundColor: 'color-mix(in oklch, var(--color-linen) 85%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--color-rule)',
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Bliss Body Therapy — Home"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            fontWeight: 300,
            letterSpacing: '0.01em',
            color: 'var(--color-ink)',
            textDecoration: 'none',
            flexShrink: 0,
            position: 'relative',
            zIndex: 101,
          }}
        >
          Bliss Body Therapy
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary navigation" className="header-desktop-nav">
          <ul
            role="list"
            style={{
              display: 'flex',
              gap: 'clamp(1rem, 2.5vw, 2.5rem)',
              listStyle: 'none',
              alignItems: 'baseline',
            }}
          >
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop: Book CTA */}
        <Link
          href="/contact"
          className="header-desktop-book"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-linen)',
            backgroundColor: 'var(--color-ink)',
            padding: '0.5em 1.25em',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          Book
        </Link>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
          className="header-mobile-btn"
          style={{
            background: 'none',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
            display: 'none', /* shown via CSS media query */
            position: 'relative',
            zIndex: 101,
          }}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </header>

      {/* Mobile overlay */}
      <div id="mobile-nav">
        <MobileMenu open={menuOpen} onClose={close} />
      </div>
    </>
  )
}
