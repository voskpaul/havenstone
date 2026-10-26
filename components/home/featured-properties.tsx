import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { properties } from '@/lib/properties'
import { PropertyCard } from '@/components/properties/property-card'

export function FeaturedProperties() {
  const [leadProperty, ...otherProperties] = properties.filter((property) => property.featured)

  return (
    <section className="section" aria-labelledby="featured-properties-title">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">THE HAVENSTONE COLLECTION · 06 SAMPLE HOMES</p>
            <h2 className="section-heading" id="featured-properties-title">
              Six ways to call Nairobi home.
            </h2>
            <p className="section-intro">
              Six fictional listings across Nairobi: city apartments, courtyard townhouses, and garden homes.
            </p>
          </div>
          <Link className="text-link" href="/properties">
            View all properties <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {leadProperty && (
          <div className="featured-property-layout">
            <PropertyCard property={leadProperty} variant="lead" />
            <div className="featured-property-list" role="group" aria-label="More sample homes">
              {otherProperties.map((property) => (
                <PropertyCard key={property.slug} property={property} variant="compact" />
              ))}
            </div>
          </div>
        )}

        <p className="demo-listings-note">
          <Info size={15} aria-hidden="true" />
          All listings, prices, availability, and property details shown here are fictional sample content for this portfolio demonstration.
        </p>
      </div>
    </section>
  )
}
