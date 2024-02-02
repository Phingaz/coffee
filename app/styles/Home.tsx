import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZES} from '../RootStyles';

export const styles = StyleSheet.create({
  home: {gap: 35},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallbtnGradient: {
    height: 40,
    width: 40,
    padding: 10,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray700,
  },
  smallbtnGradient_btn: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    height: 35,
    width: 35,
    borderRadius: 11,
    backgroundColor: COLORS.gray600,
  },
  search: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 20,
  },
  header_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
    maxWidth: '70%',
  },
  content: {
    gap: 30,
  },
  nav_header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginRight: 20,
    marginBottom: 10,
  },
  nav_text: {
    fontSize: FONTSIZES.h3,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Poppins-Regular',
  },
  nav_ball: {
    height: 7,
    width: 7,
    borderRadius: 5,
    backgroundColor: COLORS.brown,
  },
  section_wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'stretch',
    gap: 20,
    marginVertical: 5,
  },
  card: {
    borderRadius: 25,
    gap: 5,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  card_gradient: {
    borderRadius: 25,
    padding: 10,
    paddingBottom: 20,
    maxWidth: 190,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card_img: {
    height: 160,
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
  card_section: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  card_section2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  card_title: {
    fontSize: FONTSIZES.h3,
    fontFamily: 'Poppins-Regular',
    color: '#eee',
  },
  card_sub: {
    fontSize: FONTSIZES.h5,
    fontWeight: '500',
    color: COLORS.gray500,
    fontFamily: 'Poppins-Regular',
  },
  card_money: {
    fontSize: FONTSIZES.h2,
    fontWeight: 'bold',
    color: COLORS.brown,
    fontFamily: 'Poppins-Regular',
  },
  card_amount: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
  },
  section_header: {
    fontSize: FONTSIZES.h2,
    fontWeight: 'bold',
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
    marginTop: 20,
  },
});