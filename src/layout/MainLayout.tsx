import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full lg:max-w-3xl mx-auto xl:max-w-3xl 2xl:max-w-4xl px-2 lg:px-0">
      <Navbar />
      {<Outlet />}
    </div>
  );
};

export default MainLayout;
