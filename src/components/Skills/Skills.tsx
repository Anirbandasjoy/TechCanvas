import Heading from "../Heading/Heading";
import Skill from "./Skill";
const Skills = () => {
  return (
    <div className="sm:mt-24 mt-10">
      <Heading
        title="My Skills"
        subTitile="I have mastered all the below mentioned skills. I use them to build web applications"
      />
      <div className="mt-10">
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
