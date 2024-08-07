
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import EarlyAccessButton from "./EarlyAccessButton";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center px-16 bg-white bg-opacity-90 min-h-[62px] max-md:px-5">
      <div className="flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto w-full basis-0 max-w-[1480px] min-h-[62px] min-w-[420px] max-md:max-w-full">
        <Logo />
        <Navigation />
        <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <EarlyAccessButton />
          <div className="flex shrink-0 self-stretch my-auto w-px bg-zinc-300 h-[26px]" />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
