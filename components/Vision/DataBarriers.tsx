
import React from "react";

type BarrierProps = {
  number: string;
  title: string;
  description: string;
};

const Barrier: React.FC<BarrierProps> = ({ number, title, description }) => (
  <div className="justify-end py-10 pl-20 mt-2 w-full bg-white max-md:pl-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-wrap grow gap-2 items-center text-2xl font-light max-md:mt-10">
          <div className="self-stretch my-auto text-right text-red-600">
            {number}
          </div>
          <div className="flex-1 shrink self-stretch my-auto basis-0 text-zinc-900 max-md:max-w-full">
            {title}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
        <div className="text-lg font-light tracking-normal text-black text-opacity-60 max-md:mt-10 max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  </div>
);

const DataBarriers: React.FC = () => {
  const barriers = [
    {
      number: "01.",
      title: "Data is not usable",
      description: "trust, accuracy, completeness, quality",
    },
    {
      number: "02.",
      title: "Managing the storage of collected data",
      description: "time, resource, infrastructure, etc",
    },
    {
      number: "03.",
      title: "Ensuring that needed data is collected",
      description: "reliance on subject matter expertise",
    },
    {
      number: "04.",
      title: "Ensuring the governance of collected data",
      description: "ownership, privacy, security, quality, etc.",
    },
    {
      number: "05.",
      title: "Making the different silos of data available",
      description: "vendor lock in, formats, access, integration, etc.",
    },
  ];

  return (
    <section className="flex flex-col items-center px-16 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1480px] min-w-[420px] max-md:max-w-full">
        <h2 className="gap-2.5 self-start text-3xl leading-none min-h-[60px] text-zinc-900">
          The top barriers to using data:
        </h2>
        {barriers.map((barrier, index) => (
          <Barrier key={index} {...barrier} />
        ))}
      </div>
    </section>
  );
};

export default DataBarriers;
