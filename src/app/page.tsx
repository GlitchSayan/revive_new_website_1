import React from 'react'
import Header from '@/components/homepage/header'
import ReviveHelps from '@/components/homepage/revive_helps'
import Questions from '@/components/homepage/questions'
import Footer from '@/components/footer'
const HomePage = () => {
  return (
    <div>
      <Header />
      <ReviveHelps />
      <Questions/>
      <Footer />
    </div>
  )
}

export default HomePage
