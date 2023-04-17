import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "public/assests/img/logo.svg";
import heroImage from "public/assests/img/hero-image.svg";
import SalyImage from "public/assests/img/Saly-10.svg";
import sunIcon from "public/assests/img/sun-icon.svg";
import moonIcon from "public/assests/img/moon-icon.svg";
import { motion } from "framer-motion";
import Modal from "./modals/Modal";
import {useTheme} from 'next-themes'
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  const {systemTheme, theme, setTheme}=useTheme();

  useEffect(()=>{
    setMounted(true)
  },[])

  const renderThemeChanger = () => {
    if(!mounted)  return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if(currentTheme === 'dark')
    {
      return(
         <Image src={sunIcon} className="w-full h-full object-cover select-none" priority={true} alt="swith-theme" title="change theme" onClick={()=>setTheme('light')}/> 
         )
    }else{
          return(
            <Image src={moonIcon} className="w-full h-full object-cover select-none" priority={true} alt="swith-theme" title="change theme" onClick={()=>setTheme('dark')}/> 
          )
    }
  }

  return (
    <>
    {
      showModal && <Modal setShowModal={setShowModal}/>
    }
      <header className="w-full h-screen flex items-center relative bg-white-color dark:bg-dark-white-color">
        <motion.div initial={{y:-100,opacity:0,rotate:20}} animate={{y:0,opacity:1,rotate:45}} transition={{delay:.5,duration:.4,type:"keyframes"}} className="absolute w-7 h-64 bg-primary-color/70 right-28 top-0 rounded-full rotate-45 origin-top"></motion.div>
        <motion.div initial={{y:-100,opacity:0,rotate:20}} animate={{y:0,opacity:1,rotate:45}} transition={{delay:.5,duration:.4,type:"keyframes"}} className="absolute w-7 h-56 bg-accent-color/70  right-12 top-0 rounded-full rotate-45 origin-top"></motion.div>

        <motion.nav
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:.4,type:'keyframes'}} 

        className="w-full z-20 bg-white dark:bg-dark-bg-color/10 bg-opacity-40 p-4 fixed top-0 backdrop-filter backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 flex justify-center">
          <Image src={logo} alt="logo" priority={false} />
        </motion.nav>

        <div className="fixed top-4 right-4 z-30 flex gap-4 w-6 h-6 p-1 bg-black/5 dark:bg-white/10 cursor-pointer rounded select-none">
          {renderThemeChanger()}
        </div>

        <div className="flex items-center justify-center w-full h-screen flex-col-reverse md:flex-row bg-bg-color dark:bg-dark-bg-color">
          <div className="md:w-3/5 text-center px-6 md:px-8 pt-12 mt-6 sm:mt-0">
            <motion.h1
              initial={{y:10,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:.7,delay:.4}} 
              className="font-bold capitalize text-heading-color dark:text-dark-heading-color
              2xl:text-6xl 2xl:leading-relaxed
              xl:text-4xl 
              lg:text-3xl
              sm:text-2xl text-xl">
              We build amazing <span className="text-primary-color">web & mobile</span> applications
            </motion.h1>
            <motion.p
             initial={{y:10,opacity:0}}
             animate={{y:0,opacity:1}}
             transition={{duration:.7,delay:1}} 
            className="mt-3 text-text-color dark:text-dark-text-color
              2xl:text-4xl 2xl:mt-10 2xl:leading-relaxed
              xl:text-xl 
              md:text-lg
              sm:text-bas
              text-sm
            ">
            
              We are a full-stack developers and we build high-quality software
              using ReactJs, Ruby on Rails, NodeJs & latest technology.
            </motion.p>
            <motion.button
             initial={{y:10,opacity:0}}
             animate={{y:0,opacity:1}}
             transition={{duration:.7,delay:1.4}} 
              className="bg-primary-color text-white-color border-primary-color mt-4 px-8 py-2 rounded-md uppercase font-medium border-2 
              hover:bg-transparent hover:text-primary-color ease-in-out duration-300
              2xl:w-auto2xl:px-16 2xl:py-8 2xl:text-3xl 2xl:mt-10
             "
              onClick={()=>setShowModal(true)}             
             >
              Get Started
            </motion.button>
          </div>
          <motion.div 
            initial={{y:10,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:.2,delay:.4}} 
            className="w-4/5 md:w-3/6 md:mt-0 flex justify-center">
            <Image src={SalyImage} alt="hero-img" placeholder="blur" blurDataURL={'../public/assests/Saly-10.svg'} className="w-full h-full object-contain z-10" />
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
