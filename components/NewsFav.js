import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useMyContext} from '../context/FavContext';
import {useNavigation} from '@react-navigation/native';

const NewsFav = () => {
  const {favNews} = useMyContext();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        {favNews.map(item => (
          <View key={item.id}>
            <Pressable style={styles.newsImage}>
              <Image source={item.image} />
            </Pressable>
            <View>
              <View
                style={{
                  paddingLeft: 8,
                  marginHorizontal: 16,
                  width: 306,
                }}>
                <Text style={styles.newsTitle} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
              <Pressable
                style={styles.newsBtnContainer}
                onPress={() => navigation.navigate('FavNewsDetails', {item})}>
                <Image source={require('../assets/newsImg/arrow.png')} />
              </Pressable>
            </View>

            <Text style={styles.newsAboutText} numberOfLines={2}>
              {item.aboutText}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  itemTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    marginLeft: 16,
    paddingRight: 20,
  },
  newsImage: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  newsTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 6,
    marginRight: 0,
  },
  newsAboutText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    marginHorizontal: 16,

    paddingHorizontal: 8,
    marginBottom: 24,
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
  newsContainer: {
    padding: 20,
  },
});

export default NewsFav;
