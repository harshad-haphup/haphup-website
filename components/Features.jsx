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

const Features = () => {
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);
  return (
    <>
    <div className='px-6 md:px-12 lg:px-20 mt-20 pb-20'>
      <h2 className="text-center uppercase font-semibold text-xl my-28">Why Choose <span className="border-b-4 border-secondary-color/70">Haphup ? </span></h2>

        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            <div className="bg-white rounded-xl px-8 py-4  relative hover:shadow-xl hover:-translate-y-4 ease-linear duration-100">
                  <div className="bg-white shadow-xl shadow-yellow-400/25 w-16 h-16 card-image p-4 rounded-full absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <Image src={trustIcon} alt="react" className="w-3/4"/>
                  </div>
                <div className="text-center">
                  <h1 className="font-bold text-xl text-heading-color mt-10">Delightful Experience</h1>
                  <p className="text-text-color mt-2 text-sm mb-4 tracking-normal">Easy Collaboration with our professional team & customer service. Your satisfaction is our priority.</p>
                </div>
            </div>
            <div className="bg-white rounded-xl px-8 py-4  relative hover:shadow-xl hover:-translate-y-4 ease-linear duration-100 mt-12 md:mt-0">
                  <div className="bg-white shadow-xl shadow-purple-400/25 w-16 h-16 card-image p-4 rounded-full absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <Image src={diamondIcon} alt="react" className="w-3/4"/>
                  </div>
                <div className="text-center">
                  <h1 className="font-bold text-xl text-heading-color mt-10">High Quality Impact</h1>
                  <p className="text-text-color mt-2 text-sm mb-4 tracking-normal">Pixel to pixel work priority with high end impact of every product.</p>
                </div>
            </div>
            <div className="bg-white rounded-xl px-8 py-4  relative hover:shadow-xl hover:-translate-y-4 ease-linear duration-100 mt-12 lg:mt-0">
                  <div className="bg-white shadow-xl shadow-blue-400/25 w-16 h-16 card-image p-4 rounded-full absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <Image src={qualityIcon} alt="react" className="w-3/4"/>
                  </div>
                <div className="text-center">
                  <h1 className="font-bold text-xl text-heading-color mt-10">Premium & Modern</h1>
                  <p className="text-text-color mt-2 text-sm mb-4 tracking-normal">Our quality research team always looking to launch extra-ordinary product.</p>
                </div>
            </div>
        </div>
    </div>
    <div className='px-16 py-8 feature-bg flex justify-center flex-col items-center'>
        <h2 className='text-2xl font-extrabold text-primary-color text-center'>❝ Save Time Save Money ❞</h2>
        <h4 className='text-lg font-semibold text-heading-color mt-1 text-center'>Get exactly what you want.</h4>
        <p className='text-base text-text-color mt-4 text-center'>We are full-stack developers and we build high-quality software using ReactJs, Ruby on Rails, NodeJs & latest technology.</p>
        <button className="bg-accent-color mt-4 text-heading-color px-8 py-2 rounded-md uppercase font-medium border-2 border-accent-color hover:bg-transparent hover:text-accent-color ease-in-out duration-300">
          Learn More
        </button>
    </div>
    <div className='overflowx-hidden'>
        <h2 className="text-center uppercase font-semibold text-xl mt-16">Our Trusted <span className="border-b-4 border-secondary-color/70">Stack </span></h2>
        <div className='px-0 py-8 sm:p-4 md:p-10'>
          <div className="w-full flex">
            <div className='slider w-full flex whitespace-nowrap overflow-hidden'>
              
              <div className='flex justify-evenly animate-marquee-infinite'>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={nodeLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={railsLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={reactLogo} alt='nodejs' className='w-full h-full object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={kubernetLogo} alt='nodejs' className='w-full h-full object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={pythonLogo} alt='nodejs' className='w-full h-full object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={awsLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={postgresqlLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain' />
                </div>
              </div>

              <div className='flex justify-evenly animate-marquee-infinite'>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={nodeLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={railsLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={reactLogo} alt='nodejs' className='w-full h-full object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={kubernetLogo} alt='nodejs' className='w-full h-full object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={pythonLogo} alt='nodejs' className='w-full h-full object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={awsLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain' />
                </div>
                <div className="w-44 h-24 p-4 rounded flex items-center saturate-0 hover:saturate-150">
                  <Image src={postgresqlLogo} alt='nodejs' className='w-3/4 h-2/4 object-contain' />
                </div>
              </div>

              
            </div>
            
          </div>
        </div>
    </div>
   
   <div className='mx-5'>
    
    <div className='px-2 py-4 sm:p-8 mb-8 bg-white shadow-lg w-full sm:w-3/5 m-auto rounded-md flex justify-between items-center flex-col md:flex-row border-l-8 border-primary-color'>
          <div>
            <h4 className='text-xl font-bold text-heading-color px-4'>Hey, Got a project in mind ?</h4>
            <p className='text-sm mt-1 text-text-color px-4'>Please feel free to contact us</p>
          </div>
          <button className='bg-primary-color mt-4 text-white px-8 py-2 rounded-md uppercase font-medium border-2 border-primary-color hover:bg-transparent hover:text-primary-color ease-in-out duration-300'>Talk to Us</button>
    </div>
    
    <div className='px-2 py-4 sm:p-8 mb-8 bg-white shadow-lg w-full sm:w-3/5 m-auto rounded-md flex justify-between items-center flex-col md:flex-row-reverse border-r-8 border-accent-color'>
          <div>
            <h4 className='text-xl font-bold text-heading-color px-4'>Wanna be a part of the Awesome team?</h4>
            <p className='text-sm mt-1 text-text-color px-4'>Are You Ready ? Let's Get To Work !</p>
          </div>
          <button className='bg-accent-color mt-4 text-heading-color px-8 py-2 rounded-md uppercase font-medium border-2 border-accent-color hover:bg-transparent hover:text-accent-color ease-in-out duration-300'
           onClick={() => setShowJoinUsModal(true)}
          >Join Us</button>
    </div>

   </div>

      {showJoinUsModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Join Us
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowJoinUsModal(false)}
                  >
                    <span className="bg-red text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="#" onSubmit={()=>setShowJoinUsModal(false)}>
                    <input type="text" placeholder='Name' className='outline-none border-2 p-4 rounded-lg w-full focus:border-primary-color'/>
                    <input type="email" placeholder='Email' className='outline-none border-2 p-4 rounded-lg w-full focus:border-primary-color mt-4'/>
                    <input type="text" placeholder='Job Profile' className='outline-none border-2 p-4 rounded-lg w-full focus:border-primary-color mt-4'/>
                    <input type="text" placeholder='Linkedin Profile' className='outline-none border-2 p-4 rounded-lg w-full focus:border-primary-color mt-4'/>
                    <input type="submit" className='outline-none border-0 bg-primary-color uppercase text-xl text-white-color tracking-wider font-bold p-4 rounded-lg w-full mt-4 cursor-pointer' value="Submit"/>
                  </form>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowJoinUsModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowJoinUsModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </>
  )
}

export default Features
