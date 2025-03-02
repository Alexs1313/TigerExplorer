import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {reserves} from '../../data/reserves';

console.log(reserves);

const TabMainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 10, marginHorizontal: 20}}>
        <Text style={styles.title}>Reserves and</Text>
        <Text style={styles.title}>Volunteering</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.reservesContainer}>Reserves</Text>
        </View>
        <View>
          <Text style={styles.newsContainer}>News</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        style={{marginHorizontal: 16}}
        showsHorizontalScrollIndicator={false}>
        {reserves.map(item => (
          <View key={item.id}>
            <View
              style={{
                marginRight: 8,
              }}>
              <Image style={styles.mainImage} source={item.image} />
              <View style={{position: 'absolute', bottom: 21, right: 8}}>
                {
                  <Image
                    source={require('../../assets/reservesImg/iconamoon.png')}
                  />
                }
              </View>
              <View
                style={{
                  position: 'absolute',
                  borderColorColor: 'rgba(255, 255, 255, 0.8)',
                  paddingHorizontal: 5,
                  bottom: 21,
                }}>
                <Text style={styles.itemTitle}>{item.title} </Text>
                <View style={{marginLeft: 16, marginRight: 60}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {
                      <Image
                        source={require('../../assets/reservesImg/map-pin.png')}
                      />
                    }
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginVertical: 8,
                        marginLeft: 4,
                      }}>
                      {item.location}
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#FFFFFF',
                    }}
                    numberOfLines={1}>
                    {item.aboutText}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgba(196, 21, 34, 1)',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,
    color: '#F2EA5C',

    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  reservesContainer: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  newsContainer: {
    padding: 20,
    backgroundColor: 'yellow',
    borderRadius: 100,
  },
  mainImage: {},
  itemTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    marginLeft: 16,
  },
});

export default TabMainScreen;
