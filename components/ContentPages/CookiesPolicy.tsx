
import React from "react";

const CookiesPolicy: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-16 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1480px] min-w-[420px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
          <h1 className="grow shrink self-start text-4xl leading-none text-zinc-900 w-[196px] max-sm:pl-8 max-sm:ml-8">
            Cookies Policy
          </h1>
          <div className="grow shrink text-sm tracking-normal leading-6 text-orange-600 w-[932px] max-md:max-w-full max-sm:pr-1.5 max-sm:pl-8 max-sm:mx-8 max-sm:grow-0 max-sm:w-[px]">
            <p className="text-lg font-light tracking-normal leading-7">
              0094This Privacy Policy describes Our policies and procedures on
              the collection, use and disclosure of Your information when You
              use the Service and tells You about Your privacy rights and how
              the law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
            <h2 className="text-lg font-light tracking-normal leading-7">
              Interpretation and Definitions
            </h2>
            <h3>Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h3 className="text-lg font-light tracking-normal leading-7">
              Definitions
            </h3>
            <p>For the purposes of this Privacy Policy:</p>
            {/* ... (rest of the content) ... */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CookiesPolicy;
