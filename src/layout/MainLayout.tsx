import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
const MainLayout = () => {
  return (
    <div className="w-full lg:max-w-2xl mx-auto xl:max-w-2xl 2xl:max-w-3xl px-4 lg:px-0">
      <Navbar />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default MainLayout;
