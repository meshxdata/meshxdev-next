import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
        <div className="flex z-10 flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6480dbbc293ab1cf78892e31431959401e5e657ef5490f695c62fb391e16eeab?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
            alt="Company Logo"
            className="max-w-full aspect-[5.56] w-[206px]"
          />
          <h1 className="mt-14 text-6xl tracking-tighter leading-[77px] text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] font-spaceGrotesk">
            AI-ready Data Platform for the Modern Enterprise
          </h1>
          <p className="mt-4 text-2xl font-light leading-8 text-black text-opacity-60 max-md:max-w-full">
            From data preparation to model selection, training, deployment, and monitoring, our platform provides a streamlined experience for enterprise AI success.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c00e2081d97d82781b47bd6dc5829803b406089d3fc14b44a53d8e6bbb7bfe?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
          alt="AI Platform Illustration"
          className="grow w-full bg-blend-multiply aspect-[1.75] max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;