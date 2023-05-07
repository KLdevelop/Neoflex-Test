import React from 'react';
import styles from './carItem.module.scss';
import { CartItem as CartItemData } from 'src/types/interfaces';
import { deleteIcon } from 'src/assets/icons';
import { useAppDispatch } from 'src/hooks';
import { addCartItem, decreaseCartItem, deleteCartItem } from 'src/models/thunks';

interface Props {
  cartItem: CartItemData;
}

export const CartItem = (props: Props) => {
  const { cartItem } = props;
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cartItem}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img
            src={cartItem.item.imageUrl}
            alt=""
            onClick={() => dispatch(deleteCartItem(cartItem.item.id))}
          />
        </div>
        <div className={styles.counter}>
          <button
            className={styles.changeCount}
            onClick={() => dispatch(decreaseCartItem(cartItem.item.id))}
          >
            -
          </button>
          <span className={styles.count}>{cartItem.count}</span>
          <button
            className={styles.changeCount}
            onClick={() => dispatch(addCartItem(cartItem.item))}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <img
            className={styles.delete}
            src={deleteIcon}
            alt=""
            onClick={() => dispatch(deleteCartItem(cartItem.item.id))}
          />
        </div>
        <div className={styles.nameBlock}>
          <p className={styles.name}>{cartItem.item.name}</p>
          <p className={styles.price}>{cartItem.item.price + ' ₽'}</p>
        </div>
        <p className={styles.summary}>{cartItem.item.price * cartItem.count + ' ₽'}</p>
      </div>
    </div>
  );
};
