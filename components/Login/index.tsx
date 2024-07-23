import React, { useEffect } from "react";
import BackButton from "./BackButton";
import LoginForm from "./LoginForm";
import AlternativeLogin from "./AlternativeLogin";
import { SignIn } from "@clerk/nextjs";

const Login: React.FC = () => {

  return (
    <main className="flex flex-col justify-center bg-slate-100">
      <div className="flex justify-center items-center p-10 w-full bg-neutral-700 bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-4 mb-10 max-w-full w-[460px]">
        <header className="flex justify-center -ml-12 mb-10 gap-1 text-base font-semibold leading-6 uppercase whitespace-nowrap text-zinc-500">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9703d672ecab62ce746984de1e60a14bda244541bf30e01b437f65412d192a04?apiKey=ccbd9f716d3746849ccb6bd0200e2166&" className="shrink-0 my-auto aspect-[5.26] fill-orange-600 w-[63px]" alt="" />
              <h1>Documentation</h1>
            </header>
          <BackButton />
          <SignIn routing="hash" forceRedirectUrl={'/docs'}/>
          {/* <BackButton />
          <section className="flex flex-col justify-center px-16 pt-10 pb-12 mt-5 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
            <header className="flex gap-1 text-base font-semibold leading-6 uppercase whitespace-nowrap text-zinc-500">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9703d672ecab62ce746984de1e60a14bda244541bf30e01b437f65412d192a04?apiKey=ccbd9f716d3746849ccb6bd0200e2166&" className="shrink-0 my-auto aspect-[5.26] fill-orange-600 w-[63px]" alt="" />
              <h1>Documentation</h1>
            </header>
            <hr className="shrink-0 mt-5 h-px bg-black bg-opacity-10" />
            <LoginForm />
            <hr className="shrink-0 mt-5 h-px bg-black bg-opacity-10" />
            <AlternativeLogin />

          </section> */}
        </div>
      </div>
    </main>
  );
};

export default Login;
