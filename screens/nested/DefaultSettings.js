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
import LinearGradient from 'react-native-linear-gradient';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';

const DefaultTabSettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
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
          Settings
        </GradientText>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          <LinearGradient
            colors={['#F2EA5C', '#E9A90C']}
            style={styles.linearGradient}></LinearGradient>

          <Text
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              fontWeight: '700',
              fontSize: 18,

              color: 'rgba(42, 42, 42, 1)',
            }}>
            Privacy Policy
          </Text>
          <Image
            style={{
              position: 'absolute',
              top: 2,
              left: 190,
            }}
            source={require('../../assets/settingsImg/privacy.png')}
          />
        </View>

        <View style={{marginHorizontal: 16}}>
          <Pressable onPress={() => navigation.navigate('FaqScreen')}>
            <LinearGradient
              colors={['#F2EA5C', '#E9A90C']}
              style={styles.linearGradient}></LinearGradient>
          </Pressable>

          <Text
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              fontWeight: '700',
              fontSize: 18,
              color: 'rgba(42, 42, 42, 1)',
            }}>
            FAQ
          </Text>
          <Image
            style={{
              position: 'absolute',
              top: 2,
              left: 190,
            }}
            source={require('../../assets/settingsImg/faq.png')}
          />
        </View>
        <View style={{marginHorizontal: 16}}>
          <Pressable onPress={() => navigation.navigate('Favourites')}>
            <LinearGradient
              colors={['#F2EA5C', '#E9A90C']}
              style={styles.linearGradient}></LinearGradient>
          </Pressable>

          <Text
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              fontWeight: '700',
              fontSize: 18,
              color: 'rgba(42, 42, 42, 1)',
            }}>
            Favourites
          </Text>
          <Image
            style={{
              position: 'absolute',
              top: 2,
              left: 190,
            }}
            source={require('../../assets/settingsImg/faq.png')}
          />
        </View>
        <Image
          style={{
            position: 'absolute',
            top: 357,
            left: 6,
          }}
          source={require('../../assets/settingsImg/tiger.png')}
        />
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
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  linearGradient: {
    height: 120,
    width: 358,
    borderRadius: 24,
    marginBottom: 24,
  },
});

export default DefaultTabSettingsScreen;
