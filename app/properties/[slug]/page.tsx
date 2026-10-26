import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PropertyDetail } from '@/components/properties/property-detail'
import { getPropertyBySlug, properties } from '@/lib/properties'

type PropertyPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }))
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) return { title: 'Property not found' }

  return {
    title: `${property.title} in ${property.neighborhood}`,
    description: property.summary,
    openGraph: {
      title: `${property.title} in ${property.neighborhood} | Havenstone Properties`,
      description: property.summary,
      images: [property.image],
    },
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) notFound()

  return <PropertyDetail property={property} />
}
