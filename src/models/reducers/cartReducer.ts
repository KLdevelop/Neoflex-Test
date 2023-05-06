import { createReducer } from '@reduxjs/toolkit';
import { Cart } from 'src/types/interfaces';
import { addCartItem, fetchCart, decreaseCartItem, deleteCartItem } from 'src/models/thunks';

interface InitialState {
  cart: Cart;
}

const initialState: InitialState = {
  cart: {
    items: {},
  },
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    })
    .addCase(addCartItem.fulfilled, (state, action) => {
      const cartItem = action.payload;
      state.cart.items[cartItem.item.id] = cartItem;
    })
    .addCase(decreaseCartItem.fulfilled, (state, action) => {
      const cartItem = action.payload;
      state.cart.items[cartItem.item.id] = cartItem;
    })
    .addCase(deleteCartItem.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
});
