import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Gradient from '../../components/RadialGradient';
import GoBackButton from '../../components/GoBackButton';
import GradientText from '../../components/TextGradient';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TigerDetails = ({route}) => {
  const [iconColor, setIconColor] = useState(false);
  const item = route.params;

  useEffect(() => {
    renderFavorites(item.item);
  }, []);

  const addToFavorites = async item => {
    setIconColor(true);

    try {
      const jsonValue = await AsyncStorage.getItem('@favoritesEncyclopedia');
      let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
      console.log('fav', favoritesList);
      const filtered = favoritesList.find(val => val.id === item.id);

      if (!filtered) {
        favoritesList.push(item);
      }

      await AsyncStorage.setItem(
        '@favoritesEncyclopedia',
        JSON.stringify(favoritesList),
      );

      console.log('Item added to favorites!', favoritesList);
    } catch (e) {
      console.error('Failed to add item to favorites:', e);
    }
  };

  const removeFavorites = async item => {
    setIconColor(false);
    const jsonValue = await AsyncStorage.getItem('@favoritesEncyclopedia');
    let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
    const filtered = favoritesList.filter(fav => fav.id !== item.id);
    await AsyncStorage.setItem(
      '@favoritesEncyclopedia',
      JSON.stringify(filtered),
    );
    console.log('unsaved', filtered);
  };

  const renderFavorites = async item => {
    const jsonValue = await AsyncStorage.getItem('@favoritesEncyclopedia');
    const favoritesList = JSON.parse(jsonValue);
    console.log('favlist', favoritesList);
    if (favoritesList !== null) {
      let data = favoritesList.find(fav => fav.id === item.id);
      console.log('data', data);
      return data == null ? setIconColor(false) : setIconColor(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <GoBackButton />
          <View
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 1,
              shadowRadius: 2,
            }}>
            <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
              News
            </GradientText>
          </View>
        </View>

        <View style={styles.heartIcon}>
          <TouchableOpacity
            onPress={() =>
              iconColor ? removeFavorites(item.item) : addToFavorites(item.item)
            }
            style={styles.heartIcon}>
            {iconColor ? (
              <Image
                source={require('../../assets/settingsImg/checkedHeart.png')}
              />
            ) : (
              <Image source={require('../../assets/reservesImg/heart.png')} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: 16, marginTop: 16, marginBottom: 24}}>
        <Image source={item.item.imageDetails} style={styles.mainImage} />
      </View>

      <ScrollView>
        <Text style={styles.titleName}>{item.item.title}</Text>
        <Text style={styles.aboutText}>{item.item.aboutText}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#cd5c5c'},
  title: {
    marginLeft: 16,

    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 28,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleName: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  aboutText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
});

export default TigerDetails;
