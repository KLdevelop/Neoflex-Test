import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cart, ItemCardData } from 'src/types/interfaces';

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const cartJSON = sessionStorage.getItem('cart');
  const cart: Cart = cartJSON ? JSON.parse(cartJSON) : { items: {} };

  return cart;
});

export const addCartItem = createAsyncThunk('cart/addCartItem', async (item: ItemCardData) => {
  const cartJSON = sessionStorage.getItem('cart');
  const cart: Cart = cartJSON ? JSON.parse(cartJSON) : { items: {} };

  if (cart.items[item.id]) cart.items[item.id].count++;
  else cart.items[item.id] = { item, count: 1 };

  sessionStorage.setItem('cart', JSON.stringify(cart));
  return cart.items[item.id];
});
