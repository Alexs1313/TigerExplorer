import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {encyclopedia} from '../data/encyclopedia';

const TigersFav = () => {
  const [iconColor, setIconColor] = useState(0);
  const navigation = useNavigation();
  const [storedData, setStoredData] = useState([]);
  console.log('storedTigerData', storedData);

  useEffect(() => {
    const addToFavorites = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@favoritesEncyclopedia');
        let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
        let items = [];
        if (favoritesList) {
          favoritesList.forEach(el => {
            let data = encyclopedia.find(val => val.id === el.id);
            items.push(data);
          });
          setStoredData(items);
        }

        // setStoredData(favoritesList);
      } catch (e) {
        console.error('Failed to add item to favorites:', e);
      }
    };
    addToFavorites();
  }, []);

  const removeFavorites = async item => {
    setIconColor(item.id);
    const jsonValue = await AsyncStorage.getItem('@favoritesEncyclopedia');
    let favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
    const filtered = favoritesList.filter(fav => fav.id !== item.id);
    await AsyncStorage.setItem(
      '@favoritesEncyclopedia',
      JSON.stringify(filtered),
    );
    console.log('unsaved', filtered);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={{paddingHorizontal: 16}}
        showsHorizontalScrollIndicator={false}>
        {storedData.map(
          (item, idx) => (
            console.log('item', item),
            (
              <View key={item.id}>
                <View
                  style={{
                    marginRight: 8,
                  }}>
                  <Pressable
                    onPress={() => navigation.navigate('TigerDetails', {item})}>
                    <Image style={styles.mainImage} source={item.image} />
                  </Pressable>
                  <Pressable>
                    <TouchableOpacity
                      onPress={() => removeFavorites(item)}
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
                      {iconColor === item.id ? (
                        <Image
                          source={require('../assets/reservesImg/heart.png')}
                        />
                      ) : (
                        <Image
                          source={require('../assets/settingsImg/checkedHeart.png')}
                        />
                      )}
                    </TouchableOpacity>
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
            )
          ),
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
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

export default TigersFav;
