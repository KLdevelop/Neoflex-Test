import React from 'react';
import { Section } from 'src/components';
import styles from './itemsPage.module.scss';

export const ItemsPage = () => (
  <div className={styles.itemsPage}>
    <Section title="Наушники" tag="headphones" />
    <Section title="Беспроводные наушники" tag="wireless" />
  </div>
);
