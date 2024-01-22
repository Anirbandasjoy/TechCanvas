type PageHeadingProps = {
  title: string;
  subTitile: string;
};
const PageHeading = ({ title, subTitile }: PageHeadingProps) => {
  return (
    <div className="space-y-2  sm:text-left  mx-auto sm:mx-0">
      <h1 className="text-2xl font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px] sm:text-4xl">
        {title}
      </h1>
      <p className="text-xs sm:leading-6 leading-5 sm:text-[15px] dark:text-gray-300 text-gray-500">
        {subTitile}
      </p>
    </div>
  );
};

export default PageHeading;
