export type ListingPurpose = 'rent' | 'buy'

export type PropertyType = 'Apartment' | 'Townhouse' | 'House' | 'Villa'

export type PropertyPhoto = {
  src: string
  alt: string
}

export type PropertyListing = {
  slug: string
  title: string
  neighborhood: string
  city: 'Nairobi'
  purpose: ListingPurpose
  type: PropertyType
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  summary: string
  description: string
  image: string
  imageAlt: string
  gallery: PropertyPhoto[]
  features: string[]
  amenities: string[]
  featured: boolean
}

export const propertyTypes: PropertyType[] = ['Apartment', 'Townhouse', 'House', 'Villa']

export const properties: PropertyListing[] = [
  {
    slug: 'maji-house-kilimani',
    title: 'Maji House',
    neighborhood: 'Kilimani',
    city: 'Nairobi',
    purpose: 'rent',
    type: 'Apartment',
    price: 145000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1250,
    summary: 'A Kilimani apartment with leafy balcony views and an open-plan layout.',
    description:
      'Maji House is a thoughtfully arranged two-bedroom apartment with an open living space, warm finishes, and a balcony looking out to the green canopy of Kilimani. The layout keeps the shared spaces connected while leaving room for a little privacy.',
    image: '/images/kilimani-apartment.png',
    imageAlt: 'Sunlit living room in a contemporary Kilimani apartment',
    gallery: [
      { src: '/images/kilimani-apartment.png', alt: 'Living room with balcony access and leafy views' },
      { src: '/images/interior-detail.png', alt: 'Warm, open dining area with a timber table' },
      { src: '/images/patio-detail.png', alt: 'Green outdoor seating area at a Nairobi residence' },
      { src: '/images/westlands-apartment.png', alt: 'Bright apartment lounge with large windows' },
    ],
    features: ['Open-plan living and dining', 'Private balcony', 'Fitted kitchen'],
    amenities: ['Lift access', 'Covered parking', 'Backup power'],
    featured: true,
  },
  {
    slug: 'acacia-court-kileleshwa',
    title: 'Acacia Court',
    neighborhood: 'Kileleshwa',
    city: 'Nairobi',
    purpose: 'buy',
    type: 'Townhouse',
    price: 31800000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2480,
    summary: 'A calm townhouse arranged around a private, leafy courtyard.',
    description:
      'Acacia Court pairs a welcoming courtyard with generous shared rooms and three well-proportioned bedrooms. Natural finishes and broad windows bring a relaxed feel to this sample Kileleshwa home.',
    image: '/images/kileleshwa-townhouse.png',
    imageAlt: 'Contemporary Kileleshwa townhouse opening onto a leafy courtyard',
    gallery: [
      { src: '/images/kileleshwa-townhouse.png', alt: 'Townhouse exterior and private garden courtyard' },
      { src: '/images/interior-detail.png', alt: 'Light-filled dining area with warm natural finishes' },
      { src: '/images/patio-detail.png', alt: 'Quiet landscaped patio beside a modern home' },
      { src: '/images/lavington-home.png', alt: 'Contemporary Nairobi home with garden and terrace' },
    ],
    features: ['Private courtyard', 'En-suite primary bedroom', 'Separate dining space'],
    amenities: ['Resident parking', 'Shared garden', 'On-site caretaker'],
    featured: true,
  },
  {
    slug: 'canopy-residence-westlands',
    title: 'The Canopy Residence',
    neighborhood: 'Westlands',
    city: 'Nairobi',
    purpose: 'rent',
    type: 'Apartment',
    price: 95000,
    bedrooms: 1,
    bathrooms: 1,
    area: 820,
    summary: 'A bright one-bedroom city base with full-height windows and a connected plan.',
    description:
      'The Canopy Residence makes good use of its one-bedroom layout, with a connected kitchen and lounge and tall windows that bring in the day. It is a simple, polished base for city living in Westlands.',
    image: '/images/westlands-apartment.png',
    imageAlt: 'Contemporary one-bedroom apartment lounge in Westlands',
    gallery: [
      { src: '/images/westlands-apartment.png', alt: 'Living area in a bright Westlands apartment' },
      { src: '/images/kilimani-apartment.png', alt: 'Modern apartment lounge with a leafy balcony view' },
      { src: '/images/interior-detail.png', alt: 'Sunlit dining space with natural timber finishes' },
      { src: '/images/patio-detail.png', alt: 'Quiet garden seating in a contemporary residence' },
    ],
    features: ['Open kitchen', 'Large windows', 'Built-in wardrobes'],
    amenities: ['Lift access', 'Residents lounge', 'Backup power'],
    featured: true,
  },
  {
    slug: 'garden-house-lavington',
    title: 'Garden House',
    neighborhood: 'Lavington',
    city: 'Nairobi',
    purpose: 'buy',
    type: 'House',
    price: 42500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3300,
    summary: 'A family home with a shaded terrace and a garden made for afternoon quiet.',
    description:
      'Garden House is arranged for everyday family life, with four bedrooms, a welcoming living room, and doors that open onto a shaded terrace. Mature planting gives the garden a settled, private feel.',
    image: '/images/lavington-home.png',
    imageAlt: 'Contemporary Lavington family home framed by a green garden',
    gallery: [
      { src: '/images/lavington-home.png', alt: 'Pale stone family home with a shaded garden terrace' },
      { src: '/images/interior-detail.png', alt: 'Warm and airy dining room with timber flooring' },
      { src: '/images/patio-detail.png', alt: 'Private garden patio surrounded by mature greenery' },
      { src: '/images/karen-home.png', alt: 'Low-profile home set among mature trees' },
    ],
    features: ['Shaded garden terrace', 'Separate family room', 'Four well-sized bedrooms'],
    amenities: ['Staff quarters', 'Covered parking', 'Private garden'],
    featured: true,
  },
  {
    slug: 'karen-grove-house',
    title: 'Karen Grove House',
    neighborhood: 'Karen',
    city: 'Nairobi',
    purpose: 'buy',
    type: 'House',
    price: 68000000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4520,
    summary: 'Mature shade, generous shared rooms, and an easy connection to the garden.',
    description:
      'Karen Grove House offers generous shared rooms, five bedrooms, and a broad lawn framed by mature trees. Its low-profile exterior and natural materials keep the home connected to its garden.',
    image: '/images/karen-home.png',
    imageAlt: 'Pale stone Karen home beside a spacious green lawn',
    gallery: [
      { src: '/images/karen-home.png', alt: 'Contemporary family home set among mature trees' },
      { src: '/images/lavington-home.png', alt: 'Warm stone family home with a garden terrace' },
      { src: '/images/patio-detail.png', alt: 'A quiet patio with timber seating and leafy planting' },
      { src: '/images/interior-detail.png', alt: 'A calm interior dining space with soft daylight' },
    ],
    features: ['Five bedrooms', 'Wide garden frontage', 'Separate study'],
    amenities: ['Staff quarters', 'Double garage', 'Private garden'],
    featured: true,
  },
  {
    slug: 'runda-house',
    title: 'Runda House',
    neighborhood: 'Runda',
    city: 'Nairobi',
    purpose: 'rent',
    type: 'Villa',
    price: 420000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3900,
    summary: 'A contemporary villa with a covered veranda and room to gather outdoors.',
    description:
      'Runda House is a sample four-bedroom villa with a quiet garden setting, a shaded veranda, and generous rooms for gathering. Pale stone and warm timber give the contemporary architecture a softer edge.',
    image: '/images/runda-villa.png',
    imageAlt: 'Modern Runda villa opening onto a green tropical garden',
    gallery: [
      { src: '/images/runda-villa.png', alt: 'Modern villa with a shaded veranda and leafy garden' },
      { src: '/images/patio-detail.png', alt: 'Private garden patio with timber outdoor seating' },
      { src: '/images/interior-detail.png', alt: 'Open dining area with warm wood and natural light' },
      { src: '/images/karen-home.png', alt: 'A low-profile home surrounded by mature trees' },
    ],
    features: ['Shaded veranda', 'Four en-suite bedrooms', 'Garden-facing living room'],
    amenities: ['Staff quarters', 'Covered parking', 'Private garden'],
    featured: true,
  },
]

