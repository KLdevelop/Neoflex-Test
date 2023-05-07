import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer, cartReducer, langReducer } from './reducers';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
    lang: langReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
