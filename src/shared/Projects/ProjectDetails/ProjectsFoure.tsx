import { ScrollRestoration } from "react-router-dom";
import Path from "../../../components/path/Path";
// import projectVideo from "../../../assets/videos/3.mp4";
import ProjectTItle from "../../../components/ProjectTitle/ProjectTItle";
const ProjectsFoure = () => {
  return (
    <div className="mt-4 mb-20">
      <ScrollRestoration />
      <Path projectPath="/novanexus" projectName="NovaNexus" />
      <div className="w-full sm:h-96 h-52 bg-cover mt-4 overflow-hidden dark:border-b-2  dark:border-b-gray-500">
        <div className="w-full bg-cover h-full  projectCard4 "></div>
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
          prevURL="https://novanexus.vercel.app"
          srcURL="https://github.com/Anirbandasjoy/NovaNexus-Client"
          title="NovaNexus"
          subTitile="NovaNexus is a social news feed website. Through which people can share different types of news. Can edit delete own post. If you want, you can save posts made by others."
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
          NovaNexus is a social news feed website. Through which people can
          share different types of news. You can delete and edit your post. If
          you want, you can save posts made by others. This website has an admin
          dashboard which only admin can access. There is an option to manage
          users and manage posted news from the dashboard. Admin can see all the
          information through the chart.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Key Features
        </h1>
        <div className="mt-8">
          <ul className=" list-decimal ml-6 space-y-7">
            <li className="space-y-1 dark:text-gray-200  ">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Like comment and share system on the news post :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                There is a complete system to like, comment and share the posted
                news. Users must be logged in to the system to like, comment and
                share. There is a system to see how many likes and comments are
                read on a post and there is a process to visit the profile of
                the user who has liked and commented. Users can share news posts
                on WhatsApp, Linkedin, Facebook and other social media if they
                want.
              </p>
            </li>
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                The process of posting news and saving any post :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                There is this system where users can post news if they want.
                There must be a login for that. And user can save any news.
                Later he can easily see the news.
              </p>
            </li>
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                User profile :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                A user will have his own profile which he can visit himself or
                someone else. Users can set and update their own profile name,
                profile image, background image. The user's own posts will
                appear on his profile page.
              </p>
            </li>
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Admin Dashboard :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                There is a separate dashboard for admin. Admin can perform
                different functions including manage user manage news. Like he
                can verify any user if he wants. There is a system of removal.
                Anyone can remove news.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 space-y-6">
        <div className="">
          <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
            Future plans
          </h1>
        </div>
        <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
          In this project I will use data structures and algorithms in the
          backend for performance optimization at the next stage. To make the
          operation of the website faster.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
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
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Express.js
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            MongoDB
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFoure;
