import React from 'react';
import styles from './footer.module.scss';
import { langPlanet, telegramIcon, vkIcon, whatsappIcon } from 'src/assets/icons';
import { Logo } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setLanguage } from 'src/models/actions';

export const Footer = () => {
  const { lang } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
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
          <span
            className={lang === 'rus' ? styles.curLang : styles.lang}
            onClick={() => dispatch(setLanguage('rus'))}
          >
            Рус
          </span>
          <span
            className={lang === 'eng' ? styles.curLang : styles.lang}
            onClick={() => dispatch(setLanguage('eng'))}
          >
            Eng
          </span>
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
};
