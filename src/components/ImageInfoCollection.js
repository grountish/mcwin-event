import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";
import Button from "./Button";
import SeparatorRight from "./SeparatorRight";
import { register } from "@/utils/eventZilla";

const ImageInfoCollection = ({
  backgroundImage,
  title,
  subtitle,
  CTATitle,
  collection,
  moreSpeakersText,
}) => {
  return (
    <div className="font-regular">
      <div
        className={`lg:pt-40 pt-12 bg-cover bg-no-repeat text-white relative`}
        style={{ backgroundImage: `url(${urlFor(backgroundImage)})` }}
      >
        <div className="flex flex-col lg:flex-row pt-20 md:pb-32 lg:px-20 px-7 text-white pb-48">
          <div className="lg:w-1/2 w-full lg:pr-10">
            <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-6 anim">
              <BlockContent blocks={title} />
            </div>
            <div className="anim">
              <BlockContent blocks={subtitle} className="text-xs lg:text-lg" />
            </div>
            {CTATitle && (
              <div className="pt-10" onClick={register}>
                <Button
                  title={CTATitle}
                  classes="hover:bg-white hover:text-black fadeIn"
                />
              </div>
            )}
          </div>
        </div>
        <SeparatorRight />
      </div>
      <div className="bg-matteWhite ">
        <div className="grid grid-cols-2 md:space-x-0 md:grid-cols-2 lg:grid-cols-3 md:px-12 px-2  xl:px-72 lg:px-40 py-12">
          {collection.map(({ image, title, subtitle, logo }, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center py-6 anim"
                key={index}
              >
                <div className="m-auto flex flex-col justify-center items-center text-center">
                  <div
                    className="rounded-full h-32 w-32  md:h-40 md:w-40 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${urlFor(image)})` }}
                  ></div>
                  <div className="text-mainBlue font-poppinsExtraBold text-lg pt-4">
                    {title && <BlockContent blocks={title} />}
                  </div>
                  <div className="w-10/12 text-center text-xs pb-3">
                    {subtitle && <BlockContent blocks={subtitle} />}
                  </div>
                </div>
                <div className="m-auto">
                  <img
                    className="h-[70px] object-contain m-auto"
                    src={urlFor(logo)}
                    alt="company logo"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {moreSpeakersText && (
          <div className="w-full flex justify-center pb-10">
            <div className="flex justify-center items-center flex-col">
              <img
                src="/more-speakers.svg"
                alt="more-speakers"
                className="max-h-28 max-w-[210px] min-w-[170px]"
              />
              <h4 className="py-4 text-mainBlue text-xl">{moreSpeakersText}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInfoCollection;
