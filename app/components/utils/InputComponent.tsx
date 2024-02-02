import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS, FONTSIZES} from '../../RootStyles';
import {Icons} from '../../icons';

const InputComponent = ({
  label,
  value,
  onTextInput,
  style,
}: {
  label: string;
  value: string;
  onTextInput: (text: string) => void;
  style?: any;
}) => {
  return (
    <View style={[styles.input_container, style]}>
      {Icons.search({color: COLORS.gray600, width: 20, height: 20})}
      <TextInput
        style={styles.input}
        value={value}
        onChange={e => onTextInput(e.nativeEvent.text)}
        placeholder={label}
        placeholderTextColor={COLORS.gray600}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: COLORS.gray700,
    width: '100%',
    height: 50,
  },
  input: {
    padding: 10,
    color: COLORS.white,
    flex: 1,
    fontSize: FONTSIZES.h4,
    fontWeight: '500',
  },
});

export default InputComponent;
