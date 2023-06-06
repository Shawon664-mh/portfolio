import React from "react";
import {
  html,
  css,
  sass,
  javascript,
  reactjs,
  redux,
  styledComponent,
  typescript,
  framerMotion,
  nextJs
} from "../../assets/index";

const FrontEnd = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-5">Front-end</h1>

      <div className="px-8 py-8 bg-[#000] h-[400px] w-[300px] flex flex-col justify-evenly rounded-md">
        <div className="flex flex-row justify-between items-end pb-5">
          <div className="flex flex-col items-center">
            <img src={html} className="h-10 w-10" />
            <h2>HTML</h2>
          </div>
          <div className="flex flex-col items-center ">
            <img src={css} className="h-10 w-10"/>
            <h2>CSS</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={sass} className="h-10 w-10"/>
            <h2>SASS</h2>
          </div>
        </div>

        <div className="flex flex-row justify-evenly pb-5">
          <div className="flex flex-col items-center">
            <img src={javascript} className="h-10 w-10"/>
            <h2>JavaScript</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={typescript} className="h-10 w-10"/>
            <h2>TypeScript</h2>
          </div>
        </div>

        <div className="flex flex-row justify-between pb-5">
          <div className="flex flex-col items-center">
            <img src={reactjs} className="h-10 w-10"/>
            <h2>React</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={redux} className="h-10 w-10"/>
            <h2>Redux</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={nextJs} className="h-10 w-10"/>
            <h2>NextJS</h2>
          </div>
        </div>

        <div className="flex flex-row justify-evenly pb-3">
          <div className="flex flex-col items-center">
            <img src={styledComponent} className="h-10 w-10"/>
            <h2 className="text-center">Styled Components</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={framerMotion} className="h-10 w-10"/>
            <h2 className="text-center">Framer Motion</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
