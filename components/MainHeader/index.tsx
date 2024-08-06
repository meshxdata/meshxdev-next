import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import EarlyAccessButton from './EarlyAccessButton';
import LoginButton from './LoginButton';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center px-16 bg-white bg-opacity-90 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 justify-between w-full max-w-[1480px] max-md:flex-wrap max-md:max-w-full">
        <Logo />
        <div className="flex gap-4 max-md:flex-wrap">
          <Navigation />
          <div className="flex flex-1 gap-2 pl-20 my-auto max-md:flex-wrap">
            <EarlyAccessButton />
            <div className="shrink-0 my-auto w-px bg-zinc-300 h-[26px]" />
            <LoginButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;