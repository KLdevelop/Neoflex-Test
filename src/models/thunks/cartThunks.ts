import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cart, ItemCardData } from 'src/types/interfaces';

const storage = sessionStorage;

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const cartJSON = storage.getItem('cart');
  const cart: Cart = cartJSON ? JSON.parse(cartJSON) : { items: {} };
  let summary = 0;
  Object.entries(cart.items).forEach(([, v]) => (summary += v.item.price * v.count));

  return { cart, summary };
});

export const addCartItem = createAsyncThunk('cart/addCartItem', async (item: ItemCardData) => {
  const cartJSON = storage.getItem('cart');
  const cart: Cart = cartJSON ? JSON.parse(cartJSON) : { items: {} };
  const id = item.id;

  if (cart.items[id]) cart.items[id].count++;
  else cart.items[id] = { item, count: 1 };

  storage.setItem('cart', JSON.stringify(cart));
  return cart.items[id];
});

export const decreaseCartItem = createAsyncThunk('cart/decreaseCartItem', async (id: number) => {
  const cartJSON = storage.getItem('cart');
  const cart: Cart = cartJSON ? JSON.parse(cartJSON) : { items: {} };

  if (cart.items[id].count > 1) cart.items[id].count--;

  storage.setItem('cart', JSON.stringify(cart));
  return cart.items[id];
});

export const deleteCartItem = createAsyncThunk('cart/deleteCartItem', async (id: number) => {
  const cartJSON = storage.getItem('cart');
  const cart: Cart = cartJSON ? JSON.parse(cartJSON) : { items: {} };

  delete cart.items[id];
  storage.setItem('cart', JSON.stringify(cart));

  return cart;
});
