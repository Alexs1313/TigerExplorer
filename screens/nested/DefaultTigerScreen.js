import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';

import {encyclopedia} from '../../data/encyclopedia';
import Gradient from '../../components/RadialGradient';
import GradientText from '../../components/TextGradient';
import EncyclopediaTigerCard from '../../components/EncyclopediaTigerCard';

const DefaultTigersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          marginTop: 10,
          width: 297,
          marginHorizontal: 20,
          shadowColor: 'rgba(0, 0, 0, 0.25)',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 2,
        }}>
        <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
          Encyclopedia of Tigers
        </GradientText>
      </View>

      <ScrollView
        horizontal
        style={{paddingHorizontal: 16}}
        showsHorizontalScrollIndicator={false}>
        {encyclopedia.map((item, idx) => (
          <EncyclopediaTigerCard item={item} key={item.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,
    marginBottom: 37,
    marginTop: 10,
  },

  itemTitle: {
    color: ' rgba(255, 255, 255, 1)',
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 16,
    marginBottom: 6,
  },
  AboutText: {
    fontSize: 12,
    fontWeight: '400',
    color: ' rgba(255, 255, 255, 0.8)',
  },
  newsBtnContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    right: 24,
  },
});

export default DefaultTigersScreen;
