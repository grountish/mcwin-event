"use client";
import React from "react";
import DownArrow from "./DownArrow";

const Button = ({ title, classes, hasIcon }) => {
  return (
    <div
      className={`flex items-center lg:px-20 px-7 lg:py-5 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 text-white hover:text-deepBlue hover:border-deepBlue bg-transparent border-white border ${classes}`}
    >
      {title}
      {hasIcon && <DownArrow />}
    </div>
  );
};

export default Button;
