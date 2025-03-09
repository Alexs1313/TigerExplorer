import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import GoBackButton from '../../components/GoBackButton';

const FaqScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <View style={{flexDirection: 'row'}}>
          <GoBackButton />
          <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
            FAQ
          </GradientText>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
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
});

export default FaqScreen;
