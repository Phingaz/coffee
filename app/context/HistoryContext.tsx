import React from 'react';
import {THistory} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryContext = React.createContext<{
  history: THistory[];
  addHistory: (item: THistory) => void;
  clearHistory: () => void;
}>({
  history: [],
  addHistory: () => {},
  clearHistory: () => {},
});

export const HistoryProvider = ({children}: {children: React.ReactNode}) => {
  const [history, setHistory] = React.useState<THistory[]>([]);

  React.useEffect(() => {
    AsyncStorage.getItem('history').then(res => {
      if (res) {
        setHistory(JSON.parse(res));
      }
    });
  }, []);

  const addHistory = (item: THistory) => {
    setHistory(prev => [...prev, item]);
    AsyncStorage.setItem('history', JSON.stringify([...history, item]));
  };

  const clearHistory = () => {
    setHistory([]);
    AsyncStorage.removeItem('history');
  };

  const value = {
    history,
    addHistory,
    clearHistory,
  };
  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

export default HistoryContext;
