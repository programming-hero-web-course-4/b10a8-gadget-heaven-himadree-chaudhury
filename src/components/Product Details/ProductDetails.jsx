import { useLoaderData, useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useState } from "react";
import { addToStoredCart, addToWishedCart } from "../../utilities/localStorage";

const ProductDetails = () => {
  // *Get Product ID
  const { product_id } = useParams();

  // *Get All Products
  const data = useLoaderData();

  // *Find Current Product
  const product = data.find((product) => product.product_id === product_id);

  // *Destructuring Product Data
  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
    reviews,
  } = product;

  // *Wishlist Button Functionality
  const [isClicked, setIsClicked] = useState(false);

  // *Handle Wishlist
  const handleWishlist = (state) => {
    setIsClicked(state);
  };
  // *Custom Rating Functionality
  // *Store Custom Rating
  const [rate, setRate] = useState(0);

  // *Handle Rating
  const handleStartRatings = (rate) => {
    setRate(rate);
  };

  // *Wishlist Button Disability
  const [clicked, setClicked] = useState(false);

  const handleClick = (state) => {
    setClicked(state);
  };

  return (
    <div>
      <section className="max-w-screen-2xl mx-auto relative mb-96 md:mb-40 pb-96">
        {/* Product Details Banner */}
        <div className="">
          <div className="p-4 text-center bg-[#9538E2] text-white rounded-b-2xl ">
            <div className="space-y-5 pb-32 pt-12">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Product Details
              </h1>
              <p className="text-white text-sm md:text-lg w-9/12 mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
        {/* Product Details Section */}
        <div className="absolute top-52 w-full left-1/2 transform -translate-x-1/2">
          <div className="w-10/12 md:w-11/12 mx-auto bg-white border border-slate-200 rounded-2xl">
            <div className="grid md:grid-cols-5 gap-5 p-5 items-center ">
              {/* Product Image */}
              <div className="col-span-2 place-items-center">
                <img
                  className="object-cover"
                  src={product_image}
                  alt={product_title}
                />
              </div>
              {/* Details Section */}
              <div className="space-y-4 col-span-3">
                {/* Product Title */}
                <h1 className="font-bold text-3xl">{product_title}</h1>
                {/* Product Price */}
                <h2 className="font-semibold text-xl">Price : {price} $</h2>
                {/* Conditional Product Stock */}
                <p>
                  {availability === true ? (
                    <span className="border border-green-500 px-3 py-1 rounded-xl text-green-800 bg-green-100">
                      In Stock
                    </span>
                  ) : (
                    <span className="border border-red-500 px-3 py-1 rounded-xl text-red-800 bg-red-100">
                      Out of Stock
                    </span>
                  )}
                </p>
                {/* Product Description */}
                <p className="text-slate-700">{description}</p>
                {/* Product Specifications */}
                <h2 className="font-bold text-xl">Specifications :</h2>
                <ol className="list-decimal pl-4 text-slate-700">
                  {Specification.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ol>
                <div className="space-y-2">
                  <h1>
                    <span className="font-bold text-xl">Rating : </span>
                    <span className="bg-slate-200 py-1 px-2 rounded-xl">
                      {rating}
                    </span>
                  </h1>
                  {/* Rating Starts */}
                  <span id="star-ratings" className="flex">
                    <svg
                      onClick={() => handleStartRatings(1)}
                      style={{
                        fill: rate >= 1 && "gold",
                        color: rate >= 1 && "gold",
                      }}
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
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      onClick={() => handleStartRatings(2)}
                      style={{
                        fill: rate >= 2 && "gold",
                        color: rate >= 2 && "gold",
                      }}
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
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      onClick={() => handleStartRatings(3)}
                      style={{
                        fill: rate >= 3 && "gold",
                        color: rate >= 3 && "gold",
                      }}
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
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      onClick={() => handleStartRatings(4)}
                      style={{
                        fill: rate >= 4 && "gold",
                        color: rate >= 4 && "gold",
                      }}
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
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      onClick={() => handleStartRatings(5)}
                      style={{
                        fill: rate >= 5 && "gold",
                        color: rate >= 5 && "gold",
                      }}
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
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {/* Add To Cart Button Upon Availability */}
                  <button
                    disabled={availability === false}
                    onClick={
                      availability === true &&
                      (() => addToStoredCart(product_id))
                    }
                    className={`flex items-center gap-2 font-bold px-4 py-2 rounded-xl ${
                      availability === false
                        ? "text-[#131313b3] bg-[#1313131a]"
                        : "bg-[#9538E2] text-white hover:bg-white hover:text-black border border-[#9538E2] duration-200 transition-all cursor-pointer"
                    }`}
                  >
                    Add To Cart
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>
                  {/* Add To Wishlist Button */}
                  <button
                    disabled={clicked === true}
                    id="add-to-wishlist"
                    onClick={() => {
                      handleWishlist(true);
                      addToWishedCart(product_id);
                      handleClick(true);
                    }}
                    className={`p-2 border border-slate-200 rounded-full  duration-200 transition-all ${
                      isClicked && "bg-[#9538E2] text-white"
                    }
                    ${clicked === false ? "cursor-pointer" : ""}
                      `}
                  >
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                </div>
                {/* Product Review */}
                <div>
                  <h2 className="font-bold text-xl">Reviews :</h2>
                  <p className="text-slate-700">
                    {reviews.map((review, idx) => (
                      <p key={idx}>{review} </p>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
