import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import GoBackButton from '../../components/GoBackButton';

const ReservesDetails = ({route}) => {
  const navigation = useNavigation();
  const item = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <GoBackButton />

          <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
            Reserve
          </GradientText>
        </View>

        <View style={styles.heartIcon}>
          {<Image source={require('../../assets/reservesImg/heart.png')} />}
        </View>
      </View>
      <View style={{marginHorizontal: 16, marginTop: 16, marginBottom: 24}}>
        <Image source={item.item.imageDetails} style={styles.mainImage} />
      </View>
      <View>
        <Text style={styles.titleName}>{item.item.title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 16,
        }}>
        {<Image source={require('../../assets/reservesImg/map-pin.png')} />}
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            marginVertical: 12,
            marginLeft: 4,
            color: '#fff',
          }}>
          {item.item.location}
        </Text>
      </View>
      <Text style={styles.aboutText}>{item.item.aboutText}</Text>
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

    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  arrowIcon: {},
  heartIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {},
  titleName: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  aboutText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    lineHeight: 21,
  },
  linearGradient: {},
});

export default ReservesDetails;
