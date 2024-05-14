import { create } from 'zustand';
import { createRecipesSlice, RecipesSliceType } from './recipiSlice';

export const useAppStore = create<RecipesSliceType>( (...a) => ({
    ...createRecipesSlice(...a)
}));