import Heading from "../../../components/Heading/Heading";
import Skill from "./Skill";
const Skills = () => {
  return (
    <div className="sm:mt-28 mt-16">
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
