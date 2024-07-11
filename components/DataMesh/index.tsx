import React from "react";
import dynamic from "next/dynamic";
import styles from "../DataMesh/datamesh.module.css"; // Assuming the CSS is converted to a CSS module

const ParticleSystem = dynamic(() => import("../ParticleSystem/about"), {
  ssr: false,
});

const DataMesh = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sectionDataMesh}>
        <ParticleSystem />
        <div className="relative z-10">
          <div className={styles.dataMeshContent}>
            <h2 className={styles.dataMeshTitle}>What is Data Mesh?</h2>
            <p className={styles.dataMeshDescription}>
              Data mesh is a paradigm shift in data architecture, moving away
              from monolithic data warehouses and lakes towards a decentralized,
              domain-oriented approach. It treats data as a product, managed by
              cross-functional teams who own their data pipelines end-to-end.
              This model enhances scalability, accelerates innovation, and
              improves data quality and governance.
            </p>
          </div>
        </div>
        <style jsx global>{`
          #defaultCanvas0 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
          }
        `}</style>
      </section>
    </div>
  );
};

export default DataMesh;
