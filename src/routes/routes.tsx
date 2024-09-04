import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ProjectThreePage from "../shared/Projects/ProjectDetails/ProjectThreePage";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProjectsFoure from "../shared/Projects/ProjectDetails/ProjectsFoure";
import StayManagerProject from "../shared/Projects/ProjectDetails/StayManager";

export const router = createBrowserRouter([
  {
    path: "/",
    element: MainLayout(),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "techcanvas",
        element: <ProjectThreePage />,
      },
      {
        path: "novanexus",
        element: <ProjectsFoure />,
      },
      {
        path: "stay-manager",
        element: <StayManagerProject />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
