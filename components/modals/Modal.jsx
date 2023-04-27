import React from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const Modal = ({ setShowModal, sendDataForEmail }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    sendDataForEmail(data);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-4/5 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-card-color dark:bg-dark-card-color outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-heading-color dark:text-dark-heading-color">
                Contact Us
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-red text-heading-color dark:text-dark-heading-color h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6">
              <form
                action="#"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="w-full">
                    <Input
                      size="lg"
                      label="Name*"
                      color="indigo"
                      {...register("name", {
                        required: "Name is Required",
                        pattern: {
                          value: /^[a-zA-Z ]+$/,
                          message: "Only characters are Accepted",
                        },
                        minLength: {
                          value: 2,
                          message: "Minimum length 2 required",
                        },
                      })}
                      error={Boolean(errors.name)}
                      className="text-text-color dark:text-dark-text-color py-6 text-lg"
                    />
                    {Boolean(errors.name) && (
                      <p className="text-xs mt-2 text-red-500 ml-1">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <Input
                      size="lg"
                      label="Email*"
                      color="indigo"
                      {...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                          message: "Enter valid Email Address",
                        },
                      })}
                      error={Boolean(errors.email)}
                      className="text-text-color dark:text-dark-text-color py-6 text-lg"
                    />
                    {Boolean(errors.email) && (
                      <p className="text-xs mt-2 text-red-500 ml-1">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Textarea
                    size="lg"
                    label="Message*"
                    color="indigo"
                    {...register("msg", { required: "Message is Required" })}
                    error={Boolean(errors.msg)}
                    className="text-text-color dark:text-dark-text-color"
                  />
                  {Boolean(errors.msg) && (
                    <p className="text-xs mt-2 text-red-500 ml-1">
                      {errors.msg?.message}
                    </p>
                  )}
                </div>

                <input
                  type="submit"
                  className="outline-none border-0 bg-primary-color uppercase text-xl text-white-color tracking-wider font-bold p-4 rounded-lg w-full mt-4 cursor-pointer"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
