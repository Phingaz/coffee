import React from 'react';
import {FavoriteProvider} from './FavContext';
import {CartProvider} from './CartContext';
import {HistoryProvider} from './HistoryContext';

const MainCtx = React.createContext<{}>({});

export const MainProvider = ({children}: {children: React.ReactNode}) => {
  const value = {};
  return (
    <MainCtx.Provider value={value}>
      <HistoryProvider>
        <FavoriteProvider>
          <CartProvider>{children}</CartProvider>
        </FavoriteProvider>
      </HistoryProvider>
    </MainCtx.Provider>
  );
};

export default MainCtx;
