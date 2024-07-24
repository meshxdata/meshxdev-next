import React from 'react';

const BackButton: React.FC = () => {
  return (
    <button className="flex gap-2 self-start px-3 py-1.5 text-sm leading-5 text-blue-600 whitespace-nowrap rounded">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed7d582cb38156cf1cd8d048734ca7b9df4eab83b591572c55e7cb10761eafe6?apiKey=ccbd9f716d3746849ccb6bd0200e2166&" className="shrink-0 my-auto w-4 aspect-square" alt="" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;