import React from "react";
import styles from "./hero.module.css";

export const SectionHero = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.sectionHeroContainer} id="hero">
      <div className={styles.sectionHero}>
        <div className={styles.statusContainer}>
          <span className={styles.circle}>
            <span className={styles.circleRipple}></span>
            <span className={styles.circleDot}></span>
          </span>
          <span className={styles.status}>ДОСТУПЕН ДЛЯ НОВЫХ ПРОЕКТОВ</span>
        </div>
        <h1 className={styles.title}>
          Привет, я Александр —
          <br />
          <span className={styles.subtitle}>Фронтенд-разработчик</span>
        </h1>
        <p className={styles.paragraph}>
          Проектирую и верстаю производительные веб-интерфейсы на
          <br />
          <span className={styles.subparagraph}>React</span>, управляю сложными
          состояниями с
          <span className={styles.subparagraph}> Redux Toolkit</span> и <br />
          строю аккуратные дизайн-системы.
        </p>
        <div className={styles.stackContainer}>
          <p className={styles.stackParagraph}>Основной рабочий стек:</p>
          <div className={styles.itemStackContainer}>
            <div className={styles.itemStack}>React</div>
            <div className={styles.itemStack}>Redux Toolkit</div>
            <div className={styles.itemStack}>TypeScript</div>
            <div className={styles.itemStack}>Ant Design</div>
            <div className={styles.itemStack}>HTML5 & CSS3</div>
          </div>
        </div>
        <div className={styles.portfolioWrap}>
          <div className={styles.openPortfolioContainer}>
            <a
              href="#portfolio"
              className={styles.openPortfolio}
              onClick={handleClick}
            >
              {"</> Посмотреть проекты"}
            </a>
          </div>
          <div className={styles.openTelegramContainer}>
            <a
              href="https://t.me/alex_shchepinov"
              className={styles.openTelegram}
              target="_blank"
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
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
      <div className={styles.devProfileContainer}>
        <div className={styles.devProfileHeader}>
          <div className={styles.devProfileIcon}>
            <span className={styles.devProfileIconClose}></span>
            <span className={styles.devProfileIconCollapse}></span>
            <span className={styles.devProfileIconExpand}></span>
          </div>
          <span className={styles.devProfileHeaderText}>
            DeveloperProfile.jsx
          </span>
          <span className={styles.devProfileHeaderHideElem}></span>
        </div>
        <div className={styles.devProfile}>
          <p>
            <span className={styles.textPink}>const</span>
            {" DeveloperInfo = () => {"}
          </p>
          <p style={{ paddingLeft: 16, marginTop: 4 }}>
            <span className={styles.textPink}>const</span>
            {" [state, setState] = useState({"}
          </p>
          <p style={{ paddingLeft: 32, marginTop: 4 }}>
            name: <span className={styles.textGreen}>'Александр Щепинов',</span>
          </p>
          <p style={{ paddingLeft: 32, marginTop: 4 }}>
            role: <span className={styles.textGreen}>'Frontend Engineer',</span>
          </p>
          <p style={{ paddingLeft: 32, marginTop: 4 }}>
            experience:{" "}
            <span className={styles.textBlue}>{"> 1 Year Commercial,"}</span>
          </p>
          <p style={{ paddingLeft: 32, marginTop: 4 }}>
            status:{" "}
            <span className={styles.textGreen}>'Code Review Approved'</span>
          </p>
          <p style={{ paddingLeft: 16, marginTop: 4 }}>{"});"}</p>
          <p style={{ paddingLeft: 16, marginTop: 4 }}>
            <span className={styles.textPink}>return</span>
            {" ("}
          </p>
          <p style={{ paddingLeft: 32, marginTop: 4 }}>
            {"<"}
            <span className={styles.textViolet}>Portfolio</span>
            {" stack={"}
            <span className={styles.textYellow}>React, RTK</span>
            {"} />"}
          </p>
          <p style={{ paddingLeft: 48, marginTop: 4 }}>
            {"<"}
            <span className={styles.textViolet}>Standart</span>
            {" quality={"}
            <span className={styles.textGreen}>"Prodaction"</span>
            {"} />"}
          </p>
          <p style={{ paddingLeft: 32, marginTop: 4 }}>
            {"</"}
            <span className={styles.textViolet}>Portfolio</span>
            {">"}
          </p>
          <p style={{ paddingLeft: 16, marginTop: 4 }}>{");"}</p>
          <p style={{ marginTop: 4 }}>{");"}</p>
          <p style={{ paddingTop: 8, marginTop: 4, color: "rgb(6, 182, 212)" }}>
            // Built with responsibility
          </p>
        </div>
        <div className={styles.devProfileBadge}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="#34d399"
            />
          </svg>
          <div className={styles.devProfileBadgeTextContainer}>
            <p className={styles.devProfileBadgeTextGray}>Code Quality</p>
            <p className={styles.devProfileBadgeTextWhite}>SLA 100%</p>
          </div>
        </div>
      </div>
    </section>
  );
};
