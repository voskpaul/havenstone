import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { properties } from '@/lib/properties'
import { PropertyCard } from '@/components/properties/property-card'

export function FeaturedProperties() {
  return (
    <section className="section" aria-labelledby="featured-properties-title">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">A HOME FOR EVERY CHAPTER</p>
            <h2 className="section-heading" id="featured-properties-title">
              Spaces worth coming home to.
            </h2>
            <p className="section-intro">
              Explore a considered collection of sample homes and apartments in some of Nairobi&apos;s most-loved neighborhoods.
            </p>
          </div>
          <Link className="text-link" href="/properties">
            View all properties <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="property-grid">
          {properties.filter((property) => property.featured).map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>

        <p className="demo-listings-note">
          <Info size={15} aria-hidden="true" />
          All listings, prices, availability, and property details shown here are fictional sample content for this portfolio demonstration.
        </p>
      </div>
    </section>
  )
}
