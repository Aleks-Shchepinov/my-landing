import React from "react";
import styles from "./about.module.css";
import myImage from "../../assets/images/about.avif";

export const SectionAbout = () => {
  return (
    <section className={styles.sectionAboutContainer} id="about">
      <div className={styles.sectionAboutWrap}>
        <div className={styles.sectionAboutImage}>
          <div className={styles.imageContainer}>
            <img src={myImage} alt="Рабочий стол разработчика" />
            <div className={styles.imageLowBox}></div>
          </div>
        </div>
        <div className={styles.sectionAboutInfo}>
          <h2 className={styles.sectionAboutInfoTitle}>Обо мне</h2>
          <p className={styles.sectionAboutInfoSubtitle}>
            Меня зовут
            <span className={styles.sectionAboutInfoName}>
              {" "}
              Александр Щепинов{" "}
            </span>
            . Я практик фронтенд-разработки с ценным коммерческим опытом в
            крупной IT-компании России. Каждый рабочий день я прохожу строгий
            командный код-ревью, пишу масштабируемый код по современным
            стандартам и взаимодействую с бэкенд и QA командами.
          </p>
          <p className={styles.sectionAboutInfoText}>
            Я предлагаю услуги по созданию сайтов с нуля и рефакторингу
            существующего кода. Моя цель — решить задачи вашего бизнеса
            эффективно, быстро и в срок. От простых посадочных страниц до
            многофункциональных админ-панелей и CRM.
          </p>
          <div className={styles.sectionAboutInfoBadges}>
              <div className={styles.sectionAboutInfoBadge}>
                <div className={`${styles.sectionAboutInfoBadgeIcon} ${styles.sectionAboutInfoBadgeIconOrnage}`}>
                  <svg
                    className="w-5 h-5 text-orange-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 11 2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h4>Ответственность</h4>
                  <p className={styles.sectionAboutInfoBadgeText}>
                    Детальный подход к архитектуре, всегда на связи по
                    дедлайнам.
                  </p>
                </div>
              </div>
              <div className={styles.sectionAboutInfoBadge}>
                <div className={`${styles.sectionAboutInfoBadgeIcon} ${styles.sectionAboutInfoBadgeIconblue}`}>
                  <svg
                    class="w-5 h-5 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h4>Скорость & Качество</h4>
                  <p className={styles.sectionAboutInfoBadgeText}>
                    Верстка и логика интерфейсов без просадок в
                    производительности.
                  </p>
                </div>
              </div>
              <div className={styles.sectionAboutInfoBadge}>
                <div className={`${styles.sectionAboutInfoBadgeIcon} ${styles.sectionAboutInfoBadgeIconGreen}`}>
                  <svg class="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                </div>
                <div>
                  <h4>Понимание бизнеса</h4>
                  <p className={styles.sectionAboutInfoBadgeText}>
                    Решаю реальные пользовательские задачи, а не просто пишу
                    код.
                  </p>
                </div>
              </div>
              <div className={styles.sectionAboutInfoBadge}>
                <div className={`${styles.sectionAboutInfoBadgeIcon} ${styles.sectionAboutInfoBadgeIconViolet}`}>
                  <svg class="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
                </div>
                <div>
                  <h4>Опыт в крупной компании</h4>
                  <p className={styles.sectionAboutInfoBadgeText}>
                    Знаком со стандартами разработки сложных продуктов.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
