'use client'

import { useState, FormEvent } from 'react'

const TREATMENTS = [
  'Swedish Massage',
  'Holistic Massage',
  'Deep Tissue Massage',
  'Hot Oil / Hot Stone / Aroma Massage',
  "Natalia's Signature Massage",
  'Energetic Healing (general)',
  'Shamanic Five-Kind Touch',
  'Becoming Part of the Ocean',
  'Awakening the Senses Ritual',
  'Fingertip Massage',
  'Chakra Healing',
  'Pelvic Release Massage',
  'Deep Healing (returning clients)',
  'Corporate Healing',
  'Morning Meditation',
  "I'm not sure yet — looking for guidance",
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--color-stone)',
  display: 'block',
  marginBottom: '0.5rem',
}

const fieldStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-body)',
  lineHeight: 1.5,
  color: 'var(--color-ink)',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-rule)',
  padding: '0.75rem 0',
  outline: 'none',
  borderRadius: 0,
  appearance: 'none',
  WebkitAppearance: 'none',
  transition: 'border-color 300ms ease',
}

const fieldFocusStyle: React.CSSProperties = {
  borderBottomColor: 'var(--color-clay)',
}

const errorStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  color: 'var(--color-ladybird)',
  marginTop: '0.375rem',
  display: 'block',
}

interface FieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div style={{ marginBottom: 'clamp(1.5rem, 3vh, 2rem)' }}>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && (
          <span aria-hidden="true" style={{ color: 'var(--color-ladybird)', marginLeft: '0.25rem' }}>
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} role="alert" style={errorStyle}>
          {error}
        </span>
      )}
    </div>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {}
    if (!values.name.trim()) errs.name = 'Please enter your name.'
    if (!values.email.trim()) {
      errs.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = 'That doesn\'t look like a valid email address.'
    }
    if (!values.message.trim()) errs.message = 'Please tell me a little about what you\'re looking for.'
    return errs
  }

  function handleChange(field: string, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => { const next = { ...e }; delete next[field]; return next })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      /* Focus first erroring field */
      const firstKey = Object.keys(errs)[0]
      document.getElementById(firstKey)?.focus()
      return
    }

    setStatus('sending')
    try {
      /* PLACEHOLDER: replace with real form submission endpoint */
      await new Promise((res) => setTimeout(res, 1200))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          paddingBlock: '3rem',
          borderTop: '1px solid var(--color-rule)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            fontVariationSettings: "'SOFT' 45, 'WONK' 0, 'opsz' 48",
            color: 'var(--color-ink)',
            marginBottom: '1rem',
          }}
        >
          Thank you.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 1.65, color: 'var(--color-stone)', maxWidth: '44ch' }}>
          Your message has been received. I'll be in touch shortly.
        </p>
      </div>
    )
  }

  const dynamicFieldStyle = (id: string): React.CSSProperties => ({
    ...fieldStyle,
    ...(focusedField === id ? fieldFocusStyle : {}),
    ...(errors[id] ? { borderBottomColor: 'var(--color-ladybird)' } : {}),
  })

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact Natalia"
      style={{ maxWidth: '42rem' }}
    >
      <Field id="name" label="Your name" required error={errors.name}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          style={dynamicFieldStyle('name')}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
        />
      </Field>

      <Field id="email" label="Email address" required error={errors.email}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          style={dynamicFieldStyle('email')}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
      </Field>

      <Field id="phone" label="Phone (optional)">
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onFocus={() => setFocusedField('phone')}
          onBlur={() => setFocusedField(null)}
          style={dynamicFieldStyle('phone')}
        />
      </Field>

      <Field id="treatment" label="Treatment interest">
        <select
          id="treatment"
          value={values.treatment}
          onChange={(e) => handleChange('treatment', e.target.value)}
          onFocus={() => setFocusedField('treatment')}
          onBlur={() => setFocusedField(null)}
          style={{
            ...dynamicFieldStyle('treatment'),
            cursor: 'pointer',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M0 0 L6 8 L12 0' fill='none' stroke='%239A9187' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.25rem center',
            paddingRight: '1.5rem',
          }}
        >
          <option value="">— select if known</option>
          {TREATMENTS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Your message" required error={errors.message}>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          style={{
            ...dynamicFieldStyle('message'),
            resize: 'vertical',
            minHeight: '8rem',
          }}
          placeholder="Tell me a little about what you're looking for, or any questions you have."
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
        />
      </Field>

      {status === 'error' && (
        <p
          role="alert"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--color-ladybird)',
            marginBottom: '1.5rem',
          }}
        >
          Something went wrong. Please try again or email directly at{' '}
          <span style={{ fontStyle: 'italic' }}>[PLACEHOLDER: email]</span>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: status === 'sending' ? 'var(--color-stone)' : 'var(--color-linen)',
          backgroundColor: status === 'sending' ? 'var(--color-stone)' : 'var(--color-ink)',
          border: 'none',
          padding: '0.875em 2em',
          cursor: status === 'sending' ? 'wait' : 'pointer',
          transition: 'background-color 300ms ease, color 300ms ease',
        }}
        aria-busy={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
