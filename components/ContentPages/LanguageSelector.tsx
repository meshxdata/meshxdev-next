
import React from "react";

const LanguageSelector: React.FC = () => {
  return (
    <button className="flex gap-2.5 justify-center items-center self-stretch px-4 py-2 my-auto w-12 rounded min-h-[32px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/954e9d1eb003ef0c583fd85359e7d2300c7f5f857f9d3743b0fa2a94c43c7a0b?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
        alt="Language selector"
        className="object-contain self-stretch my-auto w-4 aspect-square"
      />
    </button>
  );
};

export default LanguageSelector;
