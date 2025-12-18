import styles from "./SectionIntro.module.css";

export default function SectionIntro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>Frontend-разработчик</h1>

      <p className={styles.span}>
        Интерфейсы, визуал и системный подход к разработке
      </p>

      <p className={styles.subtitle}>Гафиатуллина Рената</p>

      <div className={styles.image}>
        <img
          className={styles.imageSrc}
          src="/IMG_2021.JPG"
          alt="Renata Gafiatullina"
        />
      </div>

      <div className={styles.ctaBox}>
        <button className={styles.button}>смотреть проекты</button>

        <p className={styles.description}>
          Работаю с интерфейсами, логикой и архитектурой, уделяя особое внимание
          дизайну, деталям и целостности визуала.
        </p>
      </div>
    </section>
  );
}
