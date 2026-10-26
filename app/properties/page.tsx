import type { Metadata } from 'next'
import { PropertyExplorer } from '@/components/properties/property-explorer'
import { propertyTypes } from '@/lib/properties'
import type { PropertyType } from '@/lib/properties'

export const metadata: Metadata = {
  title: 'Explore properties in Nairobi',
  description:
    'Search sample apartments, townhouses, villas, and family homes across Nairobi by neighborhood, price, and property type.',
}

type SearchParams = Record<string, string | string[] | undefined>

type PropertiesPageProps = {
  searchParams: Promise<SearchParams>
}

function firstValue(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? '' : value ?? ''
}

function safeBudget(value: string): string {
  if (!/^\d{1,12}$/.test(value)) return ''
  return value
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams
  const location = firstValue(params.location).trim().slice(0, 80)
  const rawPurpose = firstValue(params.purpose)
  const rawType = firstValue(params.type)
  const rawBedrooms = firstValue(params.bedrooms)
  const rawSort = firstValue(params.sort)
  const purpose = rawPurpose === 'rent' || rawPurpose === 'buy' ? rawPurpose : ''
  const type = propertyTypes.includes(rawType as PropertyType) ? rawType : ''
  const bedrooms = ['1', '2', '3', '4'].includes(rawBedrooms) ? rawBedrooms : ''
  const sort = ['price-asc', 'price-desc'].includes(rawSort) ? rawSort : 'recommended'

  return (
    <PropertyExplorer
      initialFilters={{
        location,
        purpose,
        type,
        min: safeBudget(firstValue(params.min)),
        max: safeBudget(firstValue(params.max)),
        bedrooms,
        sort,
      }}
    />
  )
}
