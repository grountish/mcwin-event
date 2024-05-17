import React, { useState } from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";

const AgendaMobileSection = ({ events }) => {
  const [showAll, setshowAll] = useState(false);
  return (
    <div>
      {events
        ?.slice(0, showAll ? events.length : 3)
        .map(({ _key, name, time, speaker }) => {
          return (
            <div
              key={_key}
              className='md:hidden flex justify-between pb-4 py-4 fadeInpt-3 border-t border-deepBlue text-sm lg:text-lg'
            >
              <div className='pr-5'>
                <h2
                  className={`font-semibold ${
                    !speaker ? "uppercase text-deepBlue" : "text-mainBlue"
                  }`}
                >
                  {name}
                </h2>
                <div>
                  <BlockContent
                    blocks={speaker}
                    className='text-xs lg:text-lg'
                  />
                </div>
              </div>
              <h2
                className={`font-semibold ${
                  !speaker ? "uppercase text-mainBlue" : "text-deepBlue"
                }`}
              >
                {time}
              </h2>
            </div>
          );
        })}
      {!showAll && (
        <div className='w-full flex md:hidden fadeIn py-20'>
          <div onClick={() => setshowAll(true)} className='m-auto w-full'>
            <Button
              title='View All'
              hasIcon
              classes='!bg-mainBlue !text-white !text-lg !text-semibold !w-full !justify-center'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendaMobileSection;
