import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import bannerImage from "../../../assets/anirban-a35639a7.jpg";
const Banner = () => {
  return (
    <div className="mt-16">
      <div>
        <div className="flex sm:justify-between items-center flex-col-reverse sm:flex-row sm:items-end ">
          <div className="text-center mt-4 sm:mt-0 sm:text-start">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-[.2rem] text-gray-800 dark:text-gray-300">
              Joy Das
            </h1>
            <p className="text-sm mt-1 sm:mt-2 tracking-[.2rem] font-semibold text-red-300 dark:text-red-300">
              Front-end Developer
            </p>
          </div>
          <div className="">
            <img
              src={bannerImage}
              alt="bannerImage"
              className="w-32 rounded-md "
            />
          </div>
        </div>

        <h3 className="sm:mt-14 mt-6  text-sm text-justify text-gray-600 sm:text-[15px] w-5/6 mx-auto sm:mx-0  dark:text-gray-300">
          Welcome to my portfolio! I am Jai Das, a passionate front-end
          developer with a strong focus on the MERN (MongoDB, Express.js, React,
          Node.js) stack. I am always ready to create attractive and
          user-friendly interface.
        </h3>
        <div className="mt-8 flex justify-between items-center flex-col sm:flex-row gap-7 sm:gap-0">
          <div className="space-x-2  text-center sm:text-left">
            <button className="bg-[#1abc9c] text-white font-bold  py-3 px-6 rounded-md text-sm tracking-[1px]">
              Download_Resume
            </button>
            <button className="bg-[#1abc9c] bg-transparent text-gray-700 border-gray-200 hover:bg-slate-600 hover:text-gray-300 duration-500 dark:text-gray-300 border font-bold py-3 px-6 rounded-md text-sm tracking-[1px]">
              Github
            </button>
          </div>
          <div className="flex items-center  gap-3 text-3xl">
            <div className="hover:bg-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
              <FaGithub />
            </div>
            <div className="hover:bg-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
              <FaFacebook />
            </div>
            <div className="hover:bg-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
              <FaLinkedin />
            </div>

            <div className="hover:bg-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
