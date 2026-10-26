import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HomeSearchForm } from '@/components/home/home-search-form'

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">HOMES FOR RENT &amp; SALE · NAIROBI</p>
          <h1 id="home-hero-title">
            Find your place in <span>Nairobi.</span>
          </h1>
          <p className="hero-copy__body">
            Browse a considered mix of Nairobi apartments, townhouses, and family homes—from Westlands to Karen.
          </p>
          <div className="hero-actions">
            <Link className="button button--forest" href="/properties">
              Explore sample homes <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="hero-text-link" href="/about">
              Our approach <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <figure className="hero-image-figure">
          <div className="hero-image-wrap">
            <Image
              className="hero-image"
              src="/images/havenstone-hero.png"
              alt="Contemporary Nairobi home beneath a flowering jacaranda canopy"
              fill
              priority
              sizes="(max-width: 600px) 100vw, (max-width: 820px) 52vw, 54vw"
            />
          </div>
          <figcaption className="hero-image-caption">
            <span className="hero-image-caption__index">SAMPLE RESIDENCE · NAIROBI</span>
            <span>Architecture beneath the jacaranda canopy.</span>
          </figcaption>
        </figure>
      </div>

      <div className="container home-search-wrap">
        <HomeSearchForm />
      </div>
    </section>
  )
}
