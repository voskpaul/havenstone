import Link from 'next/link'
import { ArrowRight, Bath, BedDouble, Check, MapPin, Ruler } from 'lucide-react'
import { properties } from '@/lib/properties'
import type { PropertyListing } from '@/lib/properties'
import { formatListingPrice } from '@/lib/properties'
import { DemoEnquiryForm } from '@/components/properties/demo-enquiry-form'
import { PropertyCard } from '@/components/properties/property-card'
import { PropertyGallery } from '@/components/properties/property-gallery'
import { WhatsAppAction } from '@/components/whatsapp-action'

type PropertyDetailProps = {
  property: PropertyListing
}

export function PropertyDetail({ property }: PropertyDetailProps) {
  const relatedProperties = properties.filter((item) => item.slug !== property.slug).slice(0, 3)

  return (
    <main className="detail-page" id="main-content">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/properties">Properties</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{property.title}</span>
        </nav>

        <header className="detail-intro">
          <div>
            <h1 className="detail-intro__title">{property.title}</h1>
            <p className="detail-intro__location">
              <MapPin size={15} aria-hidden="true" /> {property.neighborhood}, {property.city}
            </p>
          </div>
          <div className="detail-intro__right">
            <span className="detail-purpose">Sample listing · {property.purpose === 'rent' ? 'For rent' : 'For sale'}</span>
            <p className="detail-intro__price">{formatListingPrice(property)}</p>
          </div>
        </header>

        <PropertyGallery photos={property.gallery} propertyTitle={property.title} />

        <div className="detail-layout">
          <div className="detail-main-column">
            <div className="detail-facts" aria-label="Property overview">
              <div className="detail-fact">
                <span>Bedrooms</span>
                <strong><BedDouble size={17} aria-hidden="true" /> {property.bedrooms}</strong>
              </div>
              <div className="detail-fact">
                <span>Bathrooms</span>
                <strong><Bath size={17} aria-hidden="true" /> {property.bathrooms}</strong>
              </div>
              <div className="detail-fact">
                <span>Interior area</span>
                <strong><Ruler size={17} aria-hidden="true" /> {property.area.toLocaleString('en-KE')} sq ft</strong>
              </div>
              <div className="detail-fact">
                <span>Property type</span>
                <strong>{property.type}</strong>
              </div>
            </div>

            <section className="detail-section" aria-labelledby="property-about-title">
              <h2 id="property-about-title">A little about this home</h2>
              <p>{property.description}</p>
            </section>

            <section className="detail-section" aria-labelledby="property-features-title">
              <h2 id="property-features-title">The details</h2>
              <ul className="detail-feature-list">
                {property.features.map((feature) => (
                  <li key={feature}><Check size={16} aria-hidden="true" /> {feature}</li>
                ))}
              </ul>
            </section>

            <section className="detail-section" aria-labelledby="property-amenities-title">
              <h2 id="property-amenities-title">Amenities</h2>
              <ul className="detail-feature-list">
                {property.amenities.map((amenity) => (
                  <li key={amenity}><Check size={16} aria-hidden="true" /> {amenity}</li>
                ))}
              </ul>
            </section>

            <div className="agent-card" aria-label="Sample property contact">
              <span className="agent-card__monogram" aria-hidden="true">NK</span>
              <div>
                <h3>Nadia Kamau</h3>
                <p>Sample property consultant · Demo profile</p>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar" aria-label="Property enquiry">
            <div className="enquiry-panel">
              <h2>Make this your next viewing.</h2>
              <p className="enquiry-panel__intro">
                Interested in {property.title}? Complete the sample enquiry to see the confirmation state.
              </p>
              <DemoEnquiryForm
                includeViewingDate
                submitLabel="Complete demo enquiry"
                propertyTitle={property.title}
              />
              <WhatsAppAction message={`Hello, I would like to know more about ${property.title} in ${property.neighborhood}.`} />
              <p className="detail-demo-note">All property details are fictional sample content. The form does not transmit or retain your details.</p>
            </div>
          </aside>
        </div>

        <section className="related-section" aria-labelledby="related-properties-title">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">MORE TO EXPLORE</p>
              <h2 className="section-heading" id="related-properties-title">A few more places to consider.</h2>
            </div>
            <Link className="text-link" href="/properties">
              Browse all <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="property-grid">
            {relatedProperties.map((relatedProperty) => (
              <PropertyCard key={relatedProperty.slug} property={relatedProperty} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
