import React from 'react'
import styles from "./why-me.module.css";

export const SectionWhyMe = () => {
  return (
    <section className={styles.sectionWhyMeContainer} id='whyme'>
      <div className={styles.sectionWhyMeWrap}>
        <div className={styles.sectionWhyMeInfoContainer}>
          <h2 className={styles.sectionWhyMeInfoTitle}>Почему стоит работать со мной?</h2>
          <p className={styles.sectionWhyMeInfoSubtitle}>
            Заказывая разработку у меня, вы получаете предсказуемый и надежный результат. Моя квалификация сформирована решением боевых задач в коммерческом сегменте, поэтому я сразу предлагаю правильные и поддерживаемые решения.
          </p>
          <div className={styles.sectionWhyMeInfographicsContainer}>
            <div className={styles.sectionWhyMeInfographicsWrap}>
              <p className={styles.sectionWhyMeInfographicsTitle}>{'> 1 года'}</p>
              <p className={styles.sectionWhyMeInfographicsSubtitle}>В коммерческом секторе</p>
              <p className={styles.sectionWhyMeInfographicsText}>Опыт в крупной российской IT-компании.</p>
            </div>
            <div className={styles.sectionWhyMeInfographicsWrap}>
              <p className={`${styles.sectionWhyMeInfographicsTitle} ${styles.sectionWhyMeInfographicsTitleColorViolet}`}>100%</p>
              <p className={styles.sectionWhyMeInfographicsSubtitle}>Выполнение SLA & Дедлайнов</p>
              <p className={styles.sectionWhyMeInfographicsText}>Ответственно планирую и сдаю задачи без сдвигов.</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionWhyMeCharacteristicsContainer}>
          <div className={styles.sectionWhyMeCharacteristicsCard}>
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#06b6d4" />
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <div className={styles.sectionWhyMecharacteristicsCardInfo}>
              <h4 className={styles.sectionWhyMecharacteristicsCardTitle}>Промышленный стек</h4>
              <p className={styles.sectionWhyMecharacteristicsCardSubtitle}>Пишу на React. При необходимости использую Redux Toolkit. Никаких устаревших подходов.</p>
            </div>
          </div>
          <div className={styles.sectionWhyMeCharacteristicsCard}>
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#06b6d4" />
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <div className={styles.sectionWhyMecharacteristicsCardInfo}>
              <h4 className={styles.sectionWhyMecharacteristicsCardTitle}>Чистый код, открытый для доработок</h4>
              <p className={styles.sectionWhyMecharacteristicsCardSubtitle}>Передаю проект в идеальном состоянии: с понятными названиями переменных, делением на компоненты и чистой версткой.</p>
            </div>
          </div>
          <div className={styles.sectionWhyMeCharacteristicsCard}>
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#06b6d4" />
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <div>
              <h4 className={styles.sectionWhyMecharacteristicsCardTitle}>Отличная коммуникация</h4>
              <p className={styles.sectionWhyMecharacteristicsCardSubtitle}>Нахожусь на связи на протяжении всего цикла разработки. Оперативно вношу правки, и при необходимости предоставляю статус связь о проделанной работе.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
