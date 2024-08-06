import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full h-[432px]">
      <div className="flex flex-col grow self-stretch p-10 w-full font-light bg-white border-b border-red-600 max-md:px-5 max-md:mt-4">
        <h3 className="text-2xl leading-8 text-zinc-900">{title}</h3>
        <p className="mt-2.5 text-lg tracking-normal leading-7 text-black text-opacity-60">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;