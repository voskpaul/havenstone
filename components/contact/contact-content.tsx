import { DemoEnquiryForm } from '@/components/properties/demo-enquiry-form'
import { WhatsAppAction } from '@/components/whatsapp-action'
import { contactDetails } from '@/lib/site-config'

export function ContactContent() {
  return (
    <main className="contact-page" id="main-content">
      <div className="container">
        <header className="page-hero">
          <p className="eyebrow">A NOTE TO THE HAVENSTONE TEAM</p>
          <h1 className="page-heading">Start with the home you have in mind.</h1>
          <p className="page-hero__copy">
            Reach Havenstone by email, phone, or WhatsApp. The enquiry form is a local demo: it does not send or store your submission.
          </p>
        </header>

        <div className="contact-page__grid">
          <section aria-labelledby="contact-details-title">
            <p className="eyebrow">CONTACT DETAILS</p>
            <h2 className="section-heading" id="contact-details-title">Ways to get in touch.</h2>
            <p className="section-intro">
              Use the links below for direct contact. The location listed is a sample address.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-item__label">EMAIL</span>
                <div>
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  <small>Opens your email app</small>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-item__label">PHONE</span>
                <div>
                  <a href={`tel:${contactDetails.phoneDisplay}`}>{contactDetails.phoneDisplay}</a>
                  <small>Tap to call</small>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-item__label">VISIT</span>
                <div>
                  <p>{contactDetails.address}</p>
                  <small>{contactDetails.addressNote}</small>
                </div>
              </div>
            </div>

            <WhatsAppAction message="Hello, I would like to learn more about the Havenstone sample properties." />
          </section>

          <section className="contact-form-panel" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title">Try the enquiry form.</h2>
            <p>This form runs locally to demonstrate validation. It does not send or retain your submission.</p>
            <DemoEnquiryForm requireMessage submitLabel="Complete demo enquiry" />
          </section>
        </div>
      </div>
    </main>
  )
}
