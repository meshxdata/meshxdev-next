import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const locations = [
    { emoji: '🇸🇬', name: 'Singapore' },
    { emoji: '🇸🇦', name: 'Saudi Arabia' },
    { emoji: '🇵🇹', name: 'Portugal' },
    { emoji: '🇦🇪', name: 'United Arab Emirates' },
  ];

  const links = [
    { text: 'About us', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Contact us', href: '#' },
    { text: 'Cookies Policy', href: '#' },
    { text: 'Privacy Notice', href: '#' },
    { text: 'Terms of Use', href: '#' },
  ];

  return (
    <footer className="flex justify-center items-center self-stretch px-16 mt-44 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col pt-9 w-full border-t border-black border-opacity-20 max-w-[1481px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pb-8 text-sm leading-7 border-b border-black border-opacity-10 text-black text-opacity-60 max-md:flex-wrap max-md:max-w-full">
          {locations.map((location, index) => (
            <div key={index}>{location.emoji} {location.name}</div>
          ))}
        </div>
        <div className="flex gap-5 px-px mt-7 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 pt-2.5 pb-20 text-sm leading-7 text-black text-opacity-60">
            <Logo />
            <div className="mt-6">
              © 2024 MeshX Pte. ltd. <br /> All rights reserved
            </div>
          </div>
          <nav className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {[0, 1].map((columnIndex) => (
                <div key={columnIndex} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-2.5 pr-20 text-sm leading-6 text-black text-opacity-60">
                    {links.slice(columnIndex * 3, (columnIndex + 1) * 3).map((link, index) => (
                      <a key={index} href={link.href} className="mt-2 underline">
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;