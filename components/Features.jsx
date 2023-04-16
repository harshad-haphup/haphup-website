import React, { useState } from 'react'
import Image from "next/image";
import trustIcon from "public/assests/img/trust-icon.svg";
import diamondIcon from "public/assests/img/diamond-icon.svg";
import qualityIcon from "public/assests/img/quality-icon.svg";

import nodeLogo from "public/assests/img/node-logo.svg";
import railsLogo from "public/assests/img/rails-logo.svg";
import reactLogo from "public/assests/img/react-logo.svg"; import kubernetLogo from "public/assests/img/kubernet-logo.svg";

import pythonLogo from "public/assests/img/python-logo.svg";
import awsLogo from "public/assests/img/aws-logo.svg";
import postgresqlLogo from "public/assests/img/postgresql-logo.svg";
import Modal from "./modals/Modal";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import JoinusModal from './modals/JoinusModal';

import { opacityAnim } from "./animations/Animation";



const Features = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(data)
      setShowModal(false)
  };
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
     {
      showModal && <Modal setShowModal={setShowModal}/>
    }
    <div className='px-6 md:px-12 lg:px-20 pt-14 pb-20 bg-bg-color dark:bg-dark-bg-color'>
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "keyframes" }}
        viewport={{ once: true, amount: 1 }}
        className="text-center uppercase font-semibold text-xl my-28 text-heading-color dark:text-dark-heading-color">Why Choose <span className="border-b-4 border-secondary-color/70">Haphup ? </span></motion.h2>

        <motion.div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            <motion.div
              variants={opacityAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card-color dark:bg-dark-card-color rounded-xl px-8 py-4  relative hover:shadow-xl hover:-translate-y-4 ease-linear duration-100">
                  <div className="bg-card-color dark:bg-dark-card-color shadow-xl shadow-yellow-400/25 w-16 h-16 card-image p-4 rounded-full absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <Image src={trustIcon} alt="react" className="w-3/4"/>
                  </div>
                <div className="text-center">
                  <h1 className="font-bold text-xl text-heading-color dark:text-dark-heading-color mt-10">Delightful Experience</h1>
                  <p className="text-text-color dark:text-dark-text-color mt-2 text-sm mb-4 tracking-normal">Easy Collaboration with our professional team & customer service. Your satisfaction is our priority.</p>
                </div>
            </motion.div>
            <motion.div
              variants={opacityAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
             className="bg-card-color dark:bg-dark-card-color rounded-xl px-8 py-4  relative hover:shadow-xl hover:-translate-y-4 ease-linear duration-100 mt-12 md:mt-0">
                  <div className="bg-card-color dark:bg-dark-card-color shadow-xl shadow-purple-400/25 w-16 h-16 card-image p-4 rounded-full absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <Image src={diamondIcon} alt="react" className="w-3/4"/>
                  </div>
                <div className="text-center">
                  <h1 className="font-bold text-xl text-heading-color dark:text-dark-heading-color mt-10">High Quality Impact</h1>
                  <p className="text-text-color dark:text-dark-text-color mt-2 text-sm mb-4 tracking-normal">Pixel to pixel work priority with high end impact of every product.</p>
                </div>
            </motion.div>
            <motion.div
              variants={opacityAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
             className="bg-card-color dark:bg-dark-card-color rounded-xl px-8 py-4  relative hover:shadow-xl hover:-translate-y-4 ease-linear duration-100 mt-12 lg:mt-0">
                  <div className="bg-card-color dark:bg-dark-card-color shadow-xl shadow-blue-400/25 w-16 h-16 card-image p-4 rounded-full absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <Image src={qualityIcon} alt="react" className="w-3/4 dark:invert"/>
                  </div>
                <div className="text-center">
                  <h1 className="font-bold text-xl text-heading-color dark:text-dark-heading-color mt-10">Premium & Modern</h1>
                  <p className="text-text-color dark:text-dark-text-color mt-2 text-sm mb-4 tracking-normal">Our quality research team always looking to launch extra-ordinary product.</p>
                </div>
            </motion.div>
        </motion.div>
    </div>
    <div className='px-16 py-8 feature-bg flex justify-center flex-col items-center'>
        <h2 className='text-2xl font-extrabold text-primary-color text-center'>❝ Save Time Save Money ❞</h2>
        <h4 className='text-lg font-semibold text-heading-color dark:text-dark-heading-color mt-1 text-center'>Get exactly what you want.</h4>
        <p className='text-base text-text-color dark:text-dark-text-color mt-4 text-center'>We are full-stack developers and we build high-quality software using ReactJs, Ruby on Rails, NodeJs & latest technology.</p>
        <button 
        onClick={()=>setShowModal(true)}   
        className="bg-accent-color mt-4 text-heading-color px-8 py-2 rounded-md uppercase font-medium border-2 border-accent-color hover:bg-transparent hover:text-accent-color ease-in-out duration-300">
          Learn More
        </button>
    </div>

    <div className='overflowx-hidden'>
        <h2 className="text-center uppercase font-semibold text-xl pt-16 bg-bg-color dark:bg-dark-bg-color text-heading-color dark:text-dark-heading-color">Our Trusted <span className="border-b-4 border-secondary-color/70">Stack </span></h2>
        <div className='px-0 py-8 sm:p-4 md:p-10 dark:bg-dark-bg-color'>
          <div className="w-full flex">
            <div className='slider w-full flex whitespace-nowrap overflow-hidden'>
              
              <div className='flex justify-evenly animate-marquee-infinite'>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={nodeLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={railsLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={reactLogo} alt='nodejs' className='w-full h-full object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={kubernetLogo} alt='nodejs' className='w-full h-full object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={pythonLogo} alt='nodejs' className='w-full h-full object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={awsLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={postgresqlLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
              </div>

              <div className='flex justify-evenly animate-marquee-infinite'>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={nodeLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={railsLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={reactLogo} alt='nodejs' className='w-full h-full object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={kubernetLogo} alt='nodejs' className='w-full h-full object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={pythonLogo} alt='nodejs' className='w-full h-full object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={awsLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={postgresqlLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain dark:brightness-200 dark:hover:brightness-100' />
                </div>
              </div>

              
            </div>
            
          </div>
        </div>
    </div>
   
   <div className='px-5 py-5 bg-bg-color dark:bg-dark-bg-color'>
    
    <motion.div
     initial={{y:100,opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{duration:.7,type:"keyframes"}}
     viewport={{once:true,amount:.1}}
     className='px-2 py-4 sm:p-8 mb-8 bg-card-color dark:bg-dark-card-color shadow-lg w-full sm:w-4/5 m-auto rounded-md flex justify-between items-center flex-col md:flex-row border-l-8 border-primary-color'>
          <div>
            <h4 className='text-xl font-bold text-heading-color dark:text-dark-heading-color px-4'>Hey, Got a project in mind ?</h4>
            <p className='text-sm mt-1 text-text-color dark:text-dark-text-color px-4'>Please feel free to contact us</p>
          </div>
          <button 
          onClick={()=>setShowModal(true)}
          className='bg-primary-color mt-4 text-white px-8 py-2 rounded-md uppercase font-medium border-2 border-primary-color hover:bg-transparent hover:text-primary-color ease-in-out duration-300'>Talk to Us</button>
    </motion.div>
    
    <motion.div
     initial={{y:100,opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{duration:.7,type:"keyframes"}}
     viewport={{once:true,amount:.1}}
    className='px-2 py-4 sm:p-8 mb-8 bg-card-color dark:bg-dark-card-color shadow-lg w-full sm:w-4/5 m-auto rounded-md flex justify-between items-center flex-col md:flex-row-reverse border-r-8 border-accent-color'>
          <div>
            <h4 className='text-xl font-bold text-heading-color dark:text-dark-heading-color px-4'>Wanna be a part of the Awesome team?</h4>
            <p className='text-sm mt-1 text-text-color dark:text-dark-text-color px-4'>Are You Ready ? Let's Get To Work !</p>
          </div>
          <button className='bg-accent-color mt-4 text-heading-color px-8 py-2 rounded-md uppercase font-medium border-2 border-accent-color hover:bg-transparent hover:text-accent-color ease-in-out duration-300'
           onClick={() => setShowJoinUsModal(true)}
          >Join Us</button>
    </motion.div>

   </div>

      {showJoinUsModal ? (
        <JoinusModal setShowJoinUsModal={setShowJoinUsModal}/>
      ) : null}

    </>
  )
}

export default Features
