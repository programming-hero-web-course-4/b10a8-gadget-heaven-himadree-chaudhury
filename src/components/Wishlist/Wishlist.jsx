import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addToStoredCart } from "../../utilities/localStorage";

const Wishlist = ({ product, removeWishlistProduct }) => {
  const { product_id, product_title, product_image, price, description } =
    product;

  return (
    <div className="flex justify-between items-center border border-slate-200 rounded-lg p-3 mb-3">
      <div className="flex gap-5 items-center">
        <div className="w-40 h-32 overflow-hidden object-cover aspect-square rounded-xl border border-slate-200">
          <img src={product_image} alt={product_title} />
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-xl">{product_title}</h1>
          <p>{description}</p>
          <h2 className="font-semibold">Price : {price} $</h2>
          {/* Add To Cart Btn */}
          <Link
            onClick={() => addToStoredCart(product_id)}
            className="bg-[#9538E2] text-white font-semibold px-4 py-2 -ml-2 rounded-xl"
          >
            Add To Cart
           
          </Link>
        </div>
      </div>
      <div className="cursor-pointer">
        <svg
          onClick={() => removeWishlistProduct(product_id)}
          style={{ color: "red" }}
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
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};
Wishlist.propTypes = {
  product: PropTypes.object,
  removeWishlistProduct: PropTypes.func,
};


export default Wishlist;
