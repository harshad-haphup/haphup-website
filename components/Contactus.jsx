import React from 'react'
import Image from "next/image";
import contactusImage from "public/assests/img/contact-us.svg";
import { motion } from 'framer-motion';

const Contactus = () => {
  return (
    <>
        <div
          className='relative h-screen w-screen m-auto pb-12 bg-fixed bg-center bg-contain bg-no-repeat custom-img contact-us'>
            <div className='absolute top-0 left-0 w-full h-full bg-primary-color/60 dark:bg-dark-bg-color/70 flex flex-col justify-center items-center p-6'>
                <motion.h2
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{duration:1,delay:.3}}
                  viewport={{once:true,amount:.6}}
                  className='text-xl sm:text-3xl 2xl:text-6xl xl:text-5xl md:text-3xl font-bold text-white dark:text-dark-heading-color px-8 text-center'>Launch Your New Product With Haphup!</motion.h2>
                <motion.p 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1,delay:.3}}
                viewport={{once:true,amount:.4}}
                className='text-white dark:text-dark-heading-color/80 mt-2 px-10 text-center 2xl:text-2xl xl:text-xl md:text-lg text-sm'>We build highly premium products. For more updates connect with us.</motion.p>
                <motion.div 
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{duration:1,delay:.3}}
                  viewport={{once:true,amount:.2}}
                  className='w-full sm:w-1/2 sm:bg-white mt-4 dark:sm:bg-dark-bg-color rounded-full p-2 sm:relative flex flex-col'>
                    <input type="text" 
                    className='w-full md:w-3/4 p-4 rounded-full dark:bg-dark-bg-color text-heading-color dark:text-dark-heading-color font-semibold text-lg pl-8 outline-none border-none focus:border-none focus:outline-none'
                    placeholder='Email Address...'
                    />
                    <button className='sm:absolute  sm:right-2 sm:top-2 p-4 mt-2 cursor-pointer sm:mt-[2px] bg-accent-color rounded-full uppercase text-heading-color font-semibold'>Notify Me</button>
                </motion.div>
            </div>    
        </div>
    </>
  )
}

export default Contactus