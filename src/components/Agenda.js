import React from "react";
import Button from "./Button";
import { register } from "@/utils/eventZilla";

const Agenda = ({ slots }) => {
  return (
    <div className="bg-matteWhite">
      <div className="pt-[60vh] bg-deepBlue">{/* header section here */}</div>
      <div
        className={`min-h-screen w-full bg-[url('/agenda-background.svg')] bg-cover flex bg-center bg-no-repeat`}
      >
        <div className="flex justify-center items-center m-auto font-regular flex-col bg-matteWhite md:min-w-[700px] p-8 border-deepBlue rounded-2xl border text-deepBlue">
          <div className="flex justify-between w-full border-b-deepBlue border-b mb-8 text-lg">
            <div className="w-2/12">Time</div>
            <div className="w-7/12">Subject</div>
            <div className="w-3/12 pl-2">Speakers</div>
          </div>
          {slots.map(({ _key, title, events }) => {
            return (
              <div
                key={_key}
                className="border-t-deepBlue border-t w-full py-8"
              >
                <h1 className="pb-8">{title}</h1>
                <div>
                  {events.map(({ _key, name, time, speaker }) => {
                    return (
                      <div key={_key} className="flex pb-8 fadeIn">
                        <h2 className="w-2/12 font-semibold">{time}</h2>
                        <h2 className="w-7/12 border-t-deepBlue border-t mr-8 font-ExtralightItalic">
                          {name}
                        </h2>
                        <p className="w-3/12 border-t-deepBlue border-t font-semibold">
                          {speaker}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="border-t border-t-deepBlue w-full flex fadeIn">
            <div onClick={register} className="m-auto">
              <Button
                title="Register"
                classes="!border-deepBlue border-2 mt-8 !text-deepBlue !hover:text-red-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
