import React from 'react';

const sidebarItems = [
  { text: "Getting started with NEOS", isActive: false },
  { text: "Plan your Data Landscape", isActive: false },
  { text: "Transformations", isActive: true },
  { text: "CTL Instructions", isActive: false },
  { text: "Visualize your data – PowerBI", isActive: false },
  { text: "Visualize your data – Superset", isActive: false }
];

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-center py-2.5 text-sm tracking-normal leading-6 max-md:mt-10">
        {sidebarItems.map((item, index) => (
          <div key={index} className={`${index > 1 ? 'mt-4' : ''} ${item.isActive ? 'text-orange-600' : 'text-black text-opacity-70'}`}>
            {item.text}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;