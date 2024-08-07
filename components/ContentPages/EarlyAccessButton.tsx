
import React from "react";

const EarlyAccessButton: React.FC = () => {
  return (
    <button className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto text-sm leading-relaxed rounded text-black text-opacity-60">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9482e2562a33a084231dc5ce35caad1d48d9cab74b4d313c95a41745b22f7ccc?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <span className="self-stretch my-auto">Early access</span>
    </button>
  );
};

export default EarlyAccessButton;
