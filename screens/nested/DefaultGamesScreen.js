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
      <View style={{alignItems: 'center'}}>
        <View style={{width: 350}}>
          <View>
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
              <GradientText
                colors={['#F2EA5C', '#E9A90C']}
                style={styles.title}>
                Tiger’s games
              </GradientText>
            </View>
          </View>
        </View>

        <ScrollView style={{marginBottom: 145}}>
          <View>
            <Image
              style={{marginHorizontal: 16}}
              source={require('../../assets/newsImg/tiger3.png')}
            />
            <View
              style={{
                marginTop: 8,
                marginHorizontal: 16,
                marginBottom: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 360,
                alignItems: 'center',
              }}>
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
              source={require('../../assets/encyclopediaImg/tigerDetails1.png')}
            />
            <View
              style={{
                marginTop: 8,
                marginHorizontal: 16,
                marginBottom: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 360,
              }}>
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
              source={require('../../assets/newsImg/tiger3.png')}
            />
            <View
              style={{
                marginTop: 8,
                marginHorizontal: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 360,
                alignItems: 'center',
              }}>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,
    marginBottom: 20,
    marginTop: 10,
  },
  btnContainer: {
    width: 33,
    height: 33,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    // position: 'absolute',
  },
});

export default DefaultGamesScreen;
