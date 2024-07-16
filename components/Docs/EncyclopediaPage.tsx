import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Footer from "../Footer/docs-footer";

const EncyclopediaPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4 pt-16 bg-white">
        <Header />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60515b1f37411cd407fca2213d790289edf4713ba9fea11c8051eb777c1cbab0?apiKey=ccbd9f716d3746849ccb6bd0200e2166&"
          alt=""
          className="self-stretch mt-16 w-full aspect-[5.88] max-md:mt-10 max-md:max-w-full"
        />
        <main className="mt-20 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Sidebar />
            <MainContent />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default EncyclopediaPage;
