import { Line } from "rc-progress";
import { skillData } from "./skillsData";
import OtherSkill from "./OtherSkill";

const Skill = () => {
  return (
    <div className="mb-20">
      <div className="grid sm:grid-cols-2 sm:gap-6 gap-5 grid-cols-1 ">
        {skillData?.map((skil) => {
          return (
            <div
              key={skil?.id}
              className="bg-white dark:bg-slate-700 border gap-8 dark:border-gray-500   border-gray-300 py-5 px-4 w-full h-7 flex items-center"
            >
              <Line
                trailWidth={2}
                percent={skil?.percent}
                strokeWidth={2}
                strokeColor="#1abc9c"
              />
              <div className="relative">
                <h2 className="py-1 px-2 text-nowrap rounded-sm bg-[#1abc9c] text-white text-xs">
                  {skil?.technology}
                </h2>
                <p className="text-[10px] bg-[#e67e22] text-white font-semibold absolute p-[4px] -right-5  sm:-right-8 rounded-sm -top-7 sm:-top-6">
                  {skil?.level}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <OtherSkill />
    </div>
  );
};

export default Skill;
