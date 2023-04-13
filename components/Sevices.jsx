import React from 'react'
import Image from "next/image";
import reactLogo from "public/assests/img/react-logo.svg";
import railsLogo from "public/assests/img/rails-logo.svg";
import nodeLogo from "public/assests/img/node-logo.svg";
import kubernetLogo from "public/assests/img/kubernet-logo.svg";

const Sevices = () => {
  return (
    <>
    <main className="w-full h-auto mb-28 tracking-wider">
          
          <h2 className="text-center uppercase font-semibold text-xl">Our Premium <span className="border-b-4 border-secondary-color/70">Services</span></h2>
          
          <div className=" w-full px-16 py-8 h-auto card-container mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="card shadow-blue-200/20 hover:border-t-4 hover:border-blue-400 card-hover">
                <div className="card-header w-full">
                  <div className="bg-blue-50  w-2/5 card-image p-4">
                  <Image src={reactLogo} alt="react" className="w-3/4"/>
                  </div>
                </div>
                <div className="card-content">
                  <h1 className="font-bold text-xl text-heading-color mt-2">React JS</h1>
                  <p className="text-text-color mt-2 text-sm mb-4 tracking-normal">React.js helps us create interactive UI with better user experience. It is incredibly fast and helps to build reusable components.</p>
                </div>
            </div>

            <div className="card shadow-red-200/20 hover:border-t-4 hover:border-red-400 card-hover">
                <div className="card-heade w-fullr">
                  <div className="bg-red-50  w-2/5 card-image p-4">
                  <Image src={railsLogo} alt="react" className="w-3/4"/>
                  </div>
                </div>
                <div className="card-content">
                  <h1 className="font-bold text-xl text-heading-color mt-2">Ruby on Rails</h1>
                  <p className="text-text-color mt-2 text-sm mb-4 tracking-normal">Ruby on Rails helps us create dynamic server-side web applications. It also expose REST API's & GraphQL API's for third-party applications & Web UI.</p>
                </div>
            </div>

            <div className="card shadow-green-200/20 hover:border-t-4 hover:border-green-400 card-hover" >
                <div className="card-header w-full">
                  <div className="bg-green-50 w-2/5  card-image p-4">
                  <Image src={nodeLogo} alt="react" className="w-3/4"/>
                  </div>
                </div>
                <div className="card-content">
                  <h1 className="font-bold text-xl text-heading-color mt-2">Node.js</h1>
                  <p className="text-text-color mt-2 text-sm mb-4 tracking-normal">Node.js server-side frameworks & it is designed to build highly performant & scalable network applications. It has large number of open source libraries.</p>
                </div>
            </div>

            <div className="card shadow-indigo-200/20 hover:border-t-4 hover:border-indigo-400 card-hover" >
                <div className="card-header w-full">
                  <div className="bg-indigo-50 w-2/5   card-image p-4">
                  <Image src={kubernetLogo} alt="react" className="w-3/4"/>
                  </div>
                </div>
                <div className="card-content">
                  <h1 className="font-bold text-xl text-heading-color mt-2">Kubernetes</h1>
                  <p className="text-text-color mt-2 text-sm mb-4 tracking-normal">Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications</p>
                </div>
            </div>

          </div>
        </main>
    </>
  )
}

export default Sevices