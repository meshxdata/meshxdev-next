import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { GetStaticProps } from "next";
import Layout from "../components/Layouts/default-layout";
import Footer from "../components/Footer";
import NavBanner from "../components/Navigation";

interface TermsProps {
  content: string;
  title: string;
}

const Terms: React.FC<TermsProps> = ({ content, title }) => {
  return (
    <>
      <Layout>
        <NavBanner />
        <main className="font-inter relative">
          <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 p-4">
            <div className="p-4 lg:col-span-6 md:col-span-6">
              <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8">
                <div className="pt-4 lg:col-span-2 md:col-span-2 col-span-3">
                  <div className="flex justify-items justify-start md:justify-start">
                    <a href="/">
                      <img
                        src="/meshx_logo.svg"
                        alt="Logo"
                        className="w-48 h-8 md:w-40 md:h-7"
                      />
                    </a>
                  </div>
                </div>
                <div className="md:pt-4 lg:col-span-2 md:col-span-2 col-span-8 pt-10">
                  <div className="flex justify-items justify-start md:justify-start md:ml-[115px] text-white/40 font-bold font-inter text-[25px]">
                    Terms of Use
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:col-span-2 md:col-span-2 "></div>
            <div className="p-4 lg:col-span-4 md:col-span-4 text-white/40 font-inter leading-10">
              <article dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="col-span-1 sm:col-span-6 lg:col-span-6 md:col-span-6 lg:mt-20"></div>
          </div>
        </main>
        <Footer />
        <style jsx>{`
          .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
          }
          h1 {
            color: #fff;
          }
          article {
            color: rgba(255, 255, 255, 0.84);
          }
        `}</style>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Define the path to the markdown file
  const filePath = path.join(process.cwd(), "content", "terms-of-use.md");
  // Read the file content
  const fileContent = fs.readFileSync(filePath, "utf8");
  // Parse the markdown metadata and content
  const { data, content } = matter(fileContent);
  // Convert markdown content to HTML
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      content: contentHtml,
      title: data.title || "Terms of Use",
    },
  };
};

export default Terms;
