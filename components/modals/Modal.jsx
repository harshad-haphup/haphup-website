import React from 'react'
import { motion } from "framer-motion";
import {Input,Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";


const Modal = ({setShowModal}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setShowModal(false)
    };
  return (
    <>
    <motion.div
        initial={{y:-100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true}}
        transition={{duration:.7,type:'spring'}}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-4/5 my-6 mx-auto max-w-3xl">
       
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-card-color dark:bg-dark-card-color outline-none focus:outline-none">
        
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold text-heading-color dark:text-dark-heading-color">
              Contact Us
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-red text-heading-color dark:text-dark-heading-color h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <form action="#" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
               <div>
                    <Input size="lg" label="Name*"  color="indigo" {...register("name", { required: true })} error={Boolean(errors.name)} className='text-text-color dark:text-dark-text-color'/>
                    {Boolean(errors.name) && <p className='text-xs mt-1 text-red-500 ml-1'>Name is Required</p>}
               </div>
               <div>
                    <Input size="lg" label="Email*" color="indigo" {...register("email", { required: true })} error={Boolean(errors.email)} className='text-text-color dark:text-dark-text-color'/>
                    {Boolean(errors.email) && <p className='text-xs mt-1 text-red-500 ml-1'>Email is Required</p>}
               </div>
               <div>
                    <Textarea size="lg" label="Message*" color='indigo' {...register("msg", { required: true })} error={Boolean(errors.msg)} className='text-text-color dark:text-dark-text-color'/>
                    {Boolean(errors.msg) && <p className='text-xs mt-1 text-red-500 ml-1'>Message is Required</p>}
               </div>
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
    </motion.div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default Modal