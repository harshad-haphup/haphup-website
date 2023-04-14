import React, { useState } from "react";
import Image from "next/image";
import logo from "public/assests/img/logo.svg";
import heroImage from "public/assests/img/hero-image.svg";
import SalyImage from "public/assests/img/Saly-10.svg";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    {
      showModal && <Modal setShowModal={setShowModal}/>
    }
      <header className="w-full h-screen flex items-center relative">
        <div className="absolute w-7 h-64 bg-primary-color/70 right-28 top-0 rounded-full rotate-45 origin-top"></div>
        <div className="absolute w-7 h-56 bg-accent-color/70 right-12 top-0 rounded-full rotate-45 origin-top"></div>

        <nav 
        className="w-full z-20 bg-white bg-opacity-40 p-4 fixed top-0 backdrop-filter backdrop-blur-xl border-b border-gray-200 flex justify-center">
          <Image src={logo} alt="logo" priority={false} />
        </nav>

        <div className="flex items-center justify-center w-full h-screen flex-col-reverse md:flex-row">
          <div className="md:w-3/5 text-center px-6 md:px-8 pt-12 mt-6 sm:mt-0">
            <h1 
            className="font-bold capitalize text-heading-color 
              2xl:text-6xl 2xl:leading-relaxed
              xl:text-4xl 
              lg:text-3xl
              sm:text-2xl text-xl">
              We build amazing <span className="text-primary-color">web & mobile</span> applications
            </h1>
            <p
            className="mt-3 text-text-color
              2xl:text-4xl 2xl:mt-10 2xl:leading-relaxed
              xl:text-xl 
              md:text-lg
              sm:text-bas
              text-sm
            ">
            
              We are a full-stack developers and we build high-quality software
              using ReactJs, Ruby on Rails, NodeJs & latest technology.
            </p>
            <button
             
              className="bg-primary-color mt-4 text-white px-8 py-2 rounded-md uppercase font-medium border-2 border-primary-color
              hover:bg-transparent hover:text-primary-color ease-in-out duration-300
              2xl:w-auto2xl:px-16 2xl:py-8 2xl:text-3xl 2xl:mt-10
              slide-top
             "
              onClick={()=>setShowModal(true)}             
             >
              Get Started
            </button>
          </div>
          <div className="w-4/5 md:w-3/6 md:mt-0 flex justify-center">
            <Image src={SalyImage} alt="hero-img" priority={true} className="w-full h-full object-contain z-10" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
