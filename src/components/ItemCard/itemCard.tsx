import React from 'react';
import styles from './itemCard.module.scss';
import { ItemCardData } from 'src/types/interfaces';
import { ratingStar } from 'src/assets/icons';

export const ItemCard = (props: ItemCardData) => (
  <div className={styles.itemCard}>
    <div className={styles.imageBlock}>
      <img src={props.imageUrl} alt="" />
    </div>
    <div className={styles.nameBlock}>
      <p className={styles.name}>{props.name}</p>
      <div className={styles.priceBlock}>
        <p className={styles.price}>{props.price + ' ₽'}</p>
        <p className={styles.pastPrice}>{props.pastPrice ? props.pastPrice + ' ₽' : ''}</p>
      </div>
    </div>
    <div className={styles.bottomBlock}>
      <div className={styles.ratingBlock}>
        <img src={ratingStar} alt="" className={styles.star} />
        <span className={styles.rating}>{Math.round(props.rating * 10) / 10}</span>
      </div>
      <span className={styles.purchase}>Купить</span>
    </div>
  </div>
);
