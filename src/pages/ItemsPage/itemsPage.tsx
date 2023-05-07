import React, { useEffect } from 'react';
import { Section } from 'src/components';
import { useAppDispatch } from 'src/hooks';
import { fetchItems } from 'src/models/thunks';
import styles from './itemsPage.module.scss';

export const ItemsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className={styles.itemsPage}>
      <Section title="Наушники" tag="headphones" />
      <Section title="Беспроводные наушники" tag="wireless" />
    </div>
  );
};
