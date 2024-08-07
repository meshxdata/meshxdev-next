
import React from "react";
import Header from "./Header";
import JobListing from "./JobListing";
import Footer from "./Footer";

const jobListings = [
  {
    title: "Data Architect",
    location: "Remote",
    description:
      "As a Data Architect at MeshX, you will design, develop, and optimize data architecture and systems to support our data mesh solutions. You will be responsible for creating blueprints for data management, ensuring data integrity, and implementing best practices for data governance and security.",
    responsibilities: [
      "Design and implement effective database solutions and models to store and retrieve data efficiently",
      "Develop database solutions to support our data analysis and reporting needs",
      "Optimize database performance and ensure data security and privacy",
      "Collaborate with data engineers and scientists to integrate and manage data from various sources.",
    ],
    qualifications: [
      "Bachelor's or Master's degree in Computer Science, Information Systems, or related field",
      "Proven experience as a Data Architect or similar role",
      "Strong knowledge of database structure systems, AI and machine learning",
      "Familiarity with data visualization tools and techniques",
    ],
  },
  {
    title: "Data Engineer",
    location: "Remote",
    description:
      "As a Data Engineer, you will be instrumental in building and maintaining the infrastructure required for optimal extraction, transformation, and loading of data from a wide variety of data sources. Your work will ensure that our data mesh solutions have the highest quality data to inform decision-making.",
    responsibilities: [
      "Develop and maintain scalable data pipelines and ensure timely data delivery",
      "Implement data integration solutions to support real-time data processing",
      "Work closely with data architects and scientists to improve data reliability and quality",
      "Optimize data systems and build automated processes for data management",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Engineering, or a related field",
      "Experience in data engineering and ETL processes",
      "Proficiency in SQL and experience with big data tools",
      "Knowledge of cloud platforms and data pipeline tools",
    ],
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    description:
      "As a Data Engineer, you will be instrumental in building and maintaining the infrastructure required for optimal extraction, transformation, and loading of data from a wide variety of data sources. Your work will ensure that our data mesh solutions have the highest quality data to inform decision-making.",
    responsibilities: [
      "Develop and maintain scalable data pipelines and ensure timely data delivery",
      "Implement data integration solutions to support real-time data processing",
      "Work closely with data architects and scientists to improve data reliability and quality",
      "Optimize data systems and build automated processes for data management",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Engineering, or a related field",
      "Experience in data engineering and ETL processes",
      "Proficiency in SQL and experience with big data tools",
      "Knowledge of cloud platforms and data pipeline tools",
    ],
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "As a Data Engineer, you will be instrumental in building and maintaining the infrastructure required for optimal extraction, transformation, and loading of data from a wide variety of data sources. Your work will ensure that our data mesh solutions have the highest quality data to inform decision-making.",
    responsibilities: [
      "Develop and maintain scalable data pipelines and ensure timely data delivery",
      "Implement data integration solutions to support real-time data processing",
      "Work closely with data architects and scientists to improve data reliability and quality",
      "Optimize data systems and build automated processes for data management",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Engineering, or a related field",
      "Experience in data engineering and ETL processes",
      "Proficiency in SQL and experience with big data tools",
      "Knowledge of cloud platforms and data pipeline tools",
    ],
  },
];

const CareerPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <main className="flex flex-col items-center">
        <section className="flex flex-wrap gap-5 items-center self-center mt-40 max-w-full w-[982px] max-md:mt-10">
          <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[684px] max-md:max-w-full">
            <h1 className="text-6xl tracking-tighter leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
              We need you!
            </h1>
            <p className="mt-4 text-2xl font-light leading-8 text-black text-opacity-60 max-md:max-w-full">
              Or, more accurately, we need your scheels. Scheels? Who taught you
              to spell? It's "skills"! Okay, I'm sorry, mister Big Brain. Maybe
              you want to work for meshx? No? Not so clever now? What a rude
              man. Anyway, drop us a letter!
            </p>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d32138179f5ae0c5811d8d58c9edfabdc3bec7676712060eaa44f12b1bb998?apiKey=ccbd9f716d3746849ccb6bd0200e2166&&apiKey=ccbd9f716d3746849ccb6bd0200e2166"
            alt="Decorative illustration"
            className="object-contain grow shrink self-stretch my-auto aspect-[1.34] w-[187px]"
          />
        </section>
        <section className="flex flex-col justify-center self-center mt-24 max-w-full text-lg font-light text-zinc-900 w-[982px] max-md:mt-10">
          {jobListings.map((job, index) => (
            <JobListing key={index} {...job} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default CareerPage;
