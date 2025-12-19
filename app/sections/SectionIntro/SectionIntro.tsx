import styles from "./SectionIntro.module.css";

export default function SectionIntro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>Frontend-разработчик</h1>

      <p className={styles.span}>
        Интерфейсы, визуал и системный подход к разработке
      </p>

      <h2 className={styles.subtitle}>Гафиатуллина Рената</h2>

      <div className={styles.ctaBox}>
        <a className={styles.button} href="https://t.me/renatagftl">связаться со мной</a>

        <p className={styles.description}>
          Работаю с интерфейсами, логикой и архитектурой, уделяя особое внимание
          дизайну, деталям и целостности визуала.
        </p>
      </div>
    </section>
  );
}
