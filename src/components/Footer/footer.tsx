import React from 'react';
import styles from './footer.module.scss';
import { langPlanet, telegramIcon, vkIcon, whatsappIcon } from 'src/assets/icons';
import { Logo } from 'src/components';

export const Footer = () => (
  <footer className={styles.footer}>
    <Logo />
    <div className={styles.secondBlock}>
      <p className={styles.section}>Избранное</p>
      <p className={styles.section}>Корзина</p>
      <p className={styles.section}>Контакты</p>
    </div>
    <div className={styles.thirdBlock}>
      <p className={styles.section}>Условия сервиса</p>
      <div className={styles.langSection}>
        <img src={langPlanet} alt="" />
        <span className={styles.lang}>Рус</span>
        <span className={styles.lang}>Eng</span>
      </div>
    </div>
    <div className={styles.fourthBlock}>
      <div className={styles.snBlock}>
        <img src={vkIcon} alt="" />
        <img src={telegramIcon} alt="" />
        <img src={whatsappIcon} alt="" />
      </div>
    </div>
  </footer>
);
