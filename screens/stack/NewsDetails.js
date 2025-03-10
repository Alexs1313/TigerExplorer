import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import {useMyContext} from '../../context/FavContext';
import GoBackButton from '../../components/GoBackButton';

const NewsDetails = ({route}) => {
  const {favNews, setFavNews} = useMyContext();
  const item = route.params;

  const [isSelected, setIsSelected] = useState(false);

  const addToFavourites = selectedCard => {
    console.log(selectedCard.item);
    setIsSelected(true);
    const setFavourite = favNews.find(item => item.id === selectedCard.item.id);
    if (!setFavourite) {
      setFavNews([...favNews, selectedCard.item]);
    }
    return;
  };

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

        <TouchableOpacity
          onPress={() => addToFavourites(item)}
          style={styles.heartIcon}>
          {isSelected ? (
            <Image
              source={require('../../assets/settingsImg/checkedHeart.png')}
            />
          ) : (
            <Image source={require('../../assets/reservesImg/heart.png')} />
          )}
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 16, marginTop: 16, marginBottom: 24}}>
        <Image source={item.item.image} style={styles.mainImage} />
      </View>

      <ScrollView>
        <Text style={styles.titleName}>{item.item.title}</Text>
        <Text style={styles.aboutText}>{item.item.aboutText}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    marginLeft: 16,
    fontWeight: '800',
    fontSize: 28,
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

export default NewsDetails;
