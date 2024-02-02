import React from 'react';
import {View, Text, TouchableOpacity, ImageSourcePropType} from 'react-native';
import {COLORS} from '../../RootStyles';
import {Icons} from '../../icons';
import {TCoffee, TBeans, TRootStackParamList} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import {homeCardsBeans, homeCardsCoffee} from '../../data';
import GradientWrapper from '../utils/GradientWrapper';
import OrangeButton from '../utils/Buttons';
import Animated from 'react-native-reanimated';

const AminmatedImage = Animated.createAnimatedComponent(Image);

const HomeCard = ({
  styles,
  index,
  item,
  navigator,
  type,
}: {
  styles: any;
  index: number;
  item: TCoffee | TBeans;
  navigator: NativeStackNavigationProp<TRootStackParamList>;
  type: 'coffee' | 'bean';
}) => {
  const image =
    type === 'coffee'
      ? (homeCardsCoffee[index - 1]?.img as ImageSourcePropType)
      : (homeCardsBeans[index]?.img as ImageSourcePropType);

  return (
    <View key={index} style={styles.card}>
      <GradientWrapper
        colors={['#262B33', COLORS.home]}
        styles={styles.card_gradient}>
        <TouchableOpacity
          onPress={() =>
            navigator.push('Details', {
              id: item.id,
              type: type,
            })
          }>
          <AminmatedImage
            source={image}
            style={styles.card_img}
            sharedTransitionTag={`${item.id}`}
          />
          <View style={styles.card_section}>
            <Text style={styles.card_title}>{item.title}</Text>
            <Text style={styles.card_sub}>{item.sub}</Text>
          </View>
          <View style={styles.card_section2}>
            <Text style={styles.card_money}>
              $ <Text style={styles.card_amount}>{item.amount}</Text>
            </Text>
            <OrangeButton
              onPress={() =>
                navigator.push('Details', {
                  id: item.id,
                  type: type,
                })
              }>
              {Icons.add}
            </OrangeButton>
          </View>
        </TouchableOpacity>
      </GradientWrapper>
    </View>
  );
};

export default HomeCard;
