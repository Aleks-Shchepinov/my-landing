import React from 'react';
import styles from './stack.module.css';

export const SectionStack = () => {
  return (
    <section className={styles.sectionStackContainer} id='stack'>
        <h2 className={styles.sectionStackTitle}>Стек технологий</h2>
        <p className={styles.sectionStackSubtitle}>
            Инструментарий, который я применяю ежедневно для построения надежных и производительных веб-приложений.
        </p>
        <div className={styles.sectionStackCardContainer}>
            <div className={styles.sectionStackCard}>
                <div className={styles.sectionStackCardTitle}>
                    <div className={`${styles.sectionStackCardIcon} ${styles.blue}`}>
                        <svg class="w-7 h-7 text-cyan-400 shrink-0 filter drop-shadow-[0_0_6px_rgba(6,182,212,0.35)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                            <polyline points="2 17 12 22 22 17"></polyline>
                            <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                    </div>
                    <h3 className={styles.sectionStackTitleText}>Frontend Core</h3>
                </div>
                <div className={styles.sectionStackCardInfo}>
                    <div>
                        <p className={styles.sectionStackCardInfoSubtitle}>React & Frameworks</p>
                        <p className={styles.sectionStackCardInfoText}>Хуки, контексты, жизненный цикл, рендеринг, роутинг</p>
                        <div className={styles.sectionStackCardInfoItemContainer}>
                            <span className={styles.sectionStackCardInfoItem}>React</span>
                            <span className={styles.sectionStackCardInfoItem}>TypeScript</span>
                            <span className={styles.sectionStackCardInfoItem}>JavaScript ES6+</span>
                        </div>
                    </div>
                    <hr className={styles.customHr}/>
                    <div>
                        <p className={styles.sectionStackCardInfoSubtitle}>State Management</p>
                        <p className={styles.sectionStackCardInfoText}>Глобальное состояние, кэширование и асинхронные запросы</p>
                        <div  className={styles.sectionStackCardInfoItemContainer}>
                            <span className={styles.sectionStackCardInfoItem}>Redux Toolkit</span>
                            <span className={styles.sectionStackCardInfoItem}>RTK Query</span>
                            <span className={styles.sectionStackCardInfoItem}>Redux Saga/Thunk</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionStackCard}>
                <div className={styles.sectionStackCardTitle}>
                    <div className={`${styles.sectionStackCardIcon} ${styles.blueViolet}`}>
                        <svg class="w-7 h-7 text-indigo-400 shrink-0 filter drop-shadow-[0_0_6px_rgba(99,102,241,0.35)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                            <polyline points="10 7 8 9 10 11"></polyline>
                            <polyline points="14 7 16 9 14 11"></polyline>
                        </svg>
                    </div>
                    <h3 className={styles.sectionStackTitleText}>Верстка & UI</h3>
                </div>
                <div className={styles.sectionStackCardInfo}>
                    <div>
                        <p className={styles.sectionStackCardInfoSubtitle}>Styling & Grid</p>
                        <p className={styles.sectionStackCardInfoText}>Адаптивный дизайн, препроцессоры и кастомные CSS фичи</p>
                        <div className={styles.sectionStackCardInfoItemContainer}>
                            <span className={styles.sectionStackCardInfoItem}>HTML5 / CSS3</span>
                            <span className={styles.sectionStackCardInfoItem}>SASS / LESS</span>
                            <span className={styles.sectionStackCardInfoItem}>Flexbox / Grid</span>
                        </div>
                    </div>
                    <hr className={styles.customHr}/>
                    <div>
                        <p className={styles.sectionStackCardInfoSubtitle}>UI Libraries</p>
                        <p className={styles.sectionStackCardInfoText}>Уверенное внедрение готовых UI-пакетов и кастомизация стилей</p>
                        <div  className={styles.sectionStackCardInfoItemContainer}>
                            <span className={styles.sectionStackCardInfoItem}>Ant Design</span>
                            <span className={styles.sectionStackCardInfoItem}>Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionStackCard}>
                <div className={styles.sectionStackCardTitle}>
                    <div className={`${styles.sectionStackCardIcon} ${styles.violet}`}>
                        <svg class="w-7 h-7 text-purple-400 shrink-0 filter drop-shadow-[0_0_6px_rgba(168,85,247,0.35)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                        </svg>
                    </div>
                    <h3 className={styles.sectionStackTitleText}>Инструменты & Среда</h3>
                </div>
                <div className={styles.sectionStackCardInfo}>
                    <div>
                        <p className={styles.sectionStackCardInfoSubtitle}>Инфраструктура & Сборка</p>
                        <p className={styles.sectionStackCardInfoText}>Конфигурация проектов, управление репозиториями</p>
                        <div className={styles.sectionStackCardInfoItemContainer}>
                            <span className={styles.sectionStackCardInfoItem}>Webpack</span>
                            <span className={styles.sectionStackCardInfoItem}>Git / Bitbucket</span>
                            <span className={styles.sectionStackCardInfoItem}>NPM Packages</span>
                        </div>
                    </div>
                    <hr className={styles.customHr}/>
                    <div>
                        <p className={styles.sectionStackCardInfoSubtitle}>Работа с данными & API</p>
                        <p className={styles.sectionStackCardInfoText}>Синхронизация данных в реальном времени и кэш</p>
                        <div  className={styles.sectionStackCardInfoItemContainer}>
                            <span className={styles.sectionStackCardInfoItem}>REST API / Axios</span>
                            <span className={styles.sectionStackCardInfoItem}>WebSockets</span>
                            <span className={styles.sectionStackCardInfoItem}>LocalStorage / IndexedDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
