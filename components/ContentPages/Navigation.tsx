
import React from "react";

const navigationItems = ["Vision", "Platform", "About", "Careers", "Solutions"];

const Navigation: React.FC = () => {
  return (
    <nav className="flex gap-8 justify-center self-stretch h-full text-sm leading-relaxed text-center whitespace-nowrap min-w-[240px] text-black text-opacity-60 max-md:max-w-full">
      {navigationItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          className="gap-2 self-stretch px-2 h-full"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
