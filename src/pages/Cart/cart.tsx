import React from 'react';
import { CartItem, Summary } from 'src/components';
import { useAppSelector } from 'src/hooks';
import styles from './cart.module.scss';

export const Cart = () => {
  const items = Object.entries(useAppSelector((state) => state.cart.cart.items));

  return (
    <div className={styles.cart}>
      <p className={styles.title}>Корзина</p>
      <div className={styles.content}>
        <div className={styles.items}>
          {items.map(([id, cartItem]) => (
            <CartItem cartItem={cartItem} key={id} />
          ))}
        </div>
        {items.length > 0 && <Summary />}
      </div>
    </div>
  );
};
