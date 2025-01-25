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
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </section>
      </div>
    );
};

export default Products;