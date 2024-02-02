import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {ROOT_STYLES} from '../RootStyles';
import InputComponent from '../components/utils/InputComponent';
import {TextNavs, homeCardsBeans, homeCardsCoffee} from '../data';
import Nav from '../components/home/Nav';
import HomeCard from '../components/home/HomeCard';
import {styles} from '../styles/Home';
// import Menu from '../components/home/Menu';
import {useNavigation} from '@react-navigation/native';
import {TRootStackParamList} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Home = () => {
  const navigator =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const [search, setSearch] = React.useState('');
  const handleSearch = (text: string) => {
    setSearch(text);
  };
  const [activeNav, setActiveNav] = React.useState('All');
  const [filtered, setFiltered] = React.useState(homeCardsCoffee);

  React.useEffect(() => {
    if (activeNav === 'All') {
      setFiltered(homeCardsCoffee);
    } else {
      setFiltered(
        homeCardsCoffee.filter(item => {
          return item.label.includes(activeNav);
        }),
      );
    }
  }, [activeNav]);

  React.useEffect(() => {
    if (search === '') {
      setFiltered(homeCardsCoffee);
    } else {
      const filteredItems = homeCardsCoffee.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      setFiltered(filteredItems);
    }
  }, [search]);

  return (
    <View style={[ROOT_STYLES.container, styles.home]}>
      {/* <View style={styles.header}>
        <Menu navigator={navigator} styles={styles} />
        <View style={styles.user} />
      </View> */}

      <View style={styles.search}>
        <Text style={styles.header_text}>Find the best coffee for you</Text>
        <InputComponent
          label="Find your coffee..."
          value={search}
          onTextInput={handleSearch}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <ScrollView horizontal>
          <Nav
            TextNavs={TextNavs}
            styles={styles}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
          />
        </ScrollView>

        <View style={styles.section_wrapper}>
          <FlatList
            data={filtered}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <HomeCard
                  type="coffee"
                  index={item.id}
                  item={item}
                  styles={styles}
                  key={index}
                  navigator={navigator}
                />
              );
            }}
          />
        </View>

        <View style={styles.section_wrapper}>
          <Text style={styles.section_header}>Coffee beans</Text>
          <FlatList
            data={homeCardsBeans}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <HomeCard
                  type="bean"
                  index={index}
                  item={item}
                  styles={styles}
                  key={index}
                  navigator={navigator}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
