
import React from "react";

type ProcessStepProps = {
  number: string;
  title: string;
  items: string[];
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, items }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col w-full max-md:mt-4 max-md:max-w-full">
      <div className="flex gap-2 items-start self-start text-4xl leading-none">
        <div className="text-red-600">{number}</div>
        <div className="text-zinc-900">{title}</div>
      </div>
      <div className="flex flex-col mt-3.5 w-full text-lg font-light tracking-normal leading-7 text-black text-opacity-60 max-md:max-w-full">
        <div className="max-md:max-w-full">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              – {item} <br />
            </React.Fragment>
          ))}
        </div>
        <div className="flex mt-6 bg-red-600 min-h-[3px] w-[25px]" />
      </div>
    </div>
  </div>
);

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: "01.",
      title: "Your Data",
      items: [
        "Connect and Integrate",
        "Create Data Products",
        "Decentralize Data Ownership",
        "Enhance Data Governance",
        "Federate Data Catalog",
        "Data Lineage and Auditing",
      ],
    },
    {
      number: "02.",
      title: "Your Models",
      items: [
        "Foundation Model Expertise",
        "Tailored AI",
        "Simplified Model Development",
        "Experiment Tracking",
        "Collaborative Workflows",
      ],
    },
    {
      number: "03.",
      title: "Operational AI",
      items: [
        "Agile Deployment",
        "Real-time Monitoring",
        "Responsible AI Management",
        "Scalable AI Infrastructure",
        "A/B Testing",
        "Integration with Business Applications",
      ],
    },
  ];

  return (
    <div className="pb-7 mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
