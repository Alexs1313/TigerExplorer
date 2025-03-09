import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {encyclopedia} from '../../data/encyclopedia';
import Gradient from '../../components/RadialGradient';
import GradientText from '../../components/TextGradient';
import {useMyContext} from '../../context/FavContext';
import {reserves} from '../../data/reserves';

const DefaultTigersScreen = () => {
  const navigation = useNavigation();
  const {favTiger, setFavTiger} = useMyContext();

  const addToFavourites = selectedCard => {
    setFavTiger([...favTiger, selectedCard]);
    // setToggleIcon(!toggleIcon);
    console.log(selectedCard);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          marginTop: 10,
          width: 297,
          marginHorizontal: 20,
        }}>
        <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
          Encyclopedia of Tigers
        </GradientText>
      </View>

      <ScrollView
        horizontal
        style={{paddingHorizontal: 16}}
        showsHorizontalScrollIndicator={false}>
        {encyclopedia.map((item, idx) => (
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
                      <Image
                        source={require('../../assets/reservesImg/heart.png')}
                      />
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
        ))}
      </ScrollView>
    </SafeAreaView>
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

export default DefaultTigersScreen;
