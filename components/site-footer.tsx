import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { contactDetails } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div className="container footer-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">A GOOD PLACE TO BEGIN</p>
            <h2 id="footer-cta-title">Explore a home at your own pace.</h2>
          </div>
          <Link className="button button--light" href="/contact">
            Make an enquiry <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand--footer" href="/" aria-label="Havenstone Properties home">
            <span className="brand__mark" aria-hidden="true">H</span>
            <span className="brand__wordmark">
              <span className="brand__name">Havenstone</span>
              <span className="brand__descriptor">Properties</span>
            </span>
          </Link>
          <p>A Nairobi property concept for the many ways people call a city home.</p>
          <p className="footer-demo-note">A fictional brand with sample property listings.</p>
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
          <a href={`tel:${contactDetails.phoneDisplay}`}>{contactDetails.phoneDisplay}</a>
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
