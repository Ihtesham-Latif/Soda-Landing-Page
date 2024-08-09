import React from "react";

const Background = ({bgtext}) => {
  return (
    <div className="background w-full h-full absolute top-0 left-0 z-[2] flex justify-end">
      <h1 className=" bebas-neue-regular sm:text-4xl lg:text-[13rem] tracking-wide text-zinc-200 text-opacity-[0.1] font-extrabold pt-16 pr-44 ">
        {bgtext}
      </h1>
    </div>
  );
};

export default Background;
