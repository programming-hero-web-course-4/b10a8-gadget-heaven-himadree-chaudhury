import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Product from "../Product/Product";

const Gadget = () => {
  // *All Players Store And Update Function
  const [products, setProducts] = useState([]);

  // *Load All Products Data
  useEffect(() => {
    fetch("gadgetProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // *Store Categorized Products
  const [categorizedProducts, setCategorizedProducts] = useState([]);

  //   *Store Shown Category
  const [viewCategory, setViewCategory] = useState("all");

  // *Handle All Products
  const handleAllProducts = () => {
    setViewCategory("all");
  };

  // *Handle Categorized Products
  const handleCategory = (category) => {
    setCategorizedProducts(
      products.filter((product) => product.category === category)
    );
    setViewCategory(category);
  };

  return (
    <div className="grid grid-cols-7 gap-5 py-8">
          <div className="col-span-1">
              {/* Sidebar Category */}
        <SideBar
          handleCategory={handleCategory}
          handleAllProducts={handleAllProducts}
        ></SideBar>
      </div>
      <div className="col-span-6">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {viewCategory === "all"
            ? //   *All Products
              products.map((product) => (
                <Product key={product.product_id} product={product}></Product>
              ))
            : // *Categorized Products
              categorizedProducts.map((product) => (
                <Product key={product.product_id} product={product}></Product>
              ))}
        </section>
      </div>
    </div>
  );
};

export default Gadget;
