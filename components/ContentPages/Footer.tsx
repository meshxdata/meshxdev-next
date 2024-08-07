
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center px-16 mt-44 w-full text-sm leading-6 text-black text-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden relative pt-32 w-full max-w-[1480px] min-h-[364px] max-md:pt-24 max-md:max-w-full">
        <div className="flex overflow-hidden z-0 flex-col flex-1 shrink items-start pt-2.5 pr-20 pb-36 leading-7 basis-0 min-w-[240px] max-md:pb-24">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11c68e43ce5f728515578dde9a3e7145f3bb750c997d6766586203ffa7299b50?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
            alt="Company Logo"
            className="object-contain aspect-[5.59] w-[95px]"
          />
          <div className="mt-3.5">
            © 2024 MeshX Pte. ltd. <br /> All rights reserved
          </div>
        </div>
        <div className="flex z-0 flex-1 shrink gap-2.5 py-2.5 basis-[74px] h-[244px] min-w-[240px] w-[370px]" />
        <nav className="flex overflow-hidden z-0 flex-1 shrink gap-2.5 items-start py-2.5 h-full basis-[74px] min-w-[240px]">
          <div className="flex flex-col items-start">
            <a href="#about" className="self-stretch leading-relaxed underline">
              About us
            </a>
            <a
              href="#careers"
              className="self-stretch mt-2 underline whitespace-nowrap"
            >
              Careers
            </a>
            <a href="#contact" className="self-stretch mt-2 underline">
              Contact us
            </a>
          </div>
        </nav>
        <nav className="flex overflow-hidden z-0 flex-1 shrink gap-2.5 items-start py-2.5 h-full basis-[74px] min-w-[240px]">
          <div className="flex flex-col">
            <a href="#cookies" className="self-stretch underline">
              Cookies Policy
            </a>
            <a href="#privacy" className="self-stretch mt-2 underline">
              Privacy Notice
            </a>
            <a href="#terms" className="self-start mt-2 underline">
              Terms of Use
            </a>
          </div>
        </nav>
        <div className="flex absolute inset-x-0 z-0 flex-wrap items-start self-start leading-7 h-[59px] min-h-[59px] min-w-[240px] top-[35px] w-[1480px] max-md:max-w-full">
          <div className="flex-1 shrink min-w-[240px]">🇸🇬 Singapore</div>
          <div className="flex-1 shrink min-w-[240px]">🇸🇦 Saudi Arabia</div>
          <div className="flex-1 shrink min-w-[240px]">🇵🇹 Portugal</div>
          <div className="flex-1 shrink min-w-[240px]">
            🇦🇪 United Arab Emirates
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
