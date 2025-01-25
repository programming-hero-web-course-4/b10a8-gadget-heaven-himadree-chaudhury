import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    
    // *All Players Store And Update Function
  const [products,setProducts] = useState([]);

  // *Load All Products Data
  useEffect(() => {
    fetch("gadgetProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

    return (
        <div>
            <h1>Products Section</h1>
        <h1>{products.length}</h1>
        <section className="grid grid-cols-3">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </section>
      </div>
    );
};

export default Products;