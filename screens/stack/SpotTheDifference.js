import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Gradient from '../../components/RadialGradient';
import GradientText from '../../components/TextGradient';
import GoBackButton from '../../components/GoBackButton';

const SpotTheDifference = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 16,
          textShadowColor: 'rgb(0, 0, 0)',
          textShadowOffset: {width: 52, height: 20},
          textShadowRadius: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <GoBackButton />
          <View>
            <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
              Spot the difference
            </GradientText>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/spotTheDifference/main1.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16, marginBottom: 24}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              LVL 1
            </Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('SpotLevelOne')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </Pressable>
          </View>
        </View>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/spotTheDifference/main2.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16, marginBottom: 24}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              LVL 2
            </Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('SpotLevelTwo')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </Pressable>
          </View>
        </View>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/spotTheDifference/main3.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              LVL 3
            </Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('SpotLevelThree')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,

    marginLeft: 20,
    marginBottom: 20,

    paddingTop: 15,
  },
  btnContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    right: 12,
    bottom: 0,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#E9A90C',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpotTheDifference;
