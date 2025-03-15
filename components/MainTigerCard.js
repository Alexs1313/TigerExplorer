import {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useMyContext} from '../context/FavContext';
import {useNavigation} from '@react-navigation/native';

const MainTigerCard = ({item}) => {
  const [isSelected, setIsSelected] = useState(0);
  const navigation = useNavigation();
  const {carts, setCarts} = useMyContext();

  const addToFavourites = selectedCard => {
    setIsSelected(selectedCard.id);

    const setFavourite = carts.find(item => item.id === selectedCard.id);
    if (!setFavourite) {
      setCarts([...carts, selectedCard]);
    }
    return;
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
          onPress={() => {
            addToFavourites(item);
          }}>
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
            {isSelected === item.id ? (
              <Image
                source={require('../assets/settingsImg/checkedHeart.png')}
              />
            ) : (
              <Image source={require('../assets/reservesImg/heart.png')} />
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
