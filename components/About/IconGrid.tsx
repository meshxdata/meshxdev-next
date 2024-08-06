import React from 'react';

interface IconGridProps {
  icons: string[];
}

const IconGrid: React.FC<IconGridProps> = ({ icons }) => {
  return (
    <div className="grid grid-cols-6 gap-5 mb-[30px] max-md:grid-cols-1 justify-between self-start mt-44 max-md:mt-10 max-md:ml-2.5">
      {icons.map((icon, index) => (
        <img key={index} loading="lazy" src={icon} className="shrink-0 w-11 aspect-square" alt={`Icon ${index + 1}`} />
      ))}
    </div>
  );
};

export default IconGrid;