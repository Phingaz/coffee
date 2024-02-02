import React, {memo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {TMenuItem} from '../../types';
import {COLORS} from '../../RootStyles';

const Nav = ({
  TextNavs,
  styles,
  activeNav,
  setActiveNav,
}: {
  TextNavs: TMenuItem[];
  styles: any;
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      {TextNavs.map((item, index) => {
        return (
          <View key={index}>
            <TouchableOpacity
              style={styles.nav_header}
              onPress={() => setActiveNav(item.name)}>
              <Text
                style={[
                  styles.nav_text,
                  {
                    color:
                      activeNav === item.name ? COLORS.brown : COLORS.gray600,
                  },
                ]}>
                {item.name}
              </Text>
              {activeNav === item.name && <View style={[styles.nav_ball]} />}
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

export default memo(Nav);
