import React from 'react'
import HeaderSection from '@/components/commons/HeaderSection'
import HeroSection from '@/components/LandingSection/HeroSection'
import CategorySection from '@/components/LandingSection/CategorySection'
import SaleSetion from '@/components/LandingSection/SaleSetion'
import BestSellerSection from '@/components/LandingSection/BestSellerSection'
import SpecialOfTheMonthSection from '@/components/LandingSection/SpecialOfTheMonthSection'
import FooterSection from '@/components/commons/FooterSection'

const page = () => {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <CategorySection />
    <SaleSetion />
    <BestSellerSection />
    <SpecialOfTheMonthSection />
    <FooterSection />
    </>
  )
}

export default page