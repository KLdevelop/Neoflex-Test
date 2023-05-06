import React from 'react';
import styles from './logo.module.scss';
import { useNavigate } from 'react-router';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <span className={styles.logo} onClick={() => navigate('/')}>
      QPICK
    </span>
  );
};
