import { GetStaticProps } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import styles from "../styles/about.module.css";
import Layout from "../components/Layouts/default-layout";
import AboutAnimation from "../components/ParticleSystem/about";
import ParticleSystem from "../components/ParticleSystem";
import DataMesh from "../components/DataMesh";
// import DataMeshWhatIs from '../components/DataMeshWhatIs';

interface AboutPageProps {
  source: MDXRemoteSerializeResult;
}

const AboutPage: React.FC<AboutPageProps> = ({ source }) => {
  return (
    <Layout>
      <main className="font-inter relative">
        <div className="w-full justify-items-center">
          <div>
            <div className={styles.container}>
              <section className={styles.sectionHero}>
                <Image
                  loading="lazy"
                  src="/about-background.png"
                  alt=""
                  className={styles.backgroundImage}
                  layout="fill"
                />
                <div className={styles.contentWrapper}>
                  <a href="/" className={styles.logoImage}>
                    <Image
                      loading="lazy"
                      src="/meshx_logo.svg"
                      alt="MeshX logo"
                      width={388}
                      height={70}
                    />
                  </a>
                  <p className={styles.description}>
                    At MeshX, we are dedicated to revolutionizing the way
                    organizations manage and utilize their data. By designing
                    and developing cutting-edge software solutions based on data
                    mesh principles, we empower businesses to transform their
                    data infrastructure, enhancing scalability, flexibility, and
                    data accessibility.
                  </p>
                </div>
              </section>

              <section className={styles.sectionApproach}>
                <h2 className={styles.sectionTitle}>Our Approach</h2>
                <div className={styles.approachContent}>
                  <div className={styles.approachColumns}>
                    <article className={styles.approachColumn}>
                      <div className={styles.approachColumnContent}>
                        <h3 className={styles.approachTitle}>Innovation</h3>
                        <p className={styles.approachDescription}>
                          We are at the forefront of data technology,
                          continually pushing the boundaries of what’s possible
                          with data mesh. Our team of experts is committed to
                          developing innovative solutions that meet the evolving
                          needs of our clients.
                        </p>
                      </div>
                    </article>
                    <article className={styles.approachColumn}>
                      <div className={styles.approachColumnContent}>
                        <h3 className={styles.approachTitle}>Collaboration</h3>
                        <p className={styles.approachDescription}>
                          Collaboration is at the heart of what we do. We work
                          closely with our clients to understand their unique
                          challenges and objectives, tailoring our solutions to
                          deliver maximum impact.
                        </p>
                      </div>
                    </article>
                    <article className={styles.approachColumn}>
                      <div className={styles.approachColumnContent}>
                        <h3 className={styles.approachTitle}>Excellence</h3>
                        <p className={styles.approachDescription}>
                          We strive for excellence in every aspect of our work.
                          From product development to customer support, we are
                          dedicated to providing the highest quality services
                          and solutions.
                        </p>
                      </div>
                    </article>
                    <article className={styles.approachColumn}>
                      <div className={styles.approachColumnContent}>
                        <h3 className={styles.approachTitle}>Integrity</h3>
                        <p className={styles.approachDescription}>
                          Integrity and transparency are core values at MeshX.
                          We build trust with our clients by being honest,
                          reliable, and delivering on our promises.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
              <DataMesh />
              <section className={styles.infoText}>
                <p>Our Team</p>
                <p>
                  Our team is composed of industry experts, software engineers,
                  and data scientists who are passionate about data and
                  technology. We bring together a diverse range of skills and
                  experiences to create innovative solutions that drive success
                  for our clients.
                </p>
                <p>Join Us</p>
                <p>
                  Are you passionate about data and technology? Do you want to
                  be part of a team that is shaping the future of data
                  architecture? Visit our{" "}
                  <a href="/careers" className={styles.link}>
                    Careers Page
                  </a>{" "}
                  to explore current opportunities and learn more about what
                  it’s like to work at MeshX.
                </p>
                <p>Contact Us</p>
                <p>
                  We’d love to hear from you! Whether you’re interested in our
                  solutions, have questions, or just want to learn more about
                  what we do, get in touch with us through our{" "}
                  <a href="/contact" className={styles.link}>
                    Contact Page
                  </a>
                  .
                </p>
              </section>

              <section className={styles.journeyText}>
                At MeshX, we are passionate about transforming data architecture
                and empowering organizations to achieve their full potential
                with data mesh technology. Join us on this exciting journey!
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "content", "cookies-policy.md");
  const source = fs.readFileSync(filePath, "utf8");
  const mdxSource = await serialize(source);

  return {
    props: {
      source: mdxSource,
    },
  };
};

export default AboutPage;
