import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIce } from "../features/iceSlice";
import { TrandingProducts } from "../components/TrandingProducts";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIce());
  }, [dispatch]);

  return (
    <>
      <div className="landingPage h-screen w-full text-white lg:p-40 p-20">
        <p className="text-2xl">Yummy & Tasty Shop</p>
        <h1 className="text-6xl py-2">
          Beverages made with <br /> passion
        </h1>
        <button className="bg-pink-400 p-2 my-2 rounded-xl">
          Exclusive Summer Shop, Big Deals
        </button>
        <br />
        <button className="bg-neutral-400 p-2 rounded-xl">Shop Now</button>
      </div>

      {/* // Flowbite Card */}

      <h1 className="text-4xl my-12  text-center font-bold ">Top Categories</h1>
      <div className="card flex items-center justify-center flex-col lg:flex-row mb-10 ">
        <div className="p-3  mx-5 text-center bg-[#FF7C8E] text-white rounded-lg w-96 relative lg:mt-40 mt-36 h-96 flex flex-col justify-center items-center">
          <div className="image-1 flex items-center justify-center absolute bottom-[60%] -translate-y-10">
            <img src="/ice-1.jpg" alt="" />
          </div>
          <h4 className="mt-28 text-4xl font-bold tracking-tight dark:text-white py-3">
            Ice Cream
          </h4>

          <ul>
            <li className="py-1">Mint Chocolate</li>
            <li className="py-1">Buttered Pecan</li>
            <li className="py-1">Strawberry</li>
            <li className="py-1">Vanilla</li>
            <li className="py-1">Baskin Rubbins</li>
          </ul>
        </div>
        <div className="p-3 text-center bg-[#FF7C8E] text-white rounded-lg w-96 relative lg:mt-40 mt-48 h-96 flex flex-col justify-center items-center">
          <div className="image-1 flex items-center justify-center absolute bottom-[60%] -translate-y-10">
            <img className="" src="/public/ice-1.jpg" alt="" />
          </div>
          <h4 className="mt-28 text-4xl font-bold tracking-tight dark:text-white py-3">
            Ice Cream
          </h4>

          <ul>
            <li className="py-1">Mint Chocolate</li>
            <li className="py-1">Buttered Pecan</li>
            <li className="py-1">Strawberry</li>
            <li className="py-1">Vanilla</li>
            <li className="py-1">Baskin Rubbins</li>
          </ul>
        </div>
        <div className="p-3 mx-5 text-center bg-[#FF7C8E] text-white rounded-lg w-96 relative lg:mt-40 mt-48 h-96 flex flex-col justify-center items-center">
          <div className="image-1 flex items-center justify-center absolute bottom-[60%] -translate-y-10">
            <img src="../ice-1.jpg" alt="" />
          </div>
          <h4 className="mt-28 text-4xl font-bold tracking-tight dark:text-white py-3">
            Ice Cream
          </h4>

          <ul>
            <li className="py-1">Mint Chocolate</li>
            <li className="py-1">Buttered Pecan</li>
            <li className="py-1">Strawberry</li>
            <li className="py-1">Vanilla</li>
            <li className="py-1">Baskin Rubbins</li>
          </ul>
        </div>
      </div>

      {/* Trending Page */}

      <TrandingProducts />

      {/* Trending-2 Page */}

      <div className="trending-2 mt-10 mx-20 flex  items-center justify-between gap-4">
        <div className="card border bg-[#A4CFE0] flex items-center relative rounded-2xl">
          <div className="text absolute left-12">
            <h2 className="text-2xl font-bold text-white my-4 ">
              fresh made <br /> fruit juice
            </h2>
            <button className="border bg-white p-2 rounded-3xl">
              get flat 30% off
            </button>
          </div>
        </div>

        <div className="card-2 border bg-[#97D1A8] flex items-center relative rounded-2xl">
          <div className="text absolute left-12">
            <h2 className="text-2xl font-bold text-white my-4 ">
              fresh made <br /> fruit juice
            </h2>
            <button className="border bg-white p-2 rounded-3xl">
              get flat 30% off
            </button>
          </div>
        </div>
      </div>

      {/* Footer Page */}
    </>
  );
};
