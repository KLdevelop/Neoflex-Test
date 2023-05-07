import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer, cartReducer } from './reducers';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
