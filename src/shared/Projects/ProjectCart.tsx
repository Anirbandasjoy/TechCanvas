import { VscSourceControl } from "react-icons/vsc";
import { projectsData } from "./ProjectData";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
const ProjectCart = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {projectsData?.map((project) => {
        return (
          <div
            key={project?.id}
            className="space-y-5 flex-1  bg-white dark:bg-slate-700 dark:border-gray-500  dark:border pb-8 shadow-sm"
          >
            <div className="w-full   overflow-hidden dark:border-b-2 dark:border-b-gray-500">
              <video
                src={project?.projectVideo}
                className="w-full h-full "
                loop
                autoPlay
                muted
              />
            </div>
            <div className="flex justify-between items-center px-4">
              <Link to={project?.preview}>
                <h1 className="text-xl hover:text-[#1abc9c] dark:hover:text-[#1abc9c] duration-75 sm:text-[21px] font-semibold text-gray-700 dark:text-gray-300">
                  {project?.name}
                </h1>
              </Link>
              <div className="flex items-start gap-4">
                <Link to={project?.preview}>
                  <FiLink className="font-bold text-[21px] cursor-pointer hover:text-[#1abc9c] duration-100" />
                </Link>
                <Link to={project?.source}>
                  <VscSourceControl className="font-bold text-[21px] cursor-pointer hover:text-[#1abc9c] duration-100" />
                </Link>
              </div>
            </div>
            <p className="text-xs px-4 sm:text-sm text-gray-600 dark:text-gray-300">
              {project?.description}
            </p>
            <div className="flex flex-wrap  gap-2 text-[10px]  text-gray-400 w-5/6 items-center px-4 ">
              {project?.technologs.map((technology) => {
                return (
                  <div key={technology?.id}>
                    <h1 className="bg-[#1abc9c] cursor-pointer font-bold rounded-r-md text-white py-[2px] px-[5px]">
                      {technology?.technology}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCart;
