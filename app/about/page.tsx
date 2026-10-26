import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/about-content'

export const metadata: Metadata = {
  title: 'About Havenstone',
  description:
    'Learn about the fictional Havenstone Properties brand and its considered approach to presenting sample homes in Nairobi.',
}

export default function AboutPage() {
  return <AboutContent />
}
