import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center px-16 bg-white bg-opacity-90 min-h-[62px] max-md:px-5">
      <div className="flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto w-full basis-0 max-w-[1480px] min-h-[62px] min-w-[420px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8128f06fb49313c9641c64ceb4cc45cfe54a3f8f121c61342b31187b73e922f?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
            alt="Company logo"
            className="object-contain max-w-full aspect-[5.62] w-[107px]"
          />
        </div>
        <nav className="flex gap-8 justify-center self-stretch h-full text-sm leading-relaxed text-center whitespace-nowrap min-w-[240px] text-black text-opacity-60 max-md:max-w-full">
          <a href="#vision" className="gap-2 self-stretch px-2 h-full">
            Vision
          </a>
          <a href="#product" className="gap-2 self-stretch px-2 h-full">
            Product
          </a>
          <a href="#about" className="gap-2 self-stretch px-2 h-full">
            About
          </a>
          <a
            href="#careers"
            className="flex gap-2 justify-center items-center h-full text-red-600"
          >
            <span className="gap-2.5 self-stretch px-2 my-auto">Careers</span>
          </a>
          <a href="#solutions" className="gap-2 self-stretch px-2 h-full">
            Solutions
          </a>
        </nav>
        <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <button className="flex gap-2.5 justify-center items-center self-stretch px-4 py-1 my-auto text-sm leading-relaxed rounded text-black text-opacity-60">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2cb9a5fa6ae1f6b063cb88f0b7dc28de67f771d84375d71a3bcbcda6944fc18?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            <span className="self-stretch my-auto">Early access</span>
          </button>
          <div className="flex shrink-0 self-stretch my-auto w-px bg-zinc-300 h-[26px]" />
          <button className="flex gap-2.5 justify-center items-center self-stretch px-4 py-2 my-auto w-12 rounded min-h-[32px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73418fe4db2d7d850d9e93ddfeaa5fa9371ac6c888c1cc91f8a55aed824dde2e?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
              alt="Menu icon"
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
