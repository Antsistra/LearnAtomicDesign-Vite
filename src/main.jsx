import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/pages/login.jsx";
import RegisterPage from "./components/pages/register.jsx";
import ErrorPage from "./components/pages/404";
import LandingPage from "./components/pages/landing";
import MainPage from "./components/pages/MainPage";
import DetailProducts from "./components/pages/detailsProduct";
import testPage from "./components/pages/TestPage";
import TestPage from "./components/pages/TestPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/Main",
    element: <MainPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProducts />,
  },
  {
    path: "/testPage",
    element: <TestPage></TestPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
