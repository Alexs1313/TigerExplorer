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
import {useMyContext} from '../../context/FavContext';

const FavNewsDetails = ({route}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [toggleIcon, setToggleIcon] = useState(false);
  const navigation = useNavigation();
  const {favNews, setFavNews} = useMyContext();
  const item = route.params.item;

  // const addToFavouritesNews = selectedCard => {
  //   setFavNews([...favNews, selectedCard]);
  // };

  const addToFavourites = selectedCard => {
    favNews.map(favItem => {
      if (favItem.id !== selectedCard.item.id) {
        setFavNews([...favNews, selectedCard]);
      }
      return;
    });
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
          <TouchableOpacity
            style={styles.arrowIcon}
            onPress={() => navigation.goBack('')}>
            {<Image source={require('../../assets/reservesImg/arrow.png')} />}
          </TouchableOpacity>
          <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
            News
          </GradientText>
        </View>

        <TouchableOpacity
          onPress={() => addToFavouritesNews(item)}
          style={styles.heartIcon}>
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
