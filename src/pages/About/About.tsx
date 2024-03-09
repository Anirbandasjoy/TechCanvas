import PageHeading from "../../components/PageHeading/PageHeading";

const About = () => {
  return (
    <div className="my-10">
      <PageHeading
        title="About Me"
        subTitile="As a front-end developer, I can play an important role in creating attractive, user-friendly interfaces that bring websites to life. My skills in HTML, CSS, JavaScript, TypeScript, and React are the building blocks that transform design ideas into interactive and visually appealing digital experiences.I am studying in Moulvibazar Polytechnic Institute, Department of Computer Science & Technology."
      />
      <div className="mt-20 space-y-6">
        <div className="flex items-center flex-col sm:flex-row gap-3">
          <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
            My programming journey
          </h1>
          <div className="h-[2px] sm:w-7/12 w-11/12 bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
          My journey to learn programming began. My diploma is from first
          semester of engineering life. I had very little understanding of
          programming at first. In the first semester when I was studying very
          much in theory base, I learned from my friends elder brothers that if
          the students of computer science do not have skills, they will not be
          able to do anything in life. Since then I slowly started learning
          programming from YouTube after hearing from my elder brothers. Then I
          follow many playlists like Anisul Islam, Sumit Saha. Then complete my
          Programming Hero Level 1 web development course. This was my journey
          to start programming in short
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Educational qualifications
        </h1>
        <div className="mt-8">
          <ul className=" list-decimal ml-6 space-y-1">
            <li className="space-y-1 dark:text-gray-200  ">
              <h1 className="sm:text-[17px] text-[16px] font-semibold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Moulvibazar Polytechnic Institute
              </h1>
            </li>
            <li className="space-y-1 dark:text-gray-200  ">
              <h1 className="sm:text-[17px] text-[16px] font-semibold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Computer science and technology(cst) 2020-2024
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
