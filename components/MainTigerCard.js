import {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useMyContext} from '../context/FavContext';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainTigerCard = ({item}) => {
  const navigation = useNavigation();
  const {carts, setCarts} = useMyContext();
  const [iconColor, setIconColor] = useState(false);
  console.log('item', item);
  const isFocused = useIsFocused();

  useEffect(() => {
    renderFavorites(item);
  }, [isFocused]);

  const addToFavorites = async item => {
    try {
      setIconColor(true);

      const jsonValue = await AsyncStorage.getItem('@favorites');
      let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
      console.log('fav', favoritesList);

      const filtered = favoritesList.find(val => val.id === item.id);

      if (!filtered) {
        favoritesList.push(item);
      }

      await AsyncStorage.setItem('@favorites', JSON.stringify(favoritesList));

      console.log('Item added to favorites!', favoritesList);
    } catch (e) {
      console.error('Failed to add item to favorites:', e);
    }
  };

  const removeFavorites = async item => {
    setIconColor(false);
    const jsonValue = await AsyncStorage.getItem('@favorites');
    let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
    const filtered = favoritesList.filter(fav => fav.id !== item.id);
    await AsyncStorage.setItem('@favorites', JSON.stringify(filtered));
    console.log('unsaved', filtered);
  };

  const renderFavorites = async item => {
    const jsonValue = await AsyncStorage.getItem('@favorites');
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
        <Pressable
          onPress={() => navigation.navigate('ReservesDetails', {item})}>
          <Image style={styles.mainImage} source={item.image} />
        </Pressable>
        <TouchableOpacity
          onPress={() =>
            iconColor ? removeFavorites(item) : addToFavorites(item)
          }>
          <View
            style={{
              position: 'absolute',
              bottom: 21,
              right: 8,
              width: 47,
              height: 47,
              backgroundColor: '#2A2A2A',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {iconColor ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/settingsImg/checkedHeart.png')}
              />
            ) : (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/reservesImg/heart.png')}
              />
            )}
          </View>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            borderColorColor: 'rgba(255, 255, 255, 0.8)',
            paddingHorizontal: 5,
            bottom: 21,
          }}>
          <Text style={styles.itemTitle}>{item.title} </Text>
          <View style={{marginLeft: 16, marginRight: 60}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {<Image source={require('../assets/reservesImg/map-pin.png')} />}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginVertical: 8,
                  marginLeft: 4,
                }}>
                {item.location}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#FFFFFF',
              }}
              numberOfLines={1}>
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
  },
  reservesContainer: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 100,
  },

  itemTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    marginLeft: 16,
    paddingRight: 20,
  },
});

export default MainTigerCard;
