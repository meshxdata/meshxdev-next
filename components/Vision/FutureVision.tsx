
import React from "react";

const FutureVision: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-36 mt-40 w-full max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[982px] max-md:mb-2.5">
        <div className="flex flex-col items-start text-center max-md:max-w-full">
          <h2 className="text-5xl text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            The future: AI-native Data Democratization
          </h2>
          <p className="mt-4 text-lg font-light tracking-normal leading-7 text-slate-50 max-md:max-w-full">
            Once the data sources become repackaged as easily governed Data
            Products, we will be able to provide the cleanest of all data to the
            Machine Learning and other AIs.
          </p>
        </div>
        <div className="self-center mt-20 ml-5 max-w-full w-[866px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            {/* Left column */}
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-lg font-light tracking-normal text-right text-red-600 max-md:mt-3">
                <div className="max-md:mr-1 max-md:ml-0.5">
                  applications, ML, Digital twin
                </div>
                <div className="self-end mt-28 max-md:mt-10">
                  MESH X FOUNDATION
                </div>
                <div className="mt-28 max-md:mt-10 max-md:mr-1">
                  your data warehouses, lakes
                </div>
              </div>
            </div>
            {/* Center and Right columns */}
            <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-3 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a69d4d009aea4861a74932083d2dc4a8da76c2d31f4a40e135b9fe0f7a462a2?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
                      alt="Data flow diagram"
                      className="object-contain grow w-full aspect-[0.98]"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-lg font-light tracking-normal text-red-600">
                      <div className="flex flex-col items-start pr-px pl-5">
                        <div className="self-stretch">
                          & enterprise intelligence
                        </div>
                        <div className="mt-14 max-md:mt-10">data products</div>
                        <div className="mt-24 text-right max-md:mt-10">
                          data meshes
                        </div>
                      </div>
                      <div className="mt-28 max-md:mt-10">
                        your existing data systems
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
