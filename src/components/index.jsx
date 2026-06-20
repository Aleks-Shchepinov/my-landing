import React from 'react'
import styles from './index.module.css';
import { Header } from './header/header';
import { SectionHero } from './section-hero/section-hero';
import { SectionAbout } from './section-about/section-about';
import { SectionStack } from './section-stack/section-stack';
import { SectionPortfolio } from './section-portfolio/section-portfolio.jsx';
import { SectionWhyMe } from './section-why-me/section-why-me';
import { SectionContacts } from './section-contacts/section-contacts.jsx';
import { Footer } from "./footer/footer.jsx";

export const Index = () => {
  return (
    <div className={`${styles.body} ${styles.gridBg}`}>
        <Header />
        <SectionHero />
        <SectionAbout />
        <SectionStack />
        <SectionPortfolio />
        <SectionWhyMe />
        <SectionContacts />
        <Footer />
    </div>
  )
}
