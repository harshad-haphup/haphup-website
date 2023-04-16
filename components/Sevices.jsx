import React from "react";
import Image from "next/image";
import reactLogo from "public/assests/img/react-logo.svg";
import railsLogo from "public/assests/img/rails-logo.svg";
import nodeLogo from "public/assests/img/node-logo.svg";
import kubernetLogo from "public/assests/img/kubernet-logo.svg";
import { motion } from "framer-motion";
import { opacityAnim } from "./animations/Animation";

const Sevices = () => {
  return (
    <>
      <main className="w-full pb-40 pt-20 tracking-wider bg-bg-color dark:bg-dark-bg-color">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "keyframes" }}
          viewport={{ once: true, amount: 1 }}
          className="text-center uppercase font-semibold 
          2xl:text-4xl
          xl:text-2xl
          text-xl
          text-heading-color dark:text-dark-heading-color
          "
        >
          Our Premium{" "}
          <span className="border-b-4 border-secondary-color/70">Services</span>
        </motion.h2>

        <motion.div
          variants={opacityAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=" w-full px-5 sm:px-16 h-auto card-container mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            
            className="card shadow-blue-200/20 dark:shadow-black/20 hover:border-t-4 hover:border-blue-400 card-hover"
          >
            <div className="card-header">
              <div className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 card-image">
                <Image
                  src={reactLogo}
                  alt="react"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="card-content">
              <h1 className="font-bold text-xl text-heading-color dark:text-dark-heading-color mt-4">
                React JS
              </h1>
              <p className="text-text-color dark:text-dark-text-color mt-2 text-xs sm:text-sm mb-4 tracking-normal">
                React.js helps us create interactive UI with better user
                experience. It is incredibly fast and helps to build reusable
                components.
              </p>
            </div>
          </motion.div>

          <motion.div
            
            className="card shadow-red-200/20 dark:shadow-black/20  hover:border-t-4 hover:border-red-400 card-hover"
          >
            <div className="card-header min-w-fit">
              <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 card-image">
                <Image
                  src={railsLogo}
                  alt="react"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="card-content">
              <h1 className="font-bold text-xl text-heading-color dark:text-dark-heading-color mt-4">
                Ruby on Rails
              </h1>
              <p className="text-text-color mt-2 text-xs sm:text-sm mb-4 tracking-normal">
                Ruby on Rails helps us create dynamic server-side web
                applications. It also expose REST API's & GraphQL API's for
                third-party applications & Web UI.
              </p>
            </div>
          </motion.div>

          <motion.div
            
            className="card shadow-green-200/20 dark:shadow-black/20  hover:border-t-4 hover:border-green-400 card-hover"
          >
            <div className="card-header">
              <div className="bg-green-50 w-12 h-12 sm:w-16 sm:h-16  card-image">
                <Image
                  src={nodeLogo}
                  alt="react"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="card-content">
              <h1 className="font-bold text-xl text-heading-color dark:text-dark-heading-color mt-4">
                Node.js
              </h1>
              <p className="text-text-color mt-2 text-xs sm:text-sm mb-4 tracking-normal">
                Node.js server-side frameworks & it is designed to build highly
                performant & scalable network applications. It has large number
                of open source libraries.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card shadow-indigo-200/20 dark:shadow-black/20  hover:border-t-4 hover:border-indigo-400 card-hover"
          >
            <div className="card-header">
              <div className="bg-indigo-50 w-12 h-12 sm:w-16 sm:h-16   card-image">
                <Image
                  src={kubernetLogo}
                  alt="react"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="card-content">
              <h1 className="font-bold text-xl text-heading-color dark:text-dark-heading-color mt-4">
                Kubernetes
              </h1>
              <p className="text-text-color mt-2 text-xs sm:text-sm mb-4 tracking-normal">
                Kubernetes, also known as K8s, is an open-source system for
                automating deployment, scaling, and management of containerized
                applications
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default Sevices;
