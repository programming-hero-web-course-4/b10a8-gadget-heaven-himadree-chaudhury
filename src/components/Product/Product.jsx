import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  return (
    <div className="bg-slate-100 rounded-2xl p-4 space-y-4">
      <div className=" space-y-2 flex flex-col">
        <div className="w-full bg-white rounded-2xl flex justify-center">
          <img
            className="h-60 object-cover rounded-2xl"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div className="grow pl-2">
          <h1 className="font-bold text-xl">{product_title}</h1>
          <p>Price : {price} $</p>
        </div>
      </div>
      <div>
        <Link
          to={`/products/${product_id}`}
          className="border border-[#9538E2] text-[#9538E2] font-bold px-4 py-2 rounded-3xl hover:bg-[#9538E2] hover:text-white cursor-pointer duration-300 transition-all "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
