import React, {useState} from 'react';
import {View, Text} from 'react-native';
import OrangeButton from '../utils/Buttons';
import {TCartItem, size} from '../../types';

export const SizeComponent = ({
  i,
  item,
  styles,
  itemSize,
  itemSizes,
  updateItemInCart,
  removeItemFromCart,
}: {
  i: number;
  styles: any;
  item: TCartItem;
  itemSize: size;
  itemSizes: size[];
  removeItemFromCart: (itemId: TCartItem) => void;
  updateItemInCart: (
    itemId: number,
    itemSize: size,
    newQuantity: number,
  ) => void;
}) => {
  const [quantity, setQuantity] = useState(itemSize.quantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    updateItemInCart(item.id, itemSize, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      const updatedSizes = itemSizes.filter(el => el.size !== itemSize.size);
      if (updatedSizes.length === 0) {
        removeItemFromCart(item);
      } else {
        updateItemInCart(item.id, itemSize, 0);
      }
    } else {
      setQuantity(quantity - 1);
      updateItemInCart(item.id, itemSize, quantity - 1);
    }
  };

  return (
    <View key={i} style={styles.size}>
      <Text style={styles.size_label}>{itemSize.size}</Text>
      <View style={styles.size_wrapper}>
        <Text style={styles.size_dollar}>
          $ <Text style={styles.size_price}>{itemSize.price}</Text>
        </Text>
        <OrangeButton onPress={decreaseQuantity} styles={styles.size_btn}>
          <Text style={styles.size_btn_text}>-</Text>
        </OrangeButton>
        <View style={styles.quantity}>
          <Text style={styles.quantity_text}>{quantity}</Text>
        </View>
        <OrangeButton onPress={increaseQuantity} styles={styles.size_btn}>
          <Text style={styles.size_btn_text}>+</Text>
        </OrangeButton>
      </View>
    </View>
  );
};
