import Path from "../../../components/path/Path";
// import projectVideo from "../../../assets/videos/2.mp4";
import ProjectTItle from "../../../components/ProjectTitle/ProjectTItle";

const ProjectTwoPage = () => {
  return (
    <div className="mt-4">
      <Path projectPath="/tour-sport" projectName="TourSport" />
      <div className="w-full sm:h-96 h-52 bg-cover mt-4 overflow-hidden dark:border-b-2  dark:border-b-gray-500">
        <div className="w-full bg-cover h-full  projectCard2 "></div>
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
          prevURL="https://tour-sport.web.app"
          srcURL="https://github.com/Anirbandasjoy/tour-sport-client"
          title="Tour Sport"
          subTitile="It is a tour-selling platform. Users can buy packages from here to give tours to different places. TailwindCSS, Flow Bite, React.js, Tan Stack, Firebase, and MongoDB was used to build this application"
        />
      </div>
    </div>
  );
};

export default ProjectTwoPage;
