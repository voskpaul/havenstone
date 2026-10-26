import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Explore',
    description: 'Start with a neighbourhood, budget, or the kind of home you have in mind.',
  },
  {
    number: '02',
    title: 'Compare',
    description: 'Open a sample listing to review its details, features, and photo gallery.',
  },
  {
    number: '03',
    title: 'Enquire',
    description: 'Try the form to see its confirmation state. Nothing is sent or stored.',
  },
]

export function TrustAndProcess() {
  return (
    <>
      <section className="approach-section" aria-labelledby="approach-title">
        <div className="container approach-grid">
          <figure className="approach-photo">
            <Image
              src="/images/patio-detail.png"
              alt="A quiet garden patio with timber seating and leafy planting"
              fill
              sizes="(max-width: 820px) 100vw, 48vw"
            />
            <figcaption>Sample residence · Nairobi</figcaption>
          </figure>

          <div className="approach-copy-column">
            <p className="eyebrow">OUR POINT OF VIEW</p>
            <h2 className="editorial-heading" id="approach-title">
              Good decisions start with <em>clear information.</em>
            </h2>
            <p className="approach-copy">
              A home is shaped by more than its floor plan. Light, materials, a garden view, and the rhythm of a neighbourhood all change how a place feels. This portfolio concept brings those details into one clear place.
            </p>
            <Link className="text-link" href="/about">
              Read our approach <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">A CLEAR WAY FORWARD</p>
              <h2 className="section-heading" id="process-title">
                From first search to first viewing.
              </h2>
              <p className="section-intro">
                Explore the sample collection, compare the details, and try the enquiry flow at your own pace.
              </p>
            </div>
            <Link className="text-link" href="/properties">
              Browse sample homes <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
