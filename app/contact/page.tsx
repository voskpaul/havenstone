import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact Havenstone',
  description:
    'Get in touch with Havenstone Properties or complete the sample property enquiry form. This fictional portfolio demo does not send or store submissions.',
}

export default function ContactPage() {
  return <ContactContent />
}
