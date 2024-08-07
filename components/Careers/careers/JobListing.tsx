
import React from "react";

interface JobListingProps {
  title: string;
  location: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const JobListing: React.FC<JobListingProps> = ({
  title,
  location,
  description,
  responsibilities,
  qualifications,
}) => {
  return (
    <article className="flex flex-col w-full rounded min-w-[390px] max-md:max-w-full mb-16">
      <h2 className="text-3xl leading-none max-md:max-w-full">{title}</h2>
      <p className="mt-5 tracking-normal text-red-600 max-md:max-w-full">
        Location: {location}
      </p>
      <p className="mt-5 tracking-normal leading-7 max-md:max-w-full">
        {description}
      </p>
      <div className="flex flex-wrap gap-5 items-start mt-5 w-full tracking-normal leading-7 text-black text-opacity-60 max-md:max-w-full">
        <div className="flex-1 shrink basis-0 max-md:max-w-full">
          <h3>Key Responsibilities:</h3>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 shrink basis-0 max-md:max-w-full">
          <h3>Qualifications:</h3>
          <ul>
            {qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
      </div>
      <button className="flex gap-2 justify-center items-center self-start py-1 pr-4 pl-1 mt-5 tracking-normal text-red-600 whitespace-nowrap rounded">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11135f3879db165b2394f539a7dfe4817814b30ab69fe3772caed2e6517e3d4?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="self-stretch my-auto">Apply</span>
      </button>
      <div className="flex mt-16 w-full bg-gray-700 min-h-[2px] max-md:mt-10 max-md:max-w-full" />
    </article>
  );
};

export default JobListing;
