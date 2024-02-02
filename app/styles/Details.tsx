import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTSIZES} from '../RootStyles';

const width = Dimensions.get('window').width;
const btn_width = width / 3 - 20;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  main_wrapper: {
    flex: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  intro: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '33%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
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
  left: {
    flex: 1,
    justifyContent: 'space-between',
  },
  right: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 20,
  },
  rating_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
  },
  rating_total: {
    fontSize: FONTSIZES.h3,
    color: COLORS.gray400,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 25,
  },
  rating_number: {
    fontSize: FONTSIZES.h5,
    color: COLORS.gray500,
    fontFamily: 'Poppins-Regular',
    lineHeight: 25,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icons_top: {
    paddingHorizontal: 10,
    gap: 20,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    backgroundColor: COLORS.home,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 3,
  },
  level: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 3,
  },
  level_text: {
    fontSize: FONTSIZES.h5,
    color: COLORS.gray500,
    fontFamily: 'Poppins-Regular',
    lineHeight: 25,
    backgroundColor: COLORS.home,
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
    paddingVertical: 10,
  },
  icon_text: {
    fontSize: FONTSIZES.h5,
    color: COLORS.gray500,
    fontFamily: 'Poppins-Regular',
    lineHeight: 25,
  },
  wrapper: {
    flex: 1,
    paddingTop: 15,
  },
  head: {
    fontSize: FONTSIZES.h3,
    fontFamily: 'Poppins-Medium',
    color: COLORS.gray400,
  },
  sub: {
    fontSize: FONTSIZES.h5,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: COLORS.gray500,
  },
  btns: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
  },
  btn: {
    borderRadius: 10,
    borderWidth: 2,
    width: btn_width,
  },
  btn_text: {
    fontSize: FONTSIZES.h3,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: COLORS.gray500,
    paddingVertical: 10,
    textAlign: 'center',
  },
  cart_wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    gap: 40,
    marginBottom: 30,
  },
  cart: {
    flexDirection: 'column',
  },
  cart_price: {
    fontSize: FONTSIZES.h4,
    fontFamily: 'Poppins-Medium',
    color: COLORS.gray500,
  },
  cart_dollar: {
    fontSize: FONTSIZES.h2,
    fontFamily: 'Poppins-Medium',
    color: COLORS.brown,
  },
  cart_amnt: {
    fontSize: FONTSIZES.h2,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '400',
    color: COLORS.gray400,
  },
  add: {
    flex: 1,
    backgroundColor: COLORS.brown,
    borderRadius: 10,
  },
  add_text: {
    fontSize: FONTSIZES.h3,
    fontFamily: 'Poppins-Medium',
    color: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
