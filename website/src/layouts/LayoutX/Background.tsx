import React from "react";
import {HiOutlineArrowNarrowDown} from 'react-icons/hi'

function Background() {
  return (
    <div className="w-full h-screen fixed bg-gradient-to-tr from-white via-very-light-blue to-very-light-blue dark:from-very-dark-blue dark:via-dark-blue dark:to-dark-blue top-0">
      <div className="w-1/3 animate-ping aspect-square rounded-full border-[10px] border-very-dark-blue dark:border-dark-blue p-10 relative -left-[10%] mix-blend-luminosity -top-[20%] z-10">
        <div className="w-full h-full rounded-full border-[80px] dark:border-dark-blue animate-spin mix-blend-lighten"></div>
      </div>
      <div className="w-1/3 animate-ping aspect-square rounded-full border-[10px] border-white dark:border-very-dark-blue/50 p-10 absolute -right-[15%] mix-blend-luminosity -bottom-[10%]">
        <div className="w-full h-full rounded-full border-[100px] mix-blend-lighten dark:border-very-dark-blue/10"></div>
      </div>
      <div className="z-10 animate-pulse w-1/4 aspect-square rounded-full border-[10px] p-10 absolute right-[50%] dark:border-dark-blue mix-blend-luminosity top-[20%]">
        <div className="w-full h-full animate-ping rounded-full border-[60px] mix-blend-lighten dark:border-very-dark-blue/50"></div>
      </div>
      <div className="z-10  w-[300px] aspect-square rounded-full border-[5px] p-5 absolute right-[20%] bottom-[30%] dark:border-very-dark-blue/30 mix-blend-saturation">
        <div className="w-full animate-ping h-full dark:border-very-dark-blue/20 rounded-full border-[30px]"></div>
      </div>
      <div className="w-[30%] h-screen bg-gradient-to-tr from-white via-very-light-blue absolute top-0 to-very-light-blue dark:bg-gradient-to-lr dark:from-very-dark-blue dark:to-dark-blue"></div>

    </div>
  );
}

export default Background;
