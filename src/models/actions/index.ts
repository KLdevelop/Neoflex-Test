import { createAction } from '@reduxjs/toolkit';
import { Language } from 'src/types/interfaces';

export const setLanguage = createAction<Language>('SET_LANGUAGE');
