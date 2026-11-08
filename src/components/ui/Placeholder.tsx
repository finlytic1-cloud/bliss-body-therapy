interface PlaceholderProps {
  label: string
  block?: boolean
}

/**
 * Visible placeholder for missing content (prices, credentials, etc.).
 * Never fabricate these — always mark them.
 */
export function Placeholder({ label, block = false }: PlaceholderProps) {
  const Tag = block ? 'div' : 'span'
  return (
    <Tag className={`placeholder ${block ? 'block my-4' : 'inline-block'}`}>
      [PLACEHOLDER: {label}]
    </Tag>
  )
}
