import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="h-[1px] w-full bg-gray-300 dark:bg-gray-700"></div>
      <div className="flex sm:justify-between py-3 sm:py-1 items-center flex-col-reverse justify-center sm:flex-row">
        <div className="sm:my-7 dark:text-gray-300 my-4 text-sm text-gray-700 tracking-[1px] font-semibold">
          CopyRight by{" "}
          <Link
            className="text-[#1abc9c]  font-semibold"
            to="https://joydas.vercel.app"
          >
            JoyDas
          </Link>{" "}
          @2024
        </div>
        <div>
          <div className="flex items-center  gap-3 text-3xl">
            <Link to="mailto:joy600508@gmail.com">
              <div className="hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
                <MdAlternateEmail />
              </div>
            </Link>
            <Link to="https://wa.link/t60z05">
              <div className="hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md">
                <FaWhatsapp />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
