import { useState } from "react";
import { useMail } from "../../hooks/useMail";

export default function GetStartedForm() {
  const [email, setEmail] = useState("");
  const { isLoading, showResponse, sendEmail } = useMail();

  return (
    <form
      onSubmit={(e) => sendEmail(email, setEmail)}
      className="bg-opacity-90 p-6 rounded-md max-w-2xl w-full mx-4 text-center mt-32"
    >
      <h2 className="text-white/70 text-[24px] font-normal font-montserrat mb-4">
        Request early access
      </h2>
      <div>
        {!showResponse && (
          <div className="relative mt-2 flex items-center">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email_address"
              name="email_address"
              placeholder="email address"
              className="flex-grow placeholder-white/70 font-inter text-md bg-[#1B1C1D]  focus:outline-none  text-white/60 p-4 pr-16 block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-[#FF6000] h-[50px]"
            />
            <button
              className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5 cursor-pointer"
              type="submit"
            >
              <span className="bg-[#FFFFFF]/10 hover:bg-[#FF6000] hover:text-[#FFFFFF] h-[38px] w-[128px] inline-flex items-center rounded px-1 pl-6 font-inter text-center text-md text-[#FF6000]">
                Request &rarr;{" "}
              </span>
            </button>
          </div>
        )}
      </div>
      {showResponse && (
        <div className="flex text-center w-full bg-[#1B1C1D] rounded-md md:h-[50px]">
          <svg
            className="mt-5 md:mr-2 md:ml-12 ml-6"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H10.5V14H2.5V4L10.5 9L18.5 4V9H20.5V2C20.5 0.9 19.6 0 18.5 0ZM10.5 7L2.5 2H18.5L10.5 7ZM15.84 18L12.3 14.46L13.71 13.05L15.83 15.17L20.07 10.93L21.5 12.34L15.84 18Z"
              fill="#FF6000"
            />
          </svg>
          <h2 className="text-white/40 text-md font-light font-inter mb-4 mt-3.5">
            Thank you! Your interest is registered. We will reach out to you
            soon.
          </h2>
        </div>
      )}
    </form>
  );
}