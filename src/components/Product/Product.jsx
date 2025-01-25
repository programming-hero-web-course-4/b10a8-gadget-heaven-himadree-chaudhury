import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price } = product;
  return (
    <div className="bg-slate-100 rounded-2xl p-4 space-y-2 flex flex-col ">
      <div className="w-full bg-white rounded-2xl flex justify-center">
        <img
          className="h-60 object-cover rounded-2xl"
          src={product_image}
          alt={product_image}
        />
      </div>
      <div className="flex-grow">
        <h1 className="font-bold text-xl">{product_title}</h1>
        <p>Price : {price} $</p>
      </div>
      <Link
        to=""
        className="border border-[#9538E2] text-[#9538E2] font-bold px-4 py-2 rounded-3xl hover:bg-[#9538E2] hover:text-white cursor-pointer duration-300 transition-all w-3/6"
      >
        View Details
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
