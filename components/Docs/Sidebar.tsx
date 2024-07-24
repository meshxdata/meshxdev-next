import React from 'react';

const sidebarItems = [
  { text: 'Getting started with NEOS', isActive: false },
  { text: 'Plan your Data Landscape', isActive: false },
  {
    text: 'Transformations',
    isActive: true,
    subItems: ['CTL Instructions']
  },
  { text: 'Visualize your data – PowerBI', isActive: false },
  { text: 'Visualize your data – Superset', isActive: false }
];

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-center py-2.5 text-sm tracking-normal leading-6 max-md:mt-10">
        {sidebarItems.map((item, index) => (
          <div key={index} className={`${index > 0 ? 'mt-4' : ''} ${item.isActive ? 'text-orange-600' : 'text-black text-opacity-70'}`}>
            {item.text}
            {item.subItems && (
              <div className="flex flex-col justify-center px-5 mt-4">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className={`${subIndex > 0 ? 'mt-4' : ''} text-black text-opacity-70`}>
                    • {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;