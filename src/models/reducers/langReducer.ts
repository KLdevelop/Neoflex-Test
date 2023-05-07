import { createReducer } from '@reduxjs/toolkit';
import { Language } from 'src/types/interfaces';
import { setLanguage } from '../actions';

const initialState = 'rus' as Language;

export const langReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLanguage, (_, action) => action.payload);
});
