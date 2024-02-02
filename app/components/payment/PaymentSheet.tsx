import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import React from 'react';
import GradientWrapper from '../utils/GradientWrapper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../RootStyles';
import {payment, paymentOptions} from '../../data';
import {
  NativeViewGestureHandler,
  ScrollView,
} from 'react-native-gesture-handler';
import HistoryContext from '../../context/HistoryContext';
import {TCartItem, THistory} from '../../types';
import CartContext from '../../context/CartContext';

const PaymentSheet = ({cart}: {cart: TCartItem}) => {
  const {addHistory} = React.useContext(HistoryContext);
  const {setCart} = React.useContext(CartContext);

  const [activeOption, setActiveOption] = React.useState('card');
  const [activeCard, setActiveCard] = React.useState(3);

  const handleActiveOption = (option: string) => {
    setActiveOption(option);
  };

  const addToHistory = (items: any) => {
    items.forEach((el: TCartItem) => {
      const total = el.sizes.reduce((acc, curr) => acc + curr.price, 0) + 10;
      const historyItem: THistory = {
        id: el.id,
        title: el.title,
        sub: el.sub,
        img: el.img,
        type: el.type,
        sizes: el.sizes,
        level: el.level,
        total,
        date: new Date(),
      };

      addHistory(historyItem);
    });

    Alert.alert('Order Placed', 'our order has been placed successfully', [
      {
        text: 'OK',
        onPress: () => {
          setCart([]);
        },
      },
    ]);
  };

  return (
    <ScrollView className="flex-1 mb-[20px]">
      <Text className="text-sm text-white font-bold mb-5 font-sans">
        Credit card
      </Text>
      <View className={'h-[200px] mb-10 '}>
        <NativeViewGestureHandler disallowInterruption={true}>
          <FlatList
            data={payment}
            horizontal
            snapToEnd={false}
            snapToAlignment="end"
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <Card
                data={item}
                index={index}
                activeCard={activeCard}
                activeOption={activeOption}
                setActiveCard={setActiveCard}
                handleActiveOption={handleActiveOption}
              />
            )}
          />
        </NativeViewGestureHandler>
      </View>
      <View>
        {paymentOptions.map((item, index) => {
          return (
            <View
              key={index}
              className="flex flex-row justify-between items-center mb-5">
              <GradientWrapper
                colors={['#262B33', '#0C0F14']}
                // eslint-disable-next-line react-native/no-inline-styles
                styles={{
                  flex: 1,
                  borderRadius: 9999,
                }}>
                <TouchableOpacity
                  onPress={() => handleActiveOption(item.name)}
                  className={`flex flex-1 flex-row items-center border px-6 py-3 rounded-full transition-all duration-200 ease-in-out ${
                    activeOption === item.name
                      ? 'border-orange'
                      : 'border-gray-800'
                  }`}>
                  {item.icon}
                  <Text className="text-white font-sans font-600 text-sm ml-3">
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </GradientWrapper>
            </View>
          );
        })}
      </View>
      <View className="flex justify-end mt-3">
        <TouchableOpacity
          className="bg-orange rounded-lg justify-center items-center"
          onPress={() => addToHistory(cart)}>
          <Text className="py-4 text-white font-semibold">
            Pay{' '}
            {activeOption === 'card'
              ? `${'Now With Card'}`
              : activeOption === 'Cash'
              ? 'On Delivery'
              : `Now With ${activeOption}`}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentSheet;

const Card = ({
  data,
  index,
  activeCard,
  activeOption,
  setActiveCard,
  handleActiveOption,
}: {
  index: number;
  activeCard: number;
  activeOption: string;
  setActiveCard: (index: number) => void;
  handleActiveOption: (option: string) => void;
  data: {cardNumber: string; expiry: string; name: string; icon: JSX.Element};
}) => {
  return (
    <View className="flex-1 mr-3 min-w-[317px]">
      <GradientWrapper
        colors={['#262B33', '#0C0F14']}
        // eslint-disable-next-line react-native/no-inline-styles
        styles={{
          flex: 1,
          borderRadius: 15,
          padding: 20,
          borderWidth: 1,
          borderColor:
            activeOption === 'card' && activeCard === index
              ? `${COLORS.brown}`
              : 'transparent',
        }}>
        <TouchableOpacity
          onPress={() => {
            handleActiveOption('card');
            setActiveCard(index);
          }}
          className="flex flex-1">
          <View className="flex-1 justify-between flex-col">
            <View className="flex justify-between items-center flex-row">
              <Sim />
              {data.icon}
            </View>
            <Text className="text-white text-xl font-semibold font-sans tracking-[3px]">
              {data.cardNumber}
            </Text>
            <View className="flex justify-between items-center flex-row">
              <View>
                <Text className="text-gray-500 text-xs font-sans -mt-1">
                  Card holder
                </Text>
                <Text className="text-gray-200 font-sans font-bold text-lg -mt-1 tracking-wide">
                  {data.name}
                </Text>
              </View>
              <View>
                <Text className="text-gray-500 text-xs font-sans -mt-1">
                  Expiry Date
                </Text>
                <Text className="text-gray-200 font-sans font-bold text-lg -mt-1 tracking-wide">
                  {data.expiry}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </GradientWrapper>
    </View>
  );
};

const Sim = () => {
  return <FontAwesome5 name="sim-card" size={24} color={COLORS.brown} />;
};
