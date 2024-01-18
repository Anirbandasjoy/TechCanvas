import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
const MainLayout = () => {
  return (
    <div className="w-full lg:max-w-2xl mx-auto xl:max-w-2xl 2xl:max-w-3xl px-2 lg:px-0">
      <Navbar />
      {<Outlet />}
    </div>
  );
};

export default MainLayout;
