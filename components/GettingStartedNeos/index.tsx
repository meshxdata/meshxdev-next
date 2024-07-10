import styles from './styles/GettingStartedNeos.module.css';

const GettingStartedNeos = () => (
  <main className={styles.container}>
    <h2 className={`${styles.sectionTitle} ml-4`}>How to use NEOS Core</h2>
    <section className={`${styles.content} -ml-1`}>
      <div className={styles.cards}>
        <article className={`${styles.card} hover:bg-white/10 cursor-pointer`}>
          <h3 className={styles.cardTitle}>Getting started with NEOS</h3>
          <span className={styles.cardArrow} tabIndex={0} role="button" style={{ cursor: 'pointer' }}>→</span>
        </article>
        <article className={`${styles.card} hover:bg-white/10 cursor-pointer`}>
          <h3 className={styles.cardTitle}>Plan your Data Landscape</h3>
          <span className={styles.cardArrow} tabIndex={0} role="button" style={{ cursor: 'pointer' }}>→</span>
        </article>
        <article className={`${styles.card} hover:bg-white/10 cursor-pointer`}>
          <h3 className={styles.cardTitle}>Visualize your data: PowerBI</h3>
          <span className={styles.cardArrow2} tabIndex={0} role="button" style={{ cursor: 'pointer' }}>→</span>
        </article>
        <article className={`${styles.card} hover:bg-white/10 cursor-pointer`}>
          <h3 className={styles.cardTitle}>Visualize your data: Superset</h3>
          <span className={styles.cardArrow2} tabIndex={0} role="button" style={{ cursor: 'pointer' }}>→</span>
        </article>
      </div>
    </section>
  </main>
);

export default GettingStartedNeos;