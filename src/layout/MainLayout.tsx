import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import CodeTypingAnimation from "../components/animation/Code";

const MainLayout = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-bl 
      from-[#cdf7ee] via-[#f7f7f7] to-[#d4fff6] 
      dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]
      transition-colors duration-300 relative"
    >
      <div className="w-full lg:max-w-2xl xl:max-w-2xl 2xl:max-w-3xl mx-auto px-4 lg:px-0">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <div className="2xl:block hidden">
        <CodeTypingAnimation />
      </div>
    </div>
  );
};

export default MainLayout;
