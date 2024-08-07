
import React from "react";

const PlatformInfo: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-16 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1480px] min-w-[420px] max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <h2 className="text-4xl leading-none text-zinc-900 max-md:max-w-full">
            Here's how we make it work
          </h2>
          <button className="flex gap-2 justify-center items-center py-1.5 pr-4 pl-1 mt-8 max-w-full text-2xl font-light text-red-600 rounded min-h-[43px] w-[328px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8998d1b0c9d3e9c3d05e57a358c28df037d6f90ab7570bab40d7152b45de3c36?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="self-stretch my-auto">All about our Platform</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformInfo;
