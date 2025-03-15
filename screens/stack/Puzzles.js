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

import Gradient from '../../components/RadialGradient';
import GradientText from '../../components/TextGradient';
import GoBackButton from '../../components/GoBackButton';

const Puzzles = () => {
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
            <View
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 4,
              }}>
              <GradientText
                colors={['#F2EA5C', '#E9A90C']}
                style={styles.title}>
                Puzzles
              </GradientText>
            </View>
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
              Kid tiger
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('PuzzlesKid')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </TouchableOpacity>
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
              Teen tiger
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('PuzzlesTeen')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </TouchableOpacity>
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
              Adult tiger
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('PuzzlesAdult')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </TouchableOpacity>
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
});

export default Puzzles;
