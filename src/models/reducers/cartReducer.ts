import { createReducer } from '@reduxjs/toolkit';
import { Cart } from 'src/types/interfaces';
import { addCartItem, fetchCart, decreaseCartItem, deleteCartItem } from 'src/models/thunks';

interface InitialState {
  cart: Cart;
  summary: number;
  counter: number;
}

const initialState: InitialState = {
  cart: {
    items: {},
  },
  summary: 0,
  counter: 0,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCart.fulfilled, (_, action) => action.payload)
    .addCase(addCartItem.fulfilled, (state, action) => {
      const cartItem = action.payload;
      state.cart.items[cartItem.item.id] = cartItem;
      state.summary += cartItem.item.price;
      if (cartItem.count === 1) state.counter++;
    })
    .addCase(decreaseCartItem.fulfilled, (state, action) => {
      const cartItem = action.payload;
      state.cart.items[cartItem.item.id] = cartItem;
      state.summary -= cartItem.item.price;
    })
    .addCase(deleteCartItem.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
      state.summary -= action.payload.price;
      state.counter--;
    });
});
