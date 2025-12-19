
"use client";

import { useMemo, useState } from "react";
import styles from "./SectionExperience.module.css";

type Item = {
  id: string;
  title: string;
  image?: {
    src: string;
    alt: string;
  };
  description: string;
  meta: string;
  ctaLabel: string;
  ctaHref?: string;
};

type Props = {
  title?: string;
  items?: Item[];
  initialId?: string;
};

const DEFAULT_ITEMS: Item[] = [
  {
    id: "sites",
    title: "Корпоративные сайты",
    image: { src: "/artist-gallery.png", alt: "Превью проекта" },
    description:
      "Разработка и поддержка корпоративных и информационных сайтов. Адаптивная вёрстка, формы, страницы с корзиной, работа с компонентной структурой и существующим кодом.",
    meta: "Чаще всего: лендинги, многостраничные сайты, формы, корзина",
    ctaLabel: "Связаться со мной",
    ctaHref: "https://t.me/renatagftl",
  },
  {
    id: "apps",
    title: "Веб-приложения и интерфейсы",
    image: { src: "/corporate-projects.png", alt: "Превью интерфейса" },
    description:
      "Интерфейсы веб-приложений: компоненты, состояния, навигация, аккуратная визуальная реализация. Интеграция с API и поддержка существующих экранов.",
    meta: "UI-состояния, формы, списки, фильтры, API",
    ctaLabel: "Связаться со мной",
    ctaHref: "https://t.me/renatagftl",
  },
  {
    id: "crm",
    title: "Внутренние системы и CRM",
    image: {
      src: "/crm-screen.png", alt: "Скрин из crm с закрытыми данными"
    },
    description:
      "Участие в развитии внутренней CRM: реализация отдельных экранов, работа с формами и состояниями, интеграция с backend API.",
    meta: "Часть материалов — обезличенно (NDA)",
    ctaLabel: "Связаться со мной",
    ctaHref: "https://t.me/renatagftl",
  },
  {
    id: "lead",
    title: "Тимлидерство и code review",
    image: { src: "/code-review-screen.png", alt: "Скрин экрана код ревью" },
    description:
      "Год веду команду разработки сайтов: распределение задач, code review, помощь разработчикам, контроль качества и консистентности интерфейсов.",
    meta: "Процессы, качество, коммуникация",
    ctaLabel: "Связаться со мной",
    ctaHref: "https://t.me/renatagftl",
  },
  {
    id: "support",
    title: "Поддержка и развитие проектов",
    image: { src: "/dropdown-screen.png", alt: "Превью поддержки" },
    
    description:
      "Работа с существующими проектами: улучшение интерфейсов, небольшие рефакторинги, устранение багов, постепенное приведение к более системной структуре.",
    meta: "Поддерживаемость и аккуратность",
    ctaLabel: "Связаться со мной",
    ctaHref: "https://t.me/renatagftl",
  },
];

export function SectionExperience({
  title = "Опыт и задачи",
  items = DEFAULT_ITEMS,
  initialId,
}: Props) {
  const initialIndex = useMemo(() => {
    if (!initialId) return 0;
    const idx = items.findIndex((x) => x.id === initialId);
    return idx >= 0 ? idx : 0;
  }, [items, initialId]);

  const [activeItemIndex, setActiveItemIndex] = useState(initialIndex);
  const activeItem = items[activeItemIndex];
  return (
    <section className={styles.experience} aria-label={title}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.inner}>

        <div className={styles.content}>
          <div className={styles.image}>
            {activeItem.image?.src && (
              <img
                className={styles.imageSrc}
                src={activeItem.image.src}
                alt={activeItem.image.alt}
                loading="lazy"
              />
            )
          }
          </div>

          <p className={styles.description}>{activeItem.description}</p>
          <p className={styles.meta}>{activeItem.meta}</p>

          <a className={styles.button} href={activeItem.ctaHref ?? "#"}>
            {activeItem.ctaLabel}
          </a>
        </div>

        <div className={styles.buttonsBlock}>
          <ul className={styles.list} role="tablist" aria-label="Список направлений">
            {items.map((item, idx) => {
              const isActiveItem = idx === activeItemIndex;

              return (
                <li key={item.id} className={styles.listItem}>
                  <button
                    type="button"
                    className={`${styles.listButton} ${isActiveItem ? styles.listButton_active : ""}`}
                    onClick={() => setActiveItemIndex(idx)}
                    role="tab"
                    aria-selected={isActiveItem}
                    aria-controls={`panel-${item.id}`}
                  >
                    <span className={styles.listText}>{item.title}</span>
                    <span className={styles.line} aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </section>
  );
}
