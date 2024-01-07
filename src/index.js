import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

const Index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {},
    {
      path: "/contact",
      element: <Contacts />,
    },
  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
