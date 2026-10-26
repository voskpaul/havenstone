import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { neighborhoods } from '@/lib/properties'

export function NeighborhoodDiscovery() {
  return (
    <section className="neighborhood-section" aria-labelledby="neighborhoods-title">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">GET TO KNOW THE CITY</p>
            <h2 className="section-heading" id="neighborhoods-title">
              Find your kind of Nairobi.
            </h2>
            <p className="section-intro">
              Each neighborhood has its own pace. Start with the places you know, or discover somewhere new.
            </p>
          </div>
        </div>

        <div className="neighborhood-grid">
          {neighborhoods.map((neighborhood) => (
            <Link
              className="neighborhood-card"
              key={neighborhood.name}
              href={`/properties?location=${encodeURIComponent(neighborhood.name)}`}
              aria-label={`Explore sample properties in ${neighborhood.name}`}
            >
              <Image
                className="neighborhood-card__image"
                src={neighborhood.image}
                alt={neighborhood.imageAlt}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 820px) 50vw, 40vw"
              />
              <span className="neighborhood-card__content">
                <span className="neighborhood-card__title-row">
                  <span className="neighborhood-card__title">{neighborhood.name}</span>
                  <span className="neighborhood-card__arrow" aria-hidden="true">
                    <ArrowUpRight size={17} />
                  </span>
                </span>
                <span>{neighborhood.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