export type Neighborhood = {
  name: string
  description: string
  image: string
  imageAlt: string
}

export const neighborhoods: Neighborhood[] = [
  {
    name: 'Westlands',
    description: 'A lively mix of apartments, dining, and everyday amenities.',
    image: '/images/westlands-apartment.png',
    imageAlt: 'Bright apartment living space in Westlands',
  },
  {
    name: 'Kilimani',
    description: 'Residential streets with a wide choice of apartment living.',
    image: '/images/kilimani-apartment.png',
    imageAlt: 'Kilimani apartment with a leafy balcony outlook',
  },
  {
    name: 'Kileleshwa',
    description: 'A quieter residential setting with modern homes and apartments.',
    image: '/images/kileleshwa-townhouse.png',
    imageAlt: 'Contemporary home and courtyard in Kileleshwa',
  },
  {
    name: 'Lavington',
    description: 'Leafy streets and a mix of low-rise homes and apartments.',
    image: '/images/lavington-home.png',
    imageAlt: 'Lavington home surrounded by a green garden',
  },
  {
    name: 'Karen',
    description: 'A spacious green suburb with homes among mature trees.',
    image: '/images/karen-home.png',
    imageAlt: 'Karen residence framed by mature trees and lawn',
  },
  {
    name: 'Runda',
    description: 'A residential area with a range of contemporary homes.',
    image: '/images/runda-villa.png',
    imageAlt: 'Contemporary Runda villa with garden planting',
  },
]

export function formatKsh(amount: number): string {
  return `KSh ${new Intl.NumberFormat('en-KE', { maximumFractionDigits: 0 }).format(amount)}`
}

export function formatListingPrice(property: PropertyListing): string {
  const frequency = property.purpose === 'rent' ? ' / month' : ''
  return `${formatKsh(property.price)}${frequency}`
}

export function getPropertyBySlug(slug: string): PropertyListing | undefined {
  return properties.find((property) => property.slug === slug)
}
