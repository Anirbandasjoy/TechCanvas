import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

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
    ],
  },
]);
