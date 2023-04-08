import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Publication } from "../pages/publication";
import { DefaultLayout } from "../layouts/defaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "publication",
        element: <Publication />,
      },
    ],
  },
]);
