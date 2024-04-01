import React from "react";

const Arrow = () => {
  return (
    <div className="cursor-pointer">
      <svg
        style={{ filter: "drop-shadow(3px 3px 2px rgb(0 0 0 / 0.7)" }}
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9381 37.2368L34.7144 25.4606L22.9381 13.6844"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="bevel"
        />
      </svg>
    </div>
  );
};

export default Arrow;
