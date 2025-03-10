import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Gradient from '../../components/RadialGradient';
import GoBackButton from '../../components/GoBackButton';
import GradientText from '../../components/TextGradient';

const TigerDetails = ({route}) => {
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
              News
            </GradientText>
          </View>
        </View>

        <View style={styles.heartIcon}>
          {<Image source={require('../../assets/reservesImg/heart.png')} />}
        </View>
      </View>
      <View style={{marginHorizontal: 16, marginTop: 16, marginBottom: 24}}>
        <Image source={item.item.imageDetails} style={styles.mainImage} />
      </View>

      <ScrollView>
        <Text style={styles.titleName}>{item.item.title}</Text>
        <Text style={styles.aboutText}>{item.item.aboutText}</Text>
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
  },
  arrowIcon: {
    width: 32,
    height: 32,
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

  titleName: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  aboutText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
});

export default TigerDetails;
