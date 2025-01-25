import PropTypes from "prop-types";

const Product = ({product}) => {
  const { product_title, price } = product;
  return (
    <div>
      <h1>{product_title}</h1>
      <p>{price}</p>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
