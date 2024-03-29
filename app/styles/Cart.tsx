import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZES} from '../RootStyles';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 10,
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 10,
  },
  left: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
  },
  title: {
    fontSize: FONTSIZES.h2,
    color: COLORS.gray400,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 25,
  },
  title_sub: {
    fontSize: FONTSIZES.h4,
    color: COLORS.gray500,
    fontFamily: 'Poppins-Regular',
  },
  level: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  level_text: {
    fontSize: FONTSIZES.h4,
    color: COLORS.gray500,
    fontFamily: 'Poppins-Regular',
    lineHeight: 25,
    backgroundColor: COLORS.home,
    width: '100%',
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  size: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    gap: 18,
  },
  size_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 3,
    height: '100%',
    gap: 15,
  },
  size_label: {
    fontSize: FONTSIZES.h3,
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: COLORS.home,
    textAlign: 'center',
    borderRadius: 8,
    flex: 1,
    paddingVertical: 10,
  },
  size_dollar: {
    fontSize: FONTSIZES.h2,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.brown,
  },
  size_price: {
    fontSize: FONTSIZES.h2,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 25,
    color: COLORS.white,
  },
  size_btn: {
    height: 35,
    width: 35,
    borderRadius: 8,
    backgroundColor: COLORS.brown,
    justifyContent: 'center',
    alignItems: 'center',
  },
  size_btn_text: {
    fontSize: FONTSIZES.h1,
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    lineHeight: 37,
  },
  btn_text: {
    fontSize: FONTSIZES.h4,
    color: COLORS.gray500,
    fontFamily: 'Poppins-Regular',
    lineHeight: 25,
  },
  quantity: {
    borderWidth: 2,
    borderColor: COLORS.brown,
    borderRadius: 8,
    height: 35,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity_text: {
    fontSize: FONTSIZES.h2,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 25,
    color: COLORS.white,
  },
});
