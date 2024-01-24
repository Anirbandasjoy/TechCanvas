import PageHeading from "../../components/PageHeading/PageHeading";
import Tabs from "./Tabs";

const Portfolio = () => {
  return (
    <div className="my-10">
      <PageHeading
        title="Portfolio"
        subTitile="Here are some of the projects I've done so far. When I complete a project that. I add that project here. I have completed three projects so far. I am doing more projects for learning purposes and will add them here in the future."
      />
      <div className="mt-10">
        <Tabs />
      </div>
    </div>
  );
};

export default Portfolio;
