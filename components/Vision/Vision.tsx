
import React from "react";

const Vision: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-16 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1480px] min-w-[420px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[1075px]">
            <h2 className="text-4xl leading-none text-red-600 max-md:max-w-full">
              Our vision:
            </h2>
            <h1 className="mt-4 text-5xl leading-[58px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              We believe that every Enterprise will become AI-driven enterprise.
              And it starts with getting your data in order.
            </h1>
            <p className="mt-4 text-lg font-light tracking-normal leading-7 text-black text-opacity-60 max-md:max-w-full">
              The inevitable Enterprise AI transformation presents major
              challenges on many levels - which areas to start with, how deep,
              how fast, and at how much of a risk and cost. AI starts with clean
              organized data — start doing it today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
