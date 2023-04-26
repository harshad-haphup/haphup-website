import React, { useState, useRef } from 'react'
import { Input, Option, Select } from '@material-tailwind/react'
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion'

const JoinusModal = ({setShowJoinUsModal}) => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const[jobProfile,setJobProfile]=useState("")
  
    const handleJobProfileChange = (e) =>{
      setValue("job_profile",e)
      setJobProfile(e)
    }
    
    const onSubmit = data => {
      // console.log(data)
      fetch("/api/career", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(data),
      }).then((response)=>response.json())
      .then(data=>{
        if(data && data.status === 'success'){
          setShowJoinUsModal(false)
          alert("Mail Sent Successfully")
        }
      })
      .catch((error)=>{
        setShowJoinUsModal(false)
        console.log("error",error)
        alert("Mail not Sent")
      
      })
    };
  return (
    <>
    <motion.div
     initial={{y:100,opacity:0}}
     whileInView={{y:0,opacity:1}}
     viewport={{once:true}}
     transition={{duration:.7,type:'spring'}}
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-4/5 my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-card-color dark:bg-dark-card-color outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold text-heading-color dark:text-dark-heading-color">
              Join Us
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowJoinUsModal(false)}
            >
              <span className="bg-red text-heading-color dark:text-dark-heading-color h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative selectBox p-6 flex-auto">
            <form action="#" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
              <div className='flex flex-col sm:flex-row gap-4 w-full'>
                <div className='w-full'>
                  <Input type="text" size="lg" label="Name*"  color="indigo" {...register("name", { required: "Name is Required",
                      pattern: {
                      value: /^[a-zA-Z ]+$/,
                      message: "Only characters are Accepted",
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum length 2 required",
                    },
                  })} error={Boolean(errors.name)} className='text-text-color dark:text-dark-text-color'/>
                  {Boolean(errors.name) && <p className='text-xs mt-1 text-red-500 ml-1'>{errors.name?.message}</p>}
                </div>
                <div className='w-full'>
                    <Input type="email" size="lg" label="Email*"  color="indigo" {...register("email", { required: "Email is Required",
                      pattern: {
                      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                      message: "Enter valid Email Address",
                    }, 
                     })} error={Boolean(errors.email)} className='text-text-color dark:text-dark-text-color'/>
                    {Boolean(errors.email) && <p className='text-xs mt-1 text-red-500 ml-1'>{errors.email?.message}</p>}
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 w-full'>
                <div className='w-full'>
                  <Select
                    label='Select Job Profile*'
                    name='job_role'
                    value={jobProfile}
                    onChange={handleJobProfileChange}
                    error={errors.job_profile ? true : false}
                    className='text-heading-color dark:text-dark-heading-color'
                  >
                    {/* <Option value="">Select Job Profile</Option> */}
                    <Option value='ror_developer'>ROR Developer</Option>
                    <Option value='frontend_devloper'>Frontend Developer</Option>
                    <Option value='backend_devloper'>Backend Developer</Option>
                    <Option value='react_devloper'>React Developer</Option>
                    <Option value='tester'>tester Developer</Option>
                    <Option value='other' >Other</Option>
                  </Select>
                  {Boolean(errors.job_profile) && <p className='text-xs mt-1 text-red-500 ml-1'>Job Profile is Required</p>}

                  <input type="hidden" name="job_profile" {...register("job_profile",{required:true})} className='bg-gray-200'/>
                
                </div>
                <div className='w-full'>
                    <Input type="text" size="lg" label="LinkedIn Profile*"  color="indigo" {...register("linkedin_profile", { required: "LinkedIn Profile is Required",
                      pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Only characters are Accepted",
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum length 2 required",
                    },
                     })} error={Boolean(errors.linkedin_profile)}/>
                    {Boolean(errors.linkedin_profile) && <p className='text-xs mt-1 text-red-500 ml-1'>{errors.linkedin_profile?.message}</p>}
                </div> 
              </div>
             
              
              <input type="submit" className='outline-none border-0 bg-primary-color uppercase text-xl text-white-color tracking-wider font-bold p-4 rounded-lg w-full mt-4 cursor-pointer' value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default JoinusModal