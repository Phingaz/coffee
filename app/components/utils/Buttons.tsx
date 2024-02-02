import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../RootStyles';

const OrangeButton = ({
  children,
  styles,
  onPress,
}: {
  children: React.ReactNode;
  styles?: any;
  onPress: () => void;
}) => {
  return (
    <View style={[def.card_btn, styles]}>
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </View>
  );
};

export const BlackButton = ({
  children,
  styles,
  onPress,
}: {
  children: React.ReactNode;
  styles?: any;
  onPress: () => void;
}) => {
  return (
    <View style={[def.black_btn, styles]}>
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </View>
  );
};

export default OrangeButton;

const def = StyleSheet.create({
  card_btn: {
    height: 35,
    width: 35,
    borderRadius: 11,
    backgroundColor: COLORS.brown,
    justifyContent: 'center',
    alignItems: 'center',
  },
  black_btn: {
    backgroundColor: COLORS.home,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
