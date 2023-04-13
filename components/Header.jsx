import React from "react";
import Image from "next/image";
import logo from "public/assests/img/logo.svg";
import heroImage from "public/assests/img/hero-image.svg";

const Header = () => {
  return (
    <>
      <header className="w-full h-screen flex items-center relative">
        <div className="absolute w-7 h-64 bg-primary-color/70 right-28 top-0 rounded-full rotate-45 origin-top"></div>
        <div className="absolute w-7 h-56 bg-accent-color/70 right-12 top-0 rounded-full rotate-45 origin-top"></div>
        <nav className="w-full bg-white bg-opacity-40 p-4 fixed top-0 z-10 backdrop-filter backdrop-blur-xl border-b border-gray-200 flex justify-center">
          <Image src={logo} alt="logo" priority={true} />
        </nav>
        <div className="flex items-center justify-center w-full flex-col-reverse md:flex-row">
          <div className="md:w-3/5 text-center px-6 md:px-12">
            <h1 className="font-bold text-2xl capitalize text-heading-color">
              We build amazing{" "}
              <span className="text-primary-color">web & mobile</span>{" "}
              applications
            </h1>
            <p className="mt-3 text-text-color">
              We are a full-stack developers and we build high-quality software
              using ReactJs, Ruby on Rails, NodeJs & latest technology.
            </p>
            <button className="bg-primary-color mt-4 text-white px-8 py-2 rounded-md uppercase font-medium border-2 border-primary-color hover:bg-transparent hover:text-primary-color ease-in-out duration-300">
              Get Started
            </button>
          </div>
          <div className="w-4/5 md:w-2/5 flex justify-center relative">
            <Image src={heroImage} alt="hero-img" className="w-3/4" />
            {/* <div className="absolute top-0 px-4 py-2 rounded bg-blue-500 text-white shadow-lg shadow-blue-500/50">React</div>
          <div className="absolute top-2/2 px-4 py-2 rounded bg-green-500 text-white shadow-lg shadow-green-500/50">Next</div>
          <div className="absolute bottom-0 right-0 px-4 py-2 rounded bg-pink-500 text-white shadow-lg shadow-pink-500/50">React</div>
          <div className="absolute right-1/4 top-0 px-4 py-2 rounded bg-yellow-500 text-white shadow-lg shadow-yellow-500/50">React</div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
