import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/layout/RootLayout";
import HomePage from "../pages/home/HomePage";
import LikePage from "../pages/like/LikePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "like",
        element: <LikePage />,
      },
    ],
  },
]);

const ReactRouterProvider = () => <RouterProvider router={router} />;

export default ReactRouterProvider;
