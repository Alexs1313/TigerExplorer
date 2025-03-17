import {useNavigation} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import GoBackButton from '../../components/GoBackButton';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ReservesDetails = ({route}) => {
  const navigation = useNavigation();
  const [iconColor, setIconColor] = useState(false);

  const item = route.params;

  const addToFavorites = async item => {
    setIconColor(true);

    try {
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
              Reserve
            </GradientText>
          </View>
        </View>

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
      <View style={{marginHorizontal: 16, marginTop: 16, marginBottom: 24}}>
        <Image source={item.item.imageDetails} style={styles.mainImage} />
      </View>
      <View>
        <Text style={styles.titleName}>{item.item.title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 16,
        }}>
        {<Image source={require('../../assets/reservesImg/map-pin.png')} />}
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            marginVertical: 12,
            marginLeft: 4,
            color: '#fff',
          }}>
          {item.item.location}
        </Text>
      </View>
      <Text style={styles.aboutText}>{item.item.aboutText}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    marginLeft: 16,
    fontWeight: '800',
    fontSize: 28,
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
  },
  aboutText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    lineHeight: 21,
  },
});

export default ReservesDetails;
