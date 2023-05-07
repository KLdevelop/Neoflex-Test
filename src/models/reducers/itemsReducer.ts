import { createReducer } from '@reduxjs/toolkit';
import { ItemCardData } from 'src/types/interfaces';
import { fetchItems } from 'src/models/thunks';

interface InitialState {
  items: {
    [tag: string]: ItemCardData[];
  };
}

const initialState: InitialState = {
  items: {
    headphones: [],
    wireless: [],
  },
};

export const itemsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchItems.fulfilled, (_, action) => {
    const state = structuredClone(initialState);

    action.payload.forEach((item) => {
      state.items[item.tag].push(item);
    });

    return state;
  });
});
