'use client'

import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Filter, Search } from 'lucide-react'
import { properties, propertyTypes } from '@/lib/properties'
import type { PropertyType } from '@/lib/properties'
import { PropertyCard } from '@/components/properties/property-card'

type InitialFilters = {
  location: string
  purpose: string
  type: string
  min: string
  max: string
  bedrooms: string
  sort: string
}

type PropertyExplorerProps = {
  initialFilters: InitialFilters
}

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
]

export function PropertyExplorer({ initialFilters }: PropertyExplorerProps) {
  const router = useRouter()
  const [location, setLocation] = useState(initialFilters.location)
  const [purpose, setPurpose] = useState(initialFilters.purpose)
  const [type, setType] = useState(initialFilters.type)
  const [minimum, setMinimum] = useState(initialFilters.min)
  const [maximum, setMaximum] = useState(initialFilters.max)
  const [bedrooms, setBedrooms] = useState(initialFilters.bedrooms)
  const [sort, setSort] = useState(initialFilters.sort || 'recommended')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [rangeError, setRangeError] = useState('')

  const filteredProperties = useMemo(() => {
    const normalizedLocation = location.trim().toLowerCase()
    const minValue = minimum === '' ? null : Number(minimum)
    const maxValue = maximum === '' ? null : Number(maximum)
    const bedroomCount = bedrooms === '' ? null : Number(bedrooms)

    const result = properties.filter((property) => {
      const matchesLocation =
        normalizedLocation === '' || property.neighborhood.toLowerCase().includes(normalizedLocation)
      const matchesPurpose = purpose === '' || property.purpose === purpose
      const matchesType = type === '' || property.type === type
      const matchesMinimum = minValue === null || property.price >= minValue
      const matchesMaximum = maxValue === null || property.price <= maxValue
      const matchesBedrooms = bedroomCount === null || property.bedrooms >= bedroomCount

      return matchesLocation && matchesPurpose && matchesType && matchesMinimum && matchesMaximum && matchesBedrooms
    })

    if (sort === 'price-asc') return result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return result.sort((a, b) => b.price - a.price)
    return result
  }, [location, purpose, type, minimum, maximum, bedrooms, sort])

  const activeFilterCount = [location, purpose, type, minimum, maximum, bedrooms].filter(Boolean).length

  function updateQuery(nextSort = sort) {
    const params = new URLSearchParams()
    const values: Record<string, string> = {
      location: location.trim(),
      purpose,
      type,
      min: minimum,
      max: maximum,
      bedrooms,
      sort: nextSort === 'recommended' ? '' : nextSort,
    }

    Object.entries(values).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    const query = params.toString()
    router.replace(query ? `/properties?${query}` : '/properties', { scroll: false })
  }

  function handleApply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const minValue = minimum === '' ? null : Number(minimum)
    const maxValue = maximum === '' ? null : Number(maximum)

    if (minValue !== null && maxValue !== null && minValue > maxValue) {
      setRangeError('Minimum budget must be lower than maximum budget.')
      return
    }

    setRangeError('')
    updateQuery()
    setFiltersOpen(false)
  }

  function clearFilters() {
    setLocation('')
    setPurpose('')
    setType('')
    setMinimum('')
    setMaximum('')
    setBedrooms('')
    setSort('recommended')
    setRangeError('')
    setFiltersOpen(false)
    router.push('/properties', { scroll: false })
  }

  function handleSortChange(value: string) {
    setSort(value)
    updateQuery(value)
  }

  return (
    <main className="properties-page" id="main-content">
      <div className="container">
        <div className="page-hero">
          <p className="eyebrow">THE HAVENSTONE COLLECTION</p>
          <div className="explorer-heading-row">
            <div>
              <h1 className="page-heading">Explore the Nairobi collection.</h1>
              <p className="page-hero__copy">
                Explore sample apartments, townhouses, and family homes across Nairobi. Refine your search to find the details that matter to you.
              </p>
            </div>
            <button
              className="button button--outline mobile-filter-toggle"
              type="button"
              aria-expanded={filtersOpen}
              aria-controls="property-filters"
              onClick={() => setFiltersOpen((open) => !open)}
            >
              <Filter size={16} aria-hidden="true" />
              {filtersOpen ? 'Hide filters' : `Filters${activeFilterCount ? ` (${activeFilterCount})` : ''}`}
            </button>
          </div>
        </div>

        <form
          className={`filter-panel${filtersOpen ? ' is-open' : ''}`}
          id="property-filters"
          onSubmit={handleApply}
          aria-label="Filter sample properties"
        >
          <label className="filter-field filter-field--location" htmlFor="filter-location">
            Neighbourhood or location
            <input
              id="filter-location"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Try Kilimani or Westlands"
              autoComplete="off"
            />
          </label>

          <label className="filter-field" htmlFor="filter-purpose">
            Looking to
            <select id="filter-purpose" name="purpose" value={purpose} onChange={(event) => setPurpose(event.target.value)}>
              <option value="">Rent or buy</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </label>

          <label className="filter-field" htmlFor="filter-type">
            Property type
            <select id="filter-type" name="type" value={type} onChange={(event) => setType(event.target.value)}>
              <option value="">Any type</option>
              {propertyTypes.map((propertyType: PropertyType) => (
                <option key={propertyType} value={propertyType}>
                  {propertyType}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field filter-field--budget" htmlFor="filter-min">
            Min budget (KSh)
            <input
              id="filter-min"
              name="min"
              type="number"
              min="0"
              inputMode="numeric"
              value={minimum}
              onChange={(event) => setMinimum(event.target.value)}
              aria-invalid={Boolean(rangeError)}
            />
          </label>

          <label className="filter-field filter-field--budget" htmlFor="filter-max">
            Max budget (KSh)
            <input
              id="filter-max"
              name="max"
              type="number"
              min="0"
              inputMode="numeric"
              value={maximum}
              onChange={(event) => setMaximum(event.target.value)}
              aria-invalid={Boolean(rangeError)}
            />
          </label>

          <label className="filter-field" htmlFor="filter-bedrooms">
            Bedrooms
            <select id="filter-bedrooms" name="bedrooms" value={bedrooms} onChange={(event) => setBedrooms(event.target.value)}>
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </label>

          <div className="filter-actions">
            <button className="button button--forest button--small" type="submit">
              <Search size={15} aria-hidden="true" /> Apply
            </button>
            <button className="filter-clear" type="button" onClick={clearFilters}>
              Clear
            </button>
          </div>
        </form>
        {rangeError && <p className="filter-error" role="alert">{rangeError}</p>}

        <div className="results-bar">
          <p aria-live="polite">
            <strong>{filteredProperties.length}</strong> sample {filteredProperties.length === 1 ? 'property' : 'properties'}
            {location.trim() ? ` in ${location.trim()}` : ' across Nairobi'}
          </p>
          <label className="sort-field" htmlFor="sort-properties">
            Sort by
            <select id="sort-properties" value={sort} onChange={(event) => handleSortChange(event.target.value)}>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="property-grid property-grid--explorer">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state__icon"><Search size={21} aria-hidden="true" /></span>
            <h2>No sample homes match those filters.</h2>
            <p>Try a different neighbourhood, budget, or property type to see more of the collection.</p>
            <button className="button button--forest button--small" type="button" onClick={clearFilters}>
              Clear all filters
            </button>
          </div>
        )}

        <p className="demo-listings-note">
          Sample portfolio data only. Listings, prices, availability, and property details are fictional and are not offers to rent or buy.
        </p>
      </div>
    </main>
  )
}
