import {useNavigation} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import GoBackButton from '../../components/GoBackButton';

const SpotLevelTwo = () => {
  const [isCheckedFirst, setIsCheckedFirst] = useState(false);
  const [isCheckedSecond, setIsCheckedSecond] = useState(false);
  const [isCheckedThird, setIsCheckedThird] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          marginHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
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
              }}>
              <GradientText
                colors={['#F2EA5C', '#E9A90C']}
                style={styles.title}>
                LVL 2
              </GradientText>
            </View>
          </View>

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
              2/2
            </GradientText>
          </View>
        </View>
      </View>

      {isCheckedFirst && isCheckedSecond && isCheckedThird ? (
        <View style={{marginHorizontal: 16, marginTop: 32, gap: 16}}>
          <View style={{alignItems: 'center', marginBottom: 65}}>
            <Text style={styles.firstTextSuccsess}>Congratulations!</Text>
            <Text style={styles.secondTextSuccsess}>You win</Text>
          </View>
          <View>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{height: 300, borderRadius: 24, width: 360}}
                source={require('../../assets/spotTheDifference/spot2.2.png')}
              />
            </View>

            <View style={{position: 'absolute'}}>
              <TouchableOpacity
                onPress={() => setIsCheckedFirst(true)}
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: 'transparent',
                  left: 312,
                  top: 58,
                }}></TouchableOpacity>
              {isCheckedFirst && (
                <Image
                  style={{
                    position: 'absolute',
                    width: 52,
                    height: 52,
                    left: 312,
                    top: 58,
                  }}
                  source={require('../../assets/spotTheDifference/first.png')}
                />
              )}

              <TouchableOpacity
                onPress={() => setIsCheckedSecond(true)}
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: 'transparent',
                  left: 8,
                  top: 110,
                }}></TouchableOpacity>
              {isCheckedSecond && (
                <Image
                  style={{
                    position: 'absolute',
                    width: 52,
                    height: 52,
                    left: 8,
                    top: 150,
                  }}
                  source={require('../../assets/spotTheDifference/second.png')}
                />
              )}

              <TouchableOpacity
                onPress={() => setIsCheckedThird(true)}
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: 'transparent',
                  top: 130,
                  left: 270,
                }}></TouchableOpacity>
              {isCheckedThird && (
                <Image
                  style={{
                    position: 'absolute',
                    width: 52,
                    height: 52,
                    top: 220,
                    left: 270,
                  }}
                  source={require('../../assets/spotTheDifference/third.png')}
                />
              )}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setIsCheckedFirst(null);
              setIsCheckedSecond(null);
              setIsCheckedThird(null);
            }}>
            <LinearGradient
              colors={['#F2EA5C', '#E9A90C']}
              style={{
                height: 50,
                marginHorizontal: 16,
                alignItems: 'center',
                borderRadius: 12,
                marginTop: 102,
              }}>
              <Text style={{fontWeight: '600', fontSize: 16, padding: 13}}>
                Try again
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 50,
              paddingVertical: 13,
              marginHorizontal: 16,
              alignItems: 'center',
              borderRadius: 12,
              backgroundColor: ' rgba(255, 255, 255, 1)',
            }}>
            <Text style={{fontWeight: '600', fontSize: 16}}>Back to menu</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 32,
            gap: 16,
            alignItems: 'center',
          }}>
          <Image
            style={{height: 300, borderRadius: 24, width: 360}}
            source={require('../../assets/spotTheDifference/spot2.1.png')}
          />

          <View>
            <Image
              style={{height: 300, borderRadius: 24, width: 360}}
              source={require('../../assets/spotTheDifference/spot2.2.png')}
            />

            <View style={{position: 'absolute'}}>
              <TouchableOpacity
                onPress={() => setIsCheckedFirst(true)}
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: 'transparent',
                  left: 312,
                  top: 58,
                }}></TouchableOpacity>
              {isCheckedFirst && (
                <Image
                  style={{
                    position: 'absolute',
                    width: 52,
                    height: 52,
                    left: 312,
                    top: 58,
                  }}
                  source={require('../../assets/spotTheDifference/first.png')}
                />
              )}

              <TouchableOpacity
                onPress={() => setIsCheckedSecond(true)}
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: 'transparent',
                  left: 8,
                  top: 110,
                }}></TouchableOpacity>
              {isCheckedSecond && (
                <Image
                  style={{
                    position: 'absolute',
                    width: 52,
                    height: 52,
                    left: 8,
                    top: 150,
                  }}
                  source={require('../../assets/spotTheDifference/second.png')}
                />
              )}

              <TouchableOpacity
                onPress={() => setIsCheckedThird(true)}
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: 'transparent',
                  top: 130,
                  left: 270,
                }}></TouchableOpacity>
              {isCheckedThird && (
                <Image
                  style={{
                    position: 'absolute',
                    width: 52,
                    height: 52,
                    top: 220,
                    left: 270,
                  }}
                  source={require('../../assets/spotTheDifference/third.png')}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  title: {
    marginLeft: 16,
    fontWeight: '800',
    fontSize: 28,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstTextSuccsess: {
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
    color: ' rgba(255, 255, 255, 1)',
    marginBottom: 10,
  },
  secondTextSuccsess: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    color: ' rgba(255, 255, 255, 1)',
  },
});

export default SpotLevelTwo;
