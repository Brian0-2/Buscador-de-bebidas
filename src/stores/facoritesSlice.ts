import {StateCreator} from 'zustand';
import { Recipe } from '../types';
import { createRecipesSlice, RecipesSliceType } from './recipiSlice';
import { createNotificationSlice, NotificationSliceType } from './notificationSlice';

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe : Recipe) => void,
    favoriteExist: (id: Recipe['idDrink']) => boolean,
    loadFromStorage: () => void
}
// con esta sintaxis : <FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> puedo anidar funciones o estados de otro slice
export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se elimino de Favoritos', 
                error: false
            })
        }else{
            set((state) => ({
                // favorites: [...get().favorites, recipe]
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se agrego a Favoritos', 
                error: false
            })
        }
        createRecipesSlice(set, get, api).closeModal();
        localStorage.setItem('favorites', JSON.stringify(get().favorites));
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storeFavorites = localStorage.getItem('favorites');
        if(storeFavorites){
            set(() => ({
                favorites: JSON.parse(storeFavorites)
            }));
        }
    }
})