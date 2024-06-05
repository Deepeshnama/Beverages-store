import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/iceSlice";

export const TrandingProducts = () => {
  const { products,cart } = useSelector((state) => state.ice);
  const dispatch = useDispatch();


  return (
    <div className="trending lg:px-36  py-20 bg-[#85CAC5]">
      <h1 className="text-4xl font-bold text-center py-10">
        Trending Products
      </h1>

      <div class="grid lg:grid-cols-4 my-4 py-1  md:grid-cols-2 grid-cols-1 place-items-center gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-neutral-300 p-2 w-fit  rounded-lg mx-3"
          >
            <img
              className="h-52 w-52 object-cover rounded-lg "
              src={product.img}
              alt={product.name}
            />

            <h2 className="text-2xl pt-2 text-white font-semibold">
              {product.name}
            </h2>
            <h1 className="text-xl py-1 text-white font-semibold">
              $ {product.price}
            </h1>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="p-1 border bg-[#91D7CF] text-white px-4 text-black-500 text-end transition-shadow shadow"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
