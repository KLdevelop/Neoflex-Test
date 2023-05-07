import React from 'react';
import { useNavigate } from 'react-router';
import styles from './logo.module.scss';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <span className={styles.logo} onClick={() => navigate('/')}>
      QPICK
    </span>
  );
};
