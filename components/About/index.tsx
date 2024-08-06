import React from "react";
import Layout from "./Layout";
import IconGrid from "./IconGrid";
import FeatureCard from "./FeatureCard";
import Button from "./Button";

const AboutPage: React.FC = () => {
  const icons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/2397bf1563701aaf4eebc85d4ab495705dd83dc29fbbf13ae2159c35d58cf361?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/df24295bbee8a6267184ffd9440c9ceff501a2664caaa8e3d205937d60948172?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/48e01ec7376ef788b24420df2772bf897aeaba3c5c976c9664af111f5d47d431?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a1f0756a7007bca57c55a92c584492491f1fea844869cfdedf3e6a1079b9f035?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166",
  ];

  const features = [
    {
      title: "Global Industry Experience",
      description:
        "Team members with diverse backgrounds in leading companies (Microsoft, Skype, Vodafone, Novo Banco, Raytheon)",
    },
    {
      title: "Deep Expertise in Data and AI",
      description:
        "Seasoned data engineers, architects, and AI specialists with extensive experience in building and scaling data-intensive platforms",
    },
    {
      title: "Enterprise-Grade Software Development",
      description:
        "Experienced product managers and engineers with backgrounds in developing and delivering complex enterprise software solutions",
    },
    {
      title: "Cloud and Platform Architecture Masters",
      description:
        "Cloud and platform architects with deep knowledge of cloud infrastructure and distributed systems",
    },
  ];

  return (
    <Layout>
      <div className="max-w-[1480px] mx-auto px-5">
        <div className="ml-48">
          <section className="mt-8 text-5xl w-[973px] leading-[58px] text-zinc-900 max-md:text-4xl max-md:leading-[54px]">
            <IconGrid icons={icons} />
            We are a small team on a big mission: to make 5 million dollars
            cash! Each! Supposedly, by selling enterprise-level data mesh to the
            government-level agencies.
          </section>
          <p className="mt-8 text-2xl w-[973px] font-light leading-8 text-black text-opacity-60">
            Our mission is to lead the evolution of data architecture by
            providing innovative data mesh solutions that break down data silos
            and promote a decentralized approach to data management. We aim to
            help organizations harness the full potential of their data, driving
            better decision-making and fostering a culture of data-driven
            innovation.
          </p>
        </div>
        <section className="flex flex-col items-center self-stretch mt-44 w-full max-md:mt-10">
          <h2 className="text-3xl leading-9 text-center text-zinc-900 max-md:max-w-full">
            We have:
          </h2>
          <div className="mt-10 w-full">
            <div className="grid grid-cols-4 h-[432px] gap-5 max-md:grid-cols-1">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <p className="mt-44 text-3xl leading-10 text-center text-black text-opacity-60 w-full max-md:mt-10">
          Our team is composed of industry experts, software engineers, and data
          scientists who are passionate about data and technology. We bring
          together a diverse range of skills and experiences to create
          innovative solutions that drive success for our clients.
        </p>
        <div className="flex gap-5 justify-between items-center px-5 mt-11 bg-blend-multiply max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a09457b9eee4e8e6c45dd211312fbb43e57b82b5d7b59312ef025434d3e77c0?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
            className="shrink-0 self-stretch my-auto aspect-[2.27] w-[59px]"
            alt="Company logo 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb3b9e8faa8cd26b9fa34d6750a8debc2215c49d5b4b1ccbff88871811adffb6?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
            className="shrink-0 self-stretch max-w-full aspect-[3.57] w-[105px]"
            alt="Company logo 2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c00c6c73f51544c59b4c20cb8a3c0dfbf76cc7c7fa21834d66b5044c86637a1c?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
            className="shrink-0 self-stretch my-auto aspect-[5] w-[83px]"
            alt="Company logo 3"
          />
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2"></div>
          <div className="basis-1/2"></div>
          <div className="basis-1/4"></div>
          <div className="basis-1/2">
          <div className="shrink-0 mt-44 ml-14 bg-red-600 h-[3px] w-[25px] max-md:mt-10 text-cente" />
          </div>
          <div className="basis-1/2"></div>
          <div className="basis-1/2"></div>
        </div>

        <h2 className="mt-8 text-5xl font-medium text-center leading-[62.4px] text-zinc-900 max-md:text-4xl">
          Join us!
        </h2>
        <p className="mt-10 text-lg font-light tracking-normal leading-7 text-center text-black text-opacity-60 w-full max-md:max-w-full">
          We are always hiring the great and the talented, hungry people full of
          energy and ready to take over the world! Haha! Did I say it with the
          straight face? Ahaha! Come here, low energy nerds and basement
          dwellers! We know who you are and we like you just as you are.
        </p>

        <div className="flex flex-row">
          <div className="basis-1/2"></div>
          <div className="basis-1/2"></div>
          <div className="basis-1/4"></div>
          <div className="basis-1/2">
            {" "}
            <Button
              text="Careers"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dc009335ed46327144a20e0e432c0e43b7aee9d16bca32991cf97108b329bd80?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
            />
          </div>
          <div className="basis-1/2"></div>
          <div className="basis-1/2"></div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
