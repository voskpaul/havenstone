'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

const locations = ['Westlands', 'Kilimani', 'Kileleshwa', 'Lavington', 'Karen', 'Runda']

export function HomeSearchForm() {
  const router = useRouter()
  const [rangeError, setRangeError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const minimum = String(formData.get('min') ?? '').trim()
    const maximum = String(formData.get('max') ?? '').trim()
    const invalidMinimum = minimum !== '' && (!Number.isSafeInteger(Number(minimum)) || Number(minimum) < 0)
    const invalidMaximum = maximum !== '' && (!Number.isSafeInteger(Number(maximum)) || Number(maximum) < 0)

    if (invalidMinimum || invalidMaximum) {
      setRangeError('Enter whole-number budgets of zero or more.')
      document.getElementById(invalidMinimum ? 'home-min-budget' : 'home-max-budget')?.focus()
      return
    }

    if (minimum !== '' && maximum !== '' && Number(minimum) > Number(maximum)) {
      setRangeError('Minimum budget must be lower than maximum budget.')
      document.getElementById('home-min-budget')?.focus()
      return
    }

    setRangeError('')
    const params = new URLSearchParams()

    for (const key of ['location', 'purpose', 'type', 'min', 'max']) {
      const value = String(formData.get(key) ?? '').trim()
      if (value) params.set(key, value)
    }

    const query = params.toString()
    router.push(query ? `/properties?${query}` : '/properties')
  }

  return (
    <form className="home-search" onSubmit={handleSubmit} aria-label="Search properties" noValidate>
      <p className="home-search__heading">
        <Search size={15} aria-hidden="true" /> Refine your search
      </p>
      <div className="home-search__fields">
        <label htmlFor="home-location">
          Location
          <select id="home-location" name="location" defaultValue="">
            <option value="">All Nairobi</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="home-purpose">
          Looking to
          <select id="home-purpose" name="purpose" defaultValue="">
            <option value="">Rent or buy</option>
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
          </select>
        </label>

        <label htmlFor="home-type">
          Property type
          <select id="home-type" name="type" defaultValue="">
            <option value="">Any type</option>
            <option value="Apartment">Apartment</option>
            <option value="Townhouse">Townhouse</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
          </select>
        </label>

        <div className="home-search__budget-group">
          <span className="home-search__field-label">Budget (KSh)</span>
          <div className="home-search__budget-fields">
            <label htmlFor="home-min-budget" className="sr-only">
              Minimum budget in Kenyan shillings
            </label>
            <input
              id="home-min-budget"
              name="min"
              type="number"
              min="0"
              step="1"
              inputMode="numeric"
              placeholder="Min"
              aria-invalid={Boolean(rangeError)}
              aria-describedby={rangeError ? 'home-search-error' : undefined}
              onChange={() => setRangeError('')}
            />
            <label htmlFor="home-max-budget" className="sr-only">
              Maximum budget in Kenyan shillings
            </label>
            <input
              id="home-max-budget"
              name="max"
              type="number"
              min="0"
              step="1"
              inputMode="numeric"
              placeholder="Max"
              aria-invalid={Boolean(rangeError)}
              aria-describedby={rangeError ? 'home-search-error' : undefined}
              onChange={() => setRangeError('')}
            />
          </div>
        </div>

        <button className="button button--forest home-search__submit" type="submit">
          <Search size={16} aria-hidden="true" /> Search properties
        </button>
      </div>
      {rangeError && <p className="home-search__error" id="home-search-error" role="alert">{rangeError}</p>}
    </form>
  )
}
