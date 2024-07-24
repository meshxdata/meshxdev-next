import React from 'react';

const MainContent: React.FC = () => {
  return (
    <article className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-2.5 text-base tracking-normal leading-7 text-black text-opacity-70 max-md:mt-10 max-md:max-w-full">
        <h1 className="text-4xl tracking-wide leading-10 text-zinc-800 max-md:max-w-full">
          Transformations
        </h1>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <p>
            <strong>NEOS Data Product Pipeline Builder</strong>
            <br />
            This page includes information about the data product builder on NEOS, as well as the available transformers in it with usage examples.
            <br />
            NEOS Gateway version: v0.11.0-696
          </p>
          <p>
            <strong>Description</strong>
            <br />
            The NEOS pipeline builder is a low-code tool that is created to allow users define a data transformations pipeline in a friendly way, by eliminating the need of writing advanced code scripts, as well as maintaining and debugging them inside the platform.
            <br />
            From the user perspective, a NEOS pipeline builder for a data product named "My Data Product" is simply a JSON document with all the configuration, transformations and actions, that eventually construct the code scripts underneath.
            <br />
            At its basis, NEOS pipeline builder is a collection of Python helper functions based on NEOS' data processing framework,{" "}
            <a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">
              Apache Spark
            </a>{" "}
            (PySpark). Those helper functions receive a user input that include dataframe(s) and a set of params, validate it, process it based on some logic and produce a dataframe output.
          </p>
          <p>
            <strong>Features</strong>
            <br />
            The NEOS pipeline builder JSON base template contains the following main components:
          </p>
          <ol>
            <li>Configuration (config)</li>
            <li>Inputs (inputs)</li>
            <li>Transformations (transformations)</li>
            <li>Finalisers (finalisers)</li>
            <li>Preview (preview)</li>
          </ol>
        </div>
        <pre className="justify-center items-start p-2.5 mt-16 font-light bg-black bg-opacity-0 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          {`{
  "config": {},
  "inputs": {},
  "transformations": [],
  "finalisers": {},
  "preview": false
}`}
        </pre>
      </div>
    </article>
  );
};

export default MainContent;