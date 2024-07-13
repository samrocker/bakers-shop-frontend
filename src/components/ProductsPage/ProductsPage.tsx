import Image from 'next/image'
import React from 'react'
import ProductImage1 from '../../../public/images/product-3.jpg'

const ProductsPage = () => {
  return (
    <section className='w-full bg-[#F5F5F5]'>
        <main className='max-w-[1388px] m-auto'>
            <div className='min-h-fit py-10 w-full flex-between flex-col lg:flex-row'>
                <div className='flex-[1] flex-between flex-col lg:flex-row'>
                    <div className='flex-[1] flex-center flex-row lg:flex-col gap-2 lg:gap-7'>
                        <Image src={ProductImage1} alt='' className='max-w-[100px] object-cover rounded-xl' />
                        <Image src={ProductImage1} alt='' className='max-w-[100px] object-cover rounded-xl' />
                        <Image src={ProductImage1} alt='' className='max-w-[100px] object-cover rounded-xl' />
                        <Image src={ProductImage1} alt='' className='max-w-[100px] object-cover rounded-xl' />
                    </div>
                    <div className='flex-[5] flex flex-col items-center justify-evenly p-3'>
                        <Image src={ProductImage1} alt='' className='w-full object-cover rounded-xl' />
                    </div>
                </div>
                <div className='flex-[1] flex-between flex-col'>
                    <h1>Product Name</h1>
                </div>
            </div>
        </main>
    </section>
  )
}

export default ProductsPage