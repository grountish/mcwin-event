import urlFor from "@/utils/imageUrlBuilder";
import React from "react";

const Footer = ({ layout }) => (
  <div className="bg-matteWhite p-6 lg:py-10 px-10 lg:px-20">
    <div className="w-full flex  fadeIn font-regular text-darkBlue border-t-2 lg:pt-6 pt-3 border-darkBlue">
      <a
        className="cursor-pointer md:min-w-[300px] flex-1"
        href="https://mcwin.fund/"
        target="_blank"
      >
        <img
          src={urlFor(layout.footerLogo)}
          alt="logo"
          className="w-[74px] lg:w-[120px]"
        />
      </a>
      <div className="flex space-x-5 text-[8.5px] lg:text-[16px] m-auto  flex-1">
        <div className="lg:flex text-center hidden">
          © 2024 McWin Capital Partners. <br /> All Rights Reserved.
        </div>
      </div>
      <div className="flex space-x-5 flex-col text-right text-[8.5px] lg:text-[16px] ">
        <div className="lg:hidden block">
          © 2024 McWin Capital Partners. <br /> All Rights Reserved.
        </div>
        <div className="md:min-w-[300px] pt-4 md:pt-0">
          <p>For special support,</p>
          <span className="pr-1">please contact</span>
          <a
            href="mailto:ir@mcwin.info?subject=Query McWin AIM 2024"
            className="font-bold"
          >
            IR@mcwin.info
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
