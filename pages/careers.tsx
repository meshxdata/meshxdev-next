import Footer from "../components/Footer";
import Layout from "../components/Layouts/home-layout";

const Careers = () => (
  <>
  <Layout>
    <section className="body">
      <div className="separator-line"></div>
      <section className="main-content">
        <header className="header-title">Careers at MeshX</header>
        <p className="description-text">
          Welcome to MeshX's Careers Page! Join us in revolutionizing the future of data architecture. At MeshX, we are at the forefront of innovation, harnessing the power of data mesh technology to transform how organizations manage and utilize data. If you are passionate about data and technology, and thrive in a collaborative, dynamic environment, we'd love to hear from you.
        </p>
        <section className="job-section">
          <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 p-4">
            <article className="job-card lg:col-span-3 md:col-span-3 col-span-1">
              <h2 className="job-title">Data Architect</h2>
              <p className="job-location"><strong>Location:</strong> Remote</p>
              <p className="job-overview">
                <strong>Role Overview:</strong> As a Data Architect at MeshX, you will design, develop, and optimize data architecture and systems to support our data mesh solutions. You will be responsible for creating blueprints for data management, ensuring data integrity, and implementing best practices for data governance and security.
              </p>
              <div className="job-responsibilities">
                <strong>Key Responsibilities:</strong>
                <ul>
                  <li>Design and implement effective database solutions and models to store and retrieve data efficiently</li>
                  <li>Develop database solutions to support our data analysis and reporting needs</li>
                  <li>Optimize database performance and ensure data security and privacy</li>
                  <li>Collaborate with data engineers and scientists to integrate and manage data from various sources.</li>
                </ul>
              </div>
              <div className="job-qualifications">
                <strong>Qualifications:</strong>
                <ul>
                  <li>Bachelor's or Master's degree in Computer Science, Information Systems, or related field</li>
                  <li>Proven experience as a Data Architect or similar role</li>
                  <li>Strong knowledge of database structure systems, AI and machine learning</li>
                  <li>Familiarity with data visualization tools and techniques</li>
                </ul>
              </div>
              <a className="apply-button" href="mailto:careers@meshx.dev?subject=Data Architect">
                <span className="apply-text">Apply</span>
              </a>
            </article>
            <article className="job-card lg:col-span-3 md:col-span-3 col-span-1">
              <h2 className="job-title">Data Engineer</h2>
              <p className="job-location"><strong>Location:</strong> Remote</p>
              <p className="job-overview">
                <strong>Role Overview:</strong> As a Data Engineer, you will be instrumental in building and maintaining the infrastructure required for optimal extraction, transformation, and loading of data from a wide variety of data sources. Your work will ensure that our data mesh solutions have the highest quality data to inform decision-making.
              </p>
              <div className="job-responsibilities">
                <strong>Key Responsibilities:</strong>
                <ul>
                  <li>Develop and maintain scalable data pipelines and ensure timely data delivery.</li>
                  <li>Implement data integration solutions to support real-time data processing.</li>
                  <li>Work closely with data architects and scientists to improve data reliability and quality.</li>
                  <li>Optimize data systems and build automated processes for data management.</li>
                </ul>
              </div>
              <div className="job-qualifications pb-[25px]">
                <strong>Qualifications:</strong>
                <ul>
                  <li>Bachelor's degree in Computer Science, Engineering, or a related field</li>
                  <li>Experience in data engineering and ETL processes</li>
                  <li>Proficiency in SQL and experience with big data tools</li>
                  <li>Knowledge of cloud platforms and data pipeline tools</li>
                </ul>
              </div>
              <a className="apply-button" href="mailto:careers@meshx.dev?subject=Data Engineer">
                <span className="apply-text">Apply</span>
              </a>
            </article>
            <article className="job-card lg:col-span-3 md:col-span-3 col-span-1">
              <h2 className="job-title">DevOps Engineer</h2>
              <p className="job-location"><strong>Location:</strong> Remote</p>
              <p className="job-overview">
                <strong>Role Overview:</strong> As a DevOps Engineer, you will play a key role in streamlining our operations and processes for software development, testing, and deployment. You will collaborate with our development and IT teams to automate and improve our workflows, ensuring high-quality and timely delivery of software products.
              </p>
              <div className="job-responsibilities">
                <strong>Key Responsibilities:</strong>
                <ul>
                  <li>Design, implement, and manage CI/CD pipelines.</li>
                  <li>Automate testing and deployment processes to enhance reliability and performance.</li>
                  <li>Monitor system performance and troubleshoot issues to ensure system stability.</li>
                  <li>Collaborate with developers to optimize software performance and scalability.</li>
                </ul>
              </div>
              <div className="job-qualifications">
                <strong>Qualifications:</strong>
                <ul>
                  <li>Bachelor's degree in Computer Science, Engineering, or a related field</li>
                  <li>Experience with DevOps tools and practices.</li>
                  <li>Proficiency in scripting languages and automation tools.</li>
                  <li>Strong understanding of cloud infrastructure and containerization.</li>
                </ul>
              </div>
              <a className="apply-button" href="mailto:careers@meshx.dev?subject=Devops Engineer">
                <span className="apply-text">Apply</span>
              </a>
            </article>
            <article className="job-card lg:col-span-3 md:col-span-3 col-span-1 h-[1000px]">
              <h2 className="job-title">Frontend Developer</h2>
              <p className="job-location"><strong>Location:</strong> Remote</p>
              <p className="job-overview">
                <strong>Role Overview:</strong> As a Frontend Developer at MeshX, you will be responsible for creating intuitive and visually appealing user interfaces for our applications. Your work will ensure that our users have a seamless and engaging experience when interacting with our tools and data.
              </p>
              <div className="job-responsibilities">
                <strong>Key Responsibilities:</strong>
                <ul>
                  <li>Develop responsive and user-friendly web applications.</li>
                  <li>Collaborate with designers and backend developers to implement new features.</li>
                  <li>Optimize applications for maximum speed and scalability.</li>
                  <li>Ensure the technical feasibility of UI/UX designs.</li>
                </ul>
              </div>
              <div className="job-qualifications pb-[52px]">
                <strong>Qualifications:</strong>
                <ul>
                  <li>Bachelor's degree in Computer Science, Engineering, or related field.</li>
                  <li>Proficiency in HTML, CSS, JavaScript, and modern frontend frameworks (e.g., React, Angular, Vue).</li>
                  <li>Experience with responsive and adaptive design principles.</li>
                  <li>Strong problem-solving skills and attention to detail.</li>
                </ul>
              </div>
              <a className="apply-button" href="mailto:careers@meshx.dev?subject=Frontend Engineer">
                <span className="apply-text">Apply</span>
              </a>
            </article>
          </div>
        </section>
      </section>
    </section>
  </Layout>
  <Footer />
  </>
);

export default Careers;
