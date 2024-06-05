import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state.ice);

  return (
    <nav className="bg-pink-500 py-3 flex px-5 justify-between items-center sticky top-0 z-40">
      <img src="/logo.jpg" alt="" />
      <ul className="flex gap-6 text-white text-lg">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/news"}>
          <li>News</li>
        </Link>
      </ul>
      <Link to={"/cart"}>
        <div className="flex items-center gap-3 bg-white p-2 rounded-3xl">
          <IoCartOutline />
          <h1 className="bg-pink-500 rounded-2xl px-2 text-white">
            {cart.length}
          </h1>
          <button>Cart</button>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
