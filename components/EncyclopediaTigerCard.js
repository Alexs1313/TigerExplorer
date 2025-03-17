import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const EncyclopediaTigerCard = ({item}) => {
  const navigation = useNavigation();
  const [iconColor, setIconColor] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    renderFavorites(item);
  }, [isFocused]);

  const addToFavorites = async item => {
    try {
      setIconColor(true);

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
    <View key={item.id}>
      <View
        style={{
          marginRight: 8,
        }}>
        <Pressable onPress={() => navigation.navigate('TigerDetails', {item})}>
          <Image style={styles.mainImage} source={item.image} />
        </Pressable>
        <Pressable>
          <View
            style={{
              position: 'absolute',
              bottom: 21,
              right: 8,
              width: 40,
              height: 40,
              backgroundColor: '#2A2A2A',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <TouchableOpacity
                onPress={() =>
                  iconColor ? removeFavorites(item) : addToFavorites(item)
                }>
                {iconColor ? (
                  <Image
                    source={require('../assets/settingsImg/checkedHeart.png')}
                  />
                ) : (
                  <Image source={require('../assets/reservesImg/heart.png')} />
                )}
              </TouchableOpacity>
            }
          </View>
        </Pressable>
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            marginRight: 12,
          }}>
          <Text style={styles.itemTitle}>{item.title} </Text>
          <View style={{marginLeft: 16, marginRight: 60}}>
            <Text style={styles.AboutText} numberOfLines={3}>
              {item.aboutText}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,

    marginBottom: 37,
    marginTop: 10,
  },

  itemTitle: {
    color: ' rgba(255, 255, 255, 1)',
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 16,
    marginBottom: 6,
  },
  AboutText: {
    fontSize: 12,
    fontWeight: '400',
    color: ' rgba(255, 255, 255, 0.8)',
  },
  newsBtnContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    right: 24,
  },
});

export default EncyclopediaTigerCard;
