import React, { useEffect } from 'react';
import styles from './header.module.scss';
import { Logo } from 'src/components';
import { cartIcon, favouriteIcon } from 'src/assets/icons';
import { useNavigate } from 'react-router';
import { useAppDispatch } from 'src/hooks';
import { fetchCart } from 'src/models/thunks';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <Logo />
      <span className={styles.iconButtons}>
        <img src={favouriteIcon} alt="" />
        <img src={cartIcon} alt="" onClick={() => navigate('/cart')} />
      </span>
    </header>
  );
};
