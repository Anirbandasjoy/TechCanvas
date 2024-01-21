import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ProjectOne from "../shared/Projects/ProjectDetails/ProjectOne";
import ProjectTwoPage from "../shared/Projects/ProjectDetails/ProjectTwoPage";
import ProjectThreePage from "../shared/Projects/ProjectDetails/ProjectThreePage";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: MainLayout(),
    errorElement: NotFoundPage(),
    children: [
      {
        index: true,
        element: Home(),
      },
      {
        path: "touristtreasuresBD",
        element: ProjectOne(),
      },
      {
        path: "tour-sport",
        element: ProjectTwoPage(),
      },
      {
        path: "techcanvas",
        element: ProjectThreePage(),
      },
      {
        path: "portfolio",
        element: Portfolio(),
      },
      {
        path: "about",
        element: About(),
      },
    ],
  },
]);
