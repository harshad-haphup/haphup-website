import React from 'react'
import Image from "next/image";
import logo from "public/assests/img/logo.svg";
import facebookIcon from "public/assests/img/facebook-icon.svg";
import twitterIcon from "public/assests/img/twitter-icon.svg";
import linkedinIcon from "public/assests/img/linkedin-icon.svg";
import instagramIcon from "public/assests/img/instagram-icon.svg";
import emailIcon from "public/assests/img/email-icon.svg";
import locationIcon from "public/assests/img/location-icon.svg";

const Footer = () => {
  return (
    <>
    <div className='p-4 sm:p-16 mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center  bg-secondary-color/5'>
        <div className='px-4'>
            <Image src={logo} alt='logo'/>
            <div className='flex items-center gap-2 sm:gap-4 mt-4'>
                <div className='w-8 h-8 p-2 bg-primary-color/20 rounded-full flex items-center'>
                    <Image src={locationIcon} alt='location-icon' className='object-cover'/>
                </div>
                <p className='text-text-color text-sm sm:text-base'>304, Amar Business Park, Sadanand Estates, Veerbhadra Nagar, <br /> Baner, Pune, Maharashtra 411045</p>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <div className='w-8 h-8 bg-blue-600/10 p-2 rounded-full saturate-0 hover:saturate-100 hover:scale-125 ease duration-300 cursor-pointer'>
                    <Image src={facebookIcon} alt='fb-logo'/>
                </div>
                <div className='w-8 h-8 bg-cyan-400/10 p-2 rounded-full saturate-0 hover:saturate-100 hover:scale-125 ease duration-300 cursor-pointer'>
                    <Image src={twitterIcon} alt='twitter-logo'/>
                </div>
                <div className='w-8 h-8 bg-blue-700/10 p-2 rounded-full saturate-0 hover:saturate-100 hover:scale-125 ease duration-300 cursor-pointer'>
                    <Image src={linkedinIcon} alt='linkedin-logo'/>
                </div>
                <div className='w-8 h-8 bg-pink-700/10 p-2 rounded-full saturate-0 hover:saturate-100 hover:scale-125 ease duration-300 cursor-pointer'>
                    <Image src={instagramIcon} alt='instagram-logo'/>
                </div>
            </div>
        </div>
        <div className='mt-6 sm:mt-0'>
            <div className='flex items-center'>
                <div className='w-8 p-2 bg-primary-color/20 rounded-full'>
                    <Image src={emailIcon} alt='email-logo' className='w-full'/>
                </div>
                <p className='text-heading-color font-semibold text-xl px-4 cursor-pointer'>hello@haphup.com</p>
            </div>
        </div>
    </div>
    <div className='bg-primary-color py-8 text-center text-white-color'>
        <h5 className='text-white-color font-extrabold text-xl capitalize'>© 2021 Haphup LLP. All rights reserved.</h5>
    </div>
    </>
  )
}

export default Footer