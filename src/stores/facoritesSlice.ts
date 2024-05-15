import {StateCreator} from 'zustand';
import { Recipe } from '../types';
import { createRecipesSlice, RecipesSliceType } from './recipiSlice';

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe : Recipe) => void,
    favoriteExist: (id: Recipe['idDrink']) => boolean,
    loadFromStorage: () => void
}
// con esta sintaxis : <FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> puedo anidar funciones o estados de otro slice
export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        }else{
            set((state) => ({
                // favorites: [...get().favorites, recipe]
                favorites: [...state.favorites, recipe]

            }))
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