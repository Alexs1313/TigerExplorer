import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Gradient from '../../components/RadialGradient';
import GradientText from '../../components/TextGradient';
import GoBackButton from '../../components/GoBackButton';

const Quiz = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 10,
        }}>
        <GoBackButton />
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
          <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
            Quizzes
          </GradientText>
        </View>
      </View>

      <ScrollView>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/quiz/tiger3.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16, marginBottom: 24}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Tiger Hunting
            </Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('HuntingQuiz')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </Pressable>
          </View>
        </View>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/quiz/tiger.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16, marginBottom: 24}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Tigers in Winter
            </Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('TigerInWinterQuiz')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </Pressable>
          </View>
        </View>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/quiz/tiger2.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Packs of Tigers
            </Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('PacksOfTigersQuiz')}>
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
    marginLeft: 16,

    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 28,
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

export default Quiz;
