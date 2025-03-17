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
import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import {useState} from 'react';

const FavNewsDetails = ({route}) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const navigation = useNavigation();
  const item = route.params.item;

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
          <TouchableOpacity
            style={styles.arrowIcon}
            onPress={() => navigation.goBack('')}>
            {<Image source={require('../../assets/reservesImg/arrow.png')} />}
          </TouchableOpacity>
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
              News
            </GradientText>
          </View>
        </View>

        <TouchableOpacity style={styles.heartIcon}>
          {toggleIcon ? (
            <Image source={require('../../assets/reservesImg/heart.png')} />
          ) : (
            <Image
              source={require('../../assets/settingsImg/checkedHeart.png')}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 16, marginTop: 16, marginBottom: 24}}>
        <Image source={item.image} style={styles.mainImage} />
      </View>

      <ScrollView>
        <Text style={styles.titleName}>{item.title}</Text>
        <Text style={styles.aboutText}>{item.aboutText}</Text>
      </ScrollView>
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

export default FavNewsDetails;
