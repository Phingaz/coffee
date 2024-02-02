import React from 'react';
import {TFavorites} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteContext = React.createContext<{
  favorite: TFavorites[] | undefined;
  setFavoriteItem: (item: TFavorites) => void;
}>({
  favorite: [],
  setFavoriteItem: () => {},
});

export const FavoriteProvider = ({children}: {children: React.ReactNode}) => {
  const [favorite, setFavorite] = React.useState<TFavorites[] | undefined>(
    undefined,
  );

  React.useEffect(() => {
    AsyncStorage.getItem('@favorite').then(data => {
      if (data) {
        setFavorite(JSON.parse(data));
      }
    });
  }, []);

  const setFavoriteItem = (item: TFavorites) => {
    const isFavorite = favorite?.find(el => el.id === item.id);

    if (isFavorite) {
      const newFavorite = favorite?.filter(el => el.id !== item.id);
      setFavorite(newFavorite);
      AsyncStorage.setItem('@favorite', JSON.stringify(newFavorite));
    } else {
      if (favorite !== undefined) {
        setFavorite([...favorite, item]);
        AsyncStorage.setItem('@favorite', JSON.stringify([...favorite, item]));
      } else {
        setFavorite([item]);
        AsyncStorage.setItem('@favorite', JSON.stringify([item]));
      }
    }
  };

  const value = {
    favorite,
    setFavoriteItem,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
