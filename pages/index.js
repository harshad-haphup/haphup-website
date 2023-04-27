import Features from "../components/Features";
import Contactus from "../components/Contactus";
import Header from "../components/Header";
import Services from "../components/Sevices";
import Footer from "../components/Footer";

import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { verifyAndSendCareerMail, verifyAndSendMail } from "@/services/verifyAndSendMail";


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);


  const captchaRef = useRef();
  
  const sendDataForEmail = (data) => {
    verifyAndSendMail(captchaRef,data,setShowModal);
  }
  const sendDataForCareerEmail = (data) => {
    verifyAndSendCareerMail(captchaRef,data,setShowJoinUsModal);
  }

  return (
    <>
      <div className="">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
        size="invisible"
        ref={captchaRef}
      />
      </div>
      <Header showModal={showModal} setShowModal={setShowModal} sendDataForEmail={sendDataForEmail}/>
      <Services/>
      <Contactus/>
      <Features showModal={showModal} setShowModal={setShowModal} showJoinUsModal={showJoinUsModal} setShowJoinUsModal={setShowJoinUsModal} sendDataForEmail={sendDataForEmail} sendDataForCareerEmail={sendDataForCareerEmail}/>
      <Footer/>
    </>
  );
}
