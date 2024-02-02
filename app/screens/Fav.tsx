import React from 'react';
import {ImageSourcePropType, ScrollView, Text, View} from 'react-native';
import {homeCardsBeans, homeCardsCoffee} from '../data';
import FavoriteCard from '../components/fav/FavoriteCard';
import FavoriteContext from '../context/FavContext';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TDetailsNavigateProp} from '../types';

const Fav = () => {
  const {favorite, setFavoriteItem} = React.useContext(FavoriteContext);
  const navigator = useNavigation<TDetailsNavigateProp>();

  return (
    <View className="bg-home flex-1 ">
      {favorite && favorite.length > 0 ? (
        <ScrollView className="px-3 py-5">
          {favorite?.map((item, index) => {
            const isFavorite = favorite?.some((fav: any) => fav.id === item.id);
            const img =
              item.type === 'coffee'
                ? (homeCardsCoffee[item.id - 1]?.img as ImageSourcePropType)
                : (homeCardsBeans[item.id - 100]?.img as ImageSourcePropType);
            return (
              <TouchableOpacity
                onPress={() =>
                  navigator.navigate('Details', {
                    id: item.id,
                    type: item.type,
                  })
                }>
                <FavoriteCard
                  key={index}
                  favorite={item}
                  img={img}
                  isFavorite={isFavorite}
                  setFavoriteItem={setFavoriteItem}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-lg font-semibold">
            Favorite list is empty
          </Text>
        </View>
      )}
    </View>
  );
};

export default Fav;
