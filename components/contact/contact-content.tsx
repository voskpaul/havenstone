import { Mail, MapPin, Phone } from 'lucide-react'
import { DemoEnquiryForm } from '@/components/properties/demo-enquiry-form'
import { WhatsAppAction } from '@/components/whatsapp-action'
import { contactDetails } from '@/lib/site-config'

export function ContactContent() {
  return (
    <main className="contact-page" id="main-content">
      <div className="container">
        <header className="page-hero">
          <p className="eyebrow">WE&apos;RE HERE TO HELP</p>
          <h1 className="page-heading">Let&apos;s talk about what you&apos;re looking for.</h1>
          <p className="page-hero__copy">
            Tell us a little about the place you have in mind. This sample form demonstrates the enquiry experience and does not send or store personal details.
          </p>
        </header>

        <div className="contact-page__grid">
          <section aria-labelledby="contact-details-title">
            <p className="eyebrow">CONTACT DETAILS</p>
            <h2 className="section-heading" id="contact-details-title">A conversation can start anywhere.</h2>
            <p className="section-intro">
              Use the sample contact details below as a reference for how a real estate business could present ways to get in touch.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-item__icon"><Mail size={17} aria-hidden="true" /></span>
                <div>
                  <h2>Email</h2>
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  <small>Example address · not monitored</small>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-item__icon"><Phone size={17} aria-hidden="true" /></span>
                <div>
                  <h2>Phone</h2>
                  <p>{contactDetails.phoneDisplay}</p>
                  <small>Fictional demo number</small>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-item__icon"><MapPin size={17} aria-hidden="true" /></span>
                <div>
                  <h2>Visit</h2>
                  <p>{contactDetails.address}</p>
                  <small>{contactDetails.addressNote}</small>
                </div>
              </div>
            </div>

            <WhatsAppAction message="Hello, I would like to learn more about the Havenstone sample properties." />
          </section>

          <section className="contact-form-panel" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title">Send a demo enquiry.</h2>
            <p>Share your contact details and a short note to try the form validation and confirmation state.</p>
            <DemoEnquiryForm requireMessage submitLabel="Complete demo enquiry" />
          </section>
        </div>
      </div>
    </main>
  )
}
