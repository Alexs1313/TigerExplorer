import {createContext, useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavContext = createContext();
export const useMyContext = () => {
  return useContext(FavContext);
};

export const FavProvider = ({children}) => {
  const [carts, setCarts] = useState([]);
  const [favTiger, setFavTiger] = useState([]);
  const [favNews, setFavNews] = useState([]);

  console.log('cartscontext', carts);

  const addToFavorites = async item => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favoritesEncyclopedia');
      let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
      console.log('fav', favoritesList);
      const filtered = favoritesList.find(val => val.id === item.id);

      if (!filtered) {
        favoritesList.push(item);
      }
      // setIsSelected(item.id);

      await AsyncStorage.setItem(
        '@favoritesEncyclopedia',
        JSON.stringify(favoritesList),
      );

      console.log('Item added to favorites!', favoritesList);
    } catch (e) {
      console.error('Failed to add item to favorites:', e);
    }
  };

  const value = {
    carts,
    setCarts,
    favTiger,
    setFavTiger,
    favNews,
    setFavNews,
    addToFavorites,
  };

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};
