import React, { useState } from "react";
import { HeaderLogo } from "./header-logo";
import styles from "./header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <a className={styles.headerLogoContainer}>
          <div className={styles.logo}>
            <HeaderLogo />
          </div>
          <div className={styles.nameContainer}>
            <a
              className={styles.name}
              href="#hero"
              onClick={handleClick}
              target="_blank"
            >
              Александр Щепинов
            </a>
            <span className={styles.prof}>Frontend Dev</span>
          </div>
        </a>
        <button
          className={`${styles.burgerButton} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
        <nav
          className={`${styles.headerCentralPart} ${isMenuOpen ? styles.mobileOpen : ""}`}
        >
          <a
            className={styles.itemCentralPart}
            href="#hero"
            onClick={handleClick}
          >
            Главная
          </a>
          <a
            className={styles.itemCentralPart}
            href="#about"
            onClick={handleClick}
          >
            Обо мне
          </a>
          <a
            className={styles.itemCentralPart}
            href="#stack"
            onClick={handleClick}
          >
            Стек
          </a>
          <a
            className={styles.itemCentralPart}
            href="#portfolio"
            onClick={handleClick}
          >
            Проекты
          </a>
          <a
            className={styles.itemCentralPart}
            href="#whyme"
            onClick={handleClick}
          >
            Почему я
          </a>
          <a
            className={styles.itemCentralPart}
            href="#contacts"
            onClick={handleClick}
          >
            Контакты
          </a>
        </nav>
        <div>
          <a
            href="https://t.me/alex_shchepinov"
            target="_blank"
            className={`${styles.contacts} ${styles.contactsContainer}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.108 7.617C5.4 5.768 8.262 4.55 9.694 3.961c4.088-1.682 4.938-1.974 5.492-1.984.68-.011.86.551.804 1.137-.221 2.302-1.18 7.887-1.668 10.465-.43 2.277-1.958 1.292-3.338.397-1.296-.84-2.028-1.362-3.286-2.182-1.453-.947-.511-1.467.317-2.318.217-.223 3.984-3.61 4.057-3.918.06-.256-.167-.333-.373-.286-.13.029-2.2 1.382-6.21 4.058-.588.399-1.12.593-1.597.583-.66-.014-2.26-.583-3.88-1.492-.097-.277.399-.53 1.096-.804z"
                fill="#ffffff"
              ></path>
            </svg>
            Связаться
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};
