import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";
import SeparatorRight from "./SeparatorRight";
import Button from "./Button";
import Link from "next/link";

const ImageInfoCTACollection = ({
  backgroundImage,
  title,
  subtitle,
  CTATitle,
  CTAURL,
  collection,
}) => {
  return (
    <div className="relative">
      <div
        className={`lg:py-40 lg:px-16 pt-12 px-7 bg-cover bg-no-repeat'`}
        style={{ backgroundImage: `url(${urlFor(backgroundImage)})` }}
      >
        <div className="py-20">
          <div className="lg:w-1/2 w-full lg:pr-10 text-white">
            <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-6 anim">
              <BlockContent blocks={title} />
            </div>
            <div className="anim">
              <BlockContent blocks={subtitle} className="text-xs lg:text-lg" />
            </div>
            {CTATitle && CTAURL && (
              <div className="pt-10">
                <Button
                  link={CTAURL}
                  title={CTATitle}
                  classes="hover:bg-white hover:text-black fadeIn"
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-[55vw] mx-auto md:py-12 py-20">
            {collection.map((section, index) => {
              return (
                <div
                  className="flex flex-col justify-between text-white border border-white rounded-2xl m-4 pb-3 fadeIn"
                  key={index}
                >
                  <div className="flex flex-col justify-between">
                    <div
                      className="rounded-t-2xl h-40 w-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${urlFor(section.image)})`,
                      }}
                    ></div>
                    <div className="px-3 flex flex-col">
                      <div className="text-xs pt-4">
                        <BlockContent blocks={section.topSecondaryTitle} />
                      </div>
                      <div className="font-poppinsExtraBold text-lg pt-4">
                        <BlockContent blocks={section.title} />
                      </div>
                      <div className="w-1/2 text-xs pb-2">
                        <BlockContent blocks={section.subtitle} />
                      </div>
                    </div>
                  </div>

                  <div className="pt-10 text-center mx-3">
                    <Link href={section.buttonUrl} target={"_blank"}>
                      <Button
                        title={section.buttonTitle}
                        classes="text-white !px-6 !py-3 !text-base !w-full"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SeparatorRight />
    </div>
  );
};

export default ImageInfoCTACollection;
