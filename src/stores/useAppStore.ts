import { create } from 'zustand';
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipiSlice';

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})));