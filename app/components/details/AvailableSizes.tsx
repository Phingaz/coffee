/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TBeans, TCoffee, size} from '../../types';
import {COLORS} from '../../RootStyles';
import {styles} from '../../styles/Details';

const DetailsSizes = ({
  details,
  selectedSize,
  setSelectedSize,
}: {
  details: TBeans | TCoffee;
  selectedSize: size | undefined;
  setSelectedSize: (item: size) => void;
}) => {
  return (
    <>
      {details.sizes.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.btn,
              {
                backgroundColor:
                  selectedSize === item ? COLORS.home : COLORS.gray700,
                borderColor:
                  selectedSize === item ? COLORS.brown : 'transparent',
              },
            ]}>
            <TouchableOpacity onPress={() => setSelectedSize(item)}>
              <Text style={styles.btn_text}>{item.size}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

export default DetailsSizes;
