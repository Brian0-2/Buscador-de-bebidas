import { create } from 'zustand';
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipiSlice';
import { FavoritesSliceType,createFavoritesSlice } from './facoritesSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'

//Slice Parent es un patron en el cual se pueden tener multiples archivos para manejar el estado global con zustand
export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})));