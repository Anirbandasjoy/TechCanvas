import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <HiOutlineEmojiSad className="text-6xl text-red-400 animate-bounce" />
        <h1 className="text-3xl text-red-400 font-bold tracking-[1px]">
          Page Not Found
        </h1>
        <Link to="/">
          <button className="bg-[#1abc9c] py-2 px-5 text-sm mt-2 font-bold text-gray-200 rounded-md">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
