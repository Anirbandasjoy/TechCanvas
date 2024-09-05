import { ScrollRestoration } from "react-router-dom";
import Path from "../../../components/path/Path";
// import projectVideo from "../../../assets/videos/3.mp4";
import ProjectTItle from "../../../components/ProjectTitle/ProjectTItle";
const StayManagerProject = () => {
  return (
    <div className="mt-4 mb-20">
      <ScrollRestoration />
      <Path projectPath="/stay-manager" projectName="Staymanager" />
      <div className="w-full sm:h-96 h-52 bg-cover mt-4 overflow-hidden dark:border-b-2  dark:border-b-gray-500">
        <div className="w-full bg-cover h-full  projectCard5 "></div>
      </div>
      <div className="my-7">
        <ProjectTItle
          prevURL="https://staymanager404.vercel.app"
          srcURL="https://github.com/Anirbandasjoy/StayManager-Client125"
          title="Staymanager"
          subTitile="Stay Manager is a hostel management platform where college students can make bookings and follow admin's notices on notice boards and like comments."
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
          Stay Manager is a hostel management platform that provides users with
          essential information about hostel amenities including tea, coffee,
          Wi-Fi, air conditioning and more. The site has a gallery that
          showcases different rooms, allowing visitors to explore accommodation
          options. Through this website you can book a hostel at a seat rent of
          Tk 800 per month. There is admin dashboard to manage booking request
          and manage user student using which admin can manage everything. The
          hostel has a notice board for students and a half where admin can post
          and users can see and like and comment.
        </p>
      </div>

      <div className="mt-20">
        <h1 className="text-[22px]  font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Authntication
        </h1>
        <ul className=" list-decimal ml-6 mt-6 space-y-7">
          <li className="space-y-1 dark:text-gray-200">
            <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
              Email & password:
            </h1>
            <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
              Email & password Authntication create user cookie.
            </p>
          </li>
          <li className="space-y-1 dark:text-gray-200">
            <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
              Google & Github
            </h1>
            <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
              google & github use Authntication use Cookie Passport.js
            </p>
          </li>
          <li className="space-y-1 dark:text-gray-200">
            <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
              Admin email:
            </h1>
            <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
              admin@gmail.com
            </p>
          </li>
          <li className="space-y-1 dark:text-gray-200">
            <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
              Admin password:
            </h1>
            <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
              12345A@
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-20">
        <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Key Features
        </h1>
        <div className="mt-8">
          <ul className=" list-decimal ml-6 space-y-7">
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Sit booking stystem :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                If the user wants to book a seat, then he has to go to the
                details page of the room. Each room has 3 seats. To book a
                user's seat, a booking request must be sent. Then if the admin
                waits for that user's booking request, then the user will get
                access to that seat.
              </p>
            </li>
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Portal join system :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                If a user is booking any seat of this hostel, then the user can
                go to his profile and send the portal join request to the admin.
                If the admin accepts then the user will get access to the notice
                board.
              </p>
            </li>
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Admin Dashboard :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                There is a specific dashboard for admin, from the dashboard
                admin can manage user, student, portal request, seat booking
                request.
              </p>
            </li>
            <li className="space-y-1 dark:text-gray-200  ">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Notice board :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
                Admin can post on notice board and can delete and update that
                post. And students can like, comment and share this notice.
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
          In the next stage of the Stay Manager project, the focus will be on
          optimizing the backend for improved performance. This will involve the
          strategic use of data structures and algorithms to streamline data
          processing, reduce latency, and enhance the overall speed of the
          website. By implementing efficient algorithms, the goal is to make the
          platform more responsive and capable of handling increased traffic,
          ultimately providing a faster and more reliable user experience.
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
            Next.js
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Redux-toolkit
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Rtk-query
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
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Mongoose
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StayManagerProject;
