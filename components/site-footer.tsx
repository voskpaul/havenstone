import Link from 'next/link'
import { ArrowRight, ArrowUpRight, House } from 'lucide-react'
import { contactDetails } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div className="container footer-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">THE NEXT CHAPTER</p>
            <h2 id="footer-cta-title">Let&apos;s find a place that feels like home.</h2>
          </div>
          <Link className="button button--light" href="/contact">
            Talk with our team <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand--footer" href="/" aria-label="Havenstone Properties home">
            <span className="brand__mark" aria-hidden="true">
              <House size={19} strokeWidth={1.6} />
            </span>
            <span className="brand__wordmark">
              <span className="brand__name">Havenstone</span>
              <span className="brand__descriptor">Properties</span>
            </span>
          </Link>
          <p>Thoughtfully selected homes and apartments for the way you want to live in Nairobi.</p>
          <p className="footer-demo-note">A fictional brand and sample listings created for portfolio demonstration.</p>
        </div>

        <div className="footer-links-group">
          <h3>Explore</h3>
          <Link href="/properties">All properties <ArrowUpRight size={14} aria-hidden="true" /></Link>
          <Link href="/about">Our approach <ArrowUpRight size={14} aria-hidden="true" /></Link>
          <Link href="/contact">Contact <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>

        <div className="footer-links-group">
          <h3>Get in touch</h3>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <span>{contactDetails.phoneDisplay} <small>Demo number</small></span>
          <span>{contactDetails.address} <small>Sample address</small></span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Havenstone Properties</span>
        <span>Portfolio demonstration · All property details are fictional sample content.</span>
      </div>
    </footer>
  )
}
