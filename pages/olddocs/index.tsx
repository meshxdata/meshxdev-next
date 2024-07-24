import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layouts/default-layout';
import Footer from '../../components/Footer';
import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/nextjs';
import {ClerkProvider } from "@clerk/nextjs";
import styles from './docs.module.css';



interface HomeProps {
  content: string;
  title: string;
}

const Home: React.FC<HomeProps> = ({ content, title }) => {
    return (
      <Layout>
        <main className="font-inter relative">
          <div className="w-full justify-items-center">
            <section className={styles.container}>
              <header className={styles.header}>
                <div className={styles.logoContainer}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/39b600c0455658c2f96bf2ce3f806b78defc2268ae1dab94c1e3dfac9321aca5?apiKey=ccbd9f716d3746849ccb6bd0200e2166&"
                    alt="Encyclopedia Logo"
                    className={styles.logo}
                  />
                  <h1 className={styles.title}>Encyclopedia</h1>
                </div>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ce7d17096abc9afa41fd5ec095899e759d80397ae814644b518ca02c4dd5ed?apiKey=ccbd9f716d3746849ccb6bd0200e2166&"
                alt="Main Banner Image"
                className={styles.mainImage}
              />
              <section className={styles.content}>
                <div className={styles.flexContainer}>
                  <aside className={styles.sidebar}>
                    <div className={styles.sidebarContent}>
                      <h2 className={`${styles.sectionTitle} cursor-pointer`}>
                        Getting started with NEOS
                      </h2>
                      <div className={styles.sectionContent}>
                        <h3 className={`${styles.sectionSubcontent} cursor-pointer`}>
                          Plan your Data Landscape
                        </h3>
                        <div className={styles.sectionDetails}>
                          <p className={`${styles.detailsText} cursor-pointer`}>
                            • Transformations
                          </p>
                          <p className={`${styles.detailsText} cursor-pointer`}>
                            • CTL Instructions
                          </p>
                        </div>
                      </div>
                      <p className={`${styles.bottomDetails} cursor-pointer`}>
                        Visualize your data – PowerBI
                      </p>
                      <p className={`${styles.bottomDetails} cursor-pointer`}>
                        Visualize your data – Superset
                      </p>
                    </div>
                  </aside>
                  <main className={styles.mainContent}>
                    <section className={styles.mainHeader}>

                        <div dangerouslySetInnerHTML={{ __html: content }} />

                    </section>
                  </main>
                </div>
              </section>
            </section>
          </div>
          <Footer />
        </main>
      </Layout>
    );
  };

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'content', 'docs', 'getting-started.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      content: contentHtml,
      title: data.title || 'Getting Started',
    },
  };
};

export default Home;
