import React from 'react'
import Image from "next/image";
import contactusImage from "public/assests/img/contact-us.svg";

const Contactus = () => {
  return (
    <>
        <div className='relative h-screen w-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img contact-us'>
            <div className='absolute top-0 left-0 w-full h-full bg-primary-color/60 flex flex-col justify-center items-center p-6'>
                <h2 className='text-3xl font-bold text-white px-8'>Launch Your New Product With Haphup!</h2>
                <p className='text-white mt-2 px-10'>We build highly premium products. For more updates connect with us.</p>
                <div className='w-full sm:w-1/2 bg-white mt-4 rounded-full p-2'>
                    <input type="text" className='w-full bg-transparent md:w-3/4 p-4 rounded-full text-heading-color font-semibold text-lg pl-8 outline-none border-none focus:border-none focus:outline-none'/>
                    <button className='w-full md:w-1/4 bg-accent-color h-full rounded-full uppercase text-heading-color font-semibold'>Notify Me</button>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Contactus