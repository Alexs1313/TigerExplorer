import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useMyContext} from '../context/FavContext';

const EncyclopediaTigerCard = ({item}) => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(0);
  const {favTiger, setFavTiger} = useMyContext();

  const addToFavourites = selectedCard => {
    setIsSelected(selectedCard.id);
    const setFavourite = favTiger.find(item => item.id === selectedCard.id);
    if (!setFavourite) {
      setFavTiger([...favTiger, selectedCard]);
    }
    return;
  };

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const cachedData = await AsyncStorage.getItem('favTiger');

  //       if (cachedData !== null) {
  //         setFavTiger(JSON.parse(cachedData));
  //       } else {
  //         await AsyncStorage.setItem('favTiger', JSON.stringify(favTiger));

  //         setFavTiger(favTiger);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

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
              <TouchableOpacity onPress={() => addToFavourites(item)}>
                {isSelected === item.id ? (
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
