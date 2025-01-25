import { useState } from "react";
import PropTypes from "prop-types";

import "./SideBar.css";

const SideBar = ({ handleCategory, handleAllProducts }) => {
  // *View Available & Selected Section Individually With Active Button Functionality
  const [view, setView] = useState("all");

  return (
    <div className="grid gap-5 border border-slate-200 py-4 px-2 text-left rounded-2xl">
      <button
        onClick={() => {
          setView("all");
          handleAllProducts();
        }}
        style={{
          backgroundColor: view === "all" && "#9538E2",
          color: view === "all" && "white",
        }}
      >
        All Products
      </button>
      <button
        onClick={() => {
          setView("laptops");
          handleCategory("Laptop");
        }}
        style={{
          backgroundColor: view === "laptops" && "#9538E2",
          color: view === "laptops" && "white",
        }}
      >
        Laptops
      </button>
      <button
        onClick={() => {
          setView("phones");
          handleCategory("Smartphone");
        }}
        style={{
          backgroundColor: view === "phones" && "#9538E2",
          color: view === "phones" && "white",
        }}
      >
        Phones
      </button>
      <button
        onClick={() => {
          setView("accessories");
          handleCategory("Accessories");
        }}
        style={{
          backgroundColor: view === "accessories" && "#9538E2",
          color: view === "accessories" && "white",
        }}
      >
        Accessories
      </button>
      <button
        onClick={() => {
          setView("watches");
          handleCategory("Smartwatch");
        }}
        style={{
          backgroundColor: view === "watches" && "#9538E2",
          color: view === "watches" && "white",
        }}
      >
        Smart Watches
      </button>
      <button
        onClick={() => {
          setView("tablet");
          handleCategory("Tablet");
        }}
        style={{
          backgroundColor: view === "tablet" && "#9538E2",
          color: view === "tablet" && "white",
        }}
      >
        MacBook
      </button>
      <button
        onClick={() => {
          setView("iphone");
          handleCategory("iPhone");
        }}
        style={{
          backgroundColor: view === "iphone" && "#9538E2",
          color: view === "iphone" && "white",
        }}
      >
        Iphone
      </button>
    </div>
  );
};
SideBar.propTypes = {
  handleCategory: PropTypes.func,
  handleAllProducts: PropTypes.func,
};

export default SideBar;
