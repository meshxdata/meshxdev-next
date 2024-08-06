import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GetStartedForm from "../components/GetStartedForm";
import Layout from "../components/Layouts/home-layout";
import styles from "../components/Navigation/navigation.module.css";

const HomePage: React.FC = () => {
  return (
    <>

        <Head>
          <title>meshX</title>
          <meta name="description" content="Your page description here" />
          <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-93RHYT4C93"
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-93RHYT4C93');`}
          </script>
        </Head>
        <Layout>
        {/* <Navigation /> */}
        <div className="bg-[#171819] md:p-4 p-2">
          <div className={styles.navRectangle}></div>
        </div>
        <div className="max-w-7xl mx-auto mt-[140px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-2 p-4">
          <div className="p-4 lg:col-span-2 md:col-span-2">
            <div className="flex justify-start md:justify-start pt-4">
              <Image src="/meshx_logo.svg" alt="Logo" width={150} height={50} />
            </div>
          </div>
          <div className="p-4 lg:col-span-4 md:col-span-4">
            <div className="w-full text-start md:text-left">
              <h1 className="text-[#FF6000] text-[40px] font-normal font-montserrat">
                Build a powerful AI future <br /> on your data
              </h1>
              <p className="text-[23px] font-[200] my-4 text-[#FFFFFF]/70 font-montserrat">
                Our AI-first data platform will transform your enterprise data
                into the foundation for specialized, high-performing AI models.
              </p>
              <p className="text-[16px] font-[200] text-[#FFFFFF]/70">
                meshX simplifies the complex AI journey. From data preparation
                to model selection, training, deployment, and monitoring, our
                platform provides a streamlined experience for enterprise AI
                success.
              </p>
            </div>
          </div>
          <div className="p-4 lg:col-span-2 md:col-span-2 mt-8 md:mt-[140px]">
            <div className="text-start md:text-left">
              <Image
                src="/1.svg"
                alt="AI starts with Data"
                width={40}
                height={40}
                className="pb-2 md:mx-0"
              />
              <h2 className="text-2xl text-[#FF6000] font-normal font-montserrat sm:h-[60px] md:h-[50px] lg:h-[20px]">
                AI starts with Data
              </h2>
              <p className="text-[#FFFFFF]/70 my-4 font-inter font-extralight h-[160px] md:h-[140px] lg:h-[100px]">
                Break down data silos and transform raw data into AI-ready
                assets. Consolidate your information for maximum model
                performance.
              </p>
              <Image
                src="/Rectangle_b.svg"
                alt="Rectangle"
                width={100}
                height={10}
                className="pt-2 md:mx-0"
              />
            </div>
          </div>
          <div className="p-4 lg:col-span-2 md:col-span-2 mt-8 md:mt-[140px]">
            <div className="text-left md:text-left">
              <img
                src="/2.svg"
                alt="Securely build your assets"
                className="pb-2 md:mx-0"
              />
              <h2 className="text-2xl text-[#FF6000] font-normal font-montserrat sm:h-[60px] md:h-[50px] lg:h-[20px]">
                Securely build your assets
              </h2>
              <p className="text-[#FFFFFF]/70 my-4 font-inter font-extralight h-[160px] md:h-[140px] lg:h-[100px]">
                Train powerful foundation models with your enterprise data.
                Maintain security and governance throughout your AI development
                process.
              </p>
              <img
                src="/Rectangle_b.svg"
                alt="Rectangle"
                className="pt-2 md:mx-0"
              />
            </div>
          </div>
          <div className="p-4 lg:col-span-2 md:col-span-2 mt-8 md:mt-[140px]">
            <div className="text-start md:text-left">
              <img
                src="/3.svg"
                alt="Operational AI Success"
                className="pb-2 md:mx-0"
              />
              <h2 className="text-2xl text-[#FF6000] font-normal font-montserrat sm:h-[60px] md:h-[50px] lg:h-[20px]">
                Operational AI Success
              </h2>
              <p className="text-[#FFFFFF]/70 my-4 font-inter font-extralight md:h-[140px] h-[160px] lg:h-[100px]">
                Achieve real-world impact from your models. Deploy your
                customized AI solutions at scale. Monitor performance in
                real-time, and ensure responsible AI usage across your
                organization.
              </p>
              <Image
                src="/Rectangle_b.svg"
                alt="Rectangle"
                width={100}
                height={10}
                className="pt-2 md:mx-0"
              />
            </div>
          </div>
          <div className="p-4 lg:col-span-2 md:col-span-2 mt-8 md:mt-[140px]">
            <div className="text-center md:text-left">
              <div className="my-6 flex justify-start md:justify-center">
                <Image
                  src="/neom-logo.png"
                  alt="Neom Logo"
                  width={78}
                  height={78}
                />
              </div>
            </div>
          </div>
          <div className="p-4 lg:col-span-4 md:col-span-4 mt-8 md:mt-[140px]">
            <h2 className="text-[24px] text-[#FFFFFF]/70 my-6 font-extralight text-start md:text-left font-montserrat">
              We built the world's first cognitive city data mesh. What can we
              build with you?
            </h2>
            <p className="my-2 text-[#FFFFFF]/70 font-inter font-extralight text-start md:text-left">
              We are evolving our first success with data mesh to a new extent.
              We want to build a fully governed AI-first data platform so the
              data never leaves the enterprise’s premises but is organized,
              shred, and used for training in the most secure and managed way
              possible. This will reduce the enterprises’ reliance on third
              parties, unpredictable AI models, talent and other risks and
              costs.
            </p>
            {/* <a className="my-2 text-[#7abeb6] text-[16px] font-inter font-light text-start md:text-left cursor-pointer" href="/neos">Learn more &rarr;</a> */}
          </div>
          <div className="col-span-1 sm:col-span-6 lg:col-span-6 md:col-span-6 -mt-10">
            <div className="w-full h-[337px] bg-cover flex items-center justify-center">
              <div className="bg-[url('/getstartednew.svg')] w-full h-[337px] bg-cover flex items-center justify-center rounded">
                <GetStartedForm />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
