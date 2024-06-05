import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartPage from "../components/CartPage";

const AddToCart = () => {
  const { cart } = useSelector((state) => state.ice);

  let total = cart.map((item) => +item.qty * item.price);

 

  return (
    <>
      <div className="  bg-[#91D7CF]">
        <h1 className="text-3xl font-bold text-center py-10 text-gray-500">
          <img src="" alt="" /> MY CART
        </h1>

        <div className="flex justify-center space-x-2 pb-4" >
          <div className="flex justify-center space-x-4">
            <div>
              {cart.map((item) => {
                return <CartPage key={item._id} item={item} />;
              })}
            </div>
          </div>

          <div className="border border-gray-500 w-fit p-6 h-80">
            <h1 className="p-2 font-bold text-yellow-700">Price Details</h1>
            <hr />
            <div className="p-2 flex justify-between">
              <h1>Price({cart.length} items)</h1>
              <h2>$ {total?.reduce((p, c) => p + c, 0)} </h2>
            </div>
            <div className="p-2 flex justify-between">
              <h1>Delivery Charges</h1>
              <h2>
                $ <s>40</s> Free
              </h2>
            </div>
            <hr />

            <div className="p-2 flex justify-between">
              <h1>Total Quantity</h1>
              <h2> {cart.reduce((p,c) => p+ +c.qty , 0)} </h2>
            </div>
            <div className="p-2 flex justify-between">
              <h1>
                Total <br /> Amount
              </h1>
              <h2>{total?.reduce((p, c) => p + c, 0)}</h2>
            </div>
            <hr />
            <button className="bg-black text-white p-2 mt-2">
              Proceed To CheckOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
