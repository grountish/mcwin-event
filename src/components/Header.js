/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import urlFor from "../utils/imageUrlBuilder";
import { useRouter } from "next/router";
import Link from "next/link";
import { register } from "@/utils/eventZilla";

const Header = ({ layout }) => {
  const { mainLogo = "", header = [] } = layout;
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState("");
  const handleMenuOpen = () => {
    setMenuOpen((b) => !b);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setPath(window.location.pathname);
    menuOpen && handleMenuOpen();
  }, [router.asPath]);

  const burgerIcon = (
    <svg
      width='30'
      height='25'
      viewBox='0 0 30 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 2H30' stroke='white' strokeWidth='2.5' />
      <path d='M0 13H30' stroke='white' strokeWidth='2.5' />
      <path d='M0 23H30' stroke='white' strokeWidth='2.5' />
    </svg>
  );

  const closeIcon = (
    <svg
      width='55'
      height='55'
      viewBox='0 0 55 55'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.6667 41.9559L13.0442 40.3334L25.8775 27.5L13.0442 14.6667L14.6667 13.0442L27.5 25.8775L40.3334 13.0442L41.9559 14.6667L29.1225 27.5L41.9559 40.3334L40.3334 41.9559L27.5 29.1225L14.6667 41.9559Z'
        fill='white'
      />
    </svg>
  );

  return (
    <div className='z-50 w-full bg-transparent absolute top-0 left-0 text-white'>
      <div className='flex items-center justify-between lg:px-20 px-6 lg:py-14 py-10'>
        <div className='flex lg:hidden items-center  lg:self-center justify-between h-16 lg:mr-auto cursor-pointer'>
          <img className='h-12' src={urlFor(mainLogo)} alt='primary logo' />
        </div>
        <div className='lg:hidden'>
          <button
            onClick={handleMenuOpen}
            className='flex items-center p-3 navbar-burger'
            data-menu
          >
            {burgerIcon}
          </button>
        </div>
        <div className='hidden lg:flex items-center lg:self-center justify-between h-16 lg:mr-auto cursor-pointer'>
          <span onClick={() => router.push("/")} className='mr-auto'>
            {mainLogo && (
              <img
                className='h-16 md:h-20'
                src={urlFor(mainLogo)}
                alt='primary logo'
              />
            )}
          </span>
        </div>
        <ul className='hidden lg:flex uppercase lg:items-center lg:w-auto lg:space-x-10 !list-none'>
          {header.map(({ slug, title }, i) => (
            <Link
              key={i}
              className={
                path === slug
                  ? "font-poppinsExtraBold underlined"
                  : "underlined"
              }
              href={slug}
            >
              {title}
            </Link>
          ))}
          <span className='cursor-pointer underlined' onClick={register}>
            REGISTER NOW
          </span>
        </ul>
      </div>
      {/* 
          MOBILE
               */}
      <div
        className={`fixed top-0 bottom-0 left-0 px-9 py-3 transition-all duration-[450ms] overflow-y-auto transform bg-black opacity-90 w-full z-100 block lg:hidden overflow-x-hidden ${
          !menuOpen ? "translate-x-[150vw]" : ""
        }`}
        id='nav-wrapper'
      >
        <div className='flex items-center mb-8'>
          <button
            onClick={closeMenu}
            className='navbar-close z-10 pt-6'
            data-menu
          >
            {closeIcon}
          </button>
        </div>
        <div>
          <div className='text-right flex flex-col'>
            {header.map(({ slug, title }, i) => (
              <Link
                key={i}
                className={`${
                  path === slug ? "font-bold" : ""
                } uppercase py-4 font-regular text-lg`}
                href={slug}
              >
                {title}
              </Link>
            ))}
            <div
              className='uppercase pt-4 font-regular text-lg'
              onClick={register}
            >
              REGISTER NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
