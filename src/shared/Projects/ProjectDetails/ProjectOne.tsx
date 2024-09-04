import Path from "../../../components/path/Path";
// import projectVideo from "../../../assets/videos/1.mp4";
import ProjectTItle from "../../../components/ProjectTitle/ProjectTItle";

const ProjectOne = () => {
  return (
    <div className="my-4">
      <Path
        projectPath="/touristtreasuresBD"
        projectName="TouristTreasuresBD"
      />
      <div className="w-full sm:h-96 h-52 bg-cover mt-4 overflow-hidden dark:border-b-2  dark:border-b-gray-500">
        <div className="w-full bg-cover h-full  projectCard1 "></div>
      </div>
      <div className="my-7">
        <ProjectTItle
          prevURL="https://assignment12-848ad.web.app"
          srcURL="https://github.com/Anirbandasjoy/TouristTreasuresBD-Client"
          title="TouristTreasuresBD"
          subTitile="It is a tour-selling platform. Users can buy packages from here to give tours to different places. TailwindCSS, Flow Bite, React.js, Tan Stack, Firebase, and MongoDB was used to build this application"
        />
      </div>
    </div>
  );
};

export default ProjectOne;
