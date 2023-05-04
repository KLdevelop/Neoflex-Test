import React from 'react';
import styles from './header.module.scss';
import { Logo } from 'src/components';
import { cartIcon, favouriteIcon } from 'src/assets/icons';

export const Header = () => (
  <header className={styles.header}>
    <Logo />
    <span className={styles.iconButtons}>
      <img src={favouriteIcon} alt="" />
      <img src={cartIcon} alt="" />
    </span>
  </header>
);
