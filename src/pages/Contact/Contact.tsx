import { FiSend } from "react-icons/fi";
import PageHeading from "../../components/PageHeading/PageHeading";
import ContactCards from "../../components/ContactInfo/ContactCards";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useState } from "react";
import { FcProcess } from "react-icons/fc";

// const service_id = import.meta.env.VITE_SERVICE_ID;
// const templete_id = import.meta.env.VITE_TEMPLETE_ID;
// const user_id = import.meta.env.VITE_USER_ID;
// form value
type FormTypes = {
  fullName: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
  })
  .required();
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    setLoading(true);
    const templateParams = {
      to_name: "Joy Das",
      from_name: data.fullName,
      message: data.message,
    };

    await emailjs.send(
      "service_s2hp5o7",
      "template_erwd4bc",
      templateParams,
      "MdpX-x77UpjkL0ENt"
    );
    reset();
    setLoading(false);
    Swal.fire({
      position: "center",
      icon: "success",
      color: "#1abc9c",
      title: "Message Sent Successfully",
      showConfirmButton: false,
      timer: 1500,
      backdrop: "rgba(26, 188, 156, .3)",
      customClass: {
        title: "custom-swal-title",
      },
    });
  };

  return (
    <div className="mt-10 mb-10">
      <PageHeading
        title="Contact Me"
        subTitile="To contact me, fill the form below and click the send message button. Or you can email or call me directly. Below you will find my email and phone number"
      />

      <div className="mt-10">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                placeholder="Full Name "
                className="py-3 bg-[#ecf0f1] px-3  border-gray-300 border dark:text-white dark:bg-gray-800  dark:border-gray-600  outline-none text-sm rounded-md"
                {...register("fullName")}
              />
              <p className="text-red-500 text-xs dark:text-red-400 font-semibold">
                {errors.fullName?.message}
              </p>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                {...register("email")}
                placeholder="Email"
                className="py-3 bg-[#ecf0f1] px-3  border-gray-300 border dark:text-white dark:bg-gray-800  dark:border-gray-600  outline-none text-sm rounded-md"
              />
              <p className="text-red-500 text-xs dark:text-red-400 font-semibold">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <div>
            <textarea
              className="py-5 bg-[#ecf0f1] px-5 resize-none  border-gray-300 border  dark:text-white dark:bg-gray-800 dark:border-gray-600  outline-none text-sm rounded-md w-full h-52"
              {...register("message")}
              placeholder="Message"
            ></textarea>
            <p className="text-red-500 text-xs dark:text-red-400 font-semibold">
              {errors.message?.message}
            </p>
          </div>
          <button
            type="submit"
            className="py-2 px-3 w-full rounded-md bg-[#1abc9c] text-white  flex items-center justify-center gap-1 cursor-pointer"
          >
            <span className="font-bold">Send Message</span>
            {!loading && <FiSend />}
            {loading && (
              <FcProcess className="text-red-500 text-[20px] animate-spin" />
            )}
          </button>
        </form>
      </div>
      <div className="my-10 sm:my-12 flex items-center gap-2">
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700"></div>
        <h1 className="dark:text-gray-300 text-gray-700 italic font-semibold">
          OR
        </h1>
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="">
        <ContactCards />
      </div>
    </div>
  );
};

export default Contact;
