import React from 'react';

const navigationItems = [
  ['Vision', '/vision'],
  ['Product', '/product'],
  ['About', '/about'],
  ['Careers', '/careers'],
  ['Solutions', '/solutions']
];

const Navigation: React.FC = () => {
  return (
    <nav className="flex gap-5 justify-center text-sm leading-6 text-center whitespace-nowrap text-black text-opacity-60 max-md:flex-wrap">
      {navigationItems.map((item, index) => (
        <a key={index} href={item[1]} className="px-2 py-5">
          {item[0]}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;