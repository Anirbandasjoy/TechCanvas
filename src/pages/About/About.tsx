import PageHeading from "../../components/PageHeading/PageHeading";

const About = () => {
  return (
    <div className="my-10">
      <PageHeading
        title="About Me"
        subTitile="I am a Web Application Developer with a strong focus on delivering efficient and effective web solutions. I’m passionate about solving real-world problems through clean, scalable code and always strive to create better, smarter, and user-friendly applications that make a difference."
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
          to start programming in short.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-[22px] font-extrabold text-gray-700 rounded-sm dark:text-gray-300 tracking-[1px]">
          Educational qualifications
        </h1>
        <div className="mt-7">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6  space-y-4">
            <div>
              <h2 className="text-[17px] sm:text-[18px] font-bold text-gray-800 dark:text-gray-200 tracking-wide">
                🎓 Moulvibazar Polytechnic Institute
              </h2>
              <p className="text-[15px] sm:text-[16px] text-gray-600 dark:text-gray-300">
                Department of Computer Science & Technology (CST)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[15px] sm:text-[16px] text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-semibold">Year of Completion:</span> 2024
              </p>
              <p>
                <span className="font-semibold">CGPA:</span> 3.53
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
