import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DefaultGamesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Tiger’s games</Text>
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
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('Puzzles')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </Pressable>
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
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('SpotTheDifference')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </Pressable>
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
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate('Quiz')}>
              <Image source={require('../../assets/newsImg/arrow.png')} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red', marginBottom: 100},
  title: {
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,
    color: '#ffe188',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
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
