import Heading from "../../components/Heading/Heading";
import ProjectCart from "./ProjectCart";

const Projects = () => {
  return (
    <div className="mt-10 sm:mt-28 mb-16">
      <Heading
        title="Pojects"
        subTitile="I have created a few of these projects now. These are the best projects I've ever done."
      />
      <div className="mt-10">
        <ProjectCart />
      </div>
    </div>
  );
};

export default Projects;
