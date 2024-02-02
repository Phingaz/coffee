import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {ImageSourcePropType} from 'react-native';

//item types
export type size = {
  size: string;
  price: number;
  quantity: number;
};

export interface TCoffee {
  id: number;
  type: 'coffee' | 'bean';
  img: string | number;
  title: string;
  sub: string;
  amount: number;
  overview: string;
  rating: {
    total: number;
    number: number;
  };
  withHead: string;
  withIcon: string;
  level: string;
  sizes: size[];
  complement: string;
  label: string[];
}

export interface TBeans extends TCoffee {
  location?: string;
  level: string;
}

export type TMenuItem = {
  name: string;
};

export type TCartItem = {
  id: number;
  title: string;
  sub: string;
  img: ImageSourcePropType;
  type: 'coffee' | 'bean';
  sizes: size[];
  level: string;
};

export interface TFavorites extends TCoffee, TBeans {}

export interface THistory extends TCartItem {
  date: Date;
  total: number;
}

//navigation
export type TRootStackParamList = {
  Stack: undefined;
  Details: {
    id: number;
    type: 'coffee' | 'bean';
  };
  Payment: {
    total: number;
    cart: TCartItem[];
  };
};

export type TDetailsScreenRouteProp = RouteProp<TRootStackParamList, 'Details'>;

export type TDetailsNavigateProp = NativeStackNavigationProp<
  TRootStackParamList,
  'Details'
>;

export type TPaymentNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  'Payment'
>;

export type TPaymentRouteProp = RouteProp<TRootStackParamList, 'Payment'>;

// const saveToHistory = (el: TCartItem[]) => {
//   el.forEach(item => {
//     const date = new Date();

//     const totalItemAmnt = item.sizes.reduce((acc, curr) => {
//       return acc + curr.price * curr.quantity;
//     }, 0);

//     const historyItem: THistory = {
//       id: item.id,
//       date: date,
//       img: item.img,
//       title: item.title,
//       sub: item.sub,
//       type: item.type,
//       sizes: item.sizes,
//       total: totalItemAmnt,
//       level: item.level,
//     };
//     addHistory(historyItem);
//   });
// };
