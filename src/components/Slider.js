import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import urlFor from "@/utils/imageUrlBuilder";
import Arrow from "./Arrow";

const Slider = ({ title, images }) => {
  return (
    <div className="bg-matteWhite pt-5 pb-20  md:py-20 font-regular">
      <div className="text-center lg:text-3xl text-lg px-12  text-mainBlue fadeUp">
        <BlockContent blocks={title} />
      </div>
      <div className="pt-20">
        <div className="relative">
          <Swiper
            spaceBetween={4}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            centeredSlides
            loop
            slidesPerGroup={1}
            initialSlide={1}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-dom",
              renderBullet: () =>
                '<span class="swiper-pagination-bullet"></span>',
            }}
            navigation={{
              nextEl: `.next`,
              prevEl: `.prev`,
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="!my-auto">
                <div className="flex flex-col justify-center items-center min-w-[300px]">
                  <img src={urlFor(image)} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full flex items-center justify-center pt-10">
            <div className="w-80 flex justify-center">
              <span className="swiper-pagination-dom flex justify-center">
                *
              </span>
            </div>
          </div>

          <div className="absolute z-40 top-[35%] lg:px-10 -px-2 transform w-screen flex justify-between">
            <div className="prev rotate-180">
              <Arrow />
            </div>
            <div className="next">
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
