import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import ToggoleBtn from "./ToggoleBtn/ToggoleBtn";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (isOpen) {
  //         document.body.style.overflow = "hidden";
  //       } else {
  //         document.body.style.overflow = "auto";
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [isOpen]);

  return (
    <div className="flex justify-between items-center z-30 py-3">
      <div>
        <h1 className="text-[12px] sm:text-[16px] bg-[#1abc9c] p-2 px-3 rounded-md text-white font-bold">
          AJ
        </h1>
      </div>
      {/* dasktop navbar */}
      <div className="hidden sm:block">
        <div className="flex font-semibold items-center justify-center h-full gap-8 dark:text-gray-300 ">
          <Link to="/" className="py-2">
            Home
          </Link>
          <Link to="/about" className="py-2">
            About
          </Link>
          <Link to="/portfolio" className="py-2">
            Portfolio
          </Link>
          <Link to="/contact" className="py-2">
            Contact
          </Link>
        </div>
      </div>
      {/* mobail navbar */}
      {isOpen && (
        <div className="fixed top-0 left-0 sm:hidden w-full h-full bg-white dark:text-gray-300 dark:bg-slate-900 opacity-95 z-50">
          <div className=" flex justify-end m-3 dark:text-gray-300">
            <IoMdClose
              className="text-4xl border-2 right-0 sm:hidden z-40 dark:border-gray-700 dark:text-gray-300 rounded-md p-1"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 font-semibold h-[calc(100vh-120px)]">
            <Link to="/" className="py-2">
              Home
            </Link>
            <Link to="/about" className="py-2">
              About
            </Link>
            <Link to="/portfolio" className="py-2">
              Portfolio
            </Link>
            <Link to="/contact" className="py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <ToggoleBtn />
        <RxHamburgerMenu
          className="text-4xl border-2 sm:hidden z-40 dark:border-gray-700 dark:text-gray-300 rounded-md p-1"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
