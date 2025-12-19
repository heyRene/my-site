"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./SectionStack.module.css";

type StackCard = {
  title: string;
  description: string;
};
const STACK: StackCard[] = [
  {
    title: "JS, TS, Vue/Nuxt, React/Next",
    description:
      "Разрабатываю корпоративные сайты и лендинги с формами, корзиной и базовой логикой, уделяя внимание структуре и поддерживаемости кода.",
  },
  {
    title: "HTML, CSS, SCSS",
    description:
      "Делаю адаптивные и кроссбраузерные интерфейсы с аккуратной типографикой, сеткой и визуальной целостностью.",
  },
  {
    title: "REST API, Axios, async/await",
    description:
      "Уверенно подключаю и использую API, понимаю клиент–серверное взаимодействие и реализовывала его в учебных и pet-проектах.",
  },
  {
    title: "SPA, SSR, Vite, Webpack",
    description:
      "Понимаю различия SPA и SSR, работала с серверным рендерингом и сборкой проектов, думаю компонентно и системно.",
  },
  {
    title: "Node.js, Express, Nest.js",
    description:
      "Имею базовый опыт настройки сервера и работы с данными (MongoDB, PostgreSQL), понимаю backend как часть общего решения.",
  },
  {
    title: "SCRUM, Jira, Confluence",
    description:
      "Работаю в Scrum-команде: с требованиями, задачами и документацией, участвую в планировании, декомпозиции и спринтах.",
  },
  {
    title: "Организация команды сайтов",
    description:
      "Более года веду команду разработки сайтов: распределяю задачи, провожу code review и контролирую качество интерфейсов.",
  },
  {
    title: "Системное мышление и ответственность",
    description:
      "Умею декомпозировать задачи, видеть продукт целиком и доводить решения до аккуратного и устойчивого результата.",
  },
  {
    title: "English B2 / French A1",
    description:
      "Свободно работаю на английском в профессиональной среде, французский изучаю на базовом уровне.",
  },
];

export default function SectionStack() {
  return (
    <section className={styles.stack} aria-label="Стек и навыки">
      <h2 className={styles.title}>Стек и навыки</h2>

      <Swiper
        className={styles.swiper}
        modules={[Pagination, A11y]}
        spaceBetween={24}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        navigation
      >
        {STACK.map((item) => (
          <SwiperSlide key={item.title} className={styles.slide}>
            <article className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.head}>
                  <h3 className={styles.subtitle}>{item.title}</h3>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
