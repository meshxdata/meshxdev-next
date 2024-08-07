
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/160e6fec6380c4b225ad153790d44878db25dcd2b9678a2044189f609e2e2063?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
        alt="Company Logo"
        className="object-contain max-w-full aspect-[5.62] w-[107px]"
      />
    </div>
  );
};

export default Logo;
