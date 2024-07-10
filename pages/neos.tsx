import Layout from '../components/Layouts/home-layout';
import GettingStartedNeos from '../components/GettingStartedNeos';
import styles from '../styles/neos.module.css';

const Neos = () => (
  <Layout>
    <div className={styles.body}>
      <div className={`max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 p-4 ${styles.bannerImage}`}>
        <div className={`p-4 lg:col-span-6 md:col-span-6 ${styles.separatorLine}`}>
          <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 border-b-2 border-gray-800">
            <div className="pt-4 lg:col-span-2 md:col-span-2 col-span-3">
              <div className="flex justify-items justify-start md:justify-start">
                <a href="/">
                  <img src="/meshx_logo.svg" alt="Logo" className="w-48 h-8 md:w-40 md:h-7" />
                </a>
              </div>
            </div>
            <div className="p-4 lg:col-span-5 md:col-span-5 sm:col-span-1"></div>
            <div className="grid lg:col-span-1 md:col-span-1 justify-items-end sm:col-span-1">
              <img src="/neom-logo.png" className="h-[78px]" />
            </div>
          </div>
        </div>
        <div className="p-4 lg:col-span-2 md:col-span-2">
          <div className="flex justify-start md:justify-start pt-4">
            <img src="/neom.png" alt="Logo" className="" />
          </div>
        </div>
        <div className="p-4 lg:col-span-4 md:col-span-4">
          <div className="w-full text-start md:text-left">
            <h1 className="text-[#FFFFFF]/70 text-[53px]">NEOM’s NEOS</h1>
            <p className="text-[20px] font-[200] my-4 text-[#FFFFFF]/70">
              NEOS is a federated data platform that delivers seamless data interoperability for the cognitive city. Designed and built specifically for NEOM, NEOS integrates with a myriad of systems and applications to ensure trusted, governed access to data for sectors, regions, business units, and departments within Neom.
            </p>
          </div>
        </div>
        <div className="p-4 lg:col-span-2 md:col-span-2 mt-8 md:mt-16">
          <div className="text-start md:text-left">
            <h2 className="text-2xl text-[#FF6000] font-normal font-montserrat sm:h-[60px] md:h-[50px] lg:h-[20px]">NEOS Core</h2>
            <p className="text-[#FFFFFF]/70 my-4 font-inter font-extralight h-[160px] md:h-[140px] lg:h-[180px]">
              The cloud data platform that provides the underlying data infrastructure, supporting data integration, processing, storage, and sharing capabilities. NEOS Core is designed to handle both batch and real-time data processing, ensuring that data flows efficiently across different sectors and applications.
            </p>
            <img src="/Rectangle_b.svg" className="pt-2 md:mx-0" />
          </div>
        </div>
        <div className="p-4 lg:col-span-2 md:col-span-2 mt-8 md:mt-16">
          <div className="text-left md:text-left">
            <h2 className="text-2xl text-[#FF6000] font-normal font-montserrat sm:h-[60px] md:h-[50px] lg:h-[20px]">NEOS Exchange</h2>
            <p className="text-[#FFFFFF]/70 my-4 font-inter font-extralight h-[160px] md:h-[140px] lg:h-[180px]">
              The centralized data exchange that enables sectors to discover, consume, share, and exchange data securely and reliably. NEOS Exchange supports a marketplace model where data products can be catalogued, exchanged, or monetized, fostering an ecosystem of data-driven applications and services.
            </p>
            <img src="/Rectangle_b.svg" className="pt-2 md:mx-0" />
          </div>
        </div>
        <div className="p-4 lg:col-span-2 md:col-span-2 mt-8 md:mt-16">
          <div className="text-start md:text-left">
            <h2 className="text-2xl text-[#FF6000] font-normal font-montserrat sm:h-[60px] md:h-[50px] lg:h-[20px]">NEOS Mesh</h2>
            <p className="text-[#FFFFFF]/70 my-4 font-inter font-extralight md:h-[140px] h-[160px] lg:h-[180px]">
              The overall data mesh of interconnected data domains in NEOM, with federated computational governance, policies, and regulatory compliance in place (e.g. data sovereignty, autonomy in data handling and harmony in data sharing).
            </p>
            <img src="/Rectangle_b.svg" className="pt-2 md:mx-0" />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-6 lg:col-span-6 md:col-span-6 lg:mt-20">
          <GettingStartedNeos />
        </div>
      </div>
      <div id="particleCanvas"></div>
    </div>
  </Layout>
);

export default Neos;
