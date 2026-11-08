'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

/**
 * Nav link with animated underline drawn from left on hover.
 * Active state shown via colour shift, not weight (no layout shift).
 */
export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      style={{
        position: 'relative',
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        fontWeight: 400,
        letterSpacing: '0.04em',
        color: isActive ? 'var(--color-clay)' : 'var(--color-stone)',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'color 300ms var(--ease-out-expo)',
      }}
      className="nav-link"
    >
      {children}
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--color-clay);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--duration-fast) var(--ease-out-expo);
        }
        .nav-link:hover::after,
        .nav-link[aria-current="page"]::after {
          transform: scaleX(1);
        }
        .nav-link:hover {
          color: var(--color-ink);
        }
      `}</style>
    </Link>
  )
}
