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
              <p className="text-[18px] mt-1  sm:mt-2 tracking-[1.2px] dark:text-gray-200 font-bold text-gray-700">
                Web Application Developer
              </p>
            </div>
            <h3 className="leading-5 text-sm text-gray-600 sm:text-[16px] w-5/6 mx-auto sm:mx-0 dark:text-gray-300 whitespace-pre-line">
              Welcome to my portfolio! I am Joy Das, a passionate Web
              Application Developer. I build scalable, efficient, and
              user-friendly applications for the modern web. With expertise in
              both frontend and backend technologies, I create seamless UX. I'm
              also a skilled problem solver committed to clean and maintainable
              code.
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
            <a
              target="_blank"
              href="https://asset.cloudinary.com/dompv4jfd/946639ecd3d237b1cbe4022c20779355"
            >
              <button className="bg-[#1abc9c] text-white font-bold  py-3 px-6 rounded-md text-xs sm:text-sm tracking-[1px] uppercase">
                Download CV
              </button>
            </a>
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
            <Link to="https://www.linkedin.com/in/anirbandasjoy404">
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
