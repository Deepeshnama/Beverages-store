import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <ul className="flex items-center justify-center space-x-6 p-4">
        <li>Terms and Conditions</li>
        <li>About Us</li>
        <li>Secure Payment</li>
        <li>Contact Us</li>
        <li>Stores</li>
      </ul>
      <hr />

      <div className="footer sm:mx-2  flex items-start lg:items-center lg:justify-center lg:space-x-32  lg:flex-row flex-col">
        <div className="footer-1 m-4 lg:m-0">
          <h1 className="text-white text-xl">Store Information</h1>
          <p>Summer Store Indore</p>
          <p>+91 0123456789</p>
          <p>Summer@gmail.com</p>
        </div>

        <div className=" flex items-center ">
          <img src="/logo.jpg" alt="" className="my-4" />
          <button className="bg-orange-100 rounded-2xl p-2">
            Your Email Address{" "}
            <button className="bg-red-400 text-white rounded-2xl p-1">
              Subscribe
            </button>{" "}
          </button>
        </div>

        <div>
          <h1 className="text-xl text-white ">About Us</h1>
          <p>
            Style too own civil out along. <br />
            Perfectly offending attempted add <br />
            arranging age gentleman. Get who <br />
            uncommonly.
          </p>
        </div>
      </div>

      <h2 className="text-lg text-center py-4">@2024 - made by Deepesh Nama</h2>
    </footer>
  );
};
