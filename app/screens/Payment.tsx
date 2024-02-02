import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TPaymentRouteProp} from '../types';
import {homeCardsBeans, homeCardsCoffee} from '../data';
import GradientWrapper from '../components/utils/GradientWrapper';
import {COLORS} from '../RootStyles';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import PaymentSheet from '../components/payment/PaymentSheet';

const Payment = () => {
  // const {}
  const router = useRoute<TPaymentRouteProp>();
  const {cart, total} = router.params;
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoint = React.useMemo(() => ['50%', '100%'], []);

  const [showPayment, setShowPayment] = React.useState(false);

  const openPayment = () => {
    bottomSheetRef.current?.expand();
    setShowPayment(true);
  };

  return (
    <View className="flex-1 bg-home">
      <ScrollView className="px-3">
        <View className="flex-1">
          {cart.map((item, i) => {
            const imgNumber =
              item.type === 'coffee'
                ? homeCardsCoffee.find(el => item.id === el.id)
                : homeCardsBeans.find(el => item.id === el.id);

            const img = imgNumber
              ? item.type === 'coffee'
                ? (homeCardsCoffee[i].img as ImageSourcePropType)
                : (homeCardsBeans[imgNumber.id - 100]
                    .img as ImageSourcePropType)
              : undefined;

            return (
              <GradientWrapper
                key={i}
                colors={['#262B33', COLORS.home]}
                styles={styles.container}>
                <View className="flex-row flex-1 mb-2">
                  <Image
                    source={img}
                    className="h-[80px] w-[80px] rounded-2xl mr-4"
                  />
                  <View className="flex-row justify-between items-center flex-1">
                    <View>
                      <Text className="text-white text-lg font-semibold font-sans">
                        {item.title}
                      </Text>
                      <Text className="text-gray-300 text-sm font-sans -mt-1">
                        {item.sub}
                      </Text>
                    </View>
                    <Text className="text-orange text-2xl font-semibold">
                      $ <Text className="text-white">{total.toFixed(2)}</Text>
                    </Text>
                  </View>
                </View>
                {item.sizes.map((itemSize, ind) => {
                  return (
                    <View className="mt-2" key={ind}>
                      <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center gap-1">
                          <View
                            className={`bg-home h-[40px] rounded-tl-lg rounded-bl-lg justify-center items-center px-2 ${
                              item.type === 'coffee'
                                ? 'min-w-[40px]'
                                : 'min-w-[100px]'
                            }`}>
                            <Text className="text-xl text-white font-bold ">
                              {itemSize.size}
                            </Text>
                          </View>
                          <View className="bg-home h-[40px] rounded-br-lg rounded-tr-lg justify-center items-center px-2">
                            <Text className="text-orange text-xl font-semibold ">
                              ${' '}
                              <Text className="text-white">
                                {itemSize.price.toFixed(2)}
                              </Text>
                            </Text>
                          </View>
                        </View>
                        <Text className="text-orange text-xl font-semibold px-6 py-2">
                          X{' '}
                          <Text className="text-white">
                            {itemSize.quantity}
                          </Text>
                        </Text>
                        <Text className="text-orange text-base font-semibold">
                          {(itemSize.quantity * itemSize.price).toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </GradientWrapper>
            );
          })}
        </View>
      </ScrollView>
      <View className="px-3 flex-row mb-5">
        <View className="mr-10">
          <Text className="text-gray-300">Total + delivery</Text>
          <Text className="text-orange font-bold text-2xl">
            $ <Text className="text-white">{total + 10}</Text>
          </Text>
        </View>

        <View className="bg-orange rounded-lg flex-1 justify-center items-center">
          <TouchableOpacity className="w-full " onPress={() => openPayment()}>
            <Text className="w-full text-center py-4 text-white font-semibold ">
              Select Payment Method
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        className={`${
          showPayment ? 'flex' : 'hidden'
        } flex-1 absolute bg-home/70 top-0 right-0 h-full w-full`}>
        <BottomSheet
          index={1}
          ref={bottomSheetRef}
          snapPoints={snapPoint}
          enablePanDownToClose={true}
          enableOverDrag={true}
          handleIndicatorStyle={{
            backgroundColor: 'white',
          }}
          backgroundStyle={{
            backgroundColor: '#1a202b',
          }}
          onClose={() => setShowPayment(false)}>
          <BottomSheetScrollView contentContainerStyle={{padding: 20}}>
            <PaymentSheet cart={cart} />
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    paddingRight: 20,
    flexDirection: 'column',
  },
});
