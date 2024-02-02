import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../RootStyles';
import {Icons} from '../../icons';

const Menu = ({styles, navigator}: {styles: any; navigator: any}) => {
  return (
    <LinearGradient
      colors={['#21262E', '#21262e00']}
      style={styles.smallbtnGradient}>
      <TouchableOpacity
        onPress={() => console.log('pressed')}
        style={styles.smallbtnGradient_btn}>
        {Icons.dash({color: COLORS.gray600, height: '100%', width: '100%'})}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Menu;
