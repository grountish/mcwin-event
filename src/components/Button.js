"use client";
import React from "react";

const Button = ({ title, classes }) => {
  return (
    <div
      className={`lg:px-20 px-7 lg:py-5 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 text-white hover:text-deepBlue hover:border-deepBlue bg-transparent border-white border ${classes}`}
    >
      {title}
    </div>
  );
};

export default Button;
