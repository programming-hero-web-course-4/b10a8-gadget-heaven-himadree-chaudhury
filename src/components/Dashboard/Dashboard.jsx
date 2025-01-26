import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCartList,
  getWishList,
  removeFromStoredCart,
  removeFromStoredWishlist,
} from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  // *Show Active Selection Button
  const [view, setView] = useState("cart");
  const handleView = (view) => {
    setView(view);
  };

  // *All Players Store And Update Function
  const [products, setProducts] = useState([]);

  // *Load All Products Data
  useEffect(() => {
    fetch("gadgetProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // *Store Products in Cart
  const [cartProducts, setCartProducts] = useState([]);

  // label==========================================================================================label //

  // *Show Cart Products onLoad The Dashboard

  useEffect(() => {
    // *Fetch products and filter cart items in one flow
    const fetchProductsAndCart = async () => {
      try {
        const response = await fetch("gadgetProducts.json");
        const data = await response.json();
        setProducts(data);

        // *Filter cart products
        const storedCartID = getCartList();
        const cartGadgets = data.filter((product) =>
          storedCartID.includes(product.product_id)
        );
        setCartProducts(cartGadgets);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProductsAndCart();
  }, []);

  // label==========================================================================================label //

  // *Filter Cart Products OnClick

  const handleCartProducts = () => {
    const storedCartID = getCartList();
    const cartGadgets = products.filter((product) =>
      storedCartID.includes(product.product_id)
    );
    setCartProducts(cartGadgets);
  };

  // *Cart Total Cost
  const cartCostAry = cartProducts.map((product) => product.price);
  const cartTotal = cartCostAry.reduce((a, b) => a + b, 0);

  // *Handle Price Sort
  const handlePriceSort = () => {
    const sortedCart = [...cartProducts].sort((a, b) => b.price - a.price);
    setCartProducts(sortedCart);
  };

  // *Handle Remove Cart Product
  const removeCartProduct = (id) => {
    removeFromStoredCart(id);
    setCartProducts(
      cartProducts.filter((product) => product.product_id !== id)
    );
  };

  // *Store Products in Wishlist
  const [wishlistProducts, setWishlistProducts] = useState([]);

  // *Filter Wishlist Products OnClick
  const handleWishlistProducts = () => {
    const storedWishlistID = getWishList();
    setWishlistProducts(
      products.filter((product) =>
        storedWishlistID.includes(product.product_id)
      )
    );
  };

  // *Handle Remove Wishlist Product
  const removeWishlistProduct = (id) => {
    removeFromStoredWishlist(id);
    setWishlistProducts(
      wishlistProducts.filter((product) => product.product_id !== id)
    );
  };

  return (
    <div>
      {/* React Helmet */}
      <Helmet>
        <title>Gadget Heaven | Dashboard</title>
      </Helmet>
      
      <section className="max-w-screen-2xl p-4 mx-auto">
        {/* Products Details Banner */}
        <div className="">
          <div className="text-center">
            <div className="bg-[#9538E2] text-white rounded-2xl space-y-5 pb-20 pt-12">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Dashboard
              </h1>
              <p className="text-white text-sm md:text-lg w-9/12 mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <div className="flex justify-center gap-5">
                <Link
                  to="/cart"
                  onClick={() => {
                    handleView("cart");
                    handleCartProducts();
                  }}
                  style={{
                    backgroundColor: view === "cart" && "white",
                    color: view === "cart" && "#9538E2",
                  }}
                  className="px-12 py-2 rounded-2xl border border-white font-bold text-lg transition-all duration-200"
                >
                  Cart
                </Link>
                <Link
                  to="/wishlist"
                  onClick={() => {
                    handleView("wishlist");
                    handleWishlistProducts();
                  }}
                  style={{
                    backgroundColor: view === "wishlist" && "white",
                    color: view === "wishlist" && "#9538E2",
                  }}
                  className="px-12 py-2 rounded-2xl border border-white font-bold text-lg  transition-all duration-200"
                >
                  Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          {view === "cart" && (
            <div className="py-8">
              <div className="flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="flex justify-center items-center gap-5">
                  <div className="text-2xl font-bold">
                    Total Cost : {cartTotal} $
                  </div>
                  <Link
                    onClick={() => handlePriceSort()}
                    className="flex gap-1 justify-center items-center border px-4 py-2 rounded-2xl font-semibold border-[#9538E2] text-[#9538E2]"
                  >
                    Sort By Price
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                      />
                    </svg>
                  </Link>
                  <Link className="flex gap-1 justify-center items-center border px-4 py-2 rounded-2xl font-semibold border-[#9538E2] bg-[#9538E2] text-white">
                    Purchase
                  </Link>
                </div>
              </div>
              <div>
                {cartProducts.map((product) => (
                  <Cart
                    key={product.product_id}
                    product={product}
                    removeCartProduct={removeCartProduct}
                  ></Cart>
                ))}
              </div>
            </div>
          )}
          {/* Wishlist Section */}
          {view === "wishlist" && (
            <div className="py-8">
              <div className="flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">Wishlist</h1>
              </div>
              <div>
                {wishlistProducts.map((product) => (
                  <Wishlist
                    key={product.product_id}
                    product={product}
                    removeWishlistProduct={removeWishlistProduct}
                  ></Wishlist>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
