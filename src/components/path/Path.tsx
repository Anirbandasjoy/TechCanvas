import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Path = ({
  projectPath,
  projectName,
}: {
  projectPath: string;
  projectName: string;
}) => {
  return (
    <div className="flex gap-1 font-semibold text-[15px] text-gray-700 dark:text-gray-300 items-center">
      <Link className="hover:underline text-xs sm:text-sm font-semibold" to="/">
        Home
      </Link>
      <MdOutlineKeyboardArrowRight />
      <Link
        className="hover:underline text-xs sm:text-sm font-semibold"
        to="/portfolio"
      >
        Portfolio
      </Link>
      <MdOutlineKeyboardArrowRight />
      <Link
        className="hover:underline text-xs sm:text-sm font-semibold"
        to={projectPath}
      >
        {projectName}
      </Link>
      <MdOutlineKeyboardArrowRight />
    </div>
  );
};

export default Path;
