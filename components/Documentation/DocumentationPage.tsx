import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import CodeBlock from "./CodeBlock";
import Footer from "../Footer/docs-footer";

const DocumentationPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center pb-12 bg-slate-50">
        <Header />
        <main className="flex flex-col mt-20 w-full max-w-[1480px] max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ca947366102b831cbbde6246eadc503f30080545a36262c5b1974ae7846bca?apiKey=ccbd9f716d3746849ccb6bd0200e2166&"
            alt="Documentation header image"
            className="w-full aspect-[5.88] max-md:max-w-full"
          />
          <div className="self-center mt-20 w-full max-w-[1308px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <Sidebar />
              <MainContent />
            </div>
          </div>
          <CodeBlock />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DocumentationPage;
