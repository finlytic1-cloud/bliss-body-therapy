interface RuleProps {
  className?: string
}

/**
 * Hairline rule — 1px clay at 30% opacity. Never a shadow or card border.
 */
export function Rule({ className = '' }: RuleProps) {
  return (
    <hr
      className={`rule ${className}`}
      aria-hidden="true"
    />
  )
}
