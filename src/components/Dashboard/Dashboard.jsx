import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCartList, getWishList } from "../../utilities/localStorage";

const Dashboard = () => {
  // *Show Active Section
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

    const storedCartID = getCartList();
    
    const handleCartProducts = () => {
        setCartProducts(
          products.filter((product) =>
            storedCartID.includes(product.product_id)
          )
        );
    }
  // *Store Products in Wishlist
  const [wishlistProducts, setWishlistProducts] = useState([]);

    const storedWishlistID = getWishList();
    
    const handleWishlistProducts = () => {
        setWishlistProducts(
          products.filter((product) =>
            storedWishlistID.includes(product.product_id)
          )
        );
    }
console.log(wishlistProducts)

  return (
    <div>
      <section className="max-w-screen-2xl mx-auto">
        {/* Products Details Banner */}
        <div className="">
          <div className="p-4 text-center">
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
                                  onClick={() => { handleView("cart"); handleCartProducts()}}
                  style={{
                    backgroundColor: view === "cart" && "white",
                    color: view === "cart" && "#9538E2",
                  }}
                  className="px-12 py-2 rounded-2xl border border-white font-bold text-lg transition-all duration-200"
                >
                  Cart
                </Link>
                <Link
                                  onClick={() => { handleView("wishlist"); handleWishlistProducts()}}
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
        {/* Cart Section */}
        <div></div>
      </section>
    </div>
  );
};

export default Dashboard;
