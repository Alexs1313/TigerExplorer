import {useNavigation} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ReservesDetails = ({route}) => {
  const navigation = useNavigation();
  const item = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.arrowIcon}
            onPress={() => navigation.goBack('')}>
            {<Image source={require('../../assets/reservesImg/arrow.png')} />}
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Reserve</Text>
          </View>
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
  container: {flex: 1, backgroundColor: '#cd5c5c'},
  title: {
    marginLeft: 16,

    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 28,

    color: '#ffe188',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#E9A90C',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  },
});

export default ReservesDetails;
