import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Profile from "./components/Profile/Profile.jsx";
import ProductDetails from "./components/Product Details/ProductDetails.jsx";

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
        element: <Dashboard></Dashboard>,
      },
      {
        path: "wishlist",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "products/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("gadgetProducts.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </HelmetProvider>
  </React.StrictMode>
);
