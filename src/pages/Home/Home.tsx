import Banner from "./Banner/Banner";
import Skills from "../../components/Skills/Skills";
import Projects from "../../shared/Projects/Projects";

const Home = () => {
  return (
    <div className="dark:text-white">
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
