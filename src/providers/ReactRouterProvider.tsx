import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@components/layout/RootLayout";
import HomePage from "@pages/home/HomePage";
import LikePage from "@pages/like/LikePage";
import DetailPage from "@pages/detail/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "like",
        element: <LikePage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

const ReactRouterProvider = () => <RouterProvider router={router} />;

export default ReactRouterProvider;
