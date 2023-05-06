import React from 'react';
import { useAppSelector } from 'src/hooks';
import styles from './summary.module.scss';

export const Summary = () => {
  const { summary } = useAppSelector((state) => state.cart);

  return (
    <div className={styles.summary}>
      <div className={styles.summaryBlock}>
        <span>ИТОГО</span>
        <span>{`₽ ${summary}`}</span>
      </div>
      <button className={styles.order}>Перейти к оформлению</button>
    </div>
  );
};
