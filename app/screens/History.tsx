import React from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native';
import {homeCardsBeans, homeCardsCoffee} from '../data';
import GradientWrapper from '../components/utils/GradientWrapper';
import {COLORS} from '../RootStyles';
import HistoryContext from '../context/HistoryContext';

const History = () => {
  const {history, clearHistory} = React.useContext(HistoryContext);

  console.log(history);

  return (
    <View className="bg-home flex-1 pt-5">
      {history.length > 0 ? (
        <>
          <ScrollView className="px-3">
            <View className="flex-1">
              {history.map((item, i) => {
                const imgNumber =
                  item?.type === 'coffee'
                    ? homeCardsCoffee.find(el => item?.id === el.id)
                    : homeCardsBeans.find(el => item?.id === el.id);

                const img = imgNumber
                  ? item?.type === 'coffee'
                    ? (homeCardsCoffee[i].img as ImageSourcePropType)
                    : (homeCardsBeans[imgNumber.id - 100]
                        .img as ImageSourcePropType)
                  : undefined;

                const date = new Date(item?.date);
                const time = date.toLocaleTimeString();

                const dateStr = date.toLocaleDateString('en-US', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                });

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
                      <View className="flex-row justify-between items-start flex-1">
                        <View>
                          <Text className="text-white text-lg font-semibold font-sans">
                            {item?.title}
                          </Text>
                          <Text className="text-gray-300 text-sm font-sans -mt-1">
                            {item?.sub}
                          </Text>
                          <Text className="text-gray-400 text-xs font-sans mt-5">
                            {dateStr.toString()} {time.toString()}
                          </Text>
                        </View>
                        <Text className="text-orange text-2xl font-semibold">
                          ${' '}
                          <Text className="text-white">
                            {item?.total.toFixed(2)}
                          </Text>
                        </Text>
                      </View>
                    </View>
                    {item?.sizes.map((itemSize, ind) => {
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
          <View className="justify-center items-center">
            <TouchableOpacity onPress={clearHistory}>
              <Text className="text-gray-700">Clear History</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-lg font-semibold">
            Place an order to see your history
          </Text>
        </View>
      )}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    paddingRight: 20,
    flexDirection: 'column',
  },
});
