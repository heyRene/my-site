import styles from "./SectionAbout.module.css";

export default function SectionAbout() {
  return (
    <section className={styles.about}>
      <div className={styles.inner}>
      <div className={styles.content}>
          <p className={styles.span}>
            Полтора года системно изучала веб-технологии и работала над
            pet-проектами в команде. Фокус — визуальная целостность интерфейсов,
            чистая реализация и продуманная архитектура.
          </p>
        <h2 className={styles.title}>
          Frontend-разработчик с опытом более двух лет. Разрабатываю сайты и
          веб-приложения, в том числе интерфейсы для внутренних систем и CRM.
        </h2>
      </div>
      <div className={styles.image}>
        <img
          className={styles.imageSrc}
          src="/IMG_2021.JPG"
          alt="Renata Gafiatullina"
        />
      </div>
      </div>
    </section>
  );
}
