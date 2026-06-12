import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import Services from "./Pages/Services";
import Solution from "./Pages/Solution";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "solution", element: <Solution /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routers} />;
}
