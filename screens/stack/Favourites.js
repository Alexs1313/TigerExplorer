import {useNavigation} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SegmentedControl from 'react-native-segmented-control-2';
import {useMyContext} from '../../context/FavContext';
import {useState} from 'react';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import NewsFav from '../../components/NewsFav';
import TigersFav from '../../components/TigersFav';
import GoBackButton from '../../components/GoBackButton';

const Favourites = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const {carts, setCarts} = useMyContext();

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <GoBackButton />
          <View>
            <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
              Favourites
            </GradientText>
          </View>
        </View>
      </View>
      <SegmentedControl
        style={{
          marginTop: 34,
          marginBottom: 24,
          backgroundColor: ' rgba(234, 74, 86, 1)',
          borderRadius: 100,
          marginHorizontal: 16,
        }}
        activeTabColor="#fff"
        activeTextColor="#000"
        textStyle={{color: '#fff'}}
        tabs={['Reserves', 'News', 'Tigers']}
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
      {selectedIdx === 2 && <TigersFav />}
      {selectedIdx === 1 && <NewsFav />}
      {selectedIdx === 0 && (
        <ScrollView
          horizontal
          style={{paddingHorizontal: 16}}
          showsHorizontalScrollIndicator={false}>
          {carts.map((cart, idx) => (
            <View key={cart.id}>
              <View
                style={{
                  marginRight: 8,
                }}>
                <Image style={cart.mainImage} source={cart.image} />

                <TouchableOpacity>
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
                      <Image
                        source={require('../../assets/settingsImg/checkedHeart.png')}
                      />
                    }
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    position: 'absolute',
                    borderColorColor: 'rgba(255, 255, 255, 0.8)',
                    paddingHorizontal: 5,
                    bottom: 21,
                  }}>
                  <Text style={styles.itemTitle}>{cart.title} </Text>
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
                        {cart.location}
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#FFFFFF',
                      }}
                      numberOfLines={1}>
                      {cart.aboutText}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    marginLeft: 16,

    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 28,

    color: '#ffe188',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#E9A90C',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Favourites;
