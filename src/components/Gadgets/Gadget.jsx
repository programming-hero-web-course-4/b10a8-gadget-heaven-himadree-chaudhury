import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Product from "../Product/Product";
import notFound from "../../assets/error.webp";

const Gadget = () => {
  // *All Products Store And Update Function
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
    <div className="grid lg:grid-cols-7 gap-5 py-8">
      <div className="lg:col-span-1">
        {/* Sidebar Category */}
        <SideBar
          handleCategory={handleCategory}
          handleAllProducts={handleAllProducts}
        ></SideBar>
      </div>
      <div className="lg:col-span-6">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {viewCategory === "all" ? (
            //   *All Products
            products.map((product) => (
              <Product key={product.product_id} product={product}></Product>
            ))
          ) : // *Categorized Products
          categorizedProducts.length >= 1 ? (
            categorizedProducts.map((product) => (
              <Product key={product.product_id} product={product}></Product>
            ))
          ) : (
            // *Empty Product Category
            <div className="place-items-center border border-slate-200 rounded-2xl md:col-span-2 lg:col-span-3">
              <div className=" p-10 md:p-20 flex flex-col justify-center items-center space-y-3">
                <img src={notFound} alt="" />
                <h1 className="font-bold text-3xl font-secondary text-center">
                  No Gadgets Available
                </h1>
                <p className="lg:text-center font-primary">
                  Currently, no gadgets is available. Please check back soon or
                  contact us for assistance.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Gadget;
