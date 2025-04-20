import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ToggoleBtn from "../../components/ToggoleBtn/ToggoleBtn";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center z-30 py-6">
      <div>
        <NavLink
          to="/"
          className="text-[12px] sm:text-[16px] bg-[#1abc9c] p-2 px-3 rounded-md text-white font-[750] cursor-pointer"
        >
          AJ
        </NavLink>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:block">
        <div className="flex font-semibold items-center justify-center h-full gap-8 dark:text-gray-300">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative  transition-all duration-300 ${
                  isActive
                    ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#1abc9c] after:rounded-full after:animate-slideIn"
                    : "text-gray-600 dark:text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="fixed top-0 left-0 sm:hidden w-full h-full bg-white dark:text-gray-300 dark:bg-slate-900 opacity-95 z-50">
          <div className="flex justify-end m-3 dark:text-gray-300">
            <IoMdClose
              className="text-4xl border-2 dark:border-gray-700 dark:text-gray-300 rounded-md p-1"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 font-semibold h-[calc(100vh-120px)]">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `relative py-2 transition-all duration-300 ${
                    isActive
                      ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#1abc9c] after:rounded-full after:animate-slideIn"
                      : "text-gray-600 dark:text-gray-300"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Toggle and Hamburger */}
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
