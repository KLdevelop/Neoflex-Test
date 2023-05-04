import { createAsyncThunk } from '@reduxjs/toolkit';
import items from 'src/data/items';

export const fetchItems = createAsyncThunk('items/fetchItems', async (tag?: string) => {
  switch (tag) {
    case undefined:
      return items;

    default:
      return items.filter((item) => item.tag === tag);
  }
});
