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
    <div className='bg-bg-color dark:bg-dark-bg-color'>
        <div className="footer-bg ">
            <div className='p-4 sm:p-16 pt-10 flex flex-col sm:flex-row justify-between items-center sm:items-center  bg-secondary-color/5'>
            
                <div className='sm:px-4 flex flex-col items-center sm:items-start'>
                    <Image src={logo} alt='logo' priority={false} placeholder="blur" blurDataURL={'../public/assests/logo.svg'}/>
                    <div className='flex items-center gap-2 sm:gap-4 mt-6'>
                        <div className='w-8 h-8 p-2 mr-2 sm:mr-0 bg-primary-color/20 rounded-full flex items-center'>
                            <Image src={locationIcon} alt='location-icon' className='w-full h-full object-contain'/>
                        </div>
                        <p className='text-text-color dark:text-dark-text-color text-xs sm:text-base text-justify whitespace-normal sm:text-start'>304, Amar Business Park, Sadanand Estates, Veerbhadra Nagar, <br /> Baner, Pune, Maharashtra 411045</p>
                    </div>
                    <div className='flex items-center gap-4 mt-4'>
                        
                        <div className='w-8 h-8 bg-cyan-400/10 dark:bg-dark-heading-color/20 p-2 rounded-full saturate-0 hover:saturate-100 hover:scale-125 ease duration-300 cursor-pointer'>
                            <Image src={twitterIcon} alt='twitter-logo' className='dark:brightness-150'/>
                        </div>
                        <div className='w-8 h-8 bg-blue-700/10 dark:bg-dark-heading-color/20 p-2 rounded-full saturate-0 hover:saturate-100 hover:scale-125 ease duration-300 cursor-pointer'>
                            <Image src={linkedinIcon} alt='linkedin-logo' className='dark:brightness-150'/>
                        </div>
                        <div className='w-8 h-8 bg-pink-700/10 dark:bg-dark-heading-color/20 p-2 rounded-full saturate-0 hover:saturate-100 hover:scale-125 ease duration-300 cursor-pointer'>
                            <Image src={instagramIcon} alt='instagram-logo' className='dark:brightness-150'/>
                        </div>
                        <div className='w-8 h-8 bg-blue-600/10 dark:bg-dark-heading-color/20 p-2 rounded-full saturate-0 hover:saturate-100 hover:scale-125 ease duration-300 cursor-pointer'>
                            <Image src={facebookIcon} alt='fb-logo' className='dark:brightness-150'/>
                        </div>
                    </div>
                </div>
                <div className='mt-6 sm:mt-0'>
                    <div className='flex items-center'>
                        <div className='w-6 sm:w-8 p-2 bg-primary-color/20 rounded-full'>
                            <Image src={emailIcon} alt='email-logo' className='w-full'/>
                        </div>
                        <p className='text-heading-color dark:text-dark-heading-color font-semibold text-sm sm:text-xl pl-2 sm:pl-4 cursor-pointer'>hello@haphup.com</p>
                    </div>
                </div>
            </div>
            <div className='bg-primary-color py-8 text-center text-white-color'>
                <h5 className='text-white-color font-extrabold text-sm sm:text-xl capitalize'>© 2021 Haphup LLP. All rights reserved.</h5>
            </div>
        </div>
    </div>
   
   
    
    </>
  )
}

export default Footer