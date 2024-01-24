import { Tab } from "@headlessui/react";
import ProjectCart from "../../shared/Projects/ProjectCart";
import { BiErrorAlt } from "react-icons/bi";

const Tabs = () => {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="space-x-2">
          <Tab className="outline-none rounded-sm">
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-[#1abc9c] text-white  px-5 py-2  rounded-sm font-bold  "
                    : "bg-white  px-5 py-2  rounded-sm font-bold text-gray-700 border-gray-200 border dark:bg-gray-800 dark:border-gray-600  dark:text-gray-300"
                }
              >
                All
              </button>
            )}
          </Tab>
          <Tab className="outline-none rounded-sm">
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-[#1abc9c] text-white   px-5 py-2 rounded-sm font-bold  "
                    : "bg-white   px-5 py-2 rounded-sm font-bold  text-gray-700 border-gray-200 border dark:bg-gray-800 dark:border-gray-600  dark:text-gray-300"
                }
              >
                Web App
              </button>
            )}
          </Tab>
          <Tab className="outline-none rounded-sm">
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-[#1abc9c] text-white  px-5 py-2 rounded-sm font-bold  "
                    : "bg-white   px-5 py-2  rounded-sm font-bold text-gray-700 border-gray-200 border dark:bg-gray-800 dark:border-gray-600  dark:text-gray-300"
                }
              >
                Mobile App
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="mt-10">
              <ProjectCart />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <div className="mt-10">
              <ProjectCart />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="mt-10  lg:h-[calc(100vh-400px)] xl:h-[calc(100vh-471px)] md:h-[calc(100vh-200px)] h-[calc(100vh-300px)]">
              <div className="space-y-2 sm:h-52 h-40 flex bg-red-500 w-full flex-col justify-center items-center">
                <BiErrorAlt className="text-white text-3xl mx-auto" />
                <h1 className="text-lg text-white">Not Found Application</h1>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
