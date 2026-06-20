import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTextContainer}>
        <p className={styles.footerTextTitle}>Александр Щепинов</p>
        <p className={styles.footerTextSubtitle}>© 2026. Все права защищены. Разработка интерфейсов.</p>
      </div>
      <a className={styles.footerLinkHeader} href="#hero" onClick={handleClick}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(156, 163, 175)" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
      </a>
    </footer>
  );
};
