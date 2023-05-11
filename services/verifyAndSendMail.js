export const verifyAndSendMail = async (captchaRef,data,setShowModal,setLoader) => {
    if (!data) {
      setLoader(false)
      alert("Please try again");
      return;
    }
    const token = await captchaRef.current.executeAsync();
    captchaRef.current.reset();
    // console.log(token,"token")
    try {
      setLoader(true)
      setShowModal(false);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...data, token }),
      });

      const info = await response.json();
      if (info && info.status === "success") {
        setLoader(false);
        alert("Mail Sent Successfully");
      } else {
        setLoader(false);
        alert("Mail Not Sent Successfully ", data.message);
      }
    } catch (error) {
      setLoader(false);
      console.log("error", error);
      alert("Something went Wrong, Please try again");
    }
  };

export const verifyAndSendCareerMail = async (captchaRef,data,setShowJoinUsModal,setLoader) => {
    if (!data) {
      setLoader(false)
      alert("Please try again");
      return;
    }
    const token = await captchaRef.current.executeAsync();
    captchaRef.current.reset();
    // console.log(token,"token")
    try {
      setLoader(true)
      setShowJoinUsModal(false)
      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...data, token }),
      });

      const info = await response.json();
      if (info && info.status === "success") {
      setLoader(false)
        alert("Mail Sent Successfully");
      } else {
      setLoader(false)
        alert("Mail Not Sent Successfully ", data.message);
      }
    } catch (error) {
      setLoader(false)
      console.log("error", error);
      alert("Something went Wrong, Please try again");
    }
  };

export const verifyAndSendOnlyMail = async (captchaRef,data,setLoader) => {
    if (!data) {
      setLoader(false)
      alert("Please try again");
      return;
    }
    const token = await captchaRef.current.executeAsync();
    captchaRef.current.reset();
    try {
      setLoader(true)
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...data, token }),
      });

      const info = await response.json();
      if (info && info.status === "success") {
      setLoader(false)
        alert("Mail Sent Successfully");
      } else {
      setLoader(false)
        alert("Mail Not Sent Successfully ", data.message);
      }
    } catch (error) {
      setLoader(false)
      alert("Something went Wrong, Please try again");
    }
  };
