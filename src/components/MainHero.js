"use client";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";
import { getValidUrl } from "@/utils/validUrl";
import urlFor from "@/utils/imageUrlBuilder";
import SeparatorRight from "./SeparatorRight";
import serializers from "@/utils/serializers";
import { register } from "@/utils/eventZilla";

const MainHero = ({
  title,
  topHeader,
  subtitle,
  date,
  location,
  buttonText,
  video,
  videoText,
  foundersText,
  founders,
  bottomText,
}) => {
  return (
    <div className='relative font-regular'>
      <div className="lg:pt-40 test lg:px-20 pt-12 px-7 pb-48 bg-slate-300 bg-[url('/main-section-bg-min.jpg')] bg-cover bg-no-repeat text-white">
        <div className='flex flex-col lg:flex-row pt-24 md:pt-[3vh] md:pb-40 pb-10'>
          <div className='lg:w-1/2 w-full lg:pr-10'>
            <div className='text-xl md:text-2xl fadeIn'>{topHeader}</div>
            <div className='border-t border-b-0 border-white space-y-6 py-6 border-x-0'>
              <BlockContent
                blocks={title}
                className='lg:text-6xl text-4xl font-poppinsExtraBold anim  drop-shadow-xl'
              />
              <div className='anim '>
                <BlockContent
                  blocks={subtitle}
                  className='text-xs lg:text-lg'
                />
              </div>
            </div>
            <div className='py-[3vh] space-y-6 text-xl'>
              <div className='flex'>
                <img src='/calendar.svg' alt='calendar' className='pr-3' />{" "}
                <span></span>
                <div className='underlined fadeIn'>
                  <BlockContent blocks={date} className='fadeIn' />
                </div>
              </div>
              <div className='flex'>
                <img src='/location.svg' alt='location' className='pr-3' />{" "}
                <span></span>
                <div className='underlined fadeIn'>
                  <BlockContent blocks={location} serializers={serializers} />
                </div>
              </div>
            </div>
            <div className='pt-4 fadeIn'>
              <div onClick={register}>
                <Button
                  title={buttonText}
                  classes='hover:bg-white hover:text-black'
                />
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 w-full lg:pl-10 pt-20 lg:pt-[36px]'>
            <div className='relative rounded-lg'>
              <video
                poster='/video-placeholder.jpg'
                controls
                loop
                muted
                playsInline
                className='w-full h-full object-cover rounded-lg drop-shadow-lg anim'
                src={getValidUrl(video)}
              />
            </div>
            <div className='text-right pt-2 font-lightItalic test anim'>
              {videoText}
            </div>
          </div>
        </div>
        <div className='border-y border-x-0 border-white flex flex-col lg:flex-row justify-between w-full lg:py-20 py-10'>
          <div className='lg:w-80 lg:mr-20 text-center lg:text-left pb-10 lg:pb-0 fadeIn'>
            <h4 className='anim'>{foundersText}</h4>
          </div>
          <div className='w-full flex-wrap flex md:gap-x-9 md:gap-y-4 gap-6 items-center justify-center md:justify-normal md:pb-20'>
            {founders.map(({ image, url }, index) => {
              return (
                <a
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  key={index}
                  className='fadeIn'
                >
                  <img
                    key={index}
                    src={urlFor(image)}
                    alt='Pictu'
                    className='md:h-[55px] md:max-w-[133px] md:pr-4 h-10 max-w-[95px] fadeIn hover:scale-110 transition-transform duration-500 ease-in-out'
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className='anim py-24 text-center md:w-1/2 mx-auto border-white text-lg lg:text-2xl'>
          <BlockContent blocks={bottomText} />
        </div>
      </div>
      <SeparatorRight />
    </div>
  );
};

export default MainHero;
