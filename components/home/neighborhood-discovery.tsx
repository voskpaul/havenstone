import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { neighborhoods } from '@/lib/properties'

export function NeighborhoodDiscovery() {
  const [featuredNeighborhood, ...otherNeighborhoods] = neighborhoods

  if (!featuredNeighborhood) return null

  return (
    <section className="neighborhood-section" aria-labelledby="neighborhoods-title">
      <div className="container">
        <header className="neighborhood-heading">
          <p className="eyebrow">THE NAIROBI INDEX</p>
          <h2 className="section-heading" id="neighborhoods-title">
            A city with more than one rhythm.
          </h2>
          <p className="section-intro">
            Six sample locations, each with its own pace. Start with the one that feels most like your next move.
          </p>
        </header>

        <div className="neighborhood-layout">
          <article className="neighborhood-feature">
            <div className="neighborhood-feature__image">
              <Image
                src={featuredNeighborhood.image}
                alt={featuredNeighborhood.imageAlt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 820px) 52vw, 46vw"
              />
            </div>
            <div className="neighborhood-feature__content">
              <div>
                <p className="neighborhood-feature__label">01 · NEIGHBORHOOD NOTE</p>
                <h3>{featuredNeighborhood.name}</h3>
                <p>{featuredNeighborhood.description}</p>
              </div>
              <Link
                className="neighborhood-feature__link"
                href={`/properties?location=${encodeURIComponent(featuredNeighborhood.name)}`}
                aria-label={`Explore sample properties in ${featuredNeighborhood.name}`}
              >
                Explore area <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>

          <nav className="neighborhood-index" aria-label="More Nairobi neighbourhoods">
            {otherNeighborhoods.map((neighborhood, index) => (
              <Link
                className="neighborhood-index__link"
                key={neighborhood.name}
                href={`/properties?location=${encodeURIComponent(neighborhood.name)}`}
                aria-label={`Explore sample properties in ${neighborhood.name}`}
              >
                <span className="neighborhood-index__number">{String(index + 2).padStart(2, '0')}</span>
                <span className="neighborhood-index__details">
                  <strong>{neighborhood.name}</strong>
                  <span>{neighborhood.description}</span>
                </span>
                <ArrowRight className="neighborhood-index__arrow" size={17} aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
