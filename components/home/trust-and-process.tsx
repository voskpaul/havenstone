import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, ClipboardCheck, Compass, MessageSquareText } from 'lucide-react'

const approachPoints = [
  {
    icon: Compass,
    title: 'Thoughtful discovery',
    description: 'Start with your priorities, preferred areas, and the way you want a home to feel.',
  },
  {
    icon: ClipboardCheck,
    title: 'Clear property details',
    description: 'See the sample price, layout, features, and location information in one considered place.',
  },
  {
    icon: CalendarDays,
    title: 'Viewing coordination',
    description: 'Choose a property and share the details that would help arrange a viewing.',
  },
  {
    icon: MessageSquareText,
    title: 'A considered conversation',
    description: 'Ask questions and compare options without adding pressure to your search.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Discover your options',
    description: 'Browse the sample collection and filter by neighborhood, budget, and property type.',
  },
  {
    number: '02',
    title: 'Arrange a viewing',
    description: 'Tell us what you would like to see. The enquiry form is a demo and does not send details.',
  },
  {
    number: '03',
    title: 'Find your next home',
    description: 'Compare what matters to you and take the next step with confidence.',
  },
]

export function TrustAndProcess() {
  return (
    <>
      <section className="approach-section" aria-labelledby="approach-title">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow eyebrow--light">A MORE CONSIDERED APPROACH</p>
            <h2 className="editorial-heading" id="approach-title">
              Good decisions start with <em>clear information.</em>
            </h2>
            <p className="approach-copy">
              Finding a home is personal. We believe the experience should feel straightforward: useful details, thoughtful introductions, and space to make the decision that is right for you.
            </p>
            <figure className="approach-photo">
              <Image
                src="/images/patio-detail.png"
                alt="Quiet garden patio at a contemporary Nairobi residence"
                fill
                sizes="(max-width: 820px) 100vw, 48vw"
              />
              <figcaption>Sample property photography · Nairobi</figcaption>
            </figure>
          </div>

          <div className="approach-points">
            {approachPoints.map(({ icon: Icon, title, description }) => (
              <article className="approach-point" key={title}>
                <Icon className="approach-point__icon" size={22} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="container">
          <p className="eyebrow">A SIMPLE WAY FORWARD</p>
          <div className="section-heading-row">
            <div>
              <h2 className="section-heading" id="process-title">
                From first search to front door.
              </h2>
              <p className="section-intro">
                A clear three-step path, whether you are renting, buying, or just beginning to explore.
              </p>
            </div>
            <Link className="text-link" href="/properties">
              Start exploring <ArrowRight size={16} aria-hidden="true" />
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
          <div className="process-cta">
            <Link className="button button--forest button--small" href="/contact">
              Tell us what you&apos;re looking for <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
