import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 1,
            shadowRadius: 2,
            width: 320,
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
          <View
            style={{
              marginTop: 8,
              marginHorizontal: 16,
              marginBottom: 24,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 360,
            }}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Tiger Hunting
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('HuntingQuiz')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/quiz/tiger.png')}
          />
          <View
            style={{
              marginTop: 8,
              marginHorizontal: 16,
              marginBottom: 24,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 360,
            }}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Tigers in Winter
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('TigerInWinterQuiz')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/quiz/tiger2.png')}
          />
          <View
            style={{
              marginTop: 8,
              marginHorizontal: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 360,
            }}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Packs of Tigers
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('PacksOfTigersQuiz')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
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
