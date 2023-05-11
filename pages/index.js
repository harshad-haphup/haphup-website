import Features from "../components/Features";
import Contactus from "../components/Contactus";
import Header from "../components/Header";
import Services from "../components/Sevices";
import Footer from "../components/Footer";

import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { verifyAndSendCareerMail, verifyAndSendMail, verifyAndSendOnlyMail } from "@/services/verifyAndSendMail";
import Loader from "@/components/Loader";


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);
  const [loder, setLoader] = useState(false);



  const captchaRef = useRef();
  
  const sendDataForEmail = (data) => {
    verifyAndSendMail(captchaRef,data,setShowModal,setLoader);
  }
  const sendDataForCareerEmail = (data) => {
    verifyAndSendCareerMail(captchaRef,data,setShowJoinUsModal,setLoader);
  }
  const sendOnlyEmail = (data) => {
    verifyAndSendOnlyMail(captchaRef,data,setLoader);

  }

  return (
    <>
    {
      loder && <div className="fixed top-0 left-0 bg-white bg-opacity-70 backdrop-blur-2xl w-screen h-screen overflow-y-scroll z-50 text-8xl flex items-center justify-center"><Loader/></div>
    }
      <div className="">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
        size="invisible"
        ref={captchaRef}
      />
      </div>
      <Header showModal={showModal} setShowModal={setShowModal} />
      <Services/>
      <Contactus sendOnlyEmail={sendOnlyEmail}/>
      <Features showModal={showModal} setShowModal={setShowModal} showJoinUsModal={showJoinUsModal} setShowJoinUsModal={setShowJoinUsModal} sendDataForEmail={sendDataForEmail} sendDataForCareerEmail={sendDataForCareerEmail}/>
      <Footer/>
    </>
  );
}
