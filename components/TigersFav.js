import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useMyContext} from '../context/FavContext';
import {useState} from 'react';

const TigersFav = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const navigation = useNavigation();
  const {favTiger, setFavTiger} = useMyContext();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={{paddingHorizontal: 16}}
        showsHorizontalScrollIndicator={false}>
        {favTiger.map((item, idx) => (
          <View key={item.id}>
            <View
              style={{
                marginRight: 8,
              }}>
              <Pressable
                onPress={() => navigation.navigate('TigerDetails', {item})}>
                <Image style={styles.mainImage} source={item.image} />
              </Pressable>
              <Pressable>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 21,
                    right: 8,
                    width: 40,
                    height: 40,
                    backgroundColor: '#2A2A2A',
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {
                    <Image
                      source={require('../assets/settingsImg/checkedHeart.png')}
                    />
                  }
                </View>
              </Pressable>
              <View
                style={{
                  position: 'absolute',
                  bottom: 16,
                  marginRight: 12,
                }}>
                <Text style={styles.itemTitle}>{item.title} </Text>
                <View style={{marginLeft: 16, marginRight: 60}}>
                  <Text style={styles.AboutText} numberOfLines={3}>
                    {item.aboutText}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  itemTitle: {
    color: ' rgba(255, 255, 255, 1)',
    fontWeight: '700',
    fontSize: 20,

    fontFamily: 'Montserrat',
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

export default TigersFav;
