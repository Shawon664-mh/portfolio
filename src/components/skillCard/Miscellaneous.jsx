import React from "react";
import {
  git,
  github,
  firebase,
  webpack,
  figma,
  ai,
  linux
} from "../../assets/index";

const Miscellaneous = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-5">miscellaneous</h1>

      <div className="px-8 py-8 bg-[#000] h-[400px] w-[300px] flex flex-col justify-evenly rounded-md">
        <div className="flex flex-row justify-between items-end pb-5">
          <div className="flex flex-col items-center">
            <img src={git} className="h-10 w-10"/>
            <h2>Git</h2>
          </div>
          <div className="flex flex-col items-center ">
            <img src={github} className="h-10 w-10"/>
            <h2>GitHub</h2>
          </div>
        </div>

        <div className="flex flex-row justify-evenly pb-5">
          <div className="flex flex-col items-center">
            <img src={firebase} className="h-10 w-10"/>
            <h2>Firebase</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={webpack} className="h-10 w-10"/>
            <h2>Webpack</h2>
          </div>
        </div>

        <div className="flex flex-row justify-between pb-5">
          <div className="flex flex-col items-center">
            <img src={figma} className="h-10 w-10"/>
            <h2>Figma</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={ai} className="h-10 w-10"/>
            <h2>Adobe Illustrator</h2>
          </div>
        </div>

        <div className="flex flex-row justify-center pb-3">
          <div className="flex flex-col items-center">
            <img src={linux} className="h-10 w-10"/>
            <h2>Linux</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
