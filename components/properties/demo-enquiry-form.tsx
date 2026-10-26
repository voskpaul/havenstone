'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Info } from 'lucide-react'

type FormValues = {
  name: string
  email: string
  phone: string
  viewingDate: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

type DemoEnquiryFormProps = {
  includeViewingDate?: boolean
  requireMessage?: boolean
  submitLabel?: string
  propertyTitle?: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  viewingDate: '',
  message: '',
}

export function DemoEnquiryForm({
  includeViewingDate = false,
  requireMessage = false,
  submitLabel = 'Complete demo enquiry',
  propertyTitle,
}: DemoEnquiryFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitted(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: FormErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const normalizedPhone = values.phone.trim()
    const phoneDigits = normalizedPhone.replace(/\D/g, '')
    const phonePattern = /^\+?[\d\s().-]+$/

    if (!values.name.trim()) nextErrors.name = 'Enter your full name.'
    if (!emailPattern.test(values.email.trim())) nextErrors.email = 'Enter a valid email address.'
    if (!phonePattern.test(normalizedPhone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      nextErrors.phone = 'Enter a phone number with 7 to 15 digits.'
    }
    if (requireMessage && !values.message.trim()) nextErrors.message = 'Add a short message so we know how to help.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0]
      document.getElementById(`enquiry-${firstInvalidField}`)?.focus()
      return
    }

    setValues(initialValues)
    setSubmitted(true)
  }

  const errorFor = (field: keyof FormValues) => errors[field]

  return (
    <form className="demo-form" onSubmit={handleSubmit} noValidate>
      <p className="demo-form__notice">
        <Info size={14} aria-hidden="true" />
        Portfolio demo only. Your details are not sent or stored.
      </p>

      {propertyTitle && <input type="hidden" name="property" value={propertyTitle} readOnly />}

      <label className="form-field" htmlFor="enquiry-name">
        <span className="form-field__label">Full name <span className="form-field__required" aria-hidden="true">*</span></span>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateValue('name', event.target.value)}
          aria-invalid={Boolean(errorFor('name'))}
          aria-describedby={errorFor('name') ? 'enquiry-name-error' : undefined}
          required
        />
        {errorFor('name') && <span className="form-field__error" role="alert" id="enquiry-name-error">{errorFor('name')}</span>}
      </label>

      <label className="form-field" htmlFor="enquiry-email">
        <span className="form-field__label">Email address <span className="form-field__required" aria-hidden="true">*</span></span>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateValue('email', event.target.value)}
          aria-invalid={Boolean(errorFor('email'))}
          aria-describedby={errorFor('email') ? 'enquiry-email-error' : undefined}
          required
        />
        {errorFor('email') && <span className="form-field__error" role="alert" id="enquiry-email-error">{errorFor('email')}</span>}
      </label>

      <label className="form-field" htmlFor="enquiry-phone">
        <span className="form-field__label">Phone number <span className="form-field__required" aria-hidden="true">*</span></span>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => updateValue('phone', event.target.value)}
          aria-invalid={Boolean(errorFor('phone'))}
          aria-describedby={errorFor('phone') ? 'enquiry-phone-error' : undefined}
          required
        />
        {errorFor('phone') && <span className="form-field__error" role="alert" id="enquiry-phone-error">{errorFor('phone')}</span>}
      </label>

      {includeViewingDate && (
        <label className="form-field" htmlFor="enquiry-viewing-date">
          <span className="form-field__label">Preferred viewing date <span className="form-field__optional">(optional)</span></span>
          <input
            id="enquiry-viewing-date"
            name="viewingDate"
            type="date"
            value={values.viewingDate}
            onChange={(event) => updateValue('viewingDate', event.target.value)}
          />
        </label>
      )}

      <label className="form-field" htmlFor="enquiry-message">
        <span className="form-field__label">
          {requireMessage ? (
            <>
              How can we help? <span className="form-field__required" aria-hidden="true">*</span>
            </>
          ) : (
            <>
              A note for the team <span className="form-field__optional">(optional)</span>
            </>
          )}
        </span>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(event) => updateValue('message', event.target.value)}
          aria-invalid={Boolean(errorFor('message'))}
          aria-describedby={errorFor('message') ? 'enquiry-message-error' : undefined}
          placeholder={propertyTitle ? `I would like to know more about ${propertyTitle}...` : 'Tell us a little about what you are looking for...'}
          required={requireMessage}
        />
        {errorFor('message') && <span className="form-field__error" role="alert" id="enquiry-message-error">{errorFor('message')}</span>}
      </label>

      <button className="button button--forest button--full" type="submit">
        {submitLabel}
      </button>

      {submitted && (
        <p className="form-success" role="status" aria-live="polite">
          Demo enquiry complete. No message was sent or stored.
        </p>
      )}
    </form>
  )
}
