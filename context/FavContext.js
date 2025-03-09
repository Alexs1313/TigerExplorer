import {createContext, useContext, useState} from 'react';

export const FavContext = createContext();
export const useMyContext = () => {
  return useContext(FavContext);
};

export const FavProvider = ({children}) => {
  const [carts, setCarts] = useState([]);
  const [favTiger, setFavTiger] = useState([]);
  const [favNews, setFavNews] = useState([]);

  const value = {
    carts,
    setCarts,
    favTiger,
    setFavTiger,
    favNews,
    setFavNews,
  };

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};
