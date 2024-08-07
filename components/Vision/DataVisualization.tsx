
import React from "react";

const DataVisualization: React.FC = () => {
  return (
    <div className="self-center mt-20 max-w-full w-[812px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                <div className="mt-40 text-lg font-light tracking-normal leading-7 text-black text-opacity-60 max-md:mt-10">
                  data warehouses, lakes, etc
                </div>
              </div>
              Continuing from where we left off:
              <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fef43281035e65bd706e373f3554d735f15002034bb7e8a078176a6379a81f6?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
                  alt="Data visualization"
                  className="object-contain grow w-full bg-blend-multiply aspect-[1.57]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-7 text-lg font-light tracking-normal text-black text-opacity-60 max-md:mt-9">
            <div className="self-start">data consumers</div>
            <div className="mt-40 max-md:mt-10">existing data systems</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
