import React from 'react'
import HeaderSection from '@/components/commons/HeaderSection'
import HeroSection from '@/components/LandingSection/HeroSection'
import CategorySection from '@/components/LandingSection/CategorySection'
import SaleSetion from '@/components/LandingSection/SaleSetion'
import FooterSection from '@/components/commons/FooterSection'
import ProductsSection from '@/components/LandingSection/ProductsSection'

const page = () => {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <CategorySection />
    <SaleSetion />
    <ProductsSection />
    {/* <FooterSection /> */}
    </>
  )
}

export default page