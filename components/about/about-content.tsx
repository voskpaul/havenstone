import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const principles = [
  {
    number: '01',
    title: 'Keep it personal',
    description: 'A home search begins with how you want to live. The right questions make it easier to focus on the details that matter to you.',
  },
  {
    number: '02',
    title: 'Make the details clear',
    description: 'Useful information should be easy to find, from the neighborhood and layout to the features you want to compare.',
  },
  {
    number: '03',
    title: 'Move at your pace',
    description: 'Finding a place is a meaningful decision. Take time to explore options and choose a next step that feels right.',
  },
]

export function AboutContent() {
  return (
    <main className="about-page" id="main-content">
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__text">
            <p className="eyebrow">A MORE HUMAN HOME SEARCH</p>
            <h1 className="page-heading">A place is more than an address.</h1>
            <p className="page-hero__copy">
              Havenstone is a fictional property brand built around one simple idea: finding a home should feel clear, thoughtful, and personal.
            </p>
            <div className="hero-actions">
              <Link className="button button--forest" href="/properties">
                Explore the sample collection <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="about-hero__image">
            <Image
              src="/images/lavington-home.png"
              alt="Contemporary Nairobi home with a shaded terrace and green garden"
              fill
              priority
              sizes="(max-width: 600px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="about-statement" aria-labelledby="about-statement-title">
        <div className="container about-statement__inner">
          <span className="about-statement__label">OUR POINT OF VIEW</span>
          <div>
            <h2 id="about-statement-title">Good homes make room for the life happening inside them.</h2>
            <p className="about-statement__copy">
              We created Havenstone as a portfolio demonstration for a considered Nairobi property experience. The listings, business information, and contact details on this site are fictional sample content, not verified real estate offers or professional advice.
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles" aria-labelledby="about-principles-title">
        <div className="container">
          <p className="eyebrow">WHAT GUIDES THE EXPERIENCE</p>
          <h2 className="section-heading" id="about-principles-title">The way we think about finding home.</h2>
          <div className="about-principles__grid">
            {principles.map((principle) => (
              <article className="about-principle" key={principle.number}>
                <span className="about-principle__number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
          <p className="about-disclaimer">
            Havenstone is a fictional portfolio brand. No agency, agent, home, or property availability is represented by this demonstration.
          </p>
        </div>
      </section>

      <section className="process-section" aria-labelledby="about-next-step-title">
        <div className="container section-heading-row">
          <div>
            <p className="eyebrow">A GOOD PLACE TO BEGIN</p>
            <h2 className="section-heading" id="about-next-step-title">Take a look around.</h2>
            <p className="section-intro">Browse the sample homes or use the enquiry form to experience the demo flow.</p>
          </div>
          <Link className="button button--forest" href="/contact">
            Get in touch <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
