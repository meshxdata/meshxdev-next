import React from 'react';

interface ButtonProps {
  text: string;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className="flex gap-2 justify-center px-6 py-2.5 mt-8 text-lg font-bold tracking-normal text-white whitespace-nowrap bg-red-600 rounded max-md:px-5">
      <img loading="lazy" src={icon} className="shrink-0 my-auto w-5 aspect-square" alt="" />
      <span>{text}</span>
    </button>
  );
};

export default Button;