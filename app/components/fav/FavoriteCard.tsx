import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import GradientWrapper from '../utils/GradientWrapper';
import {styles} from '../../styles/Details';
import {Icons} from '../../icons';
import {COLORS} from '../../RootStyles';
import {TBeans} from '../../types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoriteCard = ({
  favorite,
  img,
  isFavorite,
  setFavoriteItem,
}: {
  favorite: TBeans;
  img: any;
  isFavorite: boolean;
  setFavoriteItem: any;
}) => {
  return (
    <View className="flex-1 pb-5">
      <View>
        <View className="absolute top-3 right-3 z-10">
          <TouchableOpacity onPress={() => setFavoriteItem(favorite)}>
            <Ionicons
              name="heart"
              size={20}
              color={isFavorite ? 'red' : COLORS.white}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                padding: 6,
              }}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={img}
          className="w-full h-[400] object-cover object-center rounded-tr-3xl rounded-tl-3xl relative"
        />
        <View className="flex-row justify-between items-start absolute bottom-0 left-0 bg-black/50 p-3 rounded-tr-3xl  rounded-tl-3xl">
          <View className="flex-col flex-1 left">
            <View className="mb-10">
              <Text className="text-white text-2xl font-semibold font-sans">
                {favorite.title}
              </Text>
              <Text className="text-gray-400 text-sm -mt-1 font-sans">
                {favorite.withHead}
              </Text>
            </View>

            <View className="flex-row gap-2 items-center justify-start">
              <Text className="text-gray-400">
                {Icons.star({color: COLORS.brown, height: 18, width: 18})}
              </Text>
              <View className="justify-center items-cente">
                <Text className="text-gray-500 text-xs -mb-1">
                  <Text className="text-lg font-bold text-white">
                    {favorite.rating.total}
                  </Text>{' '}
                  ( {favorite.rating.number})
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-1 right">
            <View style={styles.icons_top}>
              <View style={styles.icon}>
                {favorite.type === 'coffee'
                  ? Icons.coffees({
                      color: COLORS.brown,
                      height: 25,
                      width: 25,
                    })
                  : Icons.coffee({
                      color: COLORS.brown,
                      height: 25,
                      width: 25,
                    })}
                <Text style={styles.icon_text}>
                  {favorite.type === 'coffee' ? 'Coffee' : 'Bean'}
                </Text>
              </View>
              <View style={styles.icon}>
                {favorite.type === 'coffee'
                  ? Icons.tear({
                      color: COLORS.brown,
                      height: 25,
                      width: 25,
                    })
                  : Icons.location({
                      color: COLORS.brown,
                      height: 25,
                      width: 25,
                    })}
                <Text style={styles.icon_text}>
                  {favorite.type === 'coffee'
                    ? favorite.withIcon
                    : (favorite as TBeans).location}
                </Text>
              </View>
            </View>
            <View style={styles.level} className="mt-3">
              <Text style={styles.level_text}>{favorite.level}</Text>
            </View>
          </View>
        </View>
      </View>
      <GradientWrapper
        colors={['#262B33', '#262B3300']}
        // eslint-disable-next-line react-native/no-inline-styles
        styles={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingBottom: 20,
        }}>
        <View className="flex-row justify-between items-center px-5 mt-5">
          <Text className="text-gray-300 text-lg font-semibold font-sans">
            Description
          </Text>
        </View>
        <View className="px-5 my-1">
          <Text className="text-gray-400 text-sm font-sans">
            {favorite.overview}
          </Text>
        </View>
      </GradientWrapper>
    </View>
  );
};

export default FavoriteCard;
