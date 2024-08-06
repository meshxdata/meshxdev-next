import React from 'react';

const EarlyAccessButton: React.FC = () => {
  return (
    <div className="flex gap-2.5 justify-center self-start px-4 py-1 text-sm leading-6 rounded text-black text-opacity-60 cursor-pointer">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e78f683a4b121786bd4184a5f36b077981e9d5d26f7c0905efe58a8f8b237a8?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
        alt=""
        className="shrink-0 my-auto w-4 aspect-square"
      />
      <div>Early access</div>
    </div>
  );
};

export default EarlyAccessButton;