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
import {encyclopedia} from '../../data/encyclopedia';
import LinearGradient from 'react-native-linear-gradient';
import SegmentedControl from 'react-native-segmented-control-2';
import GradientText from 'react-native-gradient-texts';
import {useNavigation} from '@react-navigation/native';
import Svg, {Defs, RadialGradient, Stop, Ellipse, Rect} from 'react-native-svg';
import Gradient from '../../components/RadialGradient';
import {useState} from 'react';

console.log(reserves);

const DefaultTigersScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 10,
          width: 297,
          marginHorizontal: 20,
        }}>
        {/* <GradientText
          text={'Reserves and Volunteering'}
          fontSize={30}
          isGradientFill
          gradientColors={['#F2EA5C', '#E9A90C']}
          fontFamily={'Montserrat'}
          start={{x: 1, y: 0}}
          style={styles.title}
        /> */}

        <Text style={styles.title}>Encyclopedia of Tigers</Text>
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
                    <Image
                      source={require('../../assets/reservesImg/heart.png')}
                    />
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
    backgroundColor: 'red',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,
    color: '#ffe188',

    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    marginBottom: 37,
    marginTop: 10,
  },

  itemTitle: {
    color: ' rgba(255, 255, 255, 1)',
    fontWeight: '700',
    fontSize: 20,

    fontFamily: 'Montserrat',
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
