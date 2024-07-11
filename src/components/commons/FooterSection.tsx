import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/images/Logo.png";
import FacebookIcon from '../../../public/icons/facebook-circle-line.png'
import InstagramIcon from '../../../public/icons/instagram-line.png'
import WhatsappIcon from '../../../public/icons/whatsapp-line.png'
import CopyrightIcon from '../../../public/icons/copyright-line.png'
import UpArrow from '../../../public/icons/arrow-up-line.png'
import Link from 'next/link';

const FooterSection = () => {
  return (
    <section>
        <main className='max-w-[1380px] m-auto'>
            <div className='py-10 px-5 w-full flex-between flex-col lg:lfex-row lg:flex-row gap-5'>
                <div className='flex-[1.3] w-full flex flex-col items-start justify-between gap-10 lg:gap-20'>
                    <div className='flex-[1] flex-start'>
                        <Image src={Logo} alt='' className='w-28 object-cover' />
                    </div>
                    <div className='flex-[1] flex-start flex-wrap gap-5'>
                        <Image src={FacebookIcon} alt='' className='objec-cover' />
                        <Image src={InstagramIcon} alt='' className='objec-cover' />
                        <Image src={WhatsappIcon} alt='' className='objec-cover' />
                        <h1 className='text-xs lg:text-lg text-black/50 flex-center gap-1'>
                            <Image src={CopyrightIcon} alt='' className='object-cover opacity-50' />
                            Maruti Bakers Mart All Rights Reserved
                        </h1>
                    </div>
                </div>
                <div className='flex-[1] w-full flex items-start justify-between'>
                    <div className='flex flex-col gap-5 items-start justify-center'>
                    <Link href='' className='text-black font-Merienda font-bold'>FAO</Link>
                    <Link href='' className='text-black font-Merienda font-bold'>ABOUT</Link>
                    <Link href='' className='text-black font-Merienda font-bold'>PRIVACY</Link>
                    <Link href='' className='text-black font-Merienda font-bold'>TERMS OF SERVICE</Link>
                    <Link href='' className='text-black font-Merienda font-bold'>TERMS OF USE</Link>
                    <Link href='' className='text-black font-Merienda font-bold'>CONTACT</Link>
                    </div>
                    <div className='flex-start'>
                        <span className='pop py-3 px-3 rounded-full transition-bg border-2 border-black/50 hover:bg-black duration-300'>
                        <Image src={UpArrow} alt='' className='w-8 object-cover hover:invert duration-300 arrow-transition' />
                        </span>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default FooterSection