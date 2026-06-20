import React from "react";
import styles from "./portfolio.module.css";
import mesto from "../../assets/images/mesto.png";
import skillSwap from "../../assets/images/SkillSwap.png";

export const SectionPortfolio = () => {
  return (
    <>
      <section className={styles.sectionPortfolioContainer} id="portfolio">
        <div className={styles.sectionPortfolioWrap}>
          <div className={styles.sectionPortfolioTitleContainer}>
            <h2 className={styles.sectionPortfolioTitle}>
              Мои проекты и кейсы
            </h2>
            <p className={styles.sectionPortfolioSubtitle}>
              Реальные примеры кода и коммерческие решения, ориентированные на
              надежность и пользу для конечного пользователя.
            </p>
          </div>
          <div className={styles.sectionPortfolioСasesContainer}>
            <div className={styles.sectionPortfolioСasesWrap}>
              <div className={styles.sectionPortfolioPetTitleWrap}>
                <span className={styles.sectionPortfolioDot}></span>
                <h3 className={styles.sectionPortfolioPetTitle}>
                  Пет-проекты (Pet Projects)
                </h3>
              </div>
              <div className={styles.sectionPortfolioCardContainer}>
                <div className={styles.sectionPortfolioCard}>
                  <div className={styles.sectionPortfolioCardInfoContainer}>
                    <div className={styles.sectionPortfolioCardInfoWrap}>
                      <h4 className={styles.sectionPortfolioCardInfoTitle}>
                        Создание фронтенда для мини соц. сети
                      </h4>
                      <p className={styles.sectionPortfolioCardInfoText}>
                        <strong style={{ color: "rgb(255, 255, 255)" }}>
                          Что сделано:{" "}
                        </strong>{" "}
                        Реализована страница, где отображаются все фото, которые
                        загружали разные пользователи (лента). Добавлен профиль
                        пользователя, форма для редактирования профиля, форма
                        для загрузки фото и его описания.
                      </p>
                      <p
                        className={styles.sectionPortfolioCardInfoTechnologies}
                      >
                        Стек: JavaScript / TypeScript, API, Promise API
                      </p>
                    </div>
                    <div className={styles.sectionPortfolioCardInfoResultWrap}>
                      <p className={styles.sectionPortfolioCardInfoResult}>
                        <strong>Результат: </strong>
                        Создана полноценная мини соц. сеть, куда пользователи
                        могут загружать фотографии и ставить на них лайки.
                      </p>
                    </div>
                    <a
                      className={styles.sectionPortfolioCardInfoLink}
                      href="https://github.com/Aleks-Shchepinov/mesto-project-ff"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                  <div className={styles.imageContainer}>
                    <img src={mesto} alt="Рабочий стол разработчика" />
                    <div className={styles.imageLowBox}></div>
                  </div>
                </div>
                <div className={styles.sectionPortfolioCard}>
                  <div className={styles.sectionPortfolioCardInfoContainer}>
                    <div className={styles.sectionPortfolioCardInfoWrap}>
                      <h4 className={styles.sectionPortfolioCardInfoTitle}>
                        Создание UI-компонентов и фронтенда для Маркета услуг
                      </h4>
                      <p className={styles.sectionPortfolioCardInfoText}>
                        <strong style={{ color: "rgb(255, 255, 255)" }}>
                          Что сделано:{" "}
                        </strong>
                        Реализовал market услуг для обмена знаниями между
                        пользователями. Пользователи могут искать и фильтровать
                        нужные навыки через удобную панель поиска. Страница
                        услуг реализована в виде бесконечной ленты с
                        использованием Lazy-загрузки, что позволяет ускорить
                        работу ленты, не нагружая ее перфоманс.
                      </p>
                      <p
                        className={styles.sectionPortfolioCardInfoTechnologies}
                      >
                        Стек: TypeScript, API, Ant-design, Vite
                      </p>
                    </div>
                    <div className={styles.sectionPortfolioCardInfoResultWrap}>
                      <p className={styles.sectionPortfolioCardInfoResult}>
                        <strong>Результат: </strong>
                        Создан полноценный сервис, где пользователи могут
                        создавать свои профили для получения знаний или обучения
                        других пользователей.
                      </p>
                    </div>
                    <a
                      className={styles.sectionPortfolioCardInfoLink}
                      href="https://github.com/Aleks-Shchepinov?tab=repositories"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                  <div className={styles.imageContainer}>
                    <img src={skillSwap} alt="Рабочий стол разработчика" />
                    <div className={styles.imageLowBox}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionPortfolioСasesWrap}>
              <div className={styles.sectionPortfolioPetTitleWrap}>
                <span className={styles.sectionPortfolioDot}></span>
                <h3 className={styles.sectionPortfolioPetTitle}>
                  Коммерческие кейсы (NDA Cases)
                </h3>
              </div>
              <div className={styles.sectionPortfolioCardContainer}>
                <div className={styles.sectionPortfolioCard}>
                  <div className={styles.sectionPortfolioCardInfoContainer}>
                    <div className={styles.sectionPortfolioCardInfoWrap}>
                      <div className={styles.sectionPortfolioCardBadgeNda}>
                        NDA safe
                      </div>
                      <h4 className={styles.sectionPortfolioCardInfoTitle}>
                        UI-библиотека компонентов (npm-пакет)
                      </h4>
                      <p className={styles.sectionPortfolioCardInfoText}>
                        <strong style={{ color: "rgb(255, 255, 255)" }}>
                          Что сделано:{" "}
                        </strong>
                        Создал изолированную библиотеку интерфейсных элементов и
                        готовых панелей управления, упакованную для
                        использования. Пакет легко встраивается как внешняя
                        зависимость, что автоматизирует дизайн-систему и
                        ускоряет UI-разработку на новых проектах.
                      </p>
                      <p
                        className={styles.sectionPortfolioCardInfoTechnologies}
                      >
                        Стек: React, JavaScript / TypeScript, Webpack
                      </p>
                    </div>
                    <div
                      className={`${styles.sectionPortfolioCardInfoResultWrap} ${styles.sectionPortfolioCardInfoResultGreen}`}
                    >
                      <p className={styles.sectionPortfolioCardInfoResult}>
                        <strong>🚀 Результат: </strong>
                        Создана полноценная UI библиотека компонентов, готовая к
                        использованию.
                      </p>
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageCommercStub}>
                      <span className={styles.imageCommercStubText}>
                        commercial
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.sectionPortfolioCard}>
                  <div className={styles.sectionPortfolioCardInfoContainer}>
                    <div className={styles.sectionPortfolioCardInfoWrap}>
                      <div className={styles.sectionPortfolioCardBadgeNda}>
                        NDA safe
                      </div>
                      <h4 className={styles.sectionPortfolioCardInfoTitle}>
                        Работа с локальным хранилищем (LocalStorage + IndexedDB)
                      </h4>
                      <p className={styles.sectionPortfolioCardInfoText}>
                        <strong style={{ color: "rgb(255, 255, 255)" }}>
                          Что сделано:{" "}
                        </strong>
                        Реализовал кэширование больших объёмов данных в
                        IndexedDB и синхронизацию настроек через LocalStorage.
                      </p>
                      <p
                        className={styles.sectionPortfolioCardInfoTechnologies}
                      >
                        Стек: JavaScript / TypeScript, IndexedDB API,
                        LocalStorage, Promise API
                      </p>
                    </div>
                    <div
                      className={`${styles.sectionPortfolioCardInfoResultWrap} ${styles.sectionPortfolioCardInfoResultGreen}`}
                    >
                      <p className={styles.sectionPortfolioCardInfoResult}>
                        <strong>🚀 Результат: </strong>
                        Приложение стало работать быстрее за счёт локального
                        кэша, а пользователи получили быстрый доступ к данным
                        без излишних запросов к API
                      </p>
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageCommercStub}>
                      <span className={styles.imageCommercStubText}>
                        commercial
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionPortfolioCompetenciesContainer}>
        <div className={styles.sectionPortfolioCompetenciesWrap}>
            <h3 className={styles.sectionPortfolioCompetenciesTitle}>Дополнительные компетенции</h3>
            <div className={styles.sectionPortfolioCompetenciesCardContainer}>
                <div className={`${styles.sectionPortfolioCard} ${styles.sectionPortfolioCompetenciesCard}`}>
                    <div className={`${styles.sectionPortfolioCompetenciesCardIcon} ${styles.sectionPortfolioCompetenciesCardIconColorBlue}`}>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="9" cy="8" r="3"/>
                            <path d="M4 18v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1"/>
                            <circle cx="17" cy="12" r="2"/>
                            <path d="M16 18l.5-1.5"/>
                            <path d="M22 14l-1 .5"/>
                            <path d="M21 20l-1-1"/>
                            <path d="M18 22l-.5-1"/>
                        </svg>
                    </div>
                    <h4 className={styles.sectionPortfolioCompetenciesCardTitle}>Командный рабочий процесс</h4>
                    <p className={styles.sectionPortfolioCompetenciesCardSubtitle}>
                    Работа с Git, Bitbucket, Jira, Code Review. Уверенное следование внутренним процессам разработки крупных продуктовых IT-команд.
                    </p>
                </div>
                <div className={`${styles.sectionPortfolioCard} ${styles.sectionPortfolioCompetenciesCard}`}>
                    <div className={`${styles.sectionPortfolioCompetenciesCardIcon} ${styles.sectionPortfolioCompetenciesCardIconColorViolet}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor"/>
                            <rect x="3" y="16" width="18" height="3" rx="0.5" fill="currentColor" opacity="0.7"/>
                        </svg>
                    </div>
                    <h4 className={styles.sectionPortfolioCompetenciesCardTitle}>Проектирование и Roadmaps</h4>
                    <p className={styles.sectionPortfolioCompetenciesCardSubtitle}>
                        Участие в составлении роадмапов (Roadmap) и работа в Boardmix (аналог Miro) для планирования логики приложения.                    </p>
                </div>
                <div className={`${styles.sectionPortfolioCard} ${styles.sectionPortfolioCompetenciesCard}`}>
                    <div className={`${styles.sectionPortfolioCompetenciesCardIcon} ${styles.sectionPortfolioCompetenciesCardIconColorPink}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2z" />
                            <path d="M14 2v6h6" />
                            <path d="M9 15l-1 1 2 2 4-4" stroke="currentColor" fill="none" />
                            <path d="M16 14l2 2-1 1-2-2z" />
                            <path d="M11 18h-3" />
                        </svg>
                    </div>
                    <h4 className={styles.sectionPortfolioCompetenciesCardTitle}>Анализ и задачи</h4>
                    <p className={styles.sectionPortfolioCompetenciesCardSubtitle}>
                        Опыт написания технической документации и постановки задач. Декомпозиция сложных фич на понятные спринты.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};
