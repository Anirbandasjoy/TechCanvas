import { ScrollRestoration } from "react-router-dom";
import Path from "../../../components/path/Path";
// import projectVideo from "../../../assets/videos/3.mp4";
import ProjectTItle from "../../../components/ProjectTitle/ProjectTItle";
const ProjectThreePage = () => {
  return (
    <div className="mt-4 mb-20">
      <ScrollRestoration />
      <Path projectPath="/techcanvas" projectName="TechCanvas" />
      <div className="w-full sm:h-96 h-52 bg-cover mt-4 overflow-hidden dark:border-b-2  dark:border-b-gray-500">
        <div className="w-full bg-cover h-full  projectCard3 "></div>
        {/* <video
          src={projectVideo}
          className="w-full h-full"
          loop
          autoPlay
          muted
          controlsList="nodownload"
        /> */}
      </div>
      <div className="my-7">
        <ProjectTItle
          prevURL="http://joydas.vercel.app"
          srcURL="https://github.com/Anirbandasjoy/TechCanvas"
          title="TechCanvas"
          subTitile="TechCanvas is a portfolio website. Through it I present my work. I present all my personal and educational information through this website."
        />
      </div>
      <div className="mt-20 space-y-6">
        <div className="flex items-center flex-col sm:flex-row gap-3">
          <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
            Project Overview
          </h1>
          <div className="h-[2px] w-8/12 bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
          TechCanvas website is personal portfolio website anyone can contact me
          from this website. You can visit my various social media websites.
          There is a process to get in touch with me through the contact form. I
          have presented my work on this website which you can visit. And source
          code and live link are added
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-[21px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Purpose of TechCanvas
        </h1>
        <div className="mt-8">
          <ul className=" list-decimal ml-6 sm:space-y-10 space-y-7">
            <li className="space-y-1 dark:text-gray-200  ">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Project presentation :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                I have added my top projects on this website. And anyone can
                visit the project if they want. The project's source code is
                made public. And live link is added.
              </p>
            </li>
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                The process of contacting me :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                Anyone can contact me through TechCanvas. All my social media
                accounts are listed here. Anyone can visit them if they want.
                There is a process for contacting us through the contact form.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-[21px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Project Stacks
        </h1>
        <div className="mt-7 flex flex-wrap sm:gap-3 gap-2">
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            TypeScript
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            React
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            TailwindCSS
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Shadcn/ui
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectThreePage;
