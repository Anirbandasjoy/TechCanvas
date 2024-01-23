import Banner from "./Banner/Banner";
import Skills from "../../components/Skills/Skills";
import Projects from "../../shared/Projects/Projects";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

const Home = () => {
  return (
    <div className="dark:text-white">
      <Banner />
      <Skills />
      <Projects />
      <ContactInfo />
    </div>
  );
};

export default Home;
