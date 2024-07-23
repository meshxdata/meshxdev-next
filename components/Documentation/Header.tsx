import React from "react";
import { useClerk, UserButton } from "@clerk/nextjs";

const Header: React.FC = () => {
  const { signOut } = useClerk();

  return (
    <header className="flex justify-center items-center self-stretch px-16 py-4 w-full backdrop-blur-[7px] bg-white bg-opacity-90 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 w-full max-w-[1480px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-1 gap-2 my-auto text-xl font-semibold leading-7 uppercase whitespace-nowrap text-zinc-500 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c93a324fc38efe32133facb3c8c453be3d87a967900fcde5c09acbea3f20708f?apiKey=ccbd9f716d3746849ccb6bd0200e2166&"
            alt="Documentation logo"
            className="shrink-0 my-auto aspect-[5.56] w-[90px]"
          />
          <div>DOCUMENTATION</div>
        </div>
        <button className="flex gap-2.5 justify-center px-4 py-1 text-base leading-6 rounded border border-solid border-white border-opacity-10 text-black text-opacity-60">
          <UserButton/>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a31099c238c5d910059ed3d95949e477b233f736cd161f22422d21d8ef601b?apiKey=ccbd9f716d3746849ccb6bd0200e2166&"
            alt="Logout icon"
            className="shrink-0 my-auto w-4 aspect-square"
          />
          <span onClick={() => signOut({ redirectUrl: "/" })}>Log out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
