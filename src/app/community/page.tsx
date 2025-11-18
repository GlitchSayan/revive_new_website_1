import React from 'react'
import CommunityHero from '@/components/community/hero'
import CommunityImpact from '@/components/community/impact'
import CommunityStories from '@/components/community/stories'
import CommunityEvents from '@/components/community/events'
import Footer from '@/components/footer'

const CommunityPage = () => {
  return (
    <div className="font-sans">
      <CommunityHero />
      <CommunityImpact />
      <CommunityStories />
      <CommunityEvents />
      <Footer />
    </div>
  )
}

export default CommunityPage