import React from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";
import SeparatorRight from "./SeparatorRight";
import { register } from "@/utils/eventZilla";

const TitleDataMapCTA = ({
  backgroundImage,
  topSecondaryTitle,
  title,
  subtitle,
  dataOneIcon,
  dataOne,
  dataOneURL,
  dataTwoIcon,
  dataTwo,
  dataTwoURL,
  dataThreeIcon,
  dataThree,
  dataThreeURL,
  buttonTitle,
}) => {
  return (
    <div className="relative font-regular">
      <div
        className={`py-36 lg:px-20 px-7 bg-cover bg-no-repeat text-white`}
        style={{ backgroundImage: `url(${urlFor(backgroundImage)})` }}
      >
        <div className="flex flex-col lg:flex-row pt-20 pb-32 justify-between">
          <div className="lg:w-1/2 w-full lg:pr-10 pb-10 lg:pb-0">
            <div className="text-2xl anim">
              <BlockContent blocks={topSecondaryTitle} />
            </div>

            <div className="lg:text-6xl text-4xl anim font-poppinsExtraBold uppercase pb-6 border border-t border-b-0 border-white space-y-6 py-6 border-x-0">
              <BlockContent blocks={title} />
            </div>
            <div className="pb-8 text-xs lg:text-lg anim">
              <BlockContent blocks={subtitle} />
            </div>

            <div className="pb-10">
              <a
                href={dataOneURL}
                className="flex space-x-2 py-2 anim cursor-pointer"
              >
                <img
                  src={urlFor(dataOneIcon)}
                  alt="logo"
                  className="w-[20px]"
                />
                <BlockContent blocks={dataOne} className="text-xs lg:text-lg" />
              </a>

              <a
                href={dataTwoURL}
                className="flex space-x-2 py-2 anim cursor-pointer"
              >
                <img
                  src={urlFor(dataTwoIcon)}
                  alt="logo"
                  className="w-[20px]"
                />
                <BlockContent blocks={dataTwo} className="text-xs lg:text-lg" />
              </a>
              <a
                href={dataThreeURL}
                className="flex space-x-2 py-2 anim cursor-pointer"
              >
                <img
                  src={urlFor(dataThreeIcon)}
                  alt="logo"
                  className="w-[20px]"
                />
                <BlockContent
                  blocks={dataThree}
                  className="text-xs lg:text-lg"
                />
              </a>
            </div>
            <div onClick={register}>
              <Button
                title={buttonTitle}
                classes="hover:bg-white hover:text-black fadeIn"
              />
            </div>
          </div>
          <div className="pt-7">
            <iframe
              className="rounded-2xl xl:h-[450px] xl:w-[600px] lg:h-[400px] lg:w-[450px] w-full h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.965647058245!2d-3.7000110999999998!3d40.45389730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229ec696e4141%3A0x16108830bed29888!2sGreen%20Patio!5e0!3m2!1ses-419!2ses!4v1710164830601!5m2!1ses-419!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <SeparatorRight />
    </div>
  );
};

export default TitleDataMapCTA;
