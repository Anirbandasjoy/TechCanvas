import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import bannerImage from "../../../assets/anirban-a35639a7.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="mt-10">
      <div>
        <div className="flex sm:justify-between items-center flex-col-reverse sm:flex-row sm:items-start ">
          <div className="text-center mt-4 space-y-3 w-full sm:w-5/6  sm:mt-0 sm:text-start">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-[.2rem] text-gray-800 dark:text-gray-300">
                Joy Das
              </h1>
              <p className="text-[16px] mt-1 sm:mt-2 tracking-[1.5px] dark:text-gray-200 font-semibold text-gray-700">
                MERN Stack Developer
              </p>
            </div>
            <h3 className=" leading-5 text-sm text-justify text-gray-600 sm:text-[15px] w-5/6 mx-auto sm:mx-0  dark:text-gray-300">
              Welcome to my portfolio! I am Joy Das, a passionate MERN Stack
              developer with a strong focus on the Fullstack development. I am
              always ready to create attractive and user-friendly interface.
            </h3>
          </div>
          <div className="">
            <img
              src={bannerImage}
              alt="bannerImage"
              className="w-36  rounded-md "
            />
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center flex-col sm:flex-row gap-7 sm:gap-0">
          <div className="space-x-2  text-center sm:text-left">
            <Link to="https://drive.google.com/uc?export=download&id=1e3em19DadB4UHB_sfNuv0XNg1Dfq-Bas">
              <button className="bg-[#1abc9c] text-white font-bold  py-3 px-6 rounded-md text-xs sm:text-sm tracking-[1px]">
                Download_Resume
              </button>
            </Link>
            <Link to="https://github.com/Anirbandasjoy">
              <button className="bg-[#1abc9c] bg-transparent text-gray-700 border-gray-200 hover:bg-slate-600 hover:text-gray-300 duration-500 dark:text-gray-300 border font-bold py-3 px-6 rounded-md text-xs sm:text-sm tracking-[1px]">
                Github
              </button>
            </Link>
          </div>
          <div className="flex items-center  gap-3 text-3xl">
            <Link to="https://github.com/Anirbandasjoy">
              <div className="hover:bg-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
                <FaGithub />
              </div>
            </Link>
            <Link to="https://web.facebook.com/anirban.dasjoy">
              <div className="hover:bg-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
                <FaFacebook />
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/joy-das-70b3b631b">
              <div className="hover:bg-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
                <FaLinkedin />
              </div>
            </Link>

            <Link to="https://wa.link/t60z05">
              <div className="hover:bg-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
                <FaWhatsapp />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
