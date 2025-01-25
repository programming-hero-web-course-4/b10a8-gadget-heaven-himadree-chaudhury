import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";

// *React Router DOM Paths & Elements

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
