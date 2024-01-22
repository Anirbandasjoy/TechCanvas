import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";

type ProjectTitleProps = {
  title: string;
  subTitile: string;
  prevURL: string;
  srcURL: string;
};
const ProjectTItle = ({
  title,
  subTitile,
  prevURL,
  srcURL,
}: ProjectTitleProps) => {
  return (
    <div className="sm:space-y-5  space-y-4 text-left  mx-auto sm:mx-0">
      <div className="flex justify-between flex-col sm:flex-row gap-3 sm:gap-0 ">
        <h1 className="text-xl font-bold text-gray-700 dark:text-gray-300 tracking-[1px] sm:text-3xl">
          {title}
        </h1>
        <div className="space-x-2 flex  items-center">
          <Link
            to={prevURL}
            className="py-1 sm:py-2 flex  gap-2 uppercase text-[10px] sm:text-xs cursor-pointer font-semibold px-3 sm:px-4 bg-[#1abc9c] text-white rounded-sm shadow-sm"
          >
            <button>Preview</button>
            <FiLink className="font-bold text-[14px] cursor-pointer  duration-100" />
          </Link>
          <Link
            to={srcURL}
            className="py-1 sm:py-2 flex  gap-2 uppercase text-[10px] sm:text-xs cursor-pointer font-semibold px-3 sm:px-4 bg-yellow-500 text-gray-900 rounded-sm shadow-sm"
          >
            <button>Source</button>
            <FiLink className="font-bold text-[14px] cursor-pointer  duration-100" />
          </Link>
        </div>
      </div>
      <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
        {subTitile}
      </p>
    </div>
  );
};

export default ProjectTItle;
