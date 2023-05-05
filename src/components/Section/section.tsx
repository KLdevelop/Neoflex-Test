import React, { useEffect } from 'react';
import styles from './section.module.scss';
import { ItemTag } from 'src/types/interfaces';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { fetchItems } from 'src/models/thunks';
import { ItemCard } from 'src/components';

interface Props {
  title: string;
  tag: ItemTag;
}

export const Section = (props: Props) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items.items[props.tag]);

  useEffect(() => {
    dispatch(fetchItems(props.tag));
  }, [dispatch, props.tag]);

  return (
    <div className={styles.section}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.itemsBlock}>
        {items.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
