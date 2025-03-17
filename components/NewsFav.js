import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useMyContext} from '../context/FavContext';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {news} from '../data/news';

const NewsFav = () => {
  const {favNews} = useMyContext();
  const navigation = useNavigation();
  const [stored, setStored] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favoritesNews');
      let favoritesList = jsonValue !== null ? JSON.parse(jsonValue) : [];

      let items = [];
      if (favoritesList) {
        favoritesList.forEach(el => {
          let data = news.find(val => val.id === el.id);
          items.push(data);
        });
        setStored(items);
      }
    } catch (e) {
      console.error('Failed to add item to favorites:', e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {stored.map(item => (
          <View key={item.id}>
            <Pressable style={styles.newsImage}>
              <Image source={item.image} />
            </Pressable>
            <View>
              <View
                style={{
                  paddingLeft: 8,
                  marginHorizontal: 16,
                  width: 306,
                }}>
                <Text style={styles.newsTitle} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
              <Pressable
                style={styles.newsBtnContainer}
                onPress={() => navigation.navigate('NewsDetails', {item})}>
                <Image source={require('../assets/newsImg/arrow.png')} />
              </Pressable>
            </View>

            <Text style={styles.newsAboutText} numberOfLines={2}>
              {item.aboutText}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  itemTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 16,
    paddingRight: 20,
  },
  newsImage: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  newsTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 6,
    marginRight: 0,
  },
  newsAboutText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    marginHorizontal: 16,
    paddingHorizontal: 8,
    marginBottom: 24,
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
  newsContainer: {
    padding: 20,
  },
});

export default NewsFav;
