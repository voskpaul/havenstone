import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact Havenstone',
  description:
    'Contact Havenstone by email, phone, or WhatsApp, or test the local enquiry form. Form submissions are not sent or stored.',
}

export default function ContactPage() {
  return <ContactContent />
}
