export const verifyAndSendMail = async (captchaRef,data,setShowModal) => {
    if (!data) {
      alert("Please try again");
      return;
    }
    const token = await captchaRef.current.executeAsync();
    captchaRef.current.reset();
    // console.log(token,"token")
    try {
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
        setShowModal(false);
        alert("Mail Sent Successfully");
      } else {
        setShowModal(false);
        alert("Mail Not Sent Successfully ", data.message);
      }
    } catch (error) {
      setShowModal(false);
      console.log("error", error);
      alert("Something went Wrong, Please try again");
    }
  };
export const verifyAndSendCareerMail = async (captchaRef,data,setShowJoinUsModal) => {
    if (!data) {
      alert("Please try again");
      return;
    }
    const token = await captchaRef.current.executeAsync();
    captchaRef.current.reset();
    // console.log(token,"token")
    try {
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
        setShowJoinUsModal(false)
        alert("Mail Sent Successfully");
      } else {
        setShowJoinUsModal(false)
        alert("Mail Not Sent Successfully ", data.message);
      }
    } catch (error) {
        setShowJoinUsModal(false)
      console.log("error", error);
      alert("Something went Wrong, Please try again");
    }
  };
