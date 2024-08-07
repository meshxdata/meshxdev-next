
import React from "react";

const DataProblem: React.FC = () => {
  return (
    <section className="flex flex-col items-start self-center mt-44 max-w-full text-center w-[908px] max-md:mt-10">
      <h2 className="text-4xl text-red-600 underline leading-[49px] max-md:max-w-full">
        The problem with modern data: Two thirds of enterprise data is left
        untapped (<span className="text-red-600 underline">ID</span>
        <span className="text-red-600">C</span>)
      </h2>
      <p className="mt-4 text-lg font-light tracking-normal leading-7 text-black text-opacity-60 max-md:max-w-full">
        The current stack reinforces existing data silos, leading to the
        increase in separation, complexity, expensiveness and general poor
        quality, and this all leads to massive losses in data utilization
      </p>
    </section>
  );
};

export default DataProblem;
