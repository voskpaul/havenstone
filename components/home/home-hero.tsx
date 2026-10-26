import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HomeSearchForm } from '@/components/home/home-search-form'

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h1 id="home-hero-title">
            Find a place that feels like yours<span>.</span>
          </h1>
          <p className="hero-copy__body">
            Thoughtfully selected homes and apartments for the way you want to live in Nairobi.
          </p>
          <div className="hero-actions">
            <Link className="button button--forest" href="/properties">
              Explore properties <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="hero-text-link" href="/contact">
              Talk to an agent <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-image-wrap">
          <Image
            className="hero-image"
            src="/images/havenstone-hero.png"
            alt="Contemporary Nairobi home framed by mature trees and tropical planting"
            fill
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 820px) 52vw, 54vw"
          />
          <div className="hero-image-caption">
            <strong>Room to feel at home.</strong>
            <span>Sample homes across Nairobi, thoughtfully presented.</span>
          </div>
        </div>
      </div>

      <div className="container home-search-wrap">
        <HomeSearchForm />
      </div>
    </section>
  )
}
