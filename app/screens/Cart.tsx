import React from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, ROOT_STYLES} from '../RootStyles';
import GradientWrapper from '../components/utils/GradientWrapper';
import {Image} from 'react-native';
import CartContext from '../context/CartContext';
import {homeCardsBeans, homeCardsCoffee} from '../data';
import {capitalizeFirstLetter} from '../helpers';
import {styles} from '../styles/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SizeComponent} from '../components/cart/SizeComponent';
import {useNavigation} from '@react-navigation/native';
import {TDetailsNavigateProp, TPaymentNavigationProp} from '../types';

const Cart = () => {
  const {totalAmount, cart, updateItemInCart, removeItemFromCart} =
    React.useContext(CartContext);
  const navigator = useNavigation<TPaymentNavigationProp>();
  const details = useNavigation<TDetailsNavigateProp>();

  return (
    <View style={ROOT_STYLES.container} className="px-2">
      {cart.length > 0 ? (
        <View className="flex flex-1">
          <ScrollView showsVerticalScrollIndicator={false}>
            {cart.map((item, index) => {
              const type = item.type;
              const imgNumber =
                type === 'coffee'
                  ? homeCardsCoffee.find(el => item.id === el.id)
                  : homeCardsBeans.find(el => item.id === el.id);

              const detialImg = imgNumber
                ? type === 'coffee'
                  ? homeCardsCoffee[index].img
                  : homeCardsBeans[imgNumber.id - 100].img
                : '';

              return (
                <GradientWrapper
                  key={index}
                  colors={['#262B33', COLORS.home]}
                  styles={styles.container}>
                  <View style={styles.card}>
                    <View style={styles.wrapper}>
                      <Image
                        source={detialImg as ImageSourcePropType}
                        style={styles.img}
                      />
                      <TouchableOpacity
                        onPress={() => removeItemFromCart(item)}
                        className="absolute top-0 right-0">
                        <Ionicons
                          name="trash-outline"
                          size={18}
                          color={COLORS.gray600}
                        />
                      </TouchableOpacity>

                      <View style={styles.left}>
                        <TouchableOpacity
                          onPress={() =>
                            details.navigate('Details', {
                              id: item.id,
                              type: item.type,
                            })
                          }>
                          <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.title_sub}>{item.sub}</Text>
                          </View>
                          <View style={styles.level}>
                            <Text style={styles.level_text}>
                              {capitalizeFirstLetter(item.type)}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {item.sizes.map((itemSize, i) => {
                      return (
                        <View key={i}>
                          <SizeComponent
                            i={i}
                            item={item}
                            styles={styles}
                            itemSize={itemSize}
                            itemSizes={item.sizes}
                            updateItemInCart={updateItemInCart}
                            removeItemFromCart={removeItemFromCart}
                          />
                        </View>
                      );
                    })}
                  </View>
                </GradientWrapper>
              );
            })}
          </ScrollView>
          {cart.length > 0 && (
            <View className="flex justify-between items-center flex-row pt-4">
              <View className="flex mr-8">
                <Text className="text-gray-500 text-base">Sub total</Text>
                <Text className="text-xl text-orange">
                  $ <Text className="text-white">{totalAmount}</Text>
                </Text>
              </View>

              <View className="bg-orange rounded-lg flex-1 justify-center items-center">
                <TouchableOpacity
                  className="w-full "
                  onPress={() =>
                    navigator.navigate('Payment', {
                      total: parseFloat(totalAmount),
                      cart: cart,
                    })
                  }>
                  <Text className="w-full text-center py-4 text-white font-semibold text-xl">
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl text-white font-semibold">
            Cart is empty
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
