import React from 'react'
import HeaderSection from '@/components/commons/HeaderSection'
import HeroSection from '@/components/LandingSection/HeroSection'
import FooterSection from '@/components/commons/FooterSection'
import CategorySection from '@/components/LandingSection/CategorySection'
import SaleSetion from '@/components/LandingSection/SaleSetion'

const page = () => {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <CategorySection />
    <SaleSetion />
    {/* <FooterSection /> */}
    </>
  )
}

export default page