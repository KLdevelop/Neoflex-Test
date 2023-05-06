import React, { useEffect } from 'react';
import { Footer, Header } from 'src/components';
import { Outlet } from 'react-router';
import styles from './page.module.scss';
import { useAppDispatch } from 'src/hooks';
import { fetchCart } from 'src/models/thunks';

export const Page = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
