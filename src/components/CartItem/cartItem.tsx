import React, { Dispatch } from 'react';
import styles from './carItem.module.scss';
import { CartItem as CartItemData } from 'src/types/interfaces';
import { deleteIcon } from 'src/assets/icons';

interface Props extends CartItemData {
  setCount: Dispatch<number>;
}

export const CartItem = (props: Props) => (
  <div className={styles.cartItem}>
    <div className={styles.left}>
      <div className={styles.image}>
        <img src={props.item.imageUrl} alt="" />
      </div>
      <div className={styles.counter}>
        <button className={styles.changeCount} onClick={() => props.setCount(props.count - 1)}>
          -
        </button>
        <span className={styles.count}>{props.count}</span>
        <button className={styles.changeCount} onClick={() => props.setCount(props.count + 1)}>
          +
        </button>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.top}>
        <img className={styles.delete} src={deleteIcon} alt="" />
      </div>
      <div className={styles.nameBlock}>
        <p className={styles.name}>{props.item.name}</p>
        <p className={styles.price}>{props.item.price + ' ₽'}</p>
      </div>
      <p className={styles.summary}>{props.item.price * props.count + ' ₽'}</p>
    </div>
  </div>
);
