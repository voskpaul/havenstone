import { FeaturedProperties } from '@/components/home/featured-properties'
import { HomeHero } from '@/components/home/home-hero'
import { NeighborhoodDiscovery } from '@/components/home/neighborhood-discovery'
import { TrustAndProcess } from '@/components/home/trust-and-process'

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <FeaturedProperties />
      <NeighborhoodDiscovery />
      <TrustAndProcess />
    </main>
  )
}
