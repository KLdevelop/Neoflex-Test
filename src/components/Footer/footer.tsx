import React from 'react';
import styles from './footer.module.scss';
import { langPlanet, telegramIcon, vkIcon, whatsapp } from 'src/assets/icons';

export const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.firstBlock}>
      <p className={styles.title}>QPICK</p>
    </div>
    <div className={styles.secondBlock}>
      <p className={styles.section}>Избранное</p>
      <p className={styles.section}>Корзина</p>
      <p className={styles.section}>Контакты</p>
    </div>
    <div className={styles.thirdBlock}>
      <p className={styles.section}>Условия сервиса</p>
      <div className={styles.langSection}>
        <img src={langPlanet} alt="" />
        <p className={styles.lang}>Рус</p>
        <p className={styles.lang}>Eng</p>
      </div>
    </div>
    <div className={styles.fourthBlock}>
      <div className={styles.snBlock}>
        <img src={vkIcon} alt="" />
        <img src={telegramIcon} alt="" />
        <img src={whatsapp} alt="" />
      </div>
    </div>
  </div>
);
