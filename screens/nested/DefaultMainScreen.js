import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  FlatList,
} from 'react-native';
import {reserves} from '../../data/reserves';
import {news} from '../../data/news';
import LinearGradient from 'react-native-linear-gradient';
import SegmentedControl from 'react-native-segmented-control-2';

import {useNavigation} from '@react-navigation/native';
import Svg, {Defs, RadialGradient, Stop, Ellipse, Rect} from 'react-native-svg';
import Gradient from '../../components/RadialGradient';
import {useContext, useState} from 'react';
import GradientText from '../../components/TextGradient';
import {useMyContext} from '../../context/FavContext';

console.log(reserves);

const DefaultMainScreen = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [toggleIcon, setToggleIcon] = useState(false);
  const navigation = useNavigation();
  const {carts, setCarts} = useMyContext();
  console.log('carts', carts);

  const addToFavourites = selectedCard => {
    // carts.map(cart=>{
    //   if(cart.id !== selectedCard)
    // })

    setCarts([...carts, selectedCard]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />

      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
        }}>
        <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
          Reserves and Volunteering
        </GradientText>
      </View>

      <SegmentedControl
        style={{
          marginTop: 19,
          marginBottom: 16,
          backgroundColor: '#EA4A56',
          borderRadius: 100,
          marginHorizontal: 16,
        }}
        activeTabColor="#fff"
        activeTextColor="#000"
        textStyle={{color: '#fff'}}
        tabs={['Reserves', 'News']}
        selectedTabStyle={{
          borderRadius: 100,
          borderColor: 'rgba(0, 0, 0, 0.04)',
          borderWidth: 0.5,

          textShadowColor: 'rgba(0, 0, 0, 0.04)',
          textShadowOffset: {width: 0, height: 3},

          textShadowRadius: 8,
        }}
        onChange={index => setSelectedIdx(index)}
      />

      {selectedIdx === 0 ? (
        <ScrollView
          horizontal
          style={{paddingHorizontal: 16}}
          showsHorizontalScrollIndicator={false}>
          {reserves.map((item, idx) => (
            <View key={item.id}>
              <View
                style={{
                  marginRight: 8,
                }}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('ReservesDetails', {item})
                  }>
                  <Image style={styles.mainImage} source={item.image} />
                </Pressable>
                <TouchableOpacity onPress={() => addToFavourites(item)}>
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
                    {toggleIcon ? (
                      <Image
                        source={require('../../assets/settingsImg/checkedHeart.png')}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/reservesImg/heart.png')}
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
                      {
                        <Image
                          source={require('../../assets/reservesImg/map-pin.png')}
                        />
                      }
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
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={{marginBottom: 80}}>
          {news.map(item => (
            <View key={item.id}>
              <Pressable style={styles.newsImage} width={358}>
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
                  <Image source={require('../../assets/newsImg/arrow.png')} />
                </Pressable>
              </View>

              <Text style={styles.newsAboutText} numberOfLines={2}>
                {item.aboutText}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
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
  newsContainer: {
    padding: 20,
    backgroundColor: 'yellow',
    borderRadius: 100,
  },
  mainImage: {},
  itemTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
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
    gap: 15,
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
});

export default DefaultMainScreen;
