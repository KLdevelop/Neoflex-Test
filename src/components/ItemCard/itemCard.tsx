import React from 'react';
import { ItemCardData } from 'src/types/interfaces';
import { ratingStar } from 'src/assets/icons';
import { useAppDispatch } from 'src/hooks';
import { addCartItem } from 'src/models/thunks';
import styles from './itemCard.module.scss';

export const ItemCard = (item: ItemCardData) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.itemCard}>
      <div className={styles.imageBlock}>
        <img src={item.imageUrl} alt="" />
      </div>
      <div className={styles.nameBlock}>
        <p className={styles.name}>{item.name}</p>
        <div className={styles.priceBlock}>
          <p className={styles.price}>{item.price + ' ₽'}</p>
          <p className={styles.pastPrice}>{item.pastPrice ? item.pastPrice + ' ₽' : ''}</p>
        </div>
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.ratingBlock}>
          <img src={ratingStar} alt="" className={styles.star} />
          <span className={styles.rating}>{Math.round(item.rating * 10) / 10}</span>
        </div>
        <span className={styles.purchase} onClick={() => dispatch(addCartItem(item))}>
          Купить
        </span>
      </div>
    </div>
  );
};
