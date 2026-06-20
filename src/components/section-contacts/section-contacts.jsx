import React from 'react';
import styles from "./contacts.module.css";

export const SectionContacts = () => {
  return (
    <section className={styles.sectionContactsContainer} id='contacts'>
        <div className={styles.sectionContactsWrap}>
            <h2 className={styles.sectionContactsTitle}>Давайте начнем сотрудничество!</h2>
            <p className={styles.sectionContactsSubtitle}>Я всегда открыт для интересных предложений, доработок сайтов, рефакторинга и долгосрочного сотрудничества. Свяжитесь со мной напрямую в мессенджерах.  Отвечаю оперативно!</p>
            <div className={styles.sectionContactsInfoContainer}>
                <a className={styles.sectionContactsInfoCard} href='https://t.me/alex_shchepinov' target="_blank">
                    <div className={`${styles.sectionContactsInfoCardIcon} ${styles.iconBlue}`}>
                        <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.108 7.617C5.4 5.768 8.262 4.55 9.694 3.961c4.088-1.682 4.938-1.974 5.492-1.984.68-.011.86.551.804 1.137-.221 2.302-1.18 7.887-1.668 10.465-.43 2.277-1.958 1.292-3.338.397-1.296-.84-2.028-1.362-3.286-2.182-1.453-.947-.511-1.467.317-2.318.217-.223 3.984-3.61 4.057-3.918.06-.256-.167-.333-.373-.286-.13.029-2.2 1.382-6.21 4.058-.588.399-1.12.593-1.597.583-.66-.014-2.26-.583-3.88-1.492-.097-.277.399-.53 1.096-.804z" fill="rgb(56, 189, 248)"></path>
                        </svg>
                    </div>
                    <div className={styles.sectionContactsInfoCardTextWrap}>
                        <p className={styles.sectionContactsInfoCardTg}>Telegram</p>
                        <p className={styles.sectionContactsInfoCardLogin}>@alex_shchepinov</p>
                    </div>
                </a>
                <a className={styles.sectionContactsInfoCard} href='https://github.com/Aleks-Shchepinov?tab=repositories' target="_blank">
                    <div className={`${styles.sectionContactsInfoCardIcon} ${styles.iconGray}`}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div className={styles.sectionContactsInfoCardTextWrap}>
                        <p className={styles.sectionContactsInfoCardTg}>GitHub Profile</p>
                        <p className={styles.sectionContactsInfoCardLogin}>Aleks-Shchepinov</p>
                    </div>
                </a>
                <a className={styles.sectionContactsInfoCard} href='https://kwork.ru/user/alexschepinov' target="_blank">
                    <div className={`${styles.sectionContactsInfoCardIcon} ${styles.iconGreen}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="#34d399" stroke-width="2" fill="rgb(52, 211, 153)" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="#34d399" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.sectionContactsInfoCardTextWrap}>
                        <p className={styles.sectionContactsInfoCardTg}>Freelance / Gigs</p>
                        <p className={styles.sectionContactsInfoCardLogin}>Доступен на Kwork</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}
