import { createAsyncThunk } from '@reduxjs/toolkit';
import items from 'src/data/items';

export const fetchItems = createAsyncThunk('items/fetchItems', async (tag?: string) => {
  if (!tag) return items;
  return items.filter((item) => item.tag === tag);
});
