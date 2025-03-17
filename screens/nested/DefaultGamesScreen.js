import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Gradient from '../../components/RadialGradient';
import GradientText from '../../components/TextGradient';

const DefaultGamesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
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
          Tiger’s games
        </GradientText>
      </View>
      <ScrollView style={{marginBottom: 80}}>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/games/puzzles.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16, marginBottom: 24}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Puzzles
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('Puzzles')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/games/spot.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16, marginBottom: 24}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Spot The Difference
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('SpotTheDifference')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={{marginHorizontal: 16}}
            source={require('../../assets/games/quiz.png')}
          />
          <View style={{marginTop: 8, marginHorizontal: 16}}>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 18,
                fontWeight: '700',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              Quizzes
            </Text>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('Quiz')}>
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
    marginTop: 10,
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

export default DefaultGamesScreen;
