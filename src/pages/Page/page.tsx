import React from 'react';
import { Footer, Header } from 'src/components';
import { Outlet } from 'react-router';
import styles from './page.module.scss';

export const Page = () => (
  <div className={styles.page}>
    <Header />
    <Outlet />
    <Footer />
  </div>
);
