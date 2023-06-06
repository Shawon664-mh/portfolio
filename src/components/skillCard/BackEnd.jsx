import React from "react";
import {
  nodejs,
  expressJs,
  javascript,
  typescript,
  mongodb,
  pug,
  jest,
} from "../../assets/index";

const BackEnd = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-5">Back-end</h1>

      <div className="px-8 py-8 bg-[#000] h-[400px] w-[300px] flex flex-col justify-evenly rounded-md">
        <div className="flex flex-row justify-between items-end pb-5">
          <div className="flex flex-col items-center">
            <img src={nodejs} className="h-10 w-10" />
            <h2>NodeJs</h2>
          </div>
          <div className="flex flex-col items-center ">
            <img src={expressJs} className="h-10 w-10" />
            <h2>Express</h2>
          </div>
        </div>

        <div className="flex flex-row justify-evenly pb-5">
          <div className="flex flex-col items-center">
            <img src={javascript} className="h-10 w-10" />
            <h2>JavaScript</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={typescript} className="h-10 w-10" />
            <h2>TypeScript</h2>
          </div>
        </div>

        <div className="flex flex-row justify-between pb-5">
          <div className="flex flex-col items-center">
            <img src={mongodb} className="h-10 w-10" />
            <h2>MongoDB</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={pug} className="h-10 w-10" />
            <h2>Pug/Jade</h2>
          </div>
        </div>

        <div className="flex flex-row justify-center pb-3">
          <div className="flex flex-col items-center">
            <img src={jest} className="h-10 w-10" />
            <h2>Jest</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
