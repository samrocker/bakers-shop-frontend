import React from 'react'
import Image from 'next/image'
import SampleImage from '../../../public/images/Sample-Profile-Image.jpg'
import BG from '../../../public/images/profile-section-background.png'
import { Button } from '../ui/button'

const ProfilePage = () => {
  return (
    <section>
        <main className='max-w-[1380px] m-auto'>
            <div className='py-5 px-5 w-full flex-between flex-col gap-10'>
                <div className='flex-[1] w-full md:flex-center'>
                    <Image src={BG} alt='' className='w-full object-cover' />
                </div>
                <div className='flex-[1] w-full flex-between flex flex-col-reverse lg:flex-row'>
                    <div className='flex-[2] w-full flex-start gap-5'>
                        <div className='h-20 w-20 rounded-full relative overflow-hidden'>
                        <Image src={SampleImage} alt='alt' className='w-full object-cover absolute z-50' />
                        </div>
                        <div className='flex flex-col'>
                        <h1 className='text-xl lg:text-2xl font-bold'>User name</h1>
                        <p className='text-xs lg:text-sm font-bold'>+91 6666666666</p>
                        </div>
                    </div>
                    <div className='flex-[1] w-full flex-end gap-5'>
                        <Button className='px-6 py-5 text-white text-md font-bold bg-blue-600 hover:bg-blue-700'>Edit</Button>
                    </div>
                </div>
                <div className='flex-[1] w-full flex-between flex flex-col lg:flex-row gap-5'>
                    <div className='flex-[1] w-full flex flex-col gap-3'>
                    <h1 className='lg:text-2xl font-normal'>Full Name</h1>
                    <input type="text" className='py-2 w-full  bg-black/5 rounded-lg' />
                    </div>
                    <div className='flex-[1] w-full flex flex-col gap-3'>
                    <h1 className='lg:text-2xl font-normal'>Full Name</h1>
                    <input type="text" className='py-2 w-full  bg-black/5 rounded-lg' />
                    </div>
                </div>
                <div className='flex-[1] w-full flex-between flex lg:flex-row gap-5'>
                <div className='flex-[1] w-full flex flex-col gap-3'>
                    <h1 className='lg:text-2xl font-normal'>Full Name</h1>
                    <input type="text" className='py-2 w-full  bg-black/5 rounded-lg' />
                    </div>
                    <div className='flex-[1] w-full flex flex-col gap-3'>
                    <h1 className='lg:text-2xl font-normal'>Full Name</h1>
                    <input type="text" className='py-2 w-full  bg-black/5 rounded-lg' />
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default ProfilePage