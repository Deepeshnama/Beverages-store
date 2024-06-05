import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCart,
  handleDecrement,
  handleIncrement,
} from "../features/iceSlice";
// import { CgLayoutGrid } from "react-icons/cg";

const CartPage = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
    
  };

  const decrementQty = (id) => {
    item.qty > 1 ? dispatch(handleDecrement(id)) : (qty = 0);
    console.log(item.qty)
  }

  return (
    <>
      <div className="border border-gray-400 flex w-fit h-28 mb-5">
        <span className="border-gray-400 border-r-2 text-center">
          {/* <h1>Product</h1> */}
          <img src={item.img} alt="" className="w-36 h-28" />
        </span>
        <span className="border-gray-400 border-r-2 p-6 text-center">
          <h1>Name</h1>
          <h2 className="text-white w-20">{item.name}</h2>
        </span>
        <span className="border-gray-400 border-r-2 p-6 text-center">
          <h1>Price</h1>
          <h2 className="text-white w-14">$ {item.price}</h2>
        </span>
        <span className="border-gray-400 border-r-2 p-4 text-center w-60">
          <h1>Quantity</h1>
          <h2 className="text-white">
            <button
              className="bg-white font-bold text-black px-2 pb-1 rounded-full cursor-pointer"
              onClick={() => dispatch(handleIncrement(item._id))}
            >
              +
            </button>
            <span className="text-pink-400 font-bold text-xl mx-2">
              {+item.qty}
            </span>
            <button
              className="bg-white font-bold text-black px-3 pb-1 rounded-full cursor-pointer"
              onClick={() => decrementQty(item._id)}
            >
              -
            </button>
          </h2>
        </span>
        <span className="p-8 text-center">
          {/* <h1>Delete</h1> */}
          <img
            src="/delete-logo.png"
            alt=""
            className="w-20"
            onClick={() => handleDelete(item._id)}
          />
        </span>
      </div>
    </>
  );
};

export default CartPage;
