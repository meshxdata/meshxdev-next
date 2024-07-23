import React from 'react';

const MainContent: React.FC = () => {
  return (
    <article className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-4 max-md:mt-10 max-md:max-w-full">
        <nav className="text-sm tracking-normal leading-6 text-orange-600 underline max-md:max-w-full">
          <span className="underline">NEOS Core</span> /{" "}
          <span className="underline">Plan your Data Landscape</span> /
        </nav>
        <h1 className="mt-5 text-4xl tracking-wide leading-10 text-zinc-800 max-md:max-w-full">
          Transformations
        </h1>
        <div className="mt-16 text-base tracking-normal leading-7 text-black text-opacity-70 max-md:mt-10 max-md:max-w-full">
          <p><strong>NEOS Data Product Pipeline Builder</strong></p>
          <p>This page includes information about the data product builder on NEOS, as well as the available transformers in it with usage examples.</p>
          <p>NEOS Gateway version: v0.11.0-696</p>
          <p className='mt-10'><strong>Description</strong></p>
          <p>The NEOS pipeline builder is a low-code tool that is created to allow users define a data transformations pipeline in a friendly way, by eliminating the need of writing advanced code scripts, as well as maintaining and debugging them inside the platform.</p>
          <p>From the user perspective, a NEOS pipeline builder for a data product named "My Data Product" is simply a JSON document with all the configuration, transformations and actions, that eventually construct the code scripts underneath.</p>
          <p>At its basis, NEOS pipeline builder is a collection of Python helper functions based on NEOS' data processing framework, <a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Apache Spark</a> (PySpark). Those helper functions receive a user input that include dataframe(s) and a set of params, validate it, process it based on some logic and produce a dataframe output.</p>
          <p className='mt-10'><strong>Features</strong></p>
          <p>The NEOS pipeline builder JSON base template contains the following main components:</p>
          <ol>
            <li>Configuration (config)</li>
            <li>Inputs (inputs)</li>
            <li>Transformations (transformations)</li>
            <li>Finalisers (finalisers)</li>
            <li>Preview (preview)</li>
          </ol>
        </div>
      </div>
    </article>
  );
};

export default MainContent;