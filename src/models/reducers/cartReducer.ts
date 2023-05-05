import { createReducer } from '@reduxjs/toolkit';
import { Cart } from 'src/types/interfaces';
import { addCartItem, fetchCart } from '../thunks';

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
    .addCase(fetchCart.fulfilled, (_, action) => ({
      cart: action.payload,
    }))
    .addCase(addCartItem.fulfilled, (state, action) => {
      const cartItem = action.payload;

      state.cart.items[cartItem.item.id] = cartItem;
    });
});
