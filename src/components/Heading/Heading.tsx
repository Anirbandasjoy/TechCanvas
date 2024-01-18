type HeadingProps = {
  title: string;
  subTitile: string;
};
const Heading = ({ title, subTitile }: HeadingProps) => {
  return (
    <div className="space-y-2 text-center sm:text-left w-5/6 sm:w-full mx-auto sm:mx-0">
      <h1 className="text-xl font-bold text-gray-700 dark:text-gray-300 tracking-[1px] sm:text-3xl">
        {title}
      </h1>
      <p className="text-xs sm:text-[15px] dark:text-gray-300 text-gray-500">
        {subTitile}
      </p>
    </div>
  );
};

export default Heading;
