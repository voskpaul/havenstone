'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bath, BedDouble, Heart, MapPin, Ruler } from 'lucide-react'
import type { PropertyListing } from '@/lib/properties'
import { formatListingPrice } from '@/lib/properties'

type PropertyCardProps = {
  property: PropertyListing
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <article className="property-card">
      <div className="property-card__media">
        <Link className="property-card__image-link" href={`/properties/${property.slug}`} tabIndex={-1} aria-hidden="true">
          <Image
            className="property-card__image"
            src={property.image}
            alt={property.imageAlt}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 33vw"
          />
        </Link>
        <span className="property-badge">{property.purpose === 'rent' ? 'For rent' : 'For sale'}</span>
        <button
          className="property-favorite"
          type="button"
          aria-label={isFavorite ? `Remove ${property.title} from favorites` : `Add ${property.title} to favorites`}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((favorite) => !favorite)}
        >
          <Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      </div>

      <div className="property-card__body">
        <p className="property-card__location">
          <MapPin size={13} aria-hidden="true" /> {property.neighborhood}, {property.city}
        </p>
        <div className="property-card__title-row">
          <h3 className="property-card__title">
            <Link href={`/properties/${property.slug}`}>{property.title}</Link>
          </h3>
          <p className="property-card__price">{formatListingPrice(property)}</p>
        </div>
        <p className="property-card__summary">{property.summary}</p>
        <div className="property-card__facts" aria-label="Property details">
          <span className="property-card__fact">
            <BedDouble size={15} aria-hidden="true" /> <span>{property.bedrooms} beds</span>
          </span>
          <span className="property-card__fact">
            <Bath size={15} aria-hidden="true" /> <span>{property.bathrooms} baths</span>
          </span>
          <span className="property-card__fact">
            <Ruler size={15} aria-hidden="true" /> <span>{property.area.toLocaleString('en-KE')} sq ft</span>
          </span>
        </div>
      </div>
    </article>
  )
}
