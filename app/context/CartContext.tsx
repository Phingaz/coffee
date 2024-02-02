import React from 'react';
import {TCartItem, size} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = React.createContext<{
  cart: TCartItem[];
  totalAmount: string;
  setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  addToCart: (item: TCartItem) => void;
  updateItemInCart: (
    itemId: number,
    itemSize: size,
    newQuantity: number,
  ) => void;
  removeItemFromCart: (item: TCartItem) => void;
}>({
  cart: [],
  setCart: () => {},
  totalAmount: '0.00',
  addToCart: () => {},
  updateItemInCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cart, setCart] = React.useState<TCartItem[]>([]);
  const [totalAmount, setTotalAmount] = React.useState<string>('0.00');

  React.useEffect(() => {
    const getCart = async () => {
      try {
        const cartItems = await AsyncStorage.getItem('@cart');
        if (cartItems) {
          setCart(JSON.parse(cartItems));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);

  const addToCart = async (item: TCartItem) => {
    try {
      const existingItem = cart.find(cartItem => cartItem.title === item.title);

      if (!existingItem) {
        setCart([...cart, item]);
        return 'Item added to cart';
      }

      const existingSizes = existingItem.sizes.map(
        existingSize => existingSize.size,
      );
      const newSizes = item.sizes.map(newSize => newSize.size);

      const allSizesExist = newSizes.every(newSize =>
        existingSizes.includes(newSize),
      );

      if (!allSizesExist) {
        const updatedItem = {
          ...existingItem,
          sizes: [
            ...existingItem.sizes,
            ...item.sizes.filter(
              newSize => !existingSizes.includes(newSize.size),
            ),
          ],
        };

        setCart(
          cart.map(cartItem =>
            cartItem.id === existingItem.id ? updatedItem : cartItem,
          ),
        );
        return 'Added new size to cart';
      }

      return 'Item already in cart';
    } catch (error) {
      return `Error adding item to cart: ${error}`;
    }
  };

  const removeItemFromCart = async (item: TCartItem) => {
    let success = false;
    try {
      const newCart = cart.filter(el => el.id !== item.id);
      setCart(newCart);
      await AsyncStorage.setItem('@cart', JSON.stringify(newCart));
      success = true;
    } catch (error) {
      console.log(error);
      success = false;
    }
    return success;
  };

  const updateItemInCart = async (
    itemId: number,
    itemSize: size,
    newQuantity: number,
  ) => {
    const updatedCart = cart
      .map(item => {
        if (item.id === itemId) {
          const updatedSizes = item.sizes
            .map(el => {
              if (el.size === itemSize.size) {
                if (newQuantity === 0) {
                  return null;
                } else {
                  return {...el, quantity: newQuantity};
                }
              }
              return el;
            })
            .filter(Boolean);
          if (updatedSizes.length === 0) {
            return null;
          } else {
            return {...item, sizes: updatedSizes};
          }
        }
        return item;
      })
      .filter(Boolean) as TCartItem[];

    setCart(updatedCart);
    AsyncStorage.setItem('@cart', JSON.stringify(updatedCart));
  };

  React.useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const itemTotal = item.sizes.reduce(
        (accTotal: any, itemSize: any) =>
          accTotal + itemSize.price * itemSize.quantity,
        0,
      );
      return acc + itemTotal;
    }, 0);
    const toFixedAmnt = total.toFixed(2);
    AsyncStorage.setItem('@cart', JSON.stringify(cart));
    setTotalAmount(toFixedAmnt);
  }, [cart]);

  const value = {
    cart,
    totalAmount,
    setCart,
    addToCart,
    updateItemInCart,
    removeItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
