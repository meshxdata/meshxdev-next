import React from 'react';

const LearnMoreButton: React.FC = () => {
  return (
    <a href="#" className="flex gap-2 justify-center self-start p-1 mt-3 text-lg tracking-normal leading-7 text-red-600 rounded cursor-pointer">
      <img
        loading="lazy"
        src="images/pointer-meshx.svg"
        alt=""
        className="shrink-0 my-auto w-6 aspect-square"
      />
      <span>More about the platform</span>
    </a>
  );
};

export default LearnMoreButton;