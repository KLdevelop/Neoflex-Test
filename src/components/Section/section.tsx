import React from 'react';
import styles from './section.module.scss';
import { ItemTag } from 'src/types/interfaces';
import { useAppSelector } from 'src/hooks';
import { ItemCard } from 'src/components';

interface Props {
  title: string;
  tag: ItemTag;
}

export const Section = (props: Props) => {
  const items = useAppSelector((state) => state.items.items[props.tag]);

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
