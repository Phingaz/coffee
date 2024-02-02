import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageSourcePropType,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS, ROOT_STYLES} from '../RootStyles';
import {TouchableOpacity} from 'react-native';
import {styles} from '../styles/Details';
import DetailsSizes from '../components/details/AvailableSizes';
import {Icons} from '../icons';
import CartContext from '../context/CartContext';
import {
  TBeans,
  TCartItem,
  TCoffee,
  TDetailsScreenRouteProp,
  size,
} from '../types';
import {homeCardsBeans, homeCardsCoffee} from '../data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoriteContext from '../context/FavContext';
import Animated from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const Details = () => {
  const {addToCart} = React.useContext(CartContext);
  const {setFavoriteItem, favorite} = React.useContext(FavoriteContext);
  const router = useRoute<TDetailsScreenRouteProp>();
  const navigator = useNavigation();
  const {id, type} = router.params;

  const [details, setDetails] = React.useState<TBeans | TCoffee | undefined>(
    undefined,
  );

  const [selectedSize, setSelectedSize] = React.useState<size | undefined>(
    undefined,
  );
  const [message, setMessage] = React.useState<string>('Add to cart');
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: false,
      statusBarTranslucent: true,
      statusBarColor: 'transparent',
    });
  }, [navigator]);

  React.useEffect(() => {
    const detail =
      type === 'coffee'
        ? homeCardsCoffee.filter(item => item.id === id)
        : homeCardsBeans.filter(item => item.id === id);
    setDetails(detail[0]);
  }, [id, type]);

  React.useEffect(() => {
    if (details) {
      setSelectedSize(details.sizes[0]);
    }
  }, [details]);

  const detialImg =
    type === 'coffee'
      ? (homeCardsCoffee[id - 1].img as ImageSourcePropType)
      : (homeCardsBeans[id - 100]?.img as ImageSourcePropType);

  const addItemToCart = async () => {
    try {
      setLoading(true);
      if (details && selectedSize) {
        const item: TCartItem = {
          id: details.id,
          type,
          sizes: [selectedSize],
          title: details.title,
          img: detialImg,
          sub: details.withHead,
          level: details.level,
        };
        const res = await addToCart(item);
        setMessage(res as unknown as string);
        const t = setTimeout(() => {
          setMessage('Add to cart');
        }, 1500);

        return () => clearTimeout(t);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const isFavorite = favorite?.find(el => el.id === details?.id);

  return (
    <>
      {details && (
        <View style={styles.mainContainer}>
          <StatusBar translucent />
          <View style={styles.main_wrapper} className="relative">
            <AnimatedImage
              source={detialImg}
              resizeMode="cover"
              style={styles.img}
              sharedTransitionTag={`${details.id}`}
            />
            <View className="absolute top-10 right-5 bg-black rounded-lg">
              <TouchableOpacity onPress={() => setFavoriteItem(details)}>
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
            <View style={styles.intro}>
              <View style={styles.left}>
                <View>
                  <Text style={styles.title}>{details.title}</Text>
                  <Text style={styles.title_sub}>{details.withHead}</Text>
                </View>
                <View>
                  <View style={styles.rating_wrapper}>
                    {Icons.star({color: COLORS.brown, height: 15, width: 15})}
                    <Text style={styles.rating_total}>
                      {details.rating.total}
                    </Text>
                    <Text style={styles.rating_number}>
                      ({details.rating.number})
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.icons_top}>
                  <View style={styles.icon}>
                    {type === 'coffee'
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
                      {type === 'coffee' ? 'Coffee' : 'Bean'}
                    </Text>
                  </View>
                  <View style={styles.icon}>
                    {type === 'coffee'
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
                      {type === 'coffee'
                        ? details.withIcon
                        : (details as TBeans).location}
                    </Text>
                  </View>
                </View>

                <View style={styles.level}>
                  <Text style={styles.level_text}>{details.level}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={ROOT_STYLES.detailContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.wrapper}>
                <Text style={styles.head}>Description</Text>
                <Text style={styles.sub}>{details.overview}</Text>
              </View>

              <View style={styles.wrapper}>
                <Text style={styles.head}>Size</Text>
                <View style={styles.btns}>
                  <DetailsSizes
                    details={details}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                </View>
              </View>

              <View style={styles.cart_wrapper}>
                <View style={styles.cart}>
                  <Text style={styles.cart_price}>Price</Text>
                  <Text style={styles.cart_dollar}>
                    ${' '}
                    <Text style={styles.cart_amnt}>{selectedSize?.price}</Text>
                  </Text>
                </View>

                <View style={styles.add}>
                  <TouchableOpacity onPress={addItemToCart}>
                    {loading ? (
                      <ActivityIndicator color={COLORS.white} />
                    ) : (
                      <Text style={styles.add_text}>{message}</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
};

export default Details;
