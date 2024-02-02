import {StyleSheet} from 'react-native';

export const COLORS = {
  red: '#DC3535',
  brown: '#D17842',
  black: '#0C0F14',
  gray700: '#252A32',
  gray600: '#52555A',
  gray500: '#AEAEAE',
  gray400: '#D1D1D1',
  white: '#FFFFFF',
  home: '#0C0F14',
  input: '#141921',
};

export const FONTSIZES = {
  h1: 28,
  h2: 20,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
};

export const ROOT_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.home,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  detailContainer: {
    flex: 3,
    backgroundColor: COLORS.home,
    paddingHorizontal: 10,
  },
});
